"use client";

import { motion } from "framer-motion";
import { Clock, MessageSquare, } from "lucide-react";
import SmoothScroll from "../../components/SmoothScroll";
import Contact from "../../components/Contact";

const conversationStarters = [
    {
        title: "Organizational Transformation",
        questions: [
            "How can we build a self-led team culture?",
            "What does emotional intelligence look like in practice?",
            "How do we measure culture change success?",
        ],
    },
    {
        title: "Leadership Development",
        questions: [
            "How can I lead with more emotional clarity?",
            "What's blocking my team's performance?",
            "How do I handle difficult conversations better?",
        ],
    },
    {
        title: "Team Dynamics",
        questions: [
            "How do we improve psychological safety?",
            "What's causing conflict in our team?",
            "How can we give better feedback?",
        ],
    },
];

const processSteps = [
    {
        step: "01",
        title: "Initial Conversation",
        description:
            "We start with understanding your unique challenges and goals.",
        duration: "30 minutes",
    },
    {
        step: "02",
        title: "Assessment & Strategy",
        description:
            "We assess your current state and design a tailored approach.",
        duration: "1-2 weeks",
    },
    {
        step: "03",
        title: "Engagement Planning",
        description:
            "We create a detailed roadmap with clear milestones and outcomes.",
        duration: "1 week",
    },
    {
        step: "04",
        title: "Implementation",
        description:
            "We begin the transformation journey with continuous support.",
        duration: "Ongoing",
    },
];

export default function ConnectPage() {
    return (
        <SmoothScroll>
            <div className="flex items-center justify-center relative pt-[10rem]">
                {/* Background gradient overlay */}
                <div className="inset-0 pointer-events-none z-0">
                    <div className="absolute inset-0" />
                    <div className="absolute inset-0 opacity-5 animate-gradient-x" />
                </div>

                <main className="z-10">

                    {/* Contact Section */}
                    <section className="pb-10 pt-5 theme-bg-primary">
                        <div className="max-w-7xl h-auto mx-auto px-4">
                            <div className="flex max-w-7xl h-full justify-center items-center">
                                <Contact />
                            </div>
                        </div>
                    </section>

                </main>
            </div>
        </SmoothScroll>
    );
}
