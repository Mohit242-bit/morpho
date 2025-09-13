"use client";

import React from 'react';
import Image from 'next/image';

interface LogoItem {
    src: string;
    alt: string;
    className?: string;
}

interface ScrollingLogosProps {
    logos: LogoItem[];
    speed?: number;
    className?: string;
}

const ScrollingLogos: React.FC<ScrollingLogosProps> = ({ 
    logos, 
    speed = 30,
    className = "" 
}) => {
    // Calculate spacing to fit all 6 logos across screen width with 3px margins
    const logoWidth = 128; // 32 * 4px = 128px
    const logoMargin = 6; // 3px on each side = 6px total per logo
    const totalLogos = logos.length;
    const screenPadding = 50; // reduced padding
    const totalLogoSpace = (logoWidth + logoMargin) * totalLogos;
    const availableSpace = `calc(100vw - ${screenPadding * 2}px)`;
    const gapSize = `calc((${availableSpace} - ${totalLogoSpace}px) / ${totalLogos + 1})`;
    
    return (
        <div className={`relative overflow-hidden w-full ${className}`} style={{ height: '120px' }}>
            {/* Create multiple sets for truly infinite scroll */}
            <div 
                className="flex items-center hover:pause-animation"
                style={{
                    animation: `scroll-left ${speed}s linear infinite`,
                    gap: gapSize,
                    paddingLeft: gapSize,
                    paddingRight: gapSize,
                    width: 'max-content',
                }}
            >
                {/* Create enough repetitions for seamless infinite scroll */}
                {Array.from({ length: 30 }, (_, setIndex) =>
                    logos.map((logo, logoIndex) => (
                        <div 
                            key={`${logo.alt}-set${setIndex}-${logoIndex}`}
                            className="flex-shrink-0 w-32 h-16 flex items-center justify-center group"
                            style={{
                                marginLeft: '3px',
                                marginRight: '3px',
                            }}
                        >
                            <Image 
                                src={logo.src} 
                                alt={logo.alt}
                                width={128}
                                height={64}
                                className={`max-w-full max-h-full object-contain transition-opacity duration-300 group-hover:opacity-80 ${logo.className && logo.className.includes('no-filter') ? '' : 'logo-dark-invert'} ${logo.className || ''}`}
                            />
                        </div>
                    ))
                )}
            </div>
            
            <style jsx>{`
                @keyframes scroll-left {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                .hover\:pause-animation:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </div>
    );
};

export default ScrollingLogos;
