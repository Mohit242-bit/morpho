/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: ["class", '[data-theme="dark"]'],
    theme: {
        screens: {
            xs: "410px",
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
        },
        extend: {
            colors: {
                // CSS Variable-based colors that change with theme
                "bg-primary": "var(--bg-primary)",
                "bg-secondary": "var(--bg-secondary)",
                "text-primary": "var(--text-primary)",
                "text-secondary": "var(--text-secondary)",
                "border-primary": "var(--border-color)",

                // Theme utility aliases
                "theme-primary": "var(--text-primary)",
                "theme-secondary": "var(--text-secondary)",
                "theme-border": "var(--border-color)",
                "theme-bg-primary": "var(--bg-primary)",
                "theme-bg-secondary": "var(--bg-secondary)",

                // Static theme colors - professional palette
                "gradient-start": "#FFD700",
                "gradient-mid": "#FF4081",
                "gradient-end": "#00E5FF",
                "accent-orange": "#FF6F3C",
                "deep-purple": "#1A0C2F",
                "brand-purple": "#3D2A5B",
                primary: "#FF4081",
                "primary-hover": "#FF6F3C",
                secondary: "#B8A9D1",
                accent: "#FF4081",
                
                // Morphoverse custom colors
                white: "#fff",
                black: "#000",
                purple: {
                    "100": "#640d5f",
                    "200": "rgba(100, 13, 95, 0.5)"
                },
                gainsboro: "#e3e0e0",
                gray: {
                    "100": "#fbfbfb",
                    "200": "rgba(0, 0, 0, 0.54)"
                },
                orange: "#ffb200",
            },
            fontFamily: {
                sans: ["Poppins", "Outfit", "Inter", "system-ui", "sans-serif"],
                serif: [
                    "TheSeasons",
                    "Moneta",
                    "Gallient",
                    "Playfair Display",
                    "serif",
                ],
                poppins: ["Poppins", "sans-serif"],
                outfit: ["Outfit", "sans-serif"],
                inter: ["Inter", "sans-serif"],
                playfair: ["Playfair Display", "serif"],
                // New custom fonts
                moneta: ["Moneta", "Playfair Display", "serif"],
                theseasons: ["TheSeasons", "Playfair Display", "serif"],
                gallient: ["Gallient", "Playfair Display", "serif"],
                
                // Morphoverse custom fonts
                fustat: ["Fustat", "sans-serif"],
                onest: ["Onest", "sans-serif"],
            },
            fontSize: {
                hero: ["3.5rem", { lineHeight: "1.1" }],
                "hero-sm": ["2.5rem", { lineHeight: "1.2" }],
                section: ["2rem", { lineHeight: "1.2" }],
                "section-sm": ["1.5rem", { lineHeight: "1.3" }],
            },
            spacing: {
                section: "4rem",
                "section-lg": "6rem",
                "section-xl": "8rem",
                container: "1rem",
            },
            animation: {
                float: "float 6s ease-in-out infinite",
                "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                gradient: "gradient 8s ease infinite",
                "fade-in-up": "fadeInUp 0.8s ease-out",
                "fade-in": "fadeIn 0.6s ease-out",
                "slide-in-left": "slideInLeft 0.6s ease-out",
                "gradient-x": "gradient-x 15s ease infinite",
                constellation: "constellation 20s linear infinite",
            },
            keyframes: {
                float: {
                    "0%, 100%": { transform: "translateY(0px)" },
                    "50%": { transform: "translateY(-20px)" },
                },
                gradient: {
                    "0%, 100%": { backgroundPosition: "0% 50%" },
                    "50%": { backgroundPosition: "100% 50%" },
                },
                fadeInUp: {
                    "0%": { opacity: "0", transform: "translateY(30px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                slideInLeft: {
                    "0%": { opacity: "0", transform: "translateX(-30px)" },
                    "100%": { opacity: "1", transform: "translateX(0)" },
                },
                "gradient-x": {
                    "0%, 100%": {
                        "background-position": "0% 50%",
                    },
                    "50%": {
                        "background-position": "100% 50%",
                    },
                },
                constellation: {
                    "0%": { transform: "rotate(0deg)" },
                    "100%": { transform: "rotate(360deg)" },
                },
            },
            backgroundSize: {
                "300%": "300% 300%",
            },
            backgroundImage: {
                "gradient-morpho":
                    "linear-gradient(135deg, #FFD700 0%, #FF4081 50%, #00E5FF 100%)",
                "gradient-firey":
                    "linear-gradient(135deg, #FFD700 0%, #FF4081 100%)",
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            borderRadius: {
                container: "0.5rem",
            },
            boxShadow: {
                soft: "0 2px 8px rgba(0, 0, 0, 0.04)",
                "soft-md": "0 4px 16px rgba(0, 0, 0, 0.08)",
                "soft-lg": "0 8px 32px rgba(0, 0, 0, 0.12)",
                glow: "0 0 20px rgba(255, 64, 129, 0.15)",
                "glow-lg": "0 8px 32px rgba(255, 64, 129, 0.15)",
            },
        },
    },
    plugins: [
        function ({ addUtilities, addBase }) {
            // Add base styles
            addBase({
                "*, *::before, *::after": {
                    "box-sizing": "border-box",
                },
                body: {
                    "font-family":
                        "Poppins, Outfit, Inter, ui-sans-serif, system-ui, sans-serif",
                    "line-height": "1.6",
                },
            });

            const newUtilities = {
                // Enhanced gradient text utilities
                ".text-gradient": {
                    background:
                        "linear-gradient(135deg, #FFD700 0%, #FF4081 50%, #00E5FF 100%)",
                    "background-size": "300% 300%",
                    "background-clip": "text !important",
                    "-webkit-background-clip": "text !important",
                    "-webkit-text-fill-color": "transparent !important",
                    color: "transparent !important",
                    animation: "gradient-x 8s ease infinite",
                    display: "inline-block",
                    "will-change": "background-position",
                },
                ".text-gradient-static": {
                    background:
                        "linear-gradient(135deg, #FFD700 0%, #FF4081 50%, #00E5FF 100%)",
                    "background-clip": "text !important",
                    "-webkit-background-clip": "text !important",
                    "-webkit-text-fill-color": "transparent !important",
                    color: "transparent !important",
                    display: "inline-block",
                },
                ".text-gradient-enhanced": {
                    background:
                        "linear-gradient(135deg, #FFD700 0%, #FF4081 50%, #00E5FF 100%)",
                    "background-size": "200% 200%",
                    "background-clip": "text !important",
                    "-webkit-background-clip": "text !important",
                    "-webkit-text-fill-color": "transparent !important",
                    color: "transparent !important",
                    display: "inline-block",
                    animation: "gradient-x 8s ease infinite",
                },
                ".text-gradient-firey": {
                    background:
                        "linear-gradient(135deg, #FFD700 0%, #FF4081 100%)",
                    "background-size": "200% 200%",
                    "background-clip": "text !important",
                    "-webkit-background-clip": "text !important",
                    "-webkit-text-fill-color": "transparent !important",
                    color: "transparent !important",
                    display: "inline-block",
                    animation: "gradient-x 8s ease infinite",
                },
                ".text-gradient-mid": {
                    color: "#FF4081",
                },
                // Professional hover effects
                ".hover-lift": {
                    transition: "all 0.3s ease",
                },
                ".hover-lift:hover": {
                    transform: "translateY(-4px)",
                    "box-shadow": "0 8px 32px rgba(255, 64, 129, 0.15)",
                },
                // Professional spacing
                ".section-padding": {
                    "padding-top": "4rem",
                    "padding-bottom": "4rem",
                    "padding-left": "1rem",
                    "padding-right": "1rem",
                },
                "@media (min-width: 768px)": {
                    ".section-padding": {
                        "padding-top": "6rem",
                        "padding-bottom": "6rem",
                        "padding-left": "2rem",
                        "padding-right": "2rem",
                    },
                },
                "@media (min-width: 1024px)": {
                    ".section-padding": {
                        "padding-top": "8rem",
                        "padding-bottom": "8rem",
                    },
                },
            };
            addUtilities(newUtilities);
        },
    ],
};
