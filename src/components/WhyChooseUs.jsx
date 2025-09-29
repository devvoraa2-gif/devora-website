import { CheckCircle } from "lucide-react";

const WhyChooseUs = () => {
    const features = [
        {
            text: "Affordable Pricing, Premium Quality — Lower cost than the market, with higher standards.",
        },
        {
            text: "Scalable & Secure — Solutions that grow with your business and adapt to change.",
        },
        {
            text: "All-in-One Partner — From concept to launch, hosting, and long-term support.",
        },
    ];

    return (
        <section className="px-6 py-8 bg-white dark:bg-gray-900 dark:text-white">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">

                <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Why Choose <span className="text-[#7C3AED]">Devora</span> ?
                    </h2>

                    <ul className="space-y-4">
                        {features.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                                <span className="mt-1">
                                    <CheckCircle className="text-[#7C3AED]" size={20} />
                                </span>
                                <p className="text-gray-700 dark:text-gray-300">{item.text}</p>
                            </li>
                        ))}
                    </ul>

                    <p className="mt-6 italic text-gray-600 dark:text-gray-400">
                        “With <span className="text-[#7C3AED] font-semibold">Devora</span>, you don’t just get code — you get an experience that lasts.”
                    </p>
                </div>

                {/* Images */}
                <div className="grid grid-cols-2 gap-4">
                    <img
                        src="/photos/code1.jpg"
                        alt="Code preview"
                        className="rounded-lg shadow-md"
                    />
                    <img
                        src="/photos/code2.jpg"
                        alt="Analytics preview"
                        className="rounded-lg shadow-md"
                    />

                    <div className="col-span-2 flex justify-center">
                        <img
                            src="/photos/code3.jpg"
                            alt="Dev process preview"
                            className="rounded-lg shadow-md w-3/4"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default WhyChooseUs;
