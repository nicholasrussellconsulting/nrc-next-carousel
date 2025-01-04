import { RefObject, useEffect, useState } from "react";

export function useIsVisible<T extends HTMLElement = HTMLElement>(elementRef: RefObject<T>): boolean {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting));

        observer.observe(elementRef.current);
        return () => {
            observer.disconnect();
        };
    }, [elementRef]);

    return isIntersecting;
}
