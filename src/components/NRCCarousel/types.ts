import { Breakpoint, DesktopMobile } from "@/types";
import { StaticImageData } from "next/image";

export type FocalPoint = {
    x: number;
    y: number;
};

export type NRCImage = {
    alt?: string;
    /* This is the blur quality of the initial blurred image 1-100, the trade off is performance verse beauty. */
    blurQuality?: number;
    noBlur?: boolean;
    imageFocalPoint?: FocalPoint;
};

export type FrameRenderedComponentProps = {
    setCarouselIndex: React.Dispatch<React.SetStateAction<number>>;
};

export type NRCFrameComponent = {
    image?: Partial<StaticImageData> & NRCImage;
    /* This component will be absolutely positioned on top of the image. */
    component?: React.ReactNode | ((props: FrameRenderedComponentProps) => React.ReactNode);
};

export type Frame = {
    /* The key will default to frame.default.src if this is blank */
    key?: string;
    mobile?: NRCFrameComponent;
    desktop?: NRCFrameComponent;
};

export type NRCCarouselProps = {
    /* Frames will default to the aspect ratio of the first image, they must all be the same ratio unless you use "heights". */
    frames: Frame[];
    /* This will override the strict resolution mandate, allowing you to choose a height that the Frames will conform to. Not recommend. */
    heights?: DesktopMobile<number>;
    /* The point at which the Carousel will switch to Desktop components. If this is not set the mobile option will be defaulted. */
    breakpoint?: Breakpoint;
    slideDuration?: number;
    noAutoPlay?: boolean;
    /* This component will be displayed before the images load in an absolutely positioned container with gull width and height. */
    loadingComponent?: React.ReactNode;
};
