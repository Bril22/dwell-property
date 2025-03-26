'use client'
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType, EmblaCarouselType } from "embla-carousel";
import { NextButton, PrevButton } from "../buttons";
import { PropertyCardComponent } from "../cards";
import { IPropertyCard } from "../../types/propertyCard";

interface EmblaListPropertyCardProps {
    datas?: IPropertyCard[];
    options?: EmblaOptionsType
}

export const EmblaListPropertyCard = ({
    datas,
    options
}: EmblaListPropertyCardProps) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(options);
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

    const scrollPrev = useCallback(
        () => emblaApi && emblaApi.scrollPrev(),
        [emblaApi]
    );

    const scrollNext = useCallback(
        () => emblaApi && emblaApi.scrollNext(),
        [emblaApi]
    );

    const onInit = useCallback((emblaApi: EmblaCarouselType) => {
        setScrollSnaps(emblaApi.scrollSnapList());
    }, []);

    const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
        setPrevBtnEnabled(emblaApi.canScrollPrev());
        setNextBtnEnabled(emblaApi.canScrollNext());
    }, []);

    useEffect(() => {
        if (!emblaApi) return;
        onInit(emblaApi);
        onSelect(emblaApi);
        emblaApi.on("reInit", onInit);
        emblaApi.on("reInit", onSelect);
        emblaApi.on("select", onSelect);
    }, [emblaApi, onInit, onSelect]);

    return (
        <div className="relative md:ml-14 lg:ml-20 pl-4">
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex flex-row gap-x-4">
                    <PropertyCardComponent datas={datas} />
                </div>
                <PrevButton
                    onClick={scrollPrev}
                    enabled={prevBtnEnabled}
                    className={
                        "absolute md:flex hidden top-1/3 -left-2 z-20 flex-none w-10 h-10 bg-secondary rounded-full text-white"
                    }
                />
                <NextButton
                    onClick={scrollNext}
                    enabled={nextBtnEnabled}
                    className={
                        "absolute md:flex hidden top-1/3 right-6 z-20 flex-none w-10 h-10 bg-secondary rounded-full text-white"
                    }
                />
            </div>
        </div>
    )
}