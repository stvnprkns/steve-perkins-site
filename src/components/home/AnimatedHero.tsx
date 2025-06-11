'use client';

import { useEffect } from 'react';
import HoverReveal, { HoverImage } from '@/components/HoverReveal';
import dynamic from 'next/dynamic';
import UnderlineLink from '@/components/UnderlineLink';

// Image configurations
const tvSteveImages: HoverImage[] = [
  {
    src: '/images/hover-reveals/steve1.webp',
    alt: 'Steve on TV',
    width: 200,
    height: 150,
    initial: { x: -100, y: -60, scale: 1, rotate: -5 },
    animate: { x: -220, y: -40, scale: 1, rotate: -5 }
  },
  {
    src: '/images/hover-reveals/steve2.webp',
    alt: 'Steve on TV',
    width: 220,
    height: 160,
    initial: { x: 0, y: 0, scale: 1, rotate: 0 },
    animate: { x: 0, y: 40, scale: 1, rotate: 0 }
  },
  {
    src: '/images/hover-reveals/steve3.webp',
    alt: 'Steve on TV',
    width: 200,
    height: 150,
    initial: { x: 100, y: 60, scale: 1, rotate: 5 },
    animate: { x: 200, y: 40, scale: 1, rotate: 5 }
  }
];

const dogsAndKidsImages: HoverImage[] = [
  {
    src: '/images/hover-reveals/bluey.webp',
    alt: 'Bluey and family',
    width: 200,
    height: 150,
    initial: { x: -40, y: -60, scale: 0.9, rotate: -5 },
    animate: { x: -180, y: -40, scale: 1, rotate: -5 }
  },
  {
    src: '/images/hover-reveals/dogs.webp',
    alt: 'Dogs playing',
    width: 180,
    height: 140,
    initial: { x: 60, y: 60, scale: 0.8, rotate: 3 },
    animate: { x: 100, y: 40, scale: 0.9, rotate: 5 }
  },
  {
    src: '/images/hover-reveals/kids-dogs.webp',
    alt: 'Kids playing with dogs',
    width: 200,
    height: 150,
    initial: { x: 20, y: -20, scale: 0.85, rotate: 2 },
    animate: { x: 20, y: -60, scale: 0.95, rotate: 2 }
  }
];

const basketballImages: HoverImage[] = [
  {
    src: '/images/hover-reveals/ben-wallace.webp',
    alt: 'Ben Wallace',
    width: 240,
    height: 160,
    initial: { x: 0, y: 0, scale: 1, rotate: 0 },
    animate: { x: 0, y: 20, scale: 1, rotate: 0 }
  },
  {
    src: '/images/hover-reveals/dirk.webp',
    alt: 'Dirk Nowitzki',
    width: 180,
    height: 240,
    initial: { x: -80, y: -40, scale: 1, rotate: -5 },
    animate: { x: -180, y: -20, scale: 1, rotate: -5 }
  },
  {
    src: '/images/hover-reveals/kobe.webp',
    alt: 'Kobe Bryant',
    width: 180,
    height: 240,
    initial: { x: 160, y: 40, scale: 1, rotate: 5 },
    animate: { x: 240, y: 20, scale: 1, rotate: 5 }
  }
];

// Dynamically import SequenceLoader with no SSR
const SequenceLoader = dynamic(() => import('@/components/SequenceLoader'), {
  ssr: false,
  loading: () => <div className="h-64" />,
});

export function AnimatedHeroTitle() {
  return (
    <SequenceLoader>
      {[<span key="title">Good design where it's needed most.</span>]}
    </SequenceLoader>
  );
}

interface AnimatedHeroContentProps {
  onComplete?: () => void;
}

  /**
   * The hero content for the home page. This component renders a sequence of
   * paragraphs and hover reveals, and calls the `onComplete` callback when the
   * animation finishes.
   *
   * @param {Object} props
   * @param {function} [props.onComplete] - A callback function to call when the animation finishes.
   * @return {ReactElement} The hero content component.
   */
export function AnimatedHeroContent({ onComplete }: AnimatedHeroContentProps) {
  // Calculate total animation duration
  const totalDuration = 0.4 + (4 * 0.1); // initialDelay + (number of items * delayBetween)
  
  // Call onComplete after animation finishes
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete?.();
    }, totalDuration * 1000 + 500); // Add 500ms buffer
    
    return () => clearTimeout(timer);
  }, [onComplete, totalDuration]);

  return (
    <SequenceLoader delayBetween={0.1} initialDelay={0.4}>
      {[
        <div key="content" className="space-y-6">
          <p>
            I'm currently the Senior Manager of Product Design at 🏗️ {' '}
            <HoverReveal 
              href="https://www.procore.com"
              images={[
                {
                  src: '/images/hover-reveals/construct1.webp',
                  alt: 'Construction site 1',
                  width: 200,
                  height: 150,
                  initial: { x: -100, y: -60, scale: 1, rotate: -5 },
                  animate: { x: -180, y: -40, scale: 1, rotate: -5 }
                },
                {
                  src: '/images/hover-reveals/construct2.webp',
                  alt: 'Construction site 2',
                  width: 220,
                  height: 160,
                  initial: { x: 0, y: 0, scale: 1, rotate: 0 },
                  animate: { x: 0, y: 40, scale: 1, rotate: 0 }
                },
                {
                  src: '/images/hover-reveals/construct3.webp',
                  alt: 'Construction site 3',
                  width: 200,
                  height: 150,
                  initial: { x: 100, y: 60, scale: 1, rotate: 5 },
                  animate: { x: 180, y: 40, scale: 1, rotate: 5 }
                }
              ]}
              className="underline hover:text-primary transition-colors inline-flex items-center"
            >
              Procore <span className='ml-1'>↗</span>
            </HoverReveal>, leading teams behind the platforms that power construction — Directory, Permissions, Ecosystem, and Authentication.
          </p>
          <p>
            Over the years, I've helped launch more than 50 products across fintech, healthcare, developer tools, and communication. From building the first app for CPAs to file taxes on mobile to the initial concepts for Amex Pay It Plan It, to working on what would become TurboTax Live — I've done the unglamorous stuff that makes everything else work.
          </p>
          <p>
            I'm a generalist, a builder, and a team-first leader. I care about momentum, culture, and whether the decisions we're making today make meaningful change.
          </p>
          <p>
            Outside of work, I'm just{' '}
            <HoverReveal key="hover1" images={tvSteveImages} position="right">
              <UnderlineLink href="#">Steve</UnderlineLink>
            </HoverReveal>, a dad{' '}
            <HoverReveal key="hover2" images={dogsAndKidsImages} position="left">
              <UnderlineLink href="#">
                raising twins, and three dogs
              </UnderlineLink>
            </HoverReveal>, and spending my{' '}
            <HoverReveal key="hover3" images={basketballImages} position="right">
              <UnderlineLink href="#">Saturday mornings playing basketball at the park</UnderlineLink>
            </HoverReveal>.
          </p>
        </div>
      ]}
    </SequenceLoader>
  );
}
