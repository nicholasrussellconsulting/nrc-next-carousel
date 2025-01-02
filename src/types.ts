export type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl";

export type DesktopMobile<T extends string | number> = {
    desktop: T;
    mobile: T;
};
