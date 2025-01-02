import NRCCarousel from "@/components/NRCCarousel/NRCCarousel";
import { NRCCarouselProps } from "@/components/NRCCarousel/types";
import { JSX } from "react";
import React from "react";

export const NRCCarouselStage = (props: Partial<NRCCarouselProps>): JSX.Element => {
    return <NRCCarousel {...(props as NRCCarouselProps)} />;
};
