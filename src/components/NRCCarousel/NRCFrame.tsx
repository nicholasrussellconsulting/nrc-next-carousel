import Image, { StaticImageData } from "next/image";
import React, { useEffect, useState } from "react";
import { FocalPoint, FrameRenderedComponentProps, NRCFrameComponent, NRCImage } from "./types";
import clsx from "clsx";

const DEFAULT_BLUR_WIDTH = 400;
const DEFAULT_BLUR_QUALITY = 40;

export const NRCFrame = ({
    image,
    priority,
    component,
    onLoad,
    loadingComponent,
    blurQuality,
    noBlur,
    decrementCarousel,
    incrementCarousel,
    jumpTo,
    isSingleSlide,
    pauseOnHover
}: NRCFrameComponent & {
    priority?: boolean;
    onLoad?: () => void;
    incrementCarousel: () => void;
    decrementCarousel: () => void;
    jumpTo: (i: number) => void;
    loadingComponent?: React.ReactNode;
    blurQuality?: number;
    noBlur?: boolean;
    isSingleSlide?: boolean;
    pauseOnHover?: boolean;
}) => {
    const [blurUri, setBlurUri] = useState<undefined | string>(undefined);
    const [loaded, setLoaded] = useState(false);
    const [isGrabbing, setIsGrabbing] = useState(false);
    useEffect(() => {
        if (!image?.src || image.blurDataURL || noBlur) {
            return;
        }
        fetch(image.src + `?w=${image.blurWidth || DEFAULT_BLUR_WIDTH}&q=${blurQuality || DEFAULT_BLUR_QUALITY}`)
            .then((res) => res.arrayBuffer())
            .then((buffer) => {
                const base64 = Buffer.from(buffer).toString("base64");
                setBlurUri(`data:image/jpeg;base64,${base64}`);
            })
            .catch(console.error);
    }, [image]);
    const imageStyles: React.CSSProperties = {
        height: "100%",
        objectPosition: getObjectPosition(image, image?.imageFocalPoint),
        width: "100%",
    };
    return (
        <>
            {!!image?.src && (
                <>
                    {!loaded &&
                        (loadingComponent ? (
                            loadingComponent
                        ) : (
                            <div className="absolute animate-pulse w-full bg-gray-300 transform h-full" aria-busy="true" />
                        ))}
                    <Image
                        alt={image?.alt as string}
                        src={image?.src}
                        width={image.width}
                        height={image.height}
                        style={imageStyles}
                        className={clsx("absolute inset-0 object-cover transition duration-200 select-none", {
                            "blur-sm": !loaded,
                            "cursor-grab": !isGrabbing && !isSingleSlide,
                            "cursor-grabbing select-none": isGrabbing && !isSingleSlide,
                        })}
                        onMouseDown={() => setIsGrabbing(true)}
                        onMouseUp={() => setIsGrabbing(false)}
                        onMouseLeave={() => setIsGrabbing(false)}
                        priority={priority}
                        blurDataURL={noBlur ? undefined : image.blurDataURL || blurUri}
                        placeholder={noBlur || (!image.blurDataURL && !blurUri) ? undefined : "blur"}
                        onLoad={() => {
                            setLoaded(true);
                            if (onLoad) onLoad();
                        }}
                    />
                </>
            )}

            {!!component && (
                <div
                    onMouseDown={() => setIsGrabbing(true)}
                    onMouseUp={() => setIsGrabbing(false)}
                    onMouseLeave={() => setIsGrabbing(false)}
                    className={clsx("absolute inset-0 w-full h-full select-none", {
                        "cursor-grab": !isGrabbing && !isSingleSlide,
                        "cursor-grabbing select-none": isGrabbing && !isSingleSlide,
                    })}
                >
                    {isFunction(component) ? component({ decrementCarousel, incrementCarousel, jumpTo }) : component}
                </div>
            )}
        </>
    );
};

const getObjectPosition = (image?: Partial<StaticImageData> & NRCImage, focal?: FocalPoint) => {
    return image?.width && image?.height && focal?.x && focal?.y
        ? `${100 * (focal?.x / image?.width)}% ${100 * (focal?.y / image?.height)}%`
        : undefined;
};

const isFunction = (value: unknown): value is (props: FrameRenderedComponentProps) => React.ReactNode => typeof value === "function";
