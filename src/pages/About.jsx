import { CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <section className="dark:bg-gray-900 dark:text-white bg-white text-black px-6 py-16">
      {/* Top Grid with Text and Image */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Text Content */}
        <div className="space-y-12">
          {/* Intro */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">
              At Devora, we believe technology should empower, not complicate.
            </h2>
            <p className="mt-4 text-base md:text-lg">
              <span className="text-[#7C3AED] font-semibold">
                Our team of developers and designers specializes in creating solutions that turn ideas into reality
              </span>{' '}
                . We focus on clean code, modern design, and seamless user experiences.
            </p>
          </div>

          {/* Mission, Vision, Values */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-[#7C3AED]">— Our Mission</h3>
              <p className="text-gray-700 dark:text-gray-300">
                To transform ideas into reliable, high-performance digital products.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#7C3AED]">— Our Vision</h3>
              <p className="text-gray-700 dark:text-gray-300">
                To become a trusted global partner for businesses seeking innovative digital solutions, helping them stay ahead in an ever-changing world.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#7C3AED]">— Our Values</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Professionalism, Transparency, Reliability, User Focus
              </p>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/photos/about.png"
            alt="Team working on digital solutions"
            className="rounded-lg shadow-lg max-w-full h-auto"
          />
        </div>
      </div>

      {/* Bottom Section: How We Work + Why Choose Devora */}
      <div className="max-w-4xl md:mx-12 mt-16 space-y-12 text-left">
        {/* How We Work */}
        <div>
          <h3 className="text-xl font-bold mb-4">How We Work</h3>
          <ul className="space-y-3">
            {[
              'We listen carefully to understand your goals.',
              'We design user-focused experiences.',
              'We develop secure, scalable solutions.',
              'We support and maintain your product after launch.',
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                <CheckCircle className="text-[#24D4CB] mt-1" size={20} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Why Choose Devora */}
        <div>
          <h3 className="text-xl font-bold mb-4">Why Choose Devora?</h3>
          <ul className="space-y-3">
            {[
              'End-to-end digital services in one place.',
              'Scalable, future-proof solutions.',
              'Dedicated support & long-term partnership.',
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                <CheckCircle className="text-[#7C3AED] mt-1" size={20} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
