import { useEffect, useState } from "react";
import type { RefObject } from "react";

export function useHover<T extends HTMLElement = HTMLElement>(elementRef: RefObject<T>): boolean {
    const [value, setValue] = useState<boolean>(false);

    const handleMouseEnter = () => {
        setValue(true);
    };
    const handleMouseLeave = () => {
        setValue(false);
    };

    useEffect(() => {
        elementRef.current?.addEventListener("mouseenter", handleMouseEnter);
        elementRef.current?.addEventListener("mouseleave", handleMouseLeave);
        return () => {
            elementRef.current?.removeEventListener("mouseenter", handleMouseEnter);
            elementRef.current?.removeEventListener("mouseleave", handleMouseLeave);
            handleMouseLeave();
        };
    }, [elementRef.current]);

    return value;
}
