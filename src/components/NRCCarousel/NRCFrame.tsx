import Image, { StaticImageData } from "next/image";
import React, { useEffect, useState } from "react";
import { FocalPoint, FrameRenderedComponentProps, NRCFrameComponent, NRCImage } from "./types";
import clsx from "clsx";

const DEFAULT_BLUR_WIDTH = 200;
const DEFAULT_BLUR_QUALITY = 30;

export const NRCFrame = ({
    image,
    priority,
    component,
    onLoad,
    setCarouselIndex,
}: NRCFrameComponent & { priority?: boolean; onLoad?: () => void; setCarouselIndex: React.Dispatch<React.SetStateAction<number>> }) => {
    const [blurUri, setBlurUri] = useState<undefined | string>(undefined);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        if (!image?.src || image.blurDataURL) {
            return;
        }
        fetch(image.src + `?w=${image.blurWidth || DEFAULT_BLUR_WIDTH}&q=${image.blurQuality || DEFAULT_BLUR_QUALITY}`)
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
        !!image?.src && (
            <>
                <Image
                    alt={image?.alt as string}
                    src={image?.src}
                    width={image.width}
                    height={image.height}
                    style={imageStyles}
                    className={clsx("absolute inset-0 object-cover", { "blur-sm": !loaded })}
                    priority={priority}
                    blurDataURL={image.blurDataURL || blurUri}
                    placeholder={blurUri || image.blurDataURL ? "blur" : undefined}
                    onLoad={() => {
                        setLoaded(true);
                        if (onLoad) onLoad();
                    }}
                />
                {!!component && (
                    <div className="absolute w-full h-full">{isFunction(component) ? component({ setCarouselIndex }) : component}</div>
                )}
            </>
        )
    );
};

const getObjectPosition = (image?: Partial<StaticImageData> & NRCImage, focal?: FocalPoint) => {
    return image?.width && image?.height && focal?.x && focal?.y
        ? `${100 * (focal?.x / image?.width)}% ${100 * (focal?.y / image?.height)}%`
        : undefined;
};

const isFunction = (value: unknown): value is (props: FrameRenderedComponentProps) => React.ReactNode => typeof value === "function";
