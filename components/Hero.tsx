"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getCurrentTheme } from "@/lib/theme";

export default function Hero() {
    const [currentTheme, setCurrentTheme] = useState<'dark' | 'light'>('light');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        setCurrentTheme(getCurrentTheme());

        // Listen for theme changes
        const observer = new MutationObserver(() => {
            setCurrentTheme(getCurrentTheme());
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['data-theme']
        });

        return () => observer.disconnect();
    }, []);

    // Prevent hydration mismatch by not rendering until mounted
    if (!mounted) {
        return (
            <section className="w-full h-[120vh] sm:h-[100vh] pt-[10rem] sm:pt-10 flex items-center justify-center text-center px-4 sm:px-6 lg:px-8">
                <div className="animate-pulse rounded-lg w-32 h-32"></div>
            </section>
        );
    }
    return (
        <section className="w-full h-[100vh] flex items-center justify-center text-center px-4 sm:px-6 lg:px-8">
            {/* Subtle background gradient */}
            <div className="absolute flex flex-col z-10 w-[70vw] mt-20 sm:w-[40vw] h-[80vh] items-center justify-center rounded-2xl mx-auto">
                <div className="flex gap-3 cursor-pointer hover:opacity-90 transition-opacity duration-200 flex-shrink-0 justify-center items-center w-48 h-48 sm:w-72 sm:h-72 mx-auto">
                    <div className="relative w-32 h-32 sm:w-48 sm:h-48 flex-shrink-0 mb-20">
                        <Image
                            src={
                                currentTheme === "dark"
                                    ? "/dark_logo.png"
                                    : "/light_logo.png"
                            }
                            alt="Morphoverse Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>
                {/* Main cycling transformation content */}
                <div

                >
                    <h1 className="w-full h-auto flex items-center justify-center gap-4 text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-6xl leading-tight mb-6 text-theme-primary font-playfair italic">
                        Coming Soon
                    </h1>
                </div>

                {/* Call to Action Buttons */}
                <div className="flex gap-4 w-full text-xs sm:text-lg justify-center items-center">
                    <button
                        className="w-auto sm:w-auto px-6 sm:px-8 py-4 bg-pink-500 dark:bg-pink-800 text-white font-semibold rounded-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                        onClick={() => (window.location.href = "/connect")}
                    >
                        Let's Connect
                        <ArrowRight className="w-5 h-5" />
                    </button>

                </div>
            </div>
        </section>
    );
}
