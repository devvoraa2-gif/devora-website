import { Link } from 'react-router'

const HeroSection = () => {
    return (
        <section className="dark:bg-gray-900 dark:text-white px-6 pt-20 pb-10 md:pb-20">

            <div className="max-w-3xl mx-auto text-center">

                <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                    <span className="text-[#7C3AED]">Devora</span>
                    <span className="text-gray-900 dark:text-white"> — We Build Experiences, Not Just Websites</span>
                </h1>

                <p className="mt-3 text-lg md:text-xl font-semibold text-[#7C3AED]">
                    Your business deserves more than a template.
                </p>

                <p className="mt-3 text-base md:text-lg text-gray-600 dark:text-gray-300">
                    We create tailored digital solutions — websites, apps, and hosting designed to grow with you.
                </p>


                <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                    <Link
                        to="/"
                        className="bg-[#24D4CB] text-black font-semibold px-6 py-3 rounded-md 
                       hover:bg-[#1bb8ae] hover:text-white transition-colors"
                    >
                        View Projects
                    </Link>

                    <Link
                        to="/"
                        className="border dark:border-white dark:text-white px-6 py-3 rounded-md font-semibold
                       hover:bg-[#7C3AED] hover:text-white transition-colors dark:hover:bg-white dark:hover:text-black"
                    >
                        Get a Quote
                    </Link>
                </div>

            </div>
        </section>
    )
}

export default HeroSection;
