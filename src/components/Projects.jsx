import dashboardImg from "../../public/projects-photos/dashboard.png";
import loginImg from "../../public/projects-photos/login.png";
import aboutImg from "../../public/projects-photos/about.png";

const Projects = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-6 py-10 transition-colors duration-300">
        {/* Title */}
        <h1 className="text-3xl font-bold mb-2">
          ELITE UK <span>:</span>
        </h1>

        {/* Type & Description */}
        <p className="text-lg">
          <span className="font-bold text-[#7C3AED]">Type: </span>Web
          Development
        </p>
        <p className="text-lg mb-8">
          <span className="font-bold text-[#7C3AED]">Description: </span>A
          modern, responsive business website designed for performance, SEO, and
          ease of use. Features include content management, contact forms, and
          mobile-friendly design.
        </p>

        {/* Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <img
            src={dashboardImg}
            alt="Dashboard"
            className="w-full h-64 rounded-lg"
          />
          <img
            src={loginImg}
            alt="Login"
            className="w-full h-64 rounded-lg"
          />
          <img
            src={aboutImg}
            alt="Testimonials"
            className="w-full h-64 rounded-lg"
          />
        </div>

        {/* Highlights */}
        <ul className="list-disc pl-6 space-y-2 mb-6 marker:text-[#7C3AED]">
          <li>
            <span className="font-semibold">Key Highlights: </span>
            Fully responsive, SEO-ready, admin panel for content updates, and
            integrated contact form.
          </li>
        </ul>
      </section>
    </>
  );
};

export default Projects;
