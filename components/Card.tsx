import React from "react";

export interface CaseStudyCard {
  title: string;
  subtitle: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  slug: string;
  image?: string;
}

interface CardProps {
  card: CaseStudyCard;
}

const Card: React.FC<CardProps> = ({ card }) => (
  <article className="bg-theme-bg-secondary rounded-lg p-4 md:p-6 hover:shadow-lg transition-shadow">
    <div className="w-full h-48 md:h-64 lg:h-72 rounded-lg mb-3 md:mb-4 overflow-hidden flex items-center justify-center bg-gray-200">
      {/* Image placeholder */}
      <span className="text-lg text-gray-500">img</span>
    </div>
    <div className="text-xs md:text-sm font-semibold text-purple-100 mb-2">
      {new Date(card.date).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })}
    </div>
    <h3 className="text-lg md:text-2xl font-semibold text-purple-100 mb-2">{card.title}</h3>
    <h4 className="text-base md:text-lg font-semibold mb-2 md:mb-3">{card.subtitle}</h4>
    <p className="text-xs md:text-sm leading-relaxed mb-4 md:mb-6">{card.excerpt}</p>
    <a className="inline-block bg-purple-100 text-white px-4 md:px-8 py-2 md:py-3 rounded-full text-xs md:text-sm font-medium hover:bg-purple-200 transition-colors" href="#">
      Read More
    </a>
  </article>
);

export default Card;
