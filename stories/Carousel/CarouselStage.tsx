import { JSX } from "react";
import { Carousel, CarouselProps } from "../../components/Carousel/Carousel";

export const CarouselStage = (props: Partial<CarouselProps>): JSX.Element => {
    return <Carousel {...(props as CarouselProps)} />;
};
