import { HoverImage } from '@/components/HoverReveal';

export const tvSteveImages: HoverImage[] = [
  {
    src: '/images/tv-steve-1.jpg',
    alt: 'Steve on TV',
    width: 180,
    height: 240,
    initial: { x: -160, y: 40, scale: 1, rotate: -5 },
    animate: { x: -240, y: 20, scale: 1, rotate: -5 }
  },
  {
    src: '/images/tv-steve-2.jpg',
    alt: 'Steve on TV',
    width: 200,
    height: 300,
    initial: { x: 160, y: 40, scale: 1, rotate: 5 },
    animate: { x: 240, y: 20, scale: 1, rotate: 5 }
  }
];

export const dogsAndKidsImages: HoverImage[] = [
  {
    src: '/images/dogs-1.jpg',
    alt: 'Dogs and kids',
    width: 180,
    height: 240,
    initial: { x: -160, y: 40, scale: 1, rotate: -5 },
    animate: { x: -240, y: 20, scale: 1, rotate: -5 }
  },
  {
    src: '/images/dogs-2.jpg',
    alt: 'Dogs and kids',
    width: 200,
    height: 300,
    initial: { x: 160, y: 40, scale: 1, rotate: 5 },
    animate: { x: 240, y: 20, scale: 1, rotate: 5 }
  }
];
