export type SideProject = {
  slug: string;
  title: string;
  timeframe: string;
  description?: string;
  link?: string;
};

export const sideProjects: SideProject[] = [
  {
    slug: 'zogs',
    title: '🦮 ZOGS',
    timeframe: 'Dog leashes for big, wild dogs',
    link: 'https://zogs.com',
  },
  {
    slug: 'as-steve-on-tv',
    title: '📺 As Steve on TV',
    timeframe: 'All the Steves on TV',
    link: '/as-steve-on-tv',
  },
  {
    slug: 'dunks-and-dragons',
    title: '👟 Dunks & Dragons',
    timeframe: 'Gather thy friends, don thy best sneakers',
    link: '/dunks-and-dragons',
  },
  {
    slug: 'figdocs',
    title: '📑 FigDocs',
    timeframe: 'InDesign-like docs for Figma',
    link: 'https://figdocs.com',
  },
  {
    slug: 'daily-artifact',
    title: '⚫️ Daily Artifact',
    timeframe: 'Create a daily artifact with memories',
    link: 'https://dailyartifact.com',
  },
  {
    slug: 'weird-street',
    title: '👽 Weird Street (sunset)',
    timeframe: 'Nextdoor for local businesses',
    link: 'https://weirdstreet.com',
  },
];
