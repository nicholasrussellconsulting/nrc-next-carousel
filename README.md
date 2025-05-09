# NRC Next.js/Tailwind Carousel

(NRC stands for my LLC; [Nicholas Russell Consulting](https://www.nicholasrussellconsulting.com/))

[![npm version](https://badge.fury.io/js/nrc-next-carousel.svg)](https://www.npmjs.com/package/nrc-next-carousel)

This is a swipeable, infinite scrolling, user-friendly Next.js Carousel built **only for** Next.js/Tailwind users. If you're project uses both of these technologies, this package will make your life a whole lot easier. This package was built with marketing/ecomm in mind.

## Support

If you're using this package on an enterprise-level application that happens to be financially prosperous, do me the favor of mentioning where the beautiful carousel came from to your manager, here is my sponsor link.

[![GitHub Sponsors](https://img.shields.io/badge/sponsor-GitHub-blue?logo=github)](https://github.com/sponsors/nlowen233)

Checkout my highest sponsor tier if you're looking for face-to-face support and bug prioritization.

## Preview

[Check out the Storybook Demo](https://carousel.nicholasrussellconsulting.com)

## Features

- Infinite scrolling
- Swipe to slide
- Automatic blur image loading
- Render anything in the Carousel w/ access to controls
- Autoplay capabilities
- Support for responsive design based on your custom Tailwind breakpoints
- Performance first 
- SEO/Accessibility considerate (tabbing, motion safety, semantic HTML, aria)

Here's what Lighthouse had to say about it:

![Very high Lighthouse scores](https://images.ctfassets.net/wkoudqq0i14u/6taW7JpIR7ezsCtdAUZQNR/ca36c2e4406b3c670f75c24f3e36d24c/Screenshot_2025-01-03_203303.png)
  
## Installation

`npm i nrc-next-carousel`

### For Tailwind 3

In your tailwind.config.ts, add 
`"./node_modules/nrc-next-carousel/dist/**/*.{js,ts,jsx,tsx}"`

like...

```ts
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/nrc-next-carousel/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "28rem",
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
```

### For Tailwind 4

Add this line to the top of your .css file that imports Tailwind.

If you're using the `src` directory (`/src/app/globals.css`):

```css
@source "../../node_modules/nrc-next-carousel/dist";
```

If you're __not__ using the `src` directory (`/app/globals.css`):

```css
@source "../node_modules/nrc-next-carousel/dist";
```

## Usage

```tsx
import { Carousel } from  "nrc-next-carousel";
export  default  function  Home() {
    return (
        <>
            <Carousel frames={[...]}/>;
        </>
    );
}
```

## Documentation
I plan to have more documentation in the future, and this will eventually be updated with that link. Everything should work exactly how you think it works, so my hope is that this documentation is not needed. This package is **mobile-first opinionated** meaning "mobile" is treated as default. If you are not taking advantage of the breakpoint system, you will be using the props called "mobile". If there is something that is not clear in this documentation, you might be able to find a solution by reading the .stories file in the source code for examples of prop configurations.

### Carousel Props
The Carousel is made up of Frames which can be images, React components, or both (more on that later). The size of these frames is controlled by the aspect ratio of the image of your first Frame, therefore it's best practice to use images of the same aspect ratio to avoid stretching (alternatively you can use the `heights` prop to control the sizes of the frames). 

The `loadingComponent` is what will appear before the blurUrl is loaded. This defaults to a pulsating gray colored div.

You can adjust the `slideDuration` to change the auto-play speed. And turn off auto-play with `noAutoPlay`. If the carousel should continue to auto-play even if the carousel is not in the viewport, you can use `willAutoPlayOutsideViewport`.

You can turn off the default blur with `noBlur`. You can adjust the default quality of the initial blur image by using the `blurQuality` prop (use a number between 1-100). The larger the number, the better looking the image, but the worse the load time.

The `controlsComponent` will be an optional function that returns a React component. It sits inside the Carousel component (a position:relative section) and can be used to create custom controls for your Carousel. This package has no opinion on controls, so this is left completely up to the user in terms of UI/UX. Your component will receive `incrementCarousel`, `decrementCarousel`, `currentIndex` and `jumpTo` props. [Check this story](https://carousel.nicholasrussellconsulting.com/?path=/story/nrccarousel--with-controls) for an example. 

### Frames
The `key` prop is only needed if you are not using images (or your images have the same src for some reason). 

You will see there is responsive architecture here, and you can use both `mobile` & `desktop` inside each Frame. If you are only using one, use `mobile`.

### NRC Image
I strongly recommend you provide your own `alt`, especially if you are building a marketing/ecomm site.

`imageFocalPoint` should be self-explanatory if you're familiar with the concept.

### NRC Frame Component
This will be either a React component, or a function that returns a React component. If it's a function, it will receive the `incrementCarousel`, `decrementCarousel`, and `jumpTo` props.

The component will be inside an absolute positioned container with full width and height of the Frame.

## Common Issues

> ❌ **Error:** Error: Functions cannot be passed directly to Client Components unless you explicitly expose it by marking it with "use server". Or maybe you meant to call this function rather than return it.

This occurs if you do not have a "use client" directive in the file where you are defining a React Component to pass to the carousel (`controlsComponent` for example)

## License

This project is licensed under the **ISC License**.

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.


