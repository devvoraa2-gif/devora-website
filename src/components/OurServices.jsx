import { Globe, Smartphone, ShoppingCart, Cloud, RefreshCcw, ArrowRight } from "lucide-react";
import { Link } from "react-router";

const Services = () => {
    return (
        <section className="px-6 py-16 bg-white text-black dark:bg-gray-900 dark:text-white">
            <div className="max-w-5xl mx-auto text-center">
                {/* Heading */}
                <h2 className="text-2xl md:text-3xl font-bold mb-10">Our Services</h2>

                {/* Top 2 cards */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                    {/* Card 1 */}
                    <div className="border border-black dark:border-white rounded-lg p-6 text-left">
                        <div className="flex items-start gap-3">
                            <Globe className="w-5 h-5 text-[#24D4CB]" />
                            <div>
                                <h3 className="font-semibold">Websites</h3>
                                <p>Responsive, modern, and user-focused</p>
                            </div>
                        </div>

                        <div className="mt-4 flex items-start gap-3">
                            <Smartphone className="w-5 h-5 text-[#24D4CB]" />
                            <div>
                                <h3 className="font-semibold">Mobile Apps</h3>
                                <p>iOS & Android development</p>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="border border-black dark:border-white rounded-lg p-6 text-left">
                        <div className="flex items-start gap-3">
                            <ShoppingCart className="w-5 h-5 text-[#24D4CB]" />
                            <div>
                                <h3 className="font-semibold">E-Commerce</h3>
                                <p>Powerful and secure online stores</p>
                            </div>
                        </div>

                        <div className="mt-4 flex items-start gap-3">
                            <Cloud className="w-5 h-5 text-[#24D4CB]" />
                            <div>
                                <h3 className="font-semibold">Hosting & Support</h3>
                                <p>Reliable hosting & 24/7 maintenance</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom card */}
                <div className="border border-black dark:border-white rounded-lg p-6 max-w-xl mx-auto text-left">
                    <div className="flex items-start gap-3">
                        <RefreshCcw className="w-5 h-5 text-[#24D4CB]" />
                        <div>
                            <h3 className="font-semibold">Website Renewal</h3>
                            <p>Upgrade old websites to look and perform like new</p>
                        </div>
                    </div>

                    <div className="mt-4 text-center">
                        <Link
                            to="/services"
                            className="text-[#24D4CB] font-semibold inline-flex items-center gap-1"
                        >
                            View All Services
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
