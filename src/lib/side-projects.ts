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
    title: 'ZOGS (Dog Leashes)',
    timeframe: '2025',
    link: 'https://zogs.com',
  },
  {
    slug: 'as-steve-on-tv',
    title: 'As Steve on TV',
    timeframe: '2025',
    link: '/as-steve-on-tv',
  },
  {
    slug: 'figdocs',
    title: 'FigDocs',
    timeframe: '2025',
    link: 'https://figdocs.com',
  },
  {
    slug: 'weird-street',
    title: 'Weird Street (sunset)',
    timeframe: '2017-2020',
    link: 'https://weirdstreet.com',
  },
];
