import { BadgeCheck } from "lucide-react";

const Services = () => {
  return (
    <section className="dark:bg-gray-900 dark:text-white px-6 py-16">
      <div className="max-w-6xl mx-auto space-y-16 mt-14">
        {/* First List */}
        <div className="w-full">
        <h1 className="md:text-3xl font-bold mb-5">We provide comprehensive digital services :</h1>
          <ul className="space-y-4 text-left">
            <li className="flex items-start gap-3">
              <BadgeCheck className="text-[#7C3AED] mt-1" size={18} />
              <span>Mobile Applications — iOS & Android apps with smooth performance.</span>
            </li>
            <li className="flex items-start gap-3">
              <BadgeCheck className="text-[#7C3AED] mt-1" size={18} />
              <span>UI/UX Design — Clean, user-friendly, and modern interfaces.</span>
            </li>
            <li className="flex items-start gap-3">
              <BadgeCheck className="text-[#7C3AED] mt-1" size={18} />
              <span>E-Commerce Solutions — Secure stores with payment integration.</span>
            </li>
            <li className="flex items-start gap-3">
              <BadgeCheck className="text-[#7C3AED] mt-1" size={18} />
              <span>Custom Software — Tailored solutions for unique business needs.</span>
            </li>
            <li className="flex items-start gap-3">
              <BadgeCheck className="text-[#7C3AED] mt-1" size={18} />
              <span>Hosting & Cloud Services — Secure, reliable, and scalable hosting.</span>
            </li>
          </ul>
        </div>

        {/* First Image Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          <img src="./services-photos/s1.png" alt="service example" className="rounded-md w-full" />
          <img src="./services-photos/s2.png" alt="service example" className="rounded-md w-full" />
        </div>

        {/* Second List */}
        <div className="w-full">
          <ul className="space-y-4 text-left">
            <li className="flex items-start gap-3">
              <BadgeCheck className="text-[#7C3AED] mt-1" size={18} />
              <span>Website Revamp & Redesign — We upgrade and modernize existing websites to make them look fresh,
                    <span className="hidden md:inline"><br /></span>
                    perform faster, and keep up with the latest digital trends.</span>
            </li>
            <li className="flex items-start gap-3">
              <BadgeCheck className="text-[#7C3AED] mt-1" size={18} />
              <span>Maintenance & Support — Regular updates, bug fixes, monitoring, and technical assistance.</span>
            </li>
            <li className="flex items-start gap-3">
              <BadgeCheck className="text-[#7C3AED] mt-1" size={18} />
              <span>Quality Assurance (QA) — Manual & automated testing before launch.</span>
            </li>
            <li className="flex items-start gap-3">
              <BadgeCheck className="text-[#7C3AED] mt-1" size={18} />
              <span>API Integration & Deployment — Seamless third-party integrations and safe rollouts.</span>
            </li>
          </ul>
        </div>

        {/* Second Image Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          <img src="./services-photos/s3.png" alt="service example" className="rounded-md w-full" />
          <img src="./services-photos/s4.png" alt="service example" className="rounded-md w-full" />
        </div>

      </div>
    </section>
  );
};

export default Services;
