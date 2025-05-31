'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="max-w-md w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="space-y-8"
        >
          <div className="flex flex-col items-center justify-center space-y-6">
            <motion.span
              animate={{
                rotate: [0, 14, -8, 14, 0],
              }}
              transition={{
                duration: 2.5,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatType: 'reverse',
              }}
              className="text-5xl"
            >
              👀
            </motion.span>
            
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Well, this is awkward.
            </h1>
            
            <p className="text-lg text-muted-foreground px-4">
              You found a page that doesn't exist — or maybe it used to. Either way, it's not here now.
            </p>
          </div>
          
          <div className="pt-2">
            <Link 
              href="/" 
              className="inline-flex items-center px-6 py-2.5 border border-purple-500 text-base font-medium rounded-md shadow-sm text-purple-600 hover:text-white hover:bg-purple-500 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 no-underline"
            >
              <span className="mr-2">←</span>
              Head back home
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
