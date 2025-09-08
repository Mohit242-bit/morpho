"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Mail,
    Phone,
    Calendar,
    ExternalLink,
    ChevronDown,
} from "lucide-react";
import emailjs from "@emailjs/browser";

// Custom WhatsApp icon component
const WhatsAppIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.051 3.488" />
    </svg>
);

type ContactMethod = "email" | "whatsapp" | "calendly";

export default function Contact() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        message: "",
        contactMethod: "email" as ContactMethod,
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside or pressing escape
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsDropdownOpen(false);
            }
        };

        const handleEscapeKey = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleEscapeKey);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEscapeKey);
        };
    }, []);

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        // Clear errors when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const formatPhoneNumber = (value: string) => {
        const digits = value.replace(/\D/g, '');
        if (digits.length <= 3) return digits;
        if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
        return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const formatted = formatPhoneNumber(e.target.value);
        setFormData(prev => ({ ...prev, phone: formatted }));
        if (errors.phone) {
            setErrors(prev => ({ ...prev, phone: '' }));
        }
    };

    const validateForm = () => {
        const newErrors: { [key: string]: string } = {};

        if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
        if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }
        if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
        else if (!/^\(\d{3}\) \d{3}-\d{4}$/.test(formData.phone)) {
            newErrors.phone = 'Please enter a valid phone number';
        }
        if (!formData.message.trim()) newErrors.message = 'Message is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const getFullName = () => `${formData.firstName} ${formData.lastName}`.trim();

    // Utility function for creating production-friendly WhatsApp links
    const createWhatsAppLink = (phoneNumber: string, message: string) => {
        const cleanNumber = phoneNumber.replace(/\D/g, '');
        const encodedMessage = encodeURIComponent(message);
        return `https://wa.me/${cleanNumber}?text=${encodedMessage}`;
    };

    // Utility function to open WhatsApp with fallbacks for production
    const openWhatsApp = (url: string) => {
        // Method 1: Standard window.open
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer');

        // Method 2: Fallback for production environments
        if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
            // Create and click a temporary link
            const tempLink = document.createElement('a');
            tempLink.href = url;
            tempLink.target = '_blank';
            tempLink.rel = 'noopener noreferrer';
            tempLink.style.display = 'none';
            document.body.appendChild(tempLink);
            tempLink.click();
            document.body.removeChild(tempLink);
        }
    };

    const contactMethods = [
        { value: "email" as const, label: "Email", icon: Mail },
        { value: "whatsapp" as const, label: "WhatsApp", icon: WhatsAppIcon },
        { value: "calendly" as const, label: "Schedule Call", icon: Calendar },
    ];

    const handleEmailSubmit = async () => {
        try {
            // Debug: Log environment variables (remove in production)
            console.log('EmailJS Config:', {
                publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
                serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
            });

            // Initialize EmailJS with public key from env
            emailjs.init(
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ||
                "jjiCQO86DdRiJJpno"
            );

            // Prepare email data
            const emailData = {
                time: new Date().toISOString(),
                from_name: getFullName(),
                from_email: formData.email,
                from_phone: formData.phone,
                company: formData.company,
                message: formData.message,
                to_email: "tashi@morphoverse.com",
            };

            console.log('Sending email with data:', emailData);

            // Send email using EmailJS with env variables
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_lbjq9or",
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ||
                "template_47s04tf",
                emailData
            );

            console.log('Email sent successfully');
        } catch (error) {
            console.error("EmailJS error:", error);
            throw error;
        }
    };

    const handleWhatsAppSubmit = () => {
        const fullName = getFullName();
        const company = formData.company || "N/A";

        // Create a more structured message
        const message = `Hi! I'm ${fullName} from ${company}.

📧 Email: ${formData.email}
📱 Phone: ${formData.phone}

Message: ${formData.message}

Best regards,
${fullName}`;

        const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "9923336312";
        const whatsappUrl = createWhatsAppLink(whatsappNumber, message);

        console.log('WhatsApp Debug:', {
            phoneNumber: whatsappNumber,
            cleanedNumber: whatsappNumber.replace(/\D/g, ''),
            messageLength: message.length,
            finalUrl: whatsappUrl,
            environment: process.env.NODE_ENV
        });

        // Use the production-friendly opener
        openWhatsApp(whatsappUrl);
    };

    const handleCalendlySubmit = () => {
        const calendlyLink = process.env.NEXT_PUBLIC_CALENDLY_LINK;
        window.open(calendlyLink, "_blank");
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }
        setIsSubmitting(true);

        try {
            switch (formData.contactMethod) {
                case "email":
                    await handleEmailSubmit();
                    break;
                case "whatsapp":
                    handleWhatsAppSubmit();
                    break;
                case "calendly":
                    handleCalendlySubmit();
                    break;
            }

            setIsSubmitting(false);
            setIsSubmitted(true);

            // Reset form after 3 seconds
            setTimeout(() => {
                setIsSubmitted(false);
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    company: "",
                    message: "",
                    contactMethod: "email",
                });
                setErrors({});
            }, 3000);
        } catch (error) {
            console.error("Failed to process request:", error);
            setIsSubmitting(false);

            // Enhanced error handling
            if (error instanceof Error) {
                if (error.message.includes('template ID not found')) {
                    alert("Email configuration error. Please try WhatsApp or schedule a call instead.");
                } else if (error.message.includes('service ID not found')) {
                    alert("Email service unavailable. Please try WhatsApp or schedule a call instead.");
                } else if (error.message.includes('Public Key is invalid')) {
                    alert("Email authentication error. Please try WhatsApp or schedule a call instead.");
                } else if (error.message.includes('EmailJS')) {
                    alert("Email service error. Please try WhatsApp or schedule a call instead.");
                } else {
                    alert("Failed to send message. Please try WhatsApp or schedule a call instead.");
                }
            } else {
                alert("Failed to send message. Please try WhatsApp or schedule a call instead.");
            }
        }
    };

    const getSuccessTitle = () => {
        switch (formData.contactMethod) {
            case "email":
                return "Message Sent!";
            case "whatsapp":
                return "WhatsApp Opened!";
            case "calendly":
                return "Calendly Opened!";
            default:
                return "Success!";
        }
    };

    const getSuccessMessage = () => {
        switch (formData.contactMethod) {
            case "email":
                return "We'll get back to you within 24 hours with some clarity.";
            case "whatsapp":
                return "Your message has been pre-filled in WhatsApp. Just hit send!";
            case "calendly":
                return "Pick a time that works best for you. We look forward to connecting!";
            default:
                return "Thank you for getting in touch!";
        }
    };

    const getButtonText = () => {
        switch (formData.contactMethod) {
            case "email":
                return "Send Email";
            case "whatsapp":
                return "WhatsApp";
            case "calendly":
                return "Schedule Call";
            default:
                return "Submit";
        }
    };

    const SelectedIcon =
        contactMethods.find((method) => method.value === formData.contactMethod)
            ?.icon || Mail;

    return (
        <section
            className={`py-16 w-full h-full lg:py-24 relative overflow-hidden rounded-xl transition-all duration-300 ${"theme-bg-primary"}`}
            id="contact"
        >

            <div className="relative z-10 w-full h-auto mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column - Content */}
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="space-y-6 w-full flex flex-col text-2xl lg:text-4xl">
                            <div
                                className={`font-serif font-bold ${"theme-text-primary"}`}
                            >
                                PART <span className="text-gradient-enhanced">SYSTEMS</span>
                            </div>
                            <div
                                className={`font-serif font-bold ${"theme-text-primary"}`}
                            >
                                PART <span className="text-gradient-enhanced">EMOTIONS</span>
                            </div>
                            <div
                                className={`font-serif font-bold ${"theme-text-primary"}`}
                            >
                                ALL <span className="text-gradient-enhanced">TRANSFORMATION</span>
                            </div>
                            <p
                                className={`text-xl mt-10 leading-relaxed ${"theme-text-secondary"}`}
                            >
                                Tired of fixing what shouldn't break? Let's have
                                a conversation about what emotional intelligence
                                could do for your team.
                            </p>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-6">
                            <motion.a
                                href="mailto:hello@morphoverse.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex items-center gap-4 p-4 rounded-lg backdrop-blur-sm border transition-all duration-300 cursor-pointer ${"theme-card"}`}
                            >
                                <div className="w-12 h-12 bg-gradient-morpho rounded-full flex items-center justify-center">
                                    <Mail className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <p className={`font-medium ${"theme-text-primary"}`}>Email</p>
                                    <p className={`${"theme-text-secondary"}`}>tashi@morphoverse.com</p>
                                </div>
                            </motion.a>
                            <motion.a
                                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "9923336312"}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex items-center gap-4 p-4 rounded-lg backdrop-blur-sm border transition-all duration-300 cursor-pointer ${"theme-card"}`}
                            >
                                <div className="w-12 h-12 bg-gradient-morpho rounded-full flex items-center justify-center">
                                    <WhatsAppIcon className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <p className={`font-medium ${"theme-text-primary"}`}>WhatsApp</p>
                                    <p className={`${"theme-text-secondary"}`}>Quick chat on WhatsApp</p>
                                </div>
                            </motion.a>
                            <motion.a
                                href={process.env.NEXT_PUBLIC_CALENDLY_LINK || "https://calendly.com"}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex items-center gap-4 p-4 rounded-lg backdrop-blur-sm border transition-all duration-300 cursor-pointer ${"theme-card"}`}
                            >
                                <div className="w-12 h-12 bg-gradient-morpho rounded-full flex items-center justify-center">
                                    <Calendar className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <p className={`font-medium ${"theme-text-primary"}`}>Schedule a Call</p>
                                    <p className={`${"theme-text-secondary"}`}>30-min clarity session</p>
                                </div>
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Right Column - Form */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div
                            className={`p-8 rounded-2xl border transition-all duration-300 ${"theme-card"}`}
                        >
                            {!isSubmitted ? (
                                <form
                                    onSubmit={handleSubmit}
                                    className="space-y-6"
                                >
                                    {/* Contact Method Dropdown */}
                                    <div>
                                        <label
                                            className={`block text-sm font-medium mb-4 ${"theme-text-secondary"}`}
                                        >
                                            How would you like to connect?
                                        </label>
                                        <div
                                            className="relative"
                                            ref={dropdownRef}
                                        >
                                            <motion.button
                                                type="button"
                                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                                className={`w-full px-4 py-3 pl-12 pr-10 border-2 rounded-lg transition-all duration-300 text-left flex items-center justify-between border-gradient-mid`}
                                                whileHover={{ scale: 1.01 }}
                                                whileTap={{ scale: 0.99 }}
                                            >
                                                <div className="flex items-center gap-3">
                                                    <SelectedIcon className="w-5 h-5 text-gradient-mid" />
                                                    <span className="text-gradient-mid font-medium">
                                                        {contactMethods.find((m) => m.value === formData.contactMethod)?.label}
                                                    </span>
                                                </div>
                                                <motion.div
                                                    animate={{ rotate: isDropdownOpen ? 180 : 0, }}
                                                    transition={{ duration: 0.2, }}
                                                >
                                                    <ChevronDown className="w-5 h-5 text-gradient-mid" />
                                                </motion.div>
                                            </motion.button>
                                            <AnimatePresence>
                                                {isDropdownOpen && (
                                                    <motion.div
                                                        initial={{
                                                            opacity: 0,
                                                            y: -10,
                                                            scale: 0.95,
                                                        }}
                                                        animate={{
                                                            opacity: 1,
                                                            y: 0,
                                                            scale: 1,
                                                        }}
                                                        exit={{
                                                            opacity: 0,
                                                            y: -10,
                                                            scale: 0.95,
                                                        }}
                                                        transition={{
                                                            duration: 0.2,
                                                        }}
                                                        className="absolute top-full left-0 right-0 z-50 mt-2 bg-theme-surface border border-theme-border rounded-xl overflow-hidden backdrop-blur-sm"
                                                    >
                                                        {contactMethods.map(
                                                            (method, index) => {
                                                                const IconComponent = method.icon;
                                                                return (
                                                                    <motion.button key={method.value} type="button"
                                                                        onClick={() => { setFormData({ ...formData, contactMethod: method.value, }); setIsDropdownOpen(false); }}
                                                                        className={`w-full px-4 py-3 text-left transition-all duration-200 hover:bg-gradient-morpho/10 flex items-center gap-3 ${formData.contactMethod === method.value
                                                                            ? "bg-gradient-morpho/20 text-gradient-mid" : "text-gradient-mid"}`}
                                                                        initial={{ opacity: 0, x: -20, }}
                                                                        animate={{ opacity: 1, x: 0, }}
                                                                        transition={{ duration: 0.2, delay: index * 0.05, }}
                                                                        whileHover={{ x: 4, }}
                                                                    >
                                                                        <div
                                                                            className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 ${formData.contactMethod === method.value ?
                                                                                "bg-gradient-morpho/30" : "bg-theme-card group-hover:bg-gradient-morpho/20"}`} >
                                                                            <IconComponent className="w-5 h-5" />
                                                                        </div>
                                                                        <div className="flex-1">
                                                                            <div className="font-medium">
                                                                                {method.label}
                                                                            </div>
                                                                            <div className="text-sm theme-text-secondary">
                                                                                {method.value ===
                                                                                    "email" &&
                                                                                    "Send us a detailed message"}
                                                                                {method.value ===
                                                                                    "whatsapp" &&
                                                                                    "Quick chat on WhatsApp"}
                                                                                {method.value ===
                                                                                    "calendly" &&
                                                                                    "Book a 30-minute call"}
                                                                            </div>
                                                                        </div>
                                                                        {formData.contactMethod === method.value && (<motion.div initial={{ scale: 0, }} animate={{ scale: 1, }} className="w-2 h-2 bg-gradient-morpho rounded-full" />)}
                                                                    </motion.button>);
                                                            })}
                                                    </motion.div>)}
                                            </AnimatePresence>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label
                                                className={`block text-sm font-medium mb-2 ${"theme-text-secondary"}`}
                                            >
                                                First Name
                                            </label>
                                            <input
                                                type="text"
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={handleInputChange}
                                                required
                                                className={`w-full px-4 py-3 border rounded-lg transition-colors focus:outline-none ${"theme-card"} ${errors.firstName ? 'border-red-500' : ''
                                                    }`}
                                                placeholder="Your first name"
                                                aria-label="First name"
                                            />
                                            {errors.firstName && (
                                                <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                                            )}
                                        </div>
                                        <div>
                                            <label className={`block text-sm font-medium mb-2 ${"theme-text-secondary"}`} >
                                                Last Name
                                            </label>
                                            <input
                                                type="text"
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleInputChange}
                                                required
                                                className={`w-full px-4 py-3 border rounded-lg transition-colors focus:outline-none ${"theme-card"} ${errors.lastName ? 'border-red-500' : ''
                                                    }`}
                                                placeholder="Your last name"
                                                aria-label="Last name"
                                            />
                                            {errors.lastName && (
                                                <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                                            )}
                                        </div>
                                    </div>

                                    <div>
                                        <label className={`block text-sm font-medium mb-2 ${"theme-text-secondary"}`}>
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className={`w-full px-4 py-3 border rounded-lg transition-colors focus:outline-none ${"theme-card"} ${errors.email ? 'border-red-500' : ''
                                                }`}
                                            placeholder="your@email.com"
                                            aria-label="Email address"
                                        />
                                        {errors.email && (
                                            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                                        )}
                                    </div>

                                    <div>
                                        <label className={`block text-sm font-medium mb-2 ${"theme-text-secondary"}`}>
                                            Phone
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handlePhoneChange}
                                            maxLength={14}
                                            required
                                            className={`w-full px-4 py-3 border rounded-lg transition-colors focus:outline-none ${"theme-card"} ${errors.phone ? 'border-red-500' : ''
                                                }`}
                                            placeholder="(123) 456-7890"
                                            aria-label="Phone number"
                                        />
                                        {errors.phone && (
                                            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                                        )}
                                    </div>

                                    <div>
                                        <label
                                            className={`block text-sm font-medium mb-2 ${"theme-text-secondary"}`}
                                        >
                                            Company
                                        </label>
                                        <input
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleInputChange}
                                            className={`w-full px-4 py-3 border rounded-lg transition-colors focus:outline-none ${"theme-card"}`}
                                            placeholder="Your company"
                                            aria-label="Company name"
                                        />
                                    </div>

                                    {/* Message Field - Hidden for Calendly */}
                                    {formData.contactMethod !== "calendly" && (
                                        <div>
                                            <label
                                                className={`block text-sm font-medium mb-2 ${"theme-text-secondary"}`}
                                            >
                                                What
                                                <span className="font-sans">
                                                    '
                                                </span>
                                                s not working?
                                            </label>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                required
                                                rows={4}
                                                className={`w-full px-4 py-3 border rounded-lg transition-colors resize-none focus:outline-none ${"theme-card"} ${errors.message ? 'border-red-500' : ''
                                                    }`}
                                                placeholder="Tell us about your team's challenges..."
                                                aria-label="Message describing your challenges"
                                            />
                                            {errors.message && (
                                                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                                            )}
                                        </div>
                                    )}

                                    <div className="flex justify-center items-center">
                                        <motion.button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-auto group relative inline-flex items-center justify-center gap-3 px-8 py-4 dark:bg-pink-800 bg-pink-500 text-white font-semibold rounded-lg text-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <motion.div
                                                        className="w-5 h-5  rounded-full"
                                                        animate={{
                                                            rotate: 360,
                                                        }}
                                                        transition={{
                                                            duration: 1,
                                                            repeat: Infinity,
                                                            ease: "linear",
                                                        }}
                                                    />
                                                    {formData.contactMethod ===
                                                        "email"
                                                        ? "Sending..."
                                                        : formData.contactMethod ===
                                                            "whatsapp"
                                                            ? "Opening..."
                                                            : "Processing..."}
                                                </>
                                            ) : (
                                                <>
                                                    <SelectedIcon className="w-5 h-5" />
                                                    {getButtonText()}
                                                    <ExternalLink className="w-4 h-4" />
                                                </>
                                            )}

                                            {/* Button glow effect */}
                                            <div className="absolute inset-0 rounded-lg bg-gradient-morpho opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl" />
                                        </motion.button>
                                    </div>
                                </form>
                            ) : (
                                <motion.div
                                    className="text-center py-12"
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <div className="w-16 h-16 bg-gradient-morpho rounded-full flex items-center justify-center mx-auto mb-6">
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{
                                                delay: 0.2,
                                                duration: 0.4,
                                            }}
                                            className="text-white text-2xl"
                                        >
                                            ✓
                                        </motion.div>
                                    </div>
                                    <h3
                                        className={`text-2xl font-bold mb-4 ${"theme-text-primary"}`}
                                    >
                                        {getSuccessTitle()}
                                    </h3>
                                    <p className={`${"theme-text-secondary"}`}>
                                        {getSuccessMessage()}
                                    </p>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
