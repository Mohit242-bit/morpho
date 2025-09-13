import type { NextPage } from 'next';
import Image from "next/image";
import { Share2, Copy, Facebook, Linkedin, Instagram, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const CaseStudies: NextPage = () => {
    return (
        <div className="w-full bg-theme-bg-primary text-theme-primary font-poppins min-h-screen">
            {/* Header Image */}
            <div className="relative w-full mt-20 md:mt-24">
                <img 
                    src="/header1.png" 
                    alt="Case Studies Header" 
                    className="w-full h-auto object-cover"
                />
            </div>

            {/* Main Content Container */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
                {/* Header Section */}
                <div className="py-8 md:py-12">
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6">
                        {/* Left Side - Main Content */}
                        <div className="flex-1 max-w-4xl">
                            {/* Date and Read Time */}
                            <div className="flex items-center gap-4 text-theme-primary mb-6">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-purple-100 rounded-full"></div>
                                    <span className="text-lg tracking-wide">17 July 2025</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-purple-100 rounded-full"></div>
                                    <span className="text-lg tracking-wide">15 Min Read</span>
                                </div>
                            </div>

                            {/* Main Title */}
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-8 tracking-wide">
                                Heading of the Case Study goes here
                            </h1>

                            {/* Author Section */}
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-300 rounded-lg flex items-center justify-center">
                                    <span className="text-gray-600 text-sm">Author</span>
                                </div>
                                <div>
                                    <div className="font-semibold text-lg md:text-xl tracking-wide">
                                        Firstname Lastname
                                    </div>
                                    <div className="text-theme-secondary tracking-wide">
                                        Designation goes right here
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Share Section */}
                        <div className="lg:max-w-xs">
                            <div className="border-l border-theme-border pl-6 lg:pl-8">
                                <h3 className="text-3xl md:text-4xl font-semibold mb-4 tracking-wide">
                                    Share
                                </h3>
                                <p className="text-lg font-semibold mb-6 tracking-wide">
                                    Like this? Spread the word
                                </p>
                                
                                {/* Social Media Icons */}
                                <div className="flex flex-row lg:flex-col gap-4">
                                    <button className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center hover:bg-purple-200 transition-colors">
                                        <Copy className="w-8 h-8 text-white" />
                                    </button>
                                    <button className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center hover:bg-purple-200 transition-colors">
                                        <Linkedin className="w-8 h-8 text-white" />
                                    </button>
                                    <button className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center hover:bg-purple-200 transition-colors">
                                        <Facebook className="w-8 h-8 text-white" />
                                    </button>
                                    <button className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center hover:bg-purple-200 transition-colors">
                                        <Instagram className="w-8 h-8 text-white" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Sections */}
                <div className="max-w-4xl">
                    {/* Header 1 Section */}
                    <section className="mb-12">
                        <h2 className="text-3xl md:text-4xl font-semibold mb-6 tracking-wide">
                            Header 1 goes here
                        </h2>
                        <div className="prose prose-lg max-w-none text-theme-primary leading-relaxed space-y-6">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a lectus malesuada nulla fringilla eleifend sed vel neque. Nam pellentesque purus vitae sapien semper iaculis ac vel turpis. Sed non metus quis sapien dapibus pharetra. Maecenas sodales ullamcorper nisi vel posuere. Aenean rhoncus, purus in interdum convallis, dui est semper elit, consequat tincidunt sem mauris eu sem. Donec eleifend volutpat placerat. Vestibulum id turpis a justo molestie dictum id at nunc. Nunc at ipsum libero. Donec feugiat cursus tempus. Duis cursus risus at dolor ornare cursus. Donec euismod mauris dui. Proin rhoncus convallis lectus nec ornare. Morbi pretium ex sed metus fermentum volutpat.
                            </p>
                            <p>
                                Proin iaculis porta sem nec cursus. Fusce semper, libero at fringilla euismod, orci purus sollicitudin mi, eget rutrum urna magna vitae nunc. Etiam malesuada lacus mollis quam tincidunt finibus. Fusce at ullamcorper tortor, in posuere purus. Cras maximus porta nisi, ac auctor dolor pellentesque vitae. Fusce mattis, nunc ac pulvinar imperdiet, nunc augue volutpat sapien, aliquet aliquam nulla libero vel dolor. Pellentesque dictum quam turpis, vel iaculis nisl auctor quis. Suspendisse id tortor ultricies, fermentum dui nec, dictum augue.
                            </p>
                            <p>
                                Aliquam blandit, arcu sit amet facilisis pharetra, velit mi maximus justo, nec molestie diam augue et turpis. Proin eleifend mauris arcu, ac tincidunt sapien gravida eu. Fusce in auctor erat, ut placerat nibh. Sed id facilisis augue. Curabitur enim velit, placerat tempor congue et, vestibulum quis sem. Nunc accumsan quam neque, eget placerat est dapibus ut. Proin consectetur enim nec dui laoreet, a molestie turpis volutpat. Etiam sit amet nisl lacinia tortor iaculis faucibus. Donec placerat feugiat mauris. Mauris semper mi eget cursus vestibulum. Nunc ut mauris at turpis mollis sagittis sed eu mi.
                            </p>
                        </div>
                    </section>

                    {/* Header 2 Section */}
                    <section className="mb-16">
                        <h2 className="text-3xl md:text-4xl font-semibold mb-6 tracking-wide">
                            Header 2 goes here
                        </h2>
                        <div className="prose prose-lg max-w-none text-theme-primary leading-relaxed">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a lectus malesuada nulla fringilla eleifend sed vel neque. Nam pellentesque purus vitae sapien semper iaculis ac vel turpis. Sed non metus quis sapien dapibus pharetra. Maecenas sodales ullamcorper nisi vel posuere. Aenean rhoncus, purus in interdum convallis, dui est semper elit, consequat tincidunt sem mauris eu sem. Donec eleifend volutpat placerat. Vestibulum id turpis a justo molestie dictum id at nunc. Nunc at ipsum libero. Donec feugiat cursus tempus. Duis cursus risus at dolor ornare cursus. Donec euismod mauris dui. Proin rhoncus convallis lectus nec ornare. Morbi pretium ex sed metus fermentum volutpat.
                            </p>
                        </div>
                        
                        {/* Header2 Image */}
                        <div className="w-full mt-8 mb-8">
                            <Image
                                src="/header2.png"
                                alt="Header 2 Image"
                                width={800}
                                height={401}
                                className="w-full h-[300px] md:h-[401px] object-cover rounded-lg"
                                priority={false}
                            />
                        </div>
                    </section>
                </div>

                {/* Divider */}
                <div className="w-full border-t border-theme-border mb-12"></div>

                {/* Topics Filter Section */}
                <div className="mb-8">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                        <h3 className="text-xl font-medium">Topics</h3>
                        <div className="flex flex-wrap gap-4">
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 bg-purple-100 rounded"></div>
                                <span className="text-purple-100">All</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 border border-theme-border rounded"></div>
                                <span className="text-purple-100">HR Professional</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 border border-theme-border rounded"></div>
                                <span className="text-purple-100">Founder/ CXO</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 border border-theme-border rounded"></div>
                                <span className="text-purple-100">MNC/ Startup</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 border border-theme-border rounded"></div>
                                <span className="text-purple-100">Non-Profit Organization</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Navigation Arrows */}
                <div className="flex justify-between items-center mb-8">
                    <button className="w-10 h-10 bg-theme-bg-secondary rounded-full flex items-center justify-center hover:bg-theme-border transition-colors">
                        <ChevronLeft className="w-6 h-6 text-theme-primary" />
                    </button>
                    <button className="w-10 h-10 bg-theme-bg-secondary rounded-full flex items-center justify-center hover:bg-theme-border transition-colors">
                        <ChevronRight className="w-6 h-6 text-theme-primary" />
                    </button>
                </div>

                {/* Related Articles Section */}
                <section className="mb-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Article 1 */}
                        <article className="bg-theme-bg-secondary rounded-lg p-6 hover:shadow-lg transition-shadow">
                            <div className="w-full h-64 md:h-72 rounded-lg mb-4 overflow-hidden">
                                <Image
                                    src="/top1.png"
                                    alt="Article 1 Image"
                                    width={400}
                                    height={288}
                                    className="w-full h-full object-cover"
                                    priority={false}
                                />
                            </div>
                            <div className="text-sm font-semibold text-purple-100 mb-2">12 JULY 2025</div>
                            <h3 className="text-2xl font-semibold text-purple-100 mb-2">Topic name goes here</h3>
                            <h4 className="text-lg font-semibold mb-3">Sub-Header goes here</h4>
                            <p className="text-sm leading-relaxed mb-6">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi volutpat lorem fringilla arcu dignissim, a viverra leo luctus. Nulla non ex cursus, dapibus mi et, ultrices ipsum. Nunc sit amet interdum augue. Pellentesque ut dapibus diam. Vestibulum tempus massa nisi, non placerat orci consequat non. Nulla lacinia erat et ligula hendrerit bibendum. Interdum et malesuada fames ac ante.
                            </p>
                            <Link 
                                href="#" 
                                className="inline-block bg-purple-100 text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors"
                            >
                                Read More
                            </Link>
                        </article>

                        {/* Article 2 */}
                        <article className="bg-theme-bg-secondary rounded-lg p-6 hover:shadow-lg transition-shadow">
                            <div className="w-full h-64 md:h-72 rounded-lg mb-4 overflow-hidden">
                                <Image
                                    src="/top2.png"
                                    alt="Article 2 Image"
                                    width={400}
                                    height={288}
                                    className="w-full h-full object-cover"
                                    priority={false}
                                />
                            </div>
                            <div className="text-sm font-semibold text-purple-100 mb-2">12 JULY 2025</div>
                            <h3 className="text-2xl font-semibold text-purple-100 mb-2">Topic name goes here</h3>
                            <h4 className="text-lg font-semibold mb-3">Sub-Header goes here</h4>
                            <p className="text-sm leading-relaxed mb-6">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi volutpat lorem fringilla arcu dignissim, a viverra leo luctus. Nulla non ex cursus, dapibus mi et, ultrices ipsum. Nunc sit amet interdum augue. Pellentesque ut dapibus diam. Vestibulum tempus massa nisi, non placerat orci consequat non. Nulla lacinia erat et ligula hendrerit bibendum. Interdum et malesuada fames ac ante.
                            </p>
                            <Link 
                                href="#" 
                                className="inline-block bg-purple-100 text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors"
                            >
                                Read More
                            </Link>
                        </article>

                        {/* Article 3 */}
                        <article className="bg-theme-bg-secondary rounded-lg p-6 hover:shadow-lg transition-shadow">
                            <div className="w-full h-64 md:h-72 rounded-lg mb-4 overflow-hidden">
                                <Image
                                    src="/top3.png"
                                    alt="Article 3 Image"
                                    width={400}
                                    height={288}
                                    className="w-full h-full object-cover"
                                    priority={false}
                                />
                            </div>
                            <div className="text-sm font-semibold text-purple-100 mb-2">12 JULY 2025</div>
                            <h3 className="text-2xl font-semibold text-purple-100 mb-2">Topic name goes here</h3>
                            <h4 className="text-lg font-semibold mb-3">Sub-Header goes here</h4>
                            <p className="text-sm leading-relaxed mb-6">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi volutpat lorem fringilla arcu dignissim, a viverra leo luctus. Nulla non ex cursus, dapibus mi et, ultrices ipsum. Nunc sit amet interdum augue. Pellentesque ut dapibus diam. Vestibulum tempus massa nisi, non placerat orci consequat non. Nulla lacinia erat et ligula hendrerit bibendum. Interdum et malesuada fames ac ante.
                            </p>
                            <Link 
                                href="#" 
                                className="inline-block bg-purple-100 text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors"
                            >
                                Read More
                            </Link>
                        </article>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default CaseStudies;
