'use client';
import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import ScrollingLogos from '../../components/ScrollingLogos';
import { getCurrentTheme } from '../../lib/theme';

const AboutMorphoverse: NextPage = () => {
  const [isJourneyExpanded, setIsJourneyExpanded] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<'dark' | 'light'>('light');

  const toggleJourney = () => {
    setIsJourneyExpanded(!isJourneyExpanded);
  };

  // Listen for theme changes
  useEffect(() => {
    const updateTheme = () => {
      setCurrentTheme(getCurrentTheme());
    };

    // Set initial theme
    updateTheme();

    // Listen for theme changes by observing data-theme attribute changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
          updateTheme();
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    });

    return () => observer.disconnect();
  }, []);
  return (
    <div className="w-full relative bg-bg-primary min-h-screen overflow-hidden text-left text-xl text-theme-primary font-fustat transition-colors duration-300">
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[402px] left-[100px] w-[1720px] h-[540px] opacity-10 data-[theme=dark]:opacity-20">
          <div className="w-full h-full bg-gradient-to-r from-purple-100/20 to-transparent data-[theme=dark]:from-purple-400/30 data-[theme=dark]:to-transparent rounded-full"></div>
        </div>
        <div className="absolute top-[152px] left-[130px] w-[1660px] h-[630px] opacity-5 data-[theme=dark]:opacity-15">
          <div className="w-full h-full bg-gradient-to-br from-orange/20 to-purple-100/10 data-[theme=dark]:from-orange/30 data-[theme=dark]:to-purple-400/20 rounded-full"></div>
        </div>
      </div>
      
      {/* Navigation Bar - Responsive */}
      <div className="absolute top-4 md:top-10 left-1/2 transform -translate-x-1/2 w-full max-w-4xl px-2 md:px-4 z-50">
        <div className="rounded-[32px] md:rounded-[63px] bg-bg-secondary h-[48px] md:h-[58px] flex items-center justify-between px-2 md:px-3">
          {/* Mobile Navigation */}
          <div className="flex md:hidden items-center justify-between w-full">
            <div className="rounded-[24px] bg-bg-primary px-3 py-1.5">
              <div className="text-sm font-semibold tracking-[0.02em] leading-[100%] text-theme-primary">About</div>
            </div>
            <div className="flex items-center space-x-2 text-xs">
              <div className="text-theme-secondary">Menu</div>
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <div className="w-4 h-0.5 bg-theme-secondary"></div>
                <div className="w-4 h-0.5 bg-theme-secondary"></div>
                <div className="w-4 h-0.5 bg-theme-secondary"></div>
              </div>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="rounded-[41px] bg-bg-primary px-5 py-2.5">
              <div className="text-[19px] font-semibold tracking-[0.02em] leading-[100%] text-theme-primary">Home</div>
            </div>
            <div className="px-5 py-2.5">
              <div className="text-[19px] font-light tracking-[0.02em] leading-[100%] text-theme-secondary">Offerings</div>
            </div>
            <div className="px-5 py-2.5">
              <div className="text-[19px] font-light tracking-[0.02em] leading-[100%] text-theme-secondary">About</div>
            </div>
            <div className="px-5 py-2.5">
              <div className="text-[19px] font-light tracking-[0.02em] leading-[100%] text-theme-secondary">Case Studies</div>
            </div>
            <div className="px-5 py-2.5">
              <div className="text-[19px] font-light tracking-[0.02em] leading-[100%] text-theme-secondary">Contact</div>
            </div>
          </div>
          
          {/* Desktop Login */}
          <div className="hidden md:flex items-center space-x-2">
            <div className="px-5 py-2.5 text-theme-secondary">
              <div className="text-[19px] font-light tracking-[0.02em] leading-[100%]">Log in</div>
            </div>
          </div>
        </div>
      </div>


      {/* Hero Section with Combined About Image - Responsive */}
      <div className="relative h-screen w-full pt-20 md:pt-32 pb-0 mb-0">
        {/* Mobile Layout */}
        <div className="md:hidden relative w-full h-full">
          {/* Main image container - pushed down 100px from original position */}
          <div className="absolute top-[100px] left-4 right-4 bottom-[100px] z-10">
            <img 
              src={currentTheme === 'dark' ? "/darkmobileabout1.png" : "/mobileabout1.png"}
              alt="About section with background and profile"
              className="w-full h-full object-contain object-top"
            />
          </div>
          
          {/* About Me Section - Mobile positioning moved up 300px from 25% to ~5% */}
          <div className="absolute top-[5%] left-4 right-4 z-40 mt-2 px-2">
            <div className="p-4">
              <h1 className="text-2xl font-bold text-purple-100 leading-[130%] tracking-[0.02em] mb-4 text-center">
                About me
              </h1>
              
              <div className="text-sm leading-[150%] tracking-[0.02em] font-semibold space-y-3 text-theme-primary">
                <p className="m-0">
                  From being a Data miner at an RPO to an organisational architect. Across every phase of my journey, I have found myself standing at the intersection of extremes — speed and depth, scale and connection, performance and purpose. Each pair taught me something unique, often by contrast.
                </p>
                <p className="m-0">
                  Rather than choosing a side, I learned to design the bridge — toward wholeness, fairness, clarity, and growth.
                </p>
              </div>
            </div>
          </div>
          
          {/* Explore my Journey button - moved 20px up to appear above mobileabout1.png */}
          {!isJourneyExpanded && (
            <div className="absolute bottom-[140px] left-1/2 transform -translate-x-1/2 z-30">
              <motion.button 
                onClick={toggleJourney}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-purple-100 data-[theme=dark]:bg-purple-600 text-white px-4 py-3 rounded-[32px] font-onest font-semibold text-sm hover:bg-purple-200 data-[theme=dark]:hover:bg-purple-500 transition-colors tracking-[0.02em] leading-[100%] flex items-center gap-2"
              >
                Explore my Journey
                <ChevronDown className="h-4 w-4" />
              </motion.button>
            </div>
          )}
          
          {/* Logo loop in bottom 100px space - Mobile only with margins */}
          <div className="absolute bottom-0 left-0 right-0 h-[100px] z-20 flex items-center justify-center px-4">
            <ScrollingLogos 
              logos={[
                { src: "/zeyta.png", alt: "Zeyta", className: "no-filter" },
                { src: "/simpliwork.png", alt: "Simpliwork" },
                { src: "/HCL-logo.png", alt: "HCL Tech" },
                { src: "/fres.png", alt: "Fresenius Kabi" },
                { src: "/infosys.png", alt: "Infosys" },
                { src: "/bajaj.png", alt: "Bajaj" },
              ]}
              speed={100}
              className="w-full opacity-75"
            />
          </div>
        </div>
        
        {/* Desktop Layout - unchanged */}
        <div className="hidden md:block">
          {/* Combined About.1 Image - Desktop */}
          <div className="absolute inset-0 w-full h-full z-10">
            <div className="absolute top-[-10px] left-[60px] right-[60px] bottom-0">
              <img 
                src={currentTheme === 'dark' ? "/darkabout1.png" : "/about1.png"}
                alt="About section with background and profile"
                className="w-full h-full object-contain object-center"
              />
            </div>
          </div>
          
          {/* About Me Section - Desktop positioning */}
          <div className="absolute top-[20%] left-[8%] z-40 max-w-2xl mt-[10px]">
            <div className="p-12">
              <h1 className="text-4xl font-bold text-purple-100 leading-[130%] tracking-[0.02em] mb-4">
                About me
              </h1>
              
              <div className="text-base leading-[150%] tracking-[0.02em] font-semibold space-y-4 text-theme-primary">
                <p className="m-0">
                  From being a Data miner at an RPO to an organisational architect. Across every phase of my journey, I have found myself standing at the intersection of extremes — speed and depth, scale and connection, performance and purpose. Each pair taught me something unique, often by contrast.
                </p>
                <p className="m-0">
                  Rather than choosing a side, I learned to design the bridge — toward wholeness, fairness, clarity, and growth.
                </p>
              </div>
            </div>
          </div>
          
          {/* Explore my Journey button - desktop positioning */}
          {!isJourneyExpanded && (
            <div className="absolute bottom-[0px] left-[150px] z-30">
              <motion.button 
                onClick={toggleJourney}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-purple-100 data-[theme=dark]:bg-purple-600 text-white px-8 py-4 rounded-[41px] font-onest font-semibold text-lg hover:bg-purple-200 data-[theme=dark]:hover:bg-purple-500 transition-colors tracking-[0.02em] leading-[100%] flex items-center gap-2"
              >
                Explore my Journey
                <ChevronDown className="h-5 w-5" />
              </motion.button>
            </div>
          )}
          
          {/* Content Container */}
          <div className="relative w-full h-full px-6 z-20">
          </div>
        </div>
      </div>
      
      {/* Expandable Journey Section - Seamlessly connected to hero section */}
      <AnimatePresence>
        {isJourneyExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -100 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -100 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full bg-bg-primary -mt-4 md:-mt-8 overflow-hidden">
            {/* Responsive padding to match hero section */}
            <div className="px-4 md:px-[60px] pb-8 md:pb-16">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
                className="w-full m-0 p-0"
              >
                {/* Image container with no spacing - direct connection to hero */}
                <div className="w-full m-0 p-0">
                  <div className="w-full block m-0 p-0">
                    <div className="relative">
                      {/* Journey content - explore.png - Mobile Responsive */}
                      {/* Mobile Image */}
                      <img 
                        src={currentTheme === 'dark' ? "/darkmobileexplore.png" : "/mobileexplore.png"}
                        alt="Detailed journey exploration" 
                        className="w-full h-auto block m-0 p-0 md:hidden"
                        style={{ borderRadius: 0, margin: 0, padding: 0, display: 'block' }}
                      />
                      {/* Desktop Image */}
                      <img 
                        src={currentTheme === 'dark' ? "/darkexplore.png" : "/explore.png"}
                        alt="Detailed journey exploration" 
                        className="w-full h-auto hidden md:block m-0 p-0"
                        style={{ borderRadius: 0, margin: 0, padding: 0, display: 'block' }}
                      />
                      
                      {/* Hide my Journey button - responsive positioning */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.3, ease: "easeOut" }}
                        className="absolute bottom-[-10px] md:bottom-[-20px] left-4 md:left-[90px] z-40"
                      >
                        <motion.button 
                          onClick={toggleJourney}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-purple-100 data-[theme=dark]:bg-purple-600 text-white px-4 md:px-8 py-3 md:py-4 rounded-[32px] md:rounded-[41px] font-onest font-semibold text-sm md:text-lg hover:bg-purple-200 data-[theme=dark]:hover:bg-purple-500 transition-colors tracking-[0.02em] leading-[100%] flex items-center gap-2 shadow-lg"
                        >
                          Hide my Journey
                          <ChevronUp className="h-4 w-4 md:h-5 md:w-5" />
                        </motion.button>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Company Logos Section - Desktop only */}
      <div className="py-16 opacity-75 hidden md:block">
        <ScrollingLogos 
          logos={[
            { src: "/zeyta.png", alt: "Zeyta", className: "no-filter" },
            { src: "/simpliwork.png", alt: "Simpliwork" },
            { src: "/HCL-logo.png", alt: "HCL Tech" },
            { src: "/fres.png", alt: "Fresenius Kabi" },
            { src: "/infosys.png", alt: "Infosys" },
            { src: "/bajaj.png", alt: "Bajaj" },
          ]}
          speed={100}
          className="w-full"
        />
      </div>

      {/* Testimonials Section - Responsive */}
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-16">
        <div className="text-center space-y-6 md:space-y-8">
          <div className="inline-block border-theme-border border-solid border-[1.5px] rounded-[32px] md:rounded-[41px] px-6 md:px-10 py-3 md:py-5">
            <div className="text-base md:text-xl font-semibold text-purple-100 tracking-[0.02em] leading-[100%]">TESTIMONIALS</div>
          </div>

          {/* Avatar placeholders - responsive grid */}
          <div className="flex justify-center flex-wrap gap-3 md:gap-4">
            {[1, 2, 3, 4, 5, 6].map((_, index) => (
              <div key={index} className="w-12 h-12 md:w-20 md:h-20 bg-gainsboro rounded-full flex-shrink-0"></div>
            ))}
          </div>

          <h2 className="text-2xl md:text-[40px] font-medium text-center max-w-4xl mx-auto leading-[130%] tracking-[0.02em] text-theme-primary px-4">
            Echoes of our Clients who have transformed their teams with our EQ-driven approach
          </h2>
        </div>
      </div>

      {/* Testimonial Content - Responsive */}
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-16">
        <div className="bg-bg-secondary rounded-[10.56px] p-6 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            
            {/* Left testimonial */}
            <div className="space-y-4 md:space-y-6">
              <div className="w-full h-48 md:h-96 bg-gainsboro rounded-lg flex items-center justify-center">
                <span className="text-theme-secondary text-sm md:text-base">Video Placeholder</span>
              </div>
              <button className="bg-orange text-black px-4 md:px-8 py-3 md:py-4 rounded-[32px] md:rounded-[43px] font-onest font-medium flex items-center gap-3 hover:bg-orange/80 transition-colors tracking-[0.02em] leading-[100%] text-sm md:text-base">
                Watch a Video
                <div className="w-5 h-5 md:w-6 md:h-6 bg-gray-200 rounded"></div>
              </button>
            </div>

            {/* Right testimonial */}
            <div className="space-y-4 md:space-y-6">
              <div className="w-full h-40 md:h-80 bg-gainsboro rounded-lg flex items-center justify-center">
                <span className="text-theme-secondary text-sm md:text-base">Image Placeholder</span>
              </div>
              
              <blockquote className="text-lg md:text-2xl font-medium leading-[150%] tracking-[0.02em] text-theme-primary">
                &ldquo;Working with Morphoverse&rsquo;s EQ-driven approach helped us scale our startup culture while maintaining the emotional connection that drives innovation. It&rsquo;s been a game-changer for our leadership team.&rdquo;
              </blockquote>
              
              <div className="space-y-1">
                <div className="font-bold text-base md:text-lg tracking-[0.02em] leading-[150%] text-theme-primary">Anmol Oberoi</div>
                <div className="text-theme-secondary tracking-[0.02em] leading-[150%] font-medium text-sm md:text-base">Founder, Emitrr</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Personal Journey Section - Responsive */}
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-4 md:py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 md:space-y-6 max-h-[calc(100vh-6rem)] overflow-y-auto">
            <div className="inline-block border-theme-border border-solid border-[1.5px] rounded-[32px] md:rounded-[41px] px-4 md:px-8 py-2 md:py-3">
              <div className="text-sm md:text-lg font-semibold text-purple-100 tracking-[0.02em] leading-[100%]">MY PERSONAL JOURNEY</div>
            </div>

            <h2 className="text-xl md:text-[28px] font-medium text-center max-w-4xl mx-auto leading-[130%] tracking-[0.02em] text-theme-primary px-4">
              A little more about me
            </h2>

            <div className="text-sm md:text-base leading-[140%] tracking-[0.02em] font-medium max-w-5xl mx-auto text-left space-y-3 md:space-y-4 text-theme-primary px-4">
              <p className="m-0">
                From Gandhidham to Bangalore. From Psychology to People Strategy. From following playbooks to writing my own. I didn&rsquo;t just grow up in one place. I grew across places, cultures, and chapters of life.
              </p>
              
              <ul className="space-y-1 pl-[16px] md:pl-[20px] list-disc m-0 font-inherit text-inherit">
                <li className="mb-0">From the calm of Gandhidham to the buzz of Pune&rsquo;s academic rigor.</li>
                <li className="mb-0">From the predictability of corporate India to the chaos of start-ups.</li>
                <li className="mb-0">From structured organisations to building culture from scratch.</li>
                <li className="mb-0">From the boardroom to yoga mats across Greece, Sardegna, and Germany.</li>
                <li className="mb-0">From learning to breathe underwater (as a certified diver) to teaching people how to breathe again (as a yoga teacher).</li>
              </ul>
              
              <p className="m-0">
                Every phase taught me that the hardest part of being with people isn&rsquo;t making decisions &mdash; it&rsquo;s managing emotions. That&rsquo;s where my journey shifted from just being an HR professional to becoming someone who partners with people, not just manages them. It shaped how I lead. How I design systems. And how I hold space for others, whether they are employees, founders, or teams navigating change.
              </p>
              
              <p className="m-0">
                Today, my work blends all these lenses&hellip; psychological depth, cultural context, strategic clarity, and emotional truth, into how I build people-first systems. Because growth, whether personal or organisational, is always emotional before it&rsquo;s operational.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* CTA Section - Responsive */}
      <div className="relative text-white py-8 md:py-16 overflow-hidden h-auto md:h-screen min-h-[60vh] md:min-h-screen">
        {/* Background with image at bottom - Mobile Responsive */}
        <div className="absolute bottom-0 left-0 right-0 h-[60vh] md:h-full">
          {/* Mobile Image */}
          <img src={currentTheme === 'dark' ? "/darkmobileending.png" : "/mobileending.png"} alt="Background" className="w-full h-full object-contain object-bottom mr-0 pr-0 md:hidden" style={{marginRight: 0, paddingRight: 0}} />
          {/* Desktop Image */}
          <img src={currentTheme === 'dark' ? "/darkending.png" : "/ending.png"} alt="Background" className="w-full h-full object-contain object-bottom mr-0 pr-0 hidden md:block" style={{marginRight: 0, paddingRight: 0}} />
          
        </div>
        
        {/* Text and Buttons - responsive positioning */}
        <div className="absolute bottom-8 md:bottom-[60px] left-4 md:left-[40px] right-4 md:right-auto z-20">
          <div className="space-y-3 md:space-y-4 max-w-2xl mb-[245px] md:mb-0">
            <h2 className="text-2xl md:text-[40px] font-semibold leading-[130%] tracking-[0.02em] text-white mb-4 md:mb-10 ml-2 md:ml-5">
              Let my experience help you out
            </h2>
            <p className="text-sm md:text-lg font-medium tracking-[0.02em] leading-[100%] ml-2 md:ml-5 text-white">
              Connect to understand how we can solve the unsolved for you.
            </p>
            <div className="flex flex-col md:flex-row gap-3 md:gap-4 pt-3 md:pt-4">
              <button className="bg-orange text-black px-6 md:px-10 py-4 md:py-5 rounded-[32px] md:rounded-[41px] font-semibold text-base md:text-xl hover:bg-orange/80 transition-colors tracking-[0.02em] leading-[100%]">
                Schedule Discovery Call
              </button>
              <button className="border-2 border-orange text-orange px-6 md:px-10 py-4 md:py-5 rounded-[32px] md:rounded-[41px] font-semibold text-base md:text-xl hover:bg-orange hover:text-black transition-colors tracking-[0.02em] leading-[100%]">
                View Observed Problems
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements placeholders */}

      
      
      {/* Navigation arrows placeholders */}
      <div className="absolute top-[1844px] left-[93px] w-[42px] h-[42px] bg-gainsboro rounded flex items-center justify-center">
        <span className="text-theme-secondary text-xs">←</span>
      </div>
      <div className="absolute top-[1844px] right-[93px] w-[42px] h-[42px] bg-gainsboro rounded flex items-center justify-center">
        <span className="text-theme-secondary text-xs">→</span>
      </div>

    </div>
  );
};

export default AboutMorphoverse;
