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
import { usePathname } from "next/navigation";
import { toggleTheme, initializeTheme, getCurrentTheme } from "../lib/theme";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [currentTheme, setCurrentTheme] = useState<"dark" | "light">("light");
    const pathname = usePathname();

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

    const navigationLinks = [
        { href: "/", label: "Home" },
        { href: "/offerings", label: "Offerings" },
        { href: "/about", label: "About" },
        { href: "/case-studies", label: "Case Studies" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
            ? "bg-bg-primary/95 backdrop-blur-xl border-b border-theme-border shadow-xl"
            : "bg-bg-primary"
            }`}>
            <nav className="w-full">
                <div className="max-w-9xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <Link href="/">
                            <div className="flex items-center gap-2 cursor-pointer hover:opacity-90 transition-opacity duration-200">
                                <div className="relative w-12 h-12">
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
                                <div className="relative w-32 h-6">
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

                        {/* Desktop Navigation */}
                        <div
                            className={`hidden md:flex items-center space-x-4 px-6 py-1 rounded-full ${currentTheme === "dark"
                                ? "bg-[#2B182B]/80"
                                : "bg-gray-100"
                                }`}
                        >
                            {navigationLinks.map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={`transition-all duration-200 font-medium focus:outline-none focus:ring-0 ${isActive
                                            ? currentTheme === "dark"
                                                ? "bg-[#3A233A] text-white px-8 py-2 rounded-full shadow"
                                                : "bg-white text-gray-900 px-8 py-2 rounded-full shadow"
                                            : currentTheme === "dark"
                                                ? "text-gray-200 px-8 py-2"
                                                : "text-gray-700 px-8 py-2"
                                            }`}
                                    >
                                        {link.label}
                                    </Link>
                                );
                            })}
                        </div>

                        {/* Right side controls */}
                        <div className="flex items-center gap-4">
                            {/* Theme Toggle Button */}
                            <button
                                onClick={handleThemeToggle}
                                className="p-2 rounded-full transition-colors duration-300 bg-theme-bg-secondary hover:bg-theme-border text-theme-primary"
                                aria-label="Toggle Theme"
                            >
                                {currentTheme === "dark" ? (
                                    <Sun className="w-5 h-5" />
                                ) : (
                                    <Moon className="w-5 h-5" />
                                )}
                            </button>

                            {/* Mobile Menu Button */}
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="md:hidden p-2 rounded-md text-theme-primary hover:bg-theme-bg-secondary transition-colors duration-200"
                                aria-label="Toggle Mobile Menu"
                            >
                                {isMobileMenuOpen ? (
                                    <X className="w-6 h-6" />
                                ) : (
                                    <Menu className="w-6 h-6" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div className="md:hidden border-t border-theme-border bg-bg-primary">
                        <div className="px-4 py-3 space-y-3">
                            {navigationLinks.map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={`block py-2 px-3 rounded-lg transition-colors duration-200 font-medium focus:outline-none focus:ring-0 ${isActive
                                            ? "bg-white text-gray-900"
                                            : "text-theme-primary hover:text-primary hover:bg-theme-bg-secondary"
                                            }`}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                )}
            </nav>
        </div>
    );
}
