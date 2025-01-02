import type { Meta, StoryObj } from "@storybook/react";
import { NRCCarouselStage } from "./NRCCarouselStage";

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
                        src: "https://images.ctfassets.net/wkoudqq0i14u/6biBiOZi4kHOPqQNKUfiw0/159af435cf587941e26deeb26d2dd110/swamp-frogs-desktop.png",
                        width: 1792,
                        height: 600,
                        alt: "frog band",
                    },
                },
                mobile: {
                    image: {
                        src: "https://images.ctfassets.net/wkoudqq0i14u/4w3rKIcmF02bi8vwnrsNwO/c594d738bce94cd107b2915f6b8cebba/swamp-frogs-mobile.png",
                        width: 640,
                        height: 800,
                        alt: "frog band",
                    },
                },
            },
            {
                desktop: {
                    image: {
                        src: "https://images.ctfassets.net/wkoudqq0i14u/3OUZZHQHmbhxGSlRwD7Rkd/3bd95f813ac15593956b42a1f2f2c58a/waterfall-desktop.png",
                        width: 1792,
                        height: 600,
                        alt: "waterfall",
                    },
                },
                mobile: {
                    image: {
                        src: "https://images.ctfassets.net/wkoudqq0i14u/6wteM668lMrHDRCRhAjsTJ/760b347176f63abb2b14de720bbce2ee/waterfall-mobile.png",
                        width: 640,
                        height: 800,
                        alt: "waterfall",
                    },
                },
            },
            {
                desktop: {
                    image: {
                        src: "https://images.ctfassets.net/wkoudqq0i14u/1goYV4rX04rRB1UjyEvrl5/9bc0ba6ebb01c079124f84a44bf8ffc8/space-desktop.png",
                        width: 1792,
                        height: 600,
                        alt: "space",
                    },
                },
                mobile: {
                    image: {
                        src: "https://images.ctfassets.net/wkoudqq0i14u/3M8NaXkRrPnHuuPohy4O0I/0c3f3651b53262f1cb77583136ab1751/space-mobile.png",
                        width: 640,
                        height: 800,
                        alt: "space",
                    },
                },
            },
            {
                desktop: {
                    image: {
                        src: "https://images.ctfassets.net/wkoudqq0i14u/4FXdWBJ23JAx9x7cpM4bgy/8f2ee43e6a6761bd848d819f40db6805/urban-desktop.png",
                        width: 1792,
                        height: 600,
                        alt: "urban",
                    },
                },
                mobile: {
                    image: {
                        src: "https://images.ctfassets.net/wkoudqq0i14u/10xIMlsPTg0nPseAdGezdK/9f8f95dec20af82fec6458c802cf37a9/urban-mobile.png",
                        width: 640,
                        height: 800,
                        alt: "urban",
                    },
                },
            },
            {
                desktop: {
                    image: {
                        src: "https://images.ctfassets.net/wkoudqq0i14u/6FqTDslwGnDkwWW4SrtBJW/fb38b2dfd3df601c72d41f5857d6ae36/tropical-desktop.png",
                        width: 1792,
                        height: 600,
                        alt: "tropical",
                    },
                },
                mobile: {
                    image: {
                        src: "https://images.ctfassets.net/wkoudqq0i14u/2Wk5USyMsJHvSFkDtWW9xX/28bc3d7c2c4bbfd0a01eb3de8969c2c7/tropical-mobile.png",
                        width: 640,
                        height: 800,
                        alt: "tropical",
                    },
                },
            },
        ],
    },
};
