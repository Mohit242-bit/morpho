import type { NextPage } from 'next';

const AboutMorphoverse: NextPage = () => {
  return (
    <div className="w-full relative bg-white min-h-screen overflow-hidden text-left text-xl text-black font-fustat">
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[402px] left-[100px] w-[1720px] h-[540px] opacity-10">
          <div className="w-full h-full bg-gradient-to-r from-purple-100/20 to-transparent rounded-full"></div>
        </div>
        <div className="absolute top-[152px] left-[130px] w-[1660px] h-[630px] opacity-5">
          <div className="w-full h-full bg-gradient-to-br from-orange/20 to-purple-100/10 rounded-full"></div>
        </div>
      </div>
      
      {/* Navigation Bar */}
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-full max-w-4xl px-4 z-50">
        <div className="rounded-[63px] bg-gray-100 h-[58px] flex items-center justify-between px-3">
          <div className="flex items-center space-x-4">
            <div className="rounded-[41px] bg-white px-5 py-2.5">
              <div className="text-[19px] font-semibold tracking-[0.02em] leading-[100%]">Home</div>
            </div>
            <div className="px-5 py-2.5">
              <div className="text-[19px] font-light tracking-[0.02em] leading-[100%]">Offerings</div>
            </div>
            <div className="px-5 py-2.5">
              <div className="text-[19px] font-light tracking-[0.02em] leading-[100%]">About</div>
            </div>
            <div className="px-5 py-2.5">
              <div className="text-[19px] font-light tracking-[0.02em] leading-[100%]">Case Studies</div>
            </div>
            <div className="px-5 py-2.5">
              <div className="text-[19px] font-light tracking-[0.02em] leading-[100%]">Contact</div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="px-5 py-2.5 text-black">
              <div className="text-[19px] font-light tracking-[0.02em] leading-[100%]">Log in</div>
            </div>
            <div className="rounded-[41px] bg-purple-100 px-5 py-2.5 text-white">
              <div className="text-[19px] tracking-[0.02em] leading-[100%]">Sign up</div>
            </div>
          </div>
        </div>
      </div>

      {/* Logo placeholder */}
      <div className="absolute top-10 left-24 w-[231.5px] h-[58px] bg-gainsboro rounded flex items-center justify-center z-40">
        <span className="text-gray-200 font-fustat">MorphoverseLogov2</span>
      </div>

      {/* Hero Section */}
      <div className="relative container mx-auto px-6 pt-32 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-6xl font-bold text-purple-100 leading-[130%] tracking-[0.02em]">
              About me
            </h1>
            
            <div className="text-xl leading-[150%] tracking-[0.02em] font-semibold space-y-4">
              <p className="m-0">
                From being a Data miner at an RPO to an organisational architect. Across every phase of my journey, I have found myself standing at the intersection of extremes — speed and depth, scale and connection, performance and purpose. Each pair taught me something unique, often by contrast.
              </p>
              <p className="m-0">
                Rather than choosing a side, I learned to design the bridge — toward wholeness, fairness, clarity, and growth.
              </p>
            </div>

            <div className="space-y-2">
              <div className="text-xl font-semibold text-purple-100 tracking-[0.02em] leading-[100%]">Tashi Thawani</div>
              <div className="text-xl text-purple-200 tracking-[0.02em] leading-[100%]">Founder, Morphoverse</div>
            </div>

            <button className="bg-purple-100 text-white px-10 py-5 rounded-[41px] font-onest font-semibold text-xl hover:bg-purple-200 transition-colors tracking-[0.02em] leading-[100%]">
              Explore my Journey
            </button>

            <div className="bg-gray-100 rounded-[10px] px-5 py-2.5 inline-block">
              <div className="text-lg tracking-[0.02em] leading-[130%]">
                <strong>Vice President Human Resources,</strong>
                <span className="font-medium"> </span>
                <span>Full-time, Feb 2022 - Mar 2023</span>
              </div>
            </div>
          </div>

          {/* Right Content - Image placeholder */}
          <div className="relative">
            <div className="w-full h-[853px] bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 text-2xl">Image Placeholder</span>
            </div>
            
            {/* Decorative elements placeholders */}
            <div className="absolute top-[550px] left-[70px] w-[39px] h-[39px] bg-white rounded shadow-md flex items-center justify-center">
              <div className="w-[30px] h-[30px] bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Company Logos Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-75">
          {[1, 2, 3, 4, 5, 6, 7].map((_, index) => (
            <div key={index} className="w-32 h-16 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-gray-500 text-sm">Logo {index + 1}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center space-y-8">
          <div className="inline-block border-gainsboro border-solid border-[1.5px] rounded-[41px] px-10 py-5">
            <div className="text-xl font-semibold text-purple-100 tracking-[0.02em] leading-[100%]">TESTIMONIALS</div>
          </div>

          {/* Avatar placeholders */}
          <div className="flex justify-center space-x-4">
            {[1, 2, 3, 4, 5, 6].map((_, index) => (
              <div key={index} className="w-20 h-20 bg-gainsboro rounded-full"></div>
            ))}
          </div>

          <h2 className="text-[40px] font-medium text-center max-w-4xl mx-auto leading-[130%] tracking-[0.02em]">
            Echoes of our Clients who have transformed their teams with our EQ-driven approach
          </h2>
        </div>
      </div>

      {/* Testimonial Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="bg-gray-100 rounded-[10.56px] p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left testimonial */}
            <div className="space-y-6">
              <div className="w-full h-96 bg-gainsboro rounded-lg flex items-center justify-center">
                <span className="text-gray-200">Video Placeholder</span>
              </div>
              <button className="bg-orange text-black px-8 py-4 rounded-[43px] font-onest font-medium flex items-center gap-3 hover:bg-orange/80 transition-colors tracking-[0.02em] leading-[100%]">
                Watch a Video
                <div className="w-6 h-6 bg-gray-200 rounded"></div>
              </button>
            </div>

            {/* Right testimonial */}
            <div className="space-y-6">
              <div className="w-full h-80 bg-gainsboro rounded-lg flex items-center justify-center">
                <span className="text-gray-200">Image Placeholder</span>
              </div>
              
              <blockquote className="text-2xl font-medium leading-[150%] tracking-[0.02em]">
                "Working with Morphoverse's EQ-driven approach helped us scale our startup culture while maintaining the emotional connection that drives innovation. It's been a game-changer for our leadership team."
              </blockquote>
              
              <div className="space-y-1">
                <div className="font-bold text-lg tracking-[0.02em] leading-[150%]">Anmol Oberoi</div>
                <div className="text-gray-200 tracking-[0.02em] leading-[150%] font-medium">Founder, Emitrr</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Personal Journey Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center space-y-8">
          <div className="inline-block border-gainsboro border-solid border-[1.5px] rounded-[41px] px-10 py-5">
            <div className="text-xl font-semibold text-purple-100 tracking-[0.02em] leading-[100%]">MY PERSONAL JOURNEY</div>
          </div>

          <h2 className="text-[40px] font-medium text-center max-w-4xl mx-auto leading-[130%] tracking-[0.02em]">
            A little more about me
          </h2>

          <div className="text-xl leading-[130%] tracking-[0.02em] font-medium max-w-6xl mx-auto text-left space-y-6">
            <p className="m-0">
              From Gandhidham to Bangalore. From Psychology to People Strategy. From following playbooks to writing my own. I didn't just grow up in one place. I grew across places, cultures, and chapters of life.
            </p>
            
            <ul className="space-y-2 pl-[27px] list-disc m-0 font-inherit text-inherit">
              <li className="mb-0">From the calm of Gandhidham to the buzz of Pune's academic rigor.</li>
              <li className="mb-0">From the predictability of corporate India to the chaos of start-ups.</li>
              <li className="mb-0">From structured organisations to building culture from scratch.</li>
              <li className="mb-0">From the boardroom to yoga mats across Greece, Sardegna, and Germany.</li>
              <li className="mb-0">From learning to breathe underwater (as a certified diver) to teaching people how to breathe again (as a yoga teacher).</li>
            </ul>
            
            <p className="m-0">
              Every phase taught me that the hardest part of being with people isn't making decisions — it's managing emotions. That's where my journey shifted from just being an HR professional to becoming someone who partners with people, not just manages them. It shaped how I lead. How I design systems. And how I hold space for others, whether they are employees, founders, or teams navigating change.
            </p>
            
            <p className="m-0">&nbsp;</p>
            
            <p className="m-0">
              Today, my work blends all these lenses… psychological depth, cultural context, strategic clarity, and emotional truth, into how I build people-first systems. Because growth, whether personal or organisational, is always emotional before it's operational.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative text-white py-24 overflow-hidden">
        {/* Background with gradient */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-purple-100"></div>
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full bg-gradient-to-br from-orange/30 to-transparent"></div>
          </div>
        </div>
        
        <div className="relative container mx-auto px-6 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="space-y-8">
              <h2 className="text-[40px] font-semibold leading-[130%] tracking-[0.02em]">
                Let my experience help you out
              </h2>
              <p className="text-xl font-medium tracking-[0.02em] leading-[100%]">
                Connect to understand how can we solve the unsolved for you.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-orange text-black px-10 py-5 rounded-[41px] font-semibold text-xl hover:bg-orange/80 transition-colors tracking-[0.02em] leading-[100%]">
                  Schedule Discovery Call
                </button>
                <button className="border-2 border-orange text-orange px-10 py-5 rounded-[41px] font-semibold text-xl hover:bg-orange hover:text-black transition-colors tracking-[0.02em] leading-[100%]">
                  View Observed Problems
                </button>
              </div>
            </div>

            {/* Right Content - Image placeholder */}
            <div className="flex justify-center">
              <div className="w-[523px] h-[559px] bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-white/60 text-2xl font-fustat">Image Placeholder</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements placeholders */}
      <div className="absolute top-[657px] right-[189px] w-[68px] h-[68px] bg-purple-100 rounded-[13px] flex items-center justify-center z-30">
        <div className="w-[43px] h-[43px] bg-white/20 rounded"></div>
      </div>

      <div className="absolute top-[825px] left-[1067px] w-[78px] h-[78px] bg-gainsboro rounded-full z-30"></div>
      
      {/* Navigation arrows placeholders */}
      <div className="absolute top-[1844px] left-[93px] w-[42px] h-[42px] bg-gainsboro rounded flex items-center justify-center">
        <span className="text-gray-200 text-xs">←</span>
      </div>
      <div className="absolute top-[1844px] right-[93px] w-[42px] h-[42px] bg-gainsboro rounded flex items-center justify-center">
        <span className="text-gray-200 text-xs">→</span>
      </div>

    </div>
  );
};

export default AboutMorphoverse;
