'use client';

export default function HowItWorks() {
  const steps = [
    { number: 1, title: 'Connect Wallet', description: 'Link your crypto wallet to get started.' },
    { number: 2, title: 'Tokenize Profile', description: 'Convert your social profile into a token.' },
    { number: 3, title: 'Trade Tokens', description: 'Swap tokens on our DEX.' },
    { number: 4, title: 'Earn Rewards', description: 'Engage and earn token rewards.' },
  ];

  return (
    <section className="py-16 bg-gray-900" id="how-it-works">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">How It Works</h2>
        <div className="flex flex-col md:flex-row justify-around items-center gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-green-500 text-white rounded-full mx-auto mb-2 flex items-center justify-center">
                {step.number}
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}