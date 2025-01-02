"use client";

import React, { RefObject, useEffect, useRef, useState } from "react";
import { Frame, NRCCarouselProps } from "./types";
import { Breakpoint, DesktopMobile } from "@/types";
import clsx from "clsx";
import { NRCFrame } from "./NRCFrame";
import { useHover } from "@/hooks/useHover";
import { useSwipeable } from "react-swipeable";

const DEFAULT_ASPECT_RATIO = [16, 9];
const DEFAULT_DURATION = 6000;

type BreakpointClassesShape = {
    [key in Breakpoint]: DesktopMobile<string>;
};

const breakpointClasses: BreakpointClassesShape = {
    xs: { desktop: "hidden xs:flex", mobile: "flex xs:hidden" },
    sm: { desktop: "hidden sm:flex", mobile: "flex sm:hidden" },
    md: { desktop: "hidden md:flex", mobile: "flex md:hidden" },
    lg: { desktop: "hidden lg:flex", mobile: "flex lg:hidden" },
    xl: { desktop: "hidden xl:flex", mobile: "flex xl:hidden" },
};

const NRCCarousel = ({ frames, breakpoint, slideDuration, noAutoPlay, heights, loadingComponent }: NRCCarouselProps) => {
    const breakpointClass: DesktopMobile<string> = breakpoint ? breakpointClasses[breakpoint] : { desktop: "hidden", mobile: "block" };
    const [index, setIndex] = useState(1);
    const [firstImageLoaded, setFirstImageLoaded] = useState(false);
    const [playingAnimation, setPlayingAnimation] = useState(false);
    const [disableAnimation, setDisableAnimation] = useState(false);
    const [willResetAnimStateOnAnimEnd, setWillResetAnimStateOnAnimEnd] = useState(false);
    const infiniteFrames = [frames[frames.length - 1], ...frames, frames[0]];
    const incIndex = () => {
        if (playingAnimation) {
            return;
        }
        setPlayingAnimation(true);
        setIndex((i) => i + 1);
    };
    const decIndex = () => {
        if (playingAnimation) {
            return;
        }
        setPlayingAnimation(true);
        setIndex((i) => i - 1);
    };
    const firstFrame = frames[0];
    const desktopAspectRatio =
        (firstFrame.desktop?.image?.width || DEFAULT_ASPECT_RATIO[0]) / (firstFrame.desktop?.image?.height || DEFAULT_ASPECT_RATIO[1]);
    const mobileAspectRatio =
        (firstFrame.mobile?.image?.width || DEFAULT_ASPECT_RATIO[1]) / (firstFrame.mobile?.image?.height || DEFAULT_ASPECT_RATIO[0]);

    const containerRef = useRef<HTMLDivElement>(null);
    const isHovering = useHover(containerRef as RefObject<HTMLDivElement>);

    const toggleFirstImageLoaded = () => {
        if (!firstImageLoaded) {
            setFirstImageLoaded(true);
        }
    };

    const setCarouselIndex: React.Dispatch<React.SetStateAction<number>> = (value) => {
        if (typeof value === "function") {
            setCarouselIndex((prev) => value(prev + 1));
        } else {
            setCarouselIndex(value + 1);
        }
    };

    const handlers = useSwipeable({
        onSwipedLeft: incIndex,
        onSwipedRight: decIndex,
        swipeDuration: 500,
        preventScrollOnSwipe: true,
        trackMouse: true,
    });

    useEffect(() => {
        if (noAutoPlay) {
            return;
        }
        const interval = setInterval(() => {
            if (!isHovering && firstImageLoaded) incIndex();
        }, slideDuration || DEFAULT_DURATION);
        return () => clearInterval(interval);
    }, [noAutoPlay, slideDuration, isHovering, firstImageLoaded]);

    useEffect(() => {
        if (index === infiniteFrames.length - 1 || index === 0) {
            setWillResetAnimStateOnAnimEnd(true);
        }
    }, [index]);

    useEffect(() => {
        let timeout: undefined | NodeJS.Timeout;
        if (playingAnimation) {
            timeout = setTimeout(() => setPlayingAnimation(false), 500);
        }
        if (!playingAnimation && willResetAnimStateOnAnimEnd) {
            setIndex(index === infiniteFrames.length - 1 ? 1 : infiniteFrames.length - 2);
            setDisableAnimation(true);
            setWillResetAnimStateOnAnimEnd(false);
            requestAnimationFrame(() => {
                setDisableAnimation(false);
            });
        }
        return () => {
            if (timeout) {
                clearTimeout(timeout);
            }
        };
    }, [playingAnimation]);
    return (
        <div className="overflow-hidden w-full relative" ref={containerRef} onDragStart={(e) => e.preventDefault()}>
            <div
                id="test-1"
                className={clsx({ "transition-transform duration-500": !disableAnimation }, breakpointClass.mobile)}
                style={{ transform: `translateX(-${index * 100}%)` }}
                {...handlers}
            >
                {!firstImageLoaded &&
                    (!!loadingComponent ? (
                        loadingComponent
                    ) : (
                        <div
                            className="animate-pulse w-full bg-gray-300 transform translate-x-full"
                            style={{ aspectRatio: !heights?.mobile ? mobileAspectRatio : undefined, height: heights?.mobile }}
                        />
                    ))}
                {infiniteFrames.map((frame, i) => (
                    <div
                        key={deriveFrameKey({
                            frame,
                            isFirstElement: i === 0,
                            isLastElement: i === infiniteFrames.length - 1,
                            isMobile: true,
                        })}
                        className="relative w-full flex-shrink-0"
                        style={{ aspectRatio: !heights?.mobile ? mobileAspectRatio : undefined, height: heights?.mobile }}
                    >
                        <NRCFrame
                            priority={i === 0}
                            component={frame.mobile?.component}
                            image={frame.mobile?.image}
                            onLoad={i === 0 ? toggleFirstImageLoaded : undefined}
                            setCarouselIndex={setCarouselIndex}
                        />
                    </div>
                ))}
            </div>
            {!!breakpoint && (
                <div
                    className={clsx({ "transition-transform duration-500": !disableAnimation }, breakpointClass.desktop)}
                    style={{ transform: `translateX(-${index * 100}%)` }}
                    {...handlers}
                >
                    {!firstImageLoaded &&
                        (!!loadingComponent ? (
                            <div className="translate-x-full">{loadingComponent}</div>
                        ) : (
                            <div
                                className="animate-pulse w-full bg-gray-300 transform translate-x-full"
                                style={{ aspectRatio: !heights?.desktop ? desktopAspectRatio : undefined, height: heights?.desktop }}
                            />
                        ))}
                    {infiniteFrames.map((frame, i) => (
                        <div
                            key={deriveFrameKey({ frame, isFirstElement: i === 0, isLastElement: i === infiniteFrames.length - 1 })}
                            className="relative w-full flex-shrink-0"
                            style={{ aspectRatio: !heights?.desktop ? desktopAspectRatio : undefined, height: heights?.desktop }}
                        >
                            <NRCFrame
                                priority={i === 0}
                                component={frame.desktop?.component}
                                image={frame.desktop?.image}
                                onLoad={i === 0 ? toggleFirstImageLoaded : undefined}
                                setCarouselIndex={setCarouselIndex}
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

type DeriveFrameKeyParams = {
    frame: Frame;
    isFirstElement?: boolean;
    isLastElement?: boolean;
    isMobile?: boolean;
};

const deriveFrameKey = ({ frame, isFirstElement, isLastElement, isMobile }: DeriveFrameKeyParams) => {
    let key = frame.key || isMobile ? frame.mobile?.image?.src : frame.desktop?.image?.src;
    if (isFirstElement) {
        key = key + "-clone-1";
    }
    if (isLastElement) {
        key = key + "-clone-2";
    }
    return key;
};

export default NRCCarousel;
