import React from "react";
import { Icons } from "../icons";
import { IconNames } from "../icons/interface";

type AnimationHoverButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    dotColor?: string;
    textHoverColor?: string;
}

type PrevNextButtonPropType = {
    enabled: boolean;
    onClick: () => void;
    className?: string;
};

export const AnimationHoverButton = React.forwardRef<
    HTMLButtonElement,
    AnimationHoverButtonProps
>(({ children, className, dotColor = "bg-third", textHoverColor = "text-white", ...props }, ref) => {
    return (
        <button
            ref={ref}
            className={
                `group relative w-auto cursor-pointer overflow-hidden rounded-full bg-white/20 py-3 px-6 md:py-4 md:px-7 text-center font-semibold ${className}`
            }
            {...props}
        >
            <div className="flex items-center gap-3">
                <div className={`h-2 w-2 rounded-full ${dotColor} transition-all duration-500 group-hover:scale-[100.8]`}></div>
                <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
                    {children}
                </span>
            </div>
            <div className={`absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100 ${textHoverColor}`}>
                <span>{children}</span>
            </div>
        </button>
    );
});

AnimationHoverButton.displayName = "AnimationHoverButton";

export const ButtonLabel = ({
    label,
    className,
}: {
    label: string;
    className?: string;
}) => {
    return (
        <label className={`rounded-full py-2 px-4 ${className}`}>{label}</label>
    )
}

export const PrevButton: React.FC<PrevNextButtonPropType> = (props) => {
    const { enabled, onClick } = props;

    return (
        <button
            className={`flex items-center justify-center cursor-pointer ${props.className}`}
            onClick={onClick}
            disabled={!enabled}
            aria-label="arrow-left"
        >
            <Icons name={IconNames['arrow-left']} size={24} />
        </button>
    );
};

export const NextButton: React.FC<PrevNextButtonPropType> = (props) => {
    const { enabled, onClick } = props;

    return (
        <button
            className={`flex items-center justify-center cursor-pointer ${props.className}`}
            onClick={onClick}
            disabled={!enabled}
            aria-label="arrow-right"
        >
            <Icons name={IconNames['arrow-right']} size={24} />
        </button>
    );
};