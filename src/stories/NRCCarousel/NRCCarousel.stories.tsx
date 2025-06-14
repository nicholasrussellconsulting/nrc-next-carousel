import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { NRCCarouselStage } from "./NRCCarouselStage";
import clsx from "clsx";

const meta: Meta<typeof NRCCarouselStage> = {
    title: "NRCCarousel",
    component: NRCCarouselStage,
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof NRCCarouselStage>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        breakpoint: "sm",
        frames: [
            {
                desktop: {
                    image: {
                        src: "https://images.ctfassets.net/j4gvxrppq5bi/6biBiOZi4kHOPqQNKUfiw0/f4df53b90a971f7b8a4be6d4d54e36ac/swamp-frogs-desktop.png",
                        width: 1792,
                        height: 600,
                        alt: "frog band",
                    },
                },
                mobile: {
                    image: {
                        src: "https://images.ctfassets.net/j4gvxrppq5bi/4w3rKIcmF02bi8vwnrsNwO/933e050dff9958c9ec9803066ca1737e/swamp-frogs-mobile.png",
                        width: 640,
                        height: 800,
                        alt: "frog band",
                    },
                },
            },
            {
                desktop: {
                    image: {
                        src: "https://images.ctfassets.net/j4gvxrppq5bi/3OUZZHQHmbhxGSlRwD7Rkd/a04cabf626e133ed5c94a6eca29b21bc/waterfall-desktop.png",
                        width: 1792,
                        height: 600,
                        alt: "waterfall",
                    },
                },
                mobile: {
                    image: {
                        src: "https://images.ctfassets.net/j4gvxrppq5bi/6wteM668lMrHDRCRhAjsTJ/63d49711b5254ba3150a077475c84093/waterfall-mobile.png",
                        width: 640,
                        height: 800,
                        alt: "waterfall",
                    },
                },
            },
            {
                desktop: {
                    image: {
                        src: "https://images.ctfassets.net/j4gvxrppq5bi/1goYV4rX04rRB1UjyEvrl5/3f1c5e43a410bf16f7b6d88a046963ef/space-desktop.png",
                        width: 1792,
                        height: 600,
                        alt: "space",
                    },
                },
                mobile: {
                    image: {
                        src: "https://images.ctfassets.net/j4gvxrppq5bi/3M8NaXkRrPnHuuPohy4O0I/5baab66e340b7d40beef496014b82968/space-mobile.png",
                        width: 640,
                        height: 800,
                        alt: "space",
                    },
                },
            },
            {
                desktop: {
                    image: {
                        src: "https://images.ctfassets.net/j4gvxrppq5bi/4FXdWBJ23JAx9x7cpM4bgy/0a420b0f5121f407025f626af0e7c1f9/urban-desktop.png",
                        width: 1792,
                        height: 600,
                        alt: "urban",
                    },
                },
                mobile: {
                    image: {
                        src: "https://images.ctfassets.net/j4gvxrppq5bi/10xIMlsPTg0nPseAdGezdK/0138a095a8145392ccd9d34fb5c3e2a6/urban-mobile.png",
                        width: 640,
                        height: 800,
                        alt: "urban",
                    },
                },
            },
            {
                desktop: {
                    image: {
                        src: "https://images.ctfassets.net/j4gvxrppq5bi/6FqTDslwGnDkwWW4SrtBJW/d06937d60528b96d1e6d0c013e79e472/tropical-desktop.png",
                        width: 1792,
                        height: 600,
                        alt: "tropical",
                    },
                },
                mobile: {
                    image: {
                        src: "https://images.ctfassets.net/j4gvxrppq5bi/2Wk5USyMsJHvSFkDtWW9xX/6129bb30c1c276d526bb689e65823e37/tropical-mobile.png",
                        width: 640,
                        height: 800,
                        alt: "tropical",
                    },
                },
            },
        ],
    },
};

export const WithControls: Story = {
    args: {
        breakpoint: "sm",
        controlsComponent({ decrementCarousel, incrementCarousel, jumpTo, currentIndex }) {
            return (
                <>
                    <button onClick={incrementCarousel} className="absolute right-2 bottom-1/2 bg-white rounded-sm px-2">
                        Increment
                    </button>
                    <button onClick={decrementCarousel} className="absolute left-2 bottom-1/2 bg-white rounded-sm px-2">
                        Decrement
                    </button>
                    <div className="flex space-x-2 justify-center">
                        {Array(5)
                            .fill(undefined)
                            .map((_, i) => (
                                <button className={clsx({ "text-red-700": currentIndex === i })} key={i} onClick={() => jumpTo(i)}>
                                    {i + 1}
                                </button>
                            ))}
                    </div>
                </>
            );
        },
        frames: [
            {
                desktop: {
                    image: {
                        src: "https://images.ctfassets.net/j4gvxrppq5bi/6biBiOZi4kHOPqQNKUfiw0/f4df53b90a971f7b8a4be6d4d54e36ac/swamp-frogs-desktop.png",
                        width: 1792,
                        height: 600,
                        alt: "frog band",
                    },
                },
                mobile: {
                    image: {
                        src: "https://images.ctfassets.net/j4gvxrppq5bi/4w3rKIcmF02bi8vwnrsNwO/933e050dff9958c9ec9803066ca1737e/swamp-frogs-mobile.png",
                        width: 640,
                        height: 800,
                        alt: "frog band",
                    },
                },
            },
            {
                desktop: {
                    image: {
                        src: "https://images.ctfassets.net/j4gvxrppq5bi/3OUZZHQHmbhxGSlRwD7Rkd/a04cabf626e133ed5c94a6eca29b21bc/waterfall-desktop.png",
                        width: 1792,
                        height: 600,
                        alt: "waterfall",
                    },
                },
                mobile: {
                    image: {
                        src: "https://images.ctfassets.net/j4gvxrppq5bi/6wteM668lMrHDRCRhAjsTJ/63d49711b5254ba3150a077475c84093/waterfall-mobile.png",
                        width: 640,
                        height: 800,
                        alt: "waterfall",
                    },
                },
            },
            {
                desktop: {
                    image: {
                        src: "https://images.ctfassets.net/j4gvxrppq5bi/1goYV4rX04rRB1UjyEvrl5/3f1c5e43a410bf16f7b6d88a046963ef/space-desktop.png",
                        width: 1792,
                        height: 600,
                        alt: "space",
                    },
                },
                mobile: {
                    image: {
                        src: "https://images.ctfassets.net/j4gvxrppq5bi/3M8NaXkRrPnHuuPohy4O0I/5baab66e340b7d40beef496014b82968/space-mobile.png",
                        width: 640,
                        height: 800,
                        alt: "space",
                    },
                },
            },
            {
                desktop: {
                    image: {
                        src: "https://images.ctfassets.net/j4gvxrppq5bi/4FXdWBJ23JAx9x7cpM4bgy/0a420b0f5121f407025f626af0e7c1f9/urban-desktop.png",
                        width: 1792,
                        height: 600,
                        alt: "urban",
                    },
                },
                mobile: {
                    image: {
                        src: "https://images.ctfassets.net/j4gvxrppq5bi/10xIMlsPTg0nPseAdGezdK/0138a095a8145392ccd9d34fb5c3e2a6/urban-mobile.png",
                        width: 640,
                        height: 800,
                        alt: "urban",
                    },
                },
            },
            {
                desktop: {
                    image: {
                        src: "https://images.ctfassets.net/j4gvxrppq5bi/6FqTDslwGnDkwWW4SrtBJW/d06937d60528b96d1e6d0c013e79e472/tropical-desktop.png",
                        width: 1792,
                        height: 600,
                        alt: "tropical",
                    },
                },
                mobile: {
                    image: {
                        src: "https://images.ctfassets.net/j4gvxrppq5bi/2Wk5USyMsJHvSFkDtWW9xX/6129bb30c1c276d526bb689e65823e37/tropical-mobile.png",
                        width: 640,
                        height: 800,
                        alt: "tropical",
                    },
                },
            },
        ],
    },
};

export const OneSlide: Story = {
    args: {
        breakpoint: "sm",
        frames: [
            {
                desktop: {
                    image: {
                        src: "https://images.ctfassets.net/j4gvxrppq5bi/6biBiOZi4kHOPqQNKUfiw0/f4df53b90a971f7b8a4be6d4d54e36ac/swamp-frogs-desktop.png",
                        width: 1792,
                        height: 600,
                        alt: "frog band",
                    },
                },
                mobile: {
                    image: {
                        src: "https://images.ctfassets.net/j4gvxrppq5bi/4w3rKIcmF02bi8vwnrsNwO/933e050dff9958c9ec9803066ca1737e/swamp-frogs-mobile.png",
                        width: 640,
                        height: 800,
                        alt: "frog band",
                    },
                },
            },
        ],
    },
};

export const ComponentBased: Story = {
    args: {
        heights: { mobile: 800 },
        frames: [
            {
                mobile: {
                    component({ decrementCarousel, incrementCarousel, jumpTo }) {
                        return (
                            <div className="bg-blue-400 flex w-full h-full flex-col justify-center items-center select-none">
                                <h1 className="text-xl">Slide 1</h1>
                                <button onClick={incrementCarousel}>Increment</button>
                                <button onClick={decrementCarousel}>Decrement</button>
                                <button onClick={() => jumpTo(3)}>Go to end</button>
                            </div>
                        );
                    },
                },
                key: "1",
            },
            {
                mobile: {
                    component({ decrementCarousel, incrementCarousel }) {
                        return (
                            <div className="bg-red-300 flex w-full h-full flex-col justify-center items-center select-none">
                                <h1 className="text-xl">Slide 2</h1>
                                <button onClick={incrementCarousel}>Increment</button>
                                <button onClick={decrementCarousel}>Decrement</button>
                            </div>
                        );
                    },
                },
                key: "2",
            },
            {
                mobile: {
                    component({ decrementCarousel, incrementCarousel }) {
                        return (
                            <div className="bg-green-400 flex w-full h-full flex-col justify-center items-center select-none">
                                <h1 className="text-xl">Slide 3</h1>
                                <button onClick={incrementCarousel}>Increment</button>
                                <button onClick={decrementCarousel}>Decrement</button>
                            </div>
                        );
                    },
                },
                key: "3",
            },
            {
                mobile: {
                    component({ decrementCarousel, incrementCarousel, jumpTo }) {
                        return (
                            <div className="bg-yellow-400 flex w-full h-full flex-col justify-center items-center select-none">
                                <h1 className="text-xl">Slide 4</h1>
                                <button onClick={incrementCarousel}>Increment</button>
                                <button onClick={decrementCarousel}>Decrement</button>
                                <button onClick={() => jumpTo(0)}>Go to start</button>
                            </div>
                        );
                    },
                },
                key: "3",
            },
        ],
    },
};
