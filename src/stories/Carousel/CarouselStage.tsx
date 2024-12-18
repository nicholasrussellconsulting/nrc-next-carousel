import Carousel, { CarouselProps } from "@/components/Carousel/Carousel";
import { JSX } from "react";
import React from "react"

export const CarouselStage = (props: Partial<CarouselProps>): JSX.Element => {
    return <Carousel {...(props as CarouselProps)} />;
};
