import { useEffect, useState } from "react";
import type { RefObject } from "react";

export function useHasFocus<T extends HTMLElement = HTMLElement>(elementRef: RefObject<T>): boolean {
    const [value, setValue] = useState<boolean>(false);

    const handleFocusIn = () => {
        setValue(true);
    };
    const handleFocusOut = () => {
        setValue(false);
    };

    useEffect(() => {
        elementRef.current?.addEventListener("focusin", handleFocusIn);
        elementRef.current?.addEventListener("focusout", handleFocusOut);
        return () => {
            elementRef.current?.removeEventListener("focusin", handleFocusIn);
            elementRef.current?.removeEventListener("focusout", handleFocusOut);
            handleFocusOut();
        };
    }, [elementRef.current]);

    return value;
}
