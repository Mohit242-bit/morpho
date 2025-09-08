"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTAButtons() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 p-10 theme-card max-w-4xl rounded-3xl text-center shadow-lg border border-gradient-morpho/30 bg-gradient-to-br from-theme-bg-primary/80 to-gradient-morpho/10"
        >
            <h3 className="text-2xl font-serif font-bold text-primary mb-8">
                Ready to Transform Your Organization?
            </h3>
            <p className="theme-text-secondary mb-6 max-w-2xl mx-auto text-lg">
                Let's explore how emotional intelligence can create similar transformational results for your team and culture.
            </p>
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-pink-500 dark:bg-pink-800 text-white rounded-xl font-semibold shadow-md shadow-text-primary transition-all duration-300 text-sm sm:text-lg tracking-wide"
                onClick={() => (window.location.href = "/connect")}
            >
                Start Your Journey
                <ArrowRight className="w-5 h-5 inline-block ml-2" />
            </motion.button>
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-pink-500 dark:bg-pink-800 mt-8 sm:ml-8 text-white rounded-xl font-semibold shadow-md shadow-text-primary transition-all duration-300 text-sm sm:text-lg tracking-wide"
                onClick={() => (window.location.href = "/offerings")}
            >
                Explore Our Offerings
            </motion.button>
        </motion.div>
    );
}
