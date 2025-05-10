'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-800 to-purple-900 py-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto"
      >
        <h1 className="text-5xl font-bold mb-4">Tokenize Your Identity, Trade Your Influence</h1>
        <p className="text-xl mb-6">Create, trade, and engage with tokenized social profiles on the blockchain.</p>
        <Link href="/account" className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600">
          Get Started
        </Link>
      </motion.div>
    </section>
  );
}