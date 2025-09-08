"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="flex flex-col items-center"
            >
                <div className="my-14">
                    <img src="/light_logo.png" alt="Not Found" className="w-[10rem] bg-white/70 rounded-full h-auto" />
                </div>
                <h1 className="text-6xl sm:text-8xl font-extrabold mb-4 theme-text-primary text-center drop-shadow-lg">
                    404! Not Found!
                </h1>
                <h2 className="text-2xl sm:text-3xl font-bold text-gradient mb-4 text-center">
                    This Page is Emotionally Unavailable!
                </h2>
                <p className="text-lg theme-text-secondary mb-14 text-center max-w-xl">
                    The page you are looking for doesn't exist or has been moved.<br />
                    Let's get you back to a safe place.
                </p>
                <Link href="/" passHref legacyBehavior>
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-pink-500 dark:bg-pink-800 text-white rounded-xl font-semibold shadow-lg transition-all duration-300"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Back to Home
                    </motion.a>
                </Link>
            </motion.div>
        </div>
    );
}
