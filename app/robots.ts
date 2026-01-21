import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/', '/_next/static/', '/_next/image/'],
            },
            // OpenAI
            {
                userAgent: 'GPTBot',
                allow: '/',
            },
            {
                userAgent: 'ChatGPT-User',
                allow: '/',
            },
            // Anthropic (Claude)
            {
                userAgent: 'Anthropic-AI',
                allow: '/',
            },
            {
                userAgent: 'Claude-Web',
                allow: '/',
            },
            {
                userAgent: 'ClaudeBot',
                allow: '/',
            },
            // Google
            {
                userAgent: 'Google-Extended',
                allow: '/',
            },
            {
                userAgent: 'Googlebot',
                allow: '/',
            },
            // Apple
            {
                userAgent: 'Applebot-Extended',
                allow: '/',
            },
            // Perplexity
            {
                userAgent: 'PerplexityBot',
                allow: '/',
            },
            // Cohere
            {
                userAgent: 'Cohere-AI',
                allow: '/',
            },
            // Meta
            {
                userAgent: 'Meta-ExternalAgent',
                allow: '/',
            },
            {
                userAgent: 'Meta-ExternalFetcher',
                allow: '/',
            },
            // Common Crawl (used by many AI models)
            {
                userAgent: 'CCBot',
                allow: '/',
            },
            // Microsoft/Bing
            {
                userAgent: 'Bingbot',
                allow: '/',
            },
            // You.com
            {
                userAgent: 'YouBot',
                allow: '/',
            },
        ],
        sitemap: 'https://kevingerges.com/sitemap.xml',
    }
}
