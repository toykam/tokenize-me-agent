'use client';

import { motion } from 'framer-motion';

const features = [
  {
    title: 'Create Your Token',
    description: 'Turn your social profile into an ERC-20 token.',
    icon: '➕',
  },
  {
    title: 'Trade on DEX',
    description: 'Swap tokens seamlessly on our decentralized exchange.',
    icon: '↔️',
  },
  {
    title: 'Engage with Community',
    description: 'Interact using token-based rewards.',
    icon: '👥',
  },
];

export default function Features() {
  return (
    <section className="py-16 bg-gray-800" id="features">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="p-6 bg-gray-700 rounded-lg shadow-lg"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
              <a href="#" className="text-green-400 hover:underline mt-2 inline-block">Learn More</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}