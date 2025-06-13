# LLM and Search Engine Optimization

This document outlines the changes made to optimize the site for LLMs (Large Language Models) and search engines.

## Files Created/Updated

1. **robots.txt**
   - Reorganized to follow best practices
   - Clear separation between standard and AI crawlers
   - Complete blocking of AI crawlers (GPTBot, ChatGPT-User, anthropic-ai, Claude-Web, etc.)
   - Proper crawl-delay for search engines (removed for AI crawlers that don't honor it)

2. **llms.txt**
   - Provides guidance for AI systems that encounter content outside of direct crawling
   - Includes clear acceptable use guidelines
   - Structured citation format preference
   - No redundant directives (User-agent, etc.) that belong in robots.txt

3. **sitemap.xml**
   - Expanded to include individual project pages with clean URLs
   - Added notes and side project sections
   - Maintained proper priority structure
   - Uses consistent domain (steveperkins.dev)

4. **ProjectMetadata.tsx**
   - Reusable component for generating standardized metadata
   - Implements OpenGraph and Twitter card tags
   - Includes experimental AI-specific metadata tags
   - Adds structured metadata for better LLM understanding

5. **Project Page Example**
   - Updated AppealIO project page with enhanced metadata
   - Added tags, publishing dates, and proper path information
   - Implements canonical URL for SEO

## How to Apply These Optimizations to Other Pages

### For Project Pages:

```tsx
// Import the metadata generator
import { generateProjectMetadata } from '@/components/ProjectMetadata';

// Use it to generate metadata
export const metadata = generateProjectMetadata({
  title: 'Your Project Title',
  description: 'Detailed description of the project',
  path: '/projects/your-project-slug',
  coverImage: '/images/your-project-image.png',
  publishedTime: '2023-01-15', // When first published
  modifiedTime: '2025-06-12',   // When last updated
  tags: ['Relevant', 'Keywords', 'For', 'This', 'Project']
});
```

### URL Structure Best Practices:

- Use descriptive, kebab-case URLs: `/projects/project-name` instead of `/p?id=123`
- Keep URLs consistent across sitemap and actual site structure
- Include relevant sections of the site in the URL path

## AI-Specific Metadata

The `ProjectMetadata` component includes experimental AI-specific tags that may help search engines and LLMs better understand your content:

```tsx
other: {
  'ai:description': description,
  'ai:keywords': tags.join(', '),
  'ai:content-type': 'project-case-study',
  'llms:relevance': 'design-leadership-portfolio',
  'llms:author': siteConfig.author.name,
  'llms:is-canonical': 'true',
}
```

## Next Steps

1. Apply the ProjectMetadata component to all project pages
2. Consider adding structured data (JSON-LD) for even better semantic understanding
3. Monitor how AI systems and search engines interact with your site
4. Regularly update the sitemap.xml with new content

This optimization approach provides both standard SEO benefits and prepares your site for better interaction with AI systems while maintaining your content boundaries.
