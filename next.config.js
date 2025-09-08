/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["images.unsplash.com", "cdn.sanity.io"],
        dangerouslyAllowSVG: true,
        contentSecurityPolicy:
            "default-src 'self'; script-src 'none'; sandbox;",
    },
    typescript: {
        ignoreBuildErrors: false,
    },
    eslint: {
        ignoreDuringBuilds: false,
    },
    webpack: (config, { isServer }) => {
        // Handle punycode deprecation warning
        config.resolve.fallback = {
            ...config.resolve.fallback,
            punycode: false,
        };
        
        // Suppress specific warnings
        config.ignoreWarnings = [
            {
                module: /node_modules/,
                message: /punycode/,
            },
        ];
        
        return config;
    },
};

module.exports = nextConfig;
