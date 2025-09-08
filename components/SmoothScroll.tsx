"use client";

import { useEffect, useRef } from "react";

interface SmoothScrollProps {
    children: React.ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Check if mobile/tablet
        const isTouchDevice =
            "ontouchstart" in window || navigator.maxTouchPoints > 0;

        if (isTouchDevice) {
            // Don't initialize Lenis on touch devices
            return;
        }

        let lenis: any;

        const initLenis = async () => {
            const Lenis = (await import("lenis")).default;

            lenis = new Lenis({
                duration: 1.2,
                easing: (t: number) =>
                    Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                wheelMultiplier: 1,
                infinite: false,
            });

            function raf(time: number) {
                lenis.raf(time);
                requestAnimationFrame(raf);
            }

            requestAnimationFrame(raf);
        };

        initLenis();

        return () => {
            if (lenis) {
                lenis.destroy();
            }
        };
    }, []);

    return (
        <div ref={scrollRef} className="smooth-scroll-container">
            {children}
        </div>
    );
}
