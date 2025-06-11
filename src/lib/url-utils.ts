import { siteConfig } from '@/config/site';

/**
 * Generates a canonical URL for a given path
 * @param path The path to generate a canonical URL for (e.g., '/about')
 * @returns Full canonical URL (e.g., 'https://steveperkins.dev/about')
 */
export function generateCanonicalUrl(path: string = ''): string {
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${siteConfig.url}/${cleanPath}`.replace(/\/+$/, '');
}

/**
 * Gets the current canonical URL based on the current path
 * @param pathname The current pathname (e.g., '/projects/rudderstack')
 * @returns Full canonical URL
 */
export function getCurrentCanonicalUrl(pathname: string): string {
  return generateCanonicalUrl(pathname);
}
