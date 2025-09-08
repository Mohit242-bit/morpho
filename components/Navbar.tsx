"use client";

import { useState, useEffect } from "react";
import {
    Menu,
    X,
    Sun,
    Moon,

} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { toggleTheme, initializeTheme, getCurrentTheme } from "../lib/theme";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [currentTheme, setCurrentTheme] = useState<"dark" | "light">("light");

    useEffect(() => {
        initializeTheme();
        setCurrentTheme(getCurrentTheme());
    }, []);

    const handleThemeToggle = () => {
        toggleTheme();
        setCurrentTheme(getCurrentTheme());
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`fixed bg-bg-primary top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
            ? "backdrop-blur-xl border-b border-theme-border shadow-xl"
            : "bg-transparent"}`} >
            <nav className="border-b border-theme-border dark:bg-[#150A26]">
                <div className="w-full h-auto mx-auto px-4 sm:px-6 lg:px-8 py-2 md:pt-4">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo - Updated with bigger size and no background circle */}
                        <Link href="/">
                            <div className="flex items-center gap-3 cursor-pointer hover:opacity-90 transition-opacity duration-200 flex-shrink-0">
                                <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0">
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
                                <div className="relative w-32 h-8 sm:w-40 sm:h-10 md:w-48 md:h-12 flex-shrink-0">
                                    <Image
                                        src={
                                            currentTheme === "dark"
                                                ? "/text_logo_dark.png"
                                                : "/text_logo_light.png"
                                        }
                                        alt="Morphoverse"
                                        fill
                                        className="object-contain object-left"
                                        priority
                                    />
                                </div>
                            </div>
                        </Link>

                        <div className="text-center py-2 md:py-4 px-4 w-auto hidden sm:block">
                            <p className="text-transparent text-gradient-static font-bold text-xs sm:text-sm md:text-lg whitespace-normal">
                                REhumanizing Workplaces, One Emotionally Intelligent step at a time
                            </p>
                        </div>

                        {/* Right side controls - Made more compact */}
                        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                            {/* Theme Toggle Button - Made more compact */}
                            <button
                                onClick={handleThemeToggle}
                                className="p-2.5 rounded-full transition-colors duration-300 bg-theme-card hover:bg-theme-card-hover text-theme-primary"
                                aria-label="Toggle Theme"
                            >
                                <div className="flex items-center gap-1.5">
                                    {currentTheme === "dark" ? (
                                        <>
                                            <Sun className="w-6 h-6" />
                                        </>
                                    ) : (
                                        <>
                                            <Moon className="w-6 h-6" />
                                        </>
                                    )}
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

                {/* <div className="text-center pb-2 md:pb-4 px-4 w-auto block sm:hidden">
                    <p className="text-transparent text-gradient-static font-bold text-xs sm:text-sm md:text-lg whitespace-normal">
                        REHumanizing Workplace, one emotionally intelligent step at a
                        time
                    </p>
                </div> */}
            </nav>
        </div>
    );
}
