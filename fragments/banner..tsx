import Image from "next/image";
import Banner from "@public/images/dwell-banner.png"
import { BannerDetail } from "../constants/section";
import { BannerCardComponent } from "../components/cards";

export const BannerFragment = () => {
    return (
        <div id="home" className="relative w-full h-[850px] flex items-center justify-start">
            <Image src={Banner} alt="banner" width={500} height={500} className="w-full h-full object-cover absolute inset-0" />
            <div className="absolute inset-0 z-10 h-full w-full bg-gradient-to-b from-black/70 to-[#1E284D]/80" />
            <div className="relative z-10 container mx-auto px-4 text-white">
                <h1 className="text-5xl md:text-7xl font-semibold md:max-w-2xl">Find your next property <span className="text-third">with us</span></h1>
            </div>
            <div className="absolute bottom-0 md:right-0 z-10 gap-6 grid pt-9 pb-14 px-4 md:px-14 text-white">
                <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto scrollbar-hidden px-4">
                    <BannerCardComponent datas={BannerDetail} />
                </div>
            </div>
        </div>
    )
}