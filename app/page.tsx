"use client";

import { useEffect } from "react";
import Hero from "../components/Hero";
import SmoothScroll from "../components/SmoothScroll";

export default function Home() {
    useEffect(() => {
        // Initialize GSAP and other animations
        const initAnimations = async () => {
            const { gsap } = await import("gsap");
            const { ScrollTrigger } = await import("gsap/ScrollTrigger");

            gsap.registerPlugin(ScrollTrigger);

            // Global scroll animations
            gsap.utils.toArray(".fade-in-up").forEach((element: any) => {
                gsap.fromTo(
                    element,
                    { opacity: 0, y: 50 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: element,
                            start: "top 80%",
                            end: "bottom 20%",
                            toggleActions: "play none none reverse",
                        },
                    }
                );
            });

            // Parallax effect for background elements
            gsap.utils.toArray(".parallax").forEach((element: any) => {
                gsap.to(element, {
                    yPercent: -50,
                    ease: "none",
                    scrollTrigger: {
                        trigger: element,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true,
                    },
                });
            });
        };

        initAnimations();
    }, []);

    return (
        <SmoothScroll>
            <div className="relative px-4 sm:px-6 lg:px-10">

                <main className="relative z-10 ">
                    <Hero />
                </main>
            </div>
        </SmoothScroll>
    );
}
