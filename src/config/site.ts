interface SiteConfig {
  name: string;
  title: string;
  description: string;
  detailedDescription: string;
  url: string;
  defaultImage: string; // Must be a relative path (e.g., '/images/og-image.jpg')
  twitterHandle: string;
  googleSiteVerification: string;
  keywords: string[];
  author: {
    name: string;
    twitter: string;
    url: string;
    role: string;
    bio: string;
  };
}

export const siteConfig: SiteConfig = {
  name: 'Steve Perkins',
  title: 'Steve Perkins — Product Design Leader',
  description: 'Design leader specializing in product strategy, design systems, and building high-performing teams.',
  detailedDescription: 'Steve Perkins is a seasoned Product Design Leader who creates impactful digital experiences through strategic design thinking, robust design systems, and team leadership. Specializing in healthcare UX, enterprise applications, and HIPAA-compliant messaging platforms.',
  url: 'https://steveperkins.dev',
  defaultImage: '/images/og-image.jpg',
  twitterHandle: '@steveperkins',
  googleSiteVerification: 'YOUR_GOOGLE_SITE_VERIFICATION_CODE', // Replace with actual verification code
  keywords: [
    'Product Design Leader',
    'Design Leadership',
    'UX Design Strategy',
    'Design Systems Architecture',
    'HIPAA-compliant Design',
    'Healthcare UX Design',
    'Enterprise Design Strategy',
    'Product Strategy Consultant',
    'Design Thinking Framework',
    'Cross-functional Team Leadership',
    'UX Research Methods',
    'Design Operations',
    'UI Design Principles',
    'User Experience Expert',
    'Product Design Portfolio',
    'Steve Perkins Portfolio',
  ],
  author: {
    name: 'Steve Perkins',
    twitter: '@steveperkins',
    url: 'https://steveperkins.dev',
    role: 'Product Design Leader',
    bio: 'Design leader with 15+ years of experience creating impactful digital products through strategic design thinking, robust design systems, and high-performing teams. Specializing in healthcare UX and enterprise applications.',
  },
};
