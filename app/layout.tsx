import type { Metadata } from "next";
import { Poppins, Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";
import ThreeDCanvas from "../components/3Dcanvas";
import Navbar from "../components/Navbar";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800"],
    variable: "--font-poppins",
    display: "swap",
});

const outfit = Outfit({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-outfit",
    display: "swap",
});

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Morphoverse - Emotional Intelligence for Leaders",
    description:
        "The website that reads you like you read your team. Transform your leadership through emotional clarity.",
    keywords:
        "emotional intelligence, leadership, EQ, organizational consulting, coaching",
    authors: [{ name: "Tashi" }],
    openGraph: {
        title: "Morphoverse - Emotional Intelligence for Leaders",
        description: "Transform your leadership through emotional clarity.",
        url: "https://morphoverse.com",
        siteName: "Morphoverse",
        images: [
            {
                url: "/dark_logo.png",
                width: 1200,
                height: 630,
                alt: "Morphoverse - Emotional Intelligence",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Morphoverse - Emotional Intelligence for Leaders",
        description: "Transform your leadership through emotional clarity.",
        images: ["/og-image.jpg"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    icons: {
        icon: "/dark_logo.png",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className={`${poppins.variable} ${outfit.variable} ${playfair.variable}`}
            data-theme="light"
        >
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
            (function() {
              const savedTheme = localStorage.getItem('theme') || 'light';
              document.documentElement.setAttribute('data-theme', savedTheme);
            })();
          `,
                    }}
                />
            </head>
            <body className={`${poppins.className} relative w-full h-full`}>
                <ThreeDCanvas />
                <Navbar />
                <main className="relative z-10">
                    {children}
                </main>
            </body>
        </html>
    );
}
