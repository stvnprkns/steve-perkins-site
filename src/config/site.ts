interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  defaultImage: string; // Must be a relative path (e.g., '/images/og-image.jpg')
  twitterHandle: string;
  googleSiteVerification: string;
  keywords: string[];
  author: {
    name: string;
    twitter: string;
    url: string;
  };
}

export const siteConfig: SiteConfig = {
  name: 'Steve Perkins',
  title: 'Steve Perkins — Product Design Leader',
  description: 'Design leader specializing in product strategy, design systems, and building high-performing teams.',
  url: 'https://steveperkins.dev',
  defaultImage: '/images/og-image.jpg',
  twitterHandle: '@steveperkins',
  googleSiteVerification: 'YOUR_GOOGLE_SITE_VERIFICATION_CODE', // Replace with actual verification code
  keywords: [
    'Product Design',
    'Design Leadership',
    'UX Design',
    'Design Systems',
    'User Experience',
    'Product Strategy',
    'Design Thinking',
    'Portfolio',
    'Steve Perkins',
  ],
  author: {
    name: 'Steve Perkins',
    twitter: '@steveperkins',
    url: 'https://steveperkins.dev',
  },
};
