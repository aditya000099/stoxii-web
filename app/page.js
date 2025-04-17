"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import AppPreviewSection from "@/components/sections/AppPreviewSection";

// Add these animation variants
const backgroundAnimation = {
  animate: {
    backgroundPosition: ["0% 0%", "100% 100%"],
    transition: {
      duration: 20,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative pt-28 pb-16 bg-gradient-to-b from-gray-50 via-white to-gray-50 w-full">
          {/* Background decorative elements */}
          <div className="absolute inset-0 w-full">
            <FlickeringGrid
              className="absolute inset-0 w-full h-full [mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
              squareSize={4}
              gridGap={6}
              color="#60A5FA"
              maxOpacity={0.25}
              flickerChance={0.1}
            />
          </div>

          <div className="absolute inset-0 overflow-hidden w-full">
            <div className="absolute -top-40 -right-32 w-96 h-96 rounded-full bg-blue-50/50"></div>
            <div className="absolute top-20 -left-40 w-96 h-96 rounded-full bg-indigo-50/50"></div>
            <div className="absolute bottom-0 left-1/2 w-full h-1/2 bg-gradient-to-t from-gray-50/50 to-transparent"></div>
          </div>

          <div className="container relative mx-auto px-4 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto"
            >
              {/* SEBI badge centered at top */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex justify-center mb-12"
              >
                <span className="px-4 py-2 text-sm text-blue-600 bg-white rounded-full border border-blue-100 shadow-sm">
                  SEBI Registered Research Analyst
                </span>
              </motion.div>

              {/* Main content */}
              <div className="text-center relative">
                <motion.h1
                  className="mb-4 text-4xl md:text-6xl font-bold text-gray-900 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Get Daily Reliable
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                    {" "}
                    trade calls{" "}
                  </span>
                  from SEBI-registered RA.
                </motion.h1>
                <motion.p
                  className="mb-6 text-xl text-gray-600 max-w-2xl mx-auto"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  Empowering you with expert strategies to achieve your
                  financial goals with confidence.
                </motion.p>

                {/* Trust badge above download section */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.45 }}
                  className="flex justify-center mb-6"
                >
                  <div className="flex items-center gap-2 px-4 py-2 bg-yellow-50 rounded-full border border-yellow-100">
                    <svg
                      className="w-4 h-4 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm text-yellow-700 font-medium">
                      Trusted by Thousands
                    </span>
                  </div>
                </motion.div>

                {/* Download section with enhanced visuals */}
                <motion.div
                  className="inline-block bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <p className="text-sm text-gray-500 mb-4">
                    Download our app to get started
                  </p>
                  <div className="flex items-center justify-center gap-4">
                    <Link
                      href="https://play.google.com/store/apps/details?id=com.stoxii.consultancyservices"
                      className="transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                    >
                      <Image
                        src="/images/getitps.png"
                        alt="Get it on Google Play"
                        width={160}
                        height={48}
                        className="h-[48px] w-auto"
                      />
                    </Link>
                    <Link
                      href="https://apps.apple.com/us/app/stoxii/id6740243632"
                      className="transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                    >
                      <Image
                        src="/images/appstoredn.svg"
                        alt="Download on App Store"
                        width={160}
                        height={48}
                        className="h-[48px] w-auto"
                      />
                    </Link>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* App Preview Section */}
        <AppPreviewSection />

        {/* Value Proposition Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">
                Maximize Your Potential with Stoxii
              </h2>
              <p className="text-xl text-gray-600">
                Equipping Traders and Investors with Expert and Powerful Tools
                for Smarter Decisions!
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {featureCards.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl border border-gray-100 hover:border-blue-100 transition-all duration-300"
                >
                  <div className="bg-blue-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {card.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-white py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16">
              Why Choose Stoxii?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow"
                >
                  <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 grainy-gradient font-primary">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16">
              Choose Your Ideal Plan
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/95 backdrop-blur-sm p-8 rounded-xl border border-gray-100"
                >
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <div className="flex items-baseline mb-6">
                    <span className="text-4xl font-bold">₹{plan.price}</span>
                    <span className="text-gray-500 ml-2">/{plan.duration}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="w-full btn-primary">
                    Get Started Now!
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-50 py-20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl mx-auto"
            >
              <h2 className="text-3xl font-bold mb-6">
                Ready to Start Your Trading Journey?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Join thousands of successful traders who trust Stoxii
              </p>
              <Link href="/register" className="btn-primary">
                Get Started Now
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}

const features = [
  {
    title: "Expert Analysis",
    description: "Get real-time trading calls from SEBI-registered analysts",
    // icon: <AnalysisIcon />,
  },
  {
    title: "Risk Management",
    description: "Clear risk indicators and portfolio management tools",
    // icon: <RiskIcon />,
  },
  {
    title: "Market Insights",
    description: "Daily market updates and trending stock analysis",
    // icon: <InsightIcon />,
  },
];

const pricingPlans = [
  {
    name: "Positional + Swing (Quarterly)",
    description: "Quarterly access to positional and swing trading strategies.",
    price: "899",
    duration: "1month",
    features: [
      "Get monthly access to our exclusive BTST",
      "Swing trading strategies",
      "Expert insights and strategy updates",
      "Our top trading strategies with substantial savings",
    ],
  },
  {
    name: "Positional + Swing (Quarterly)",
    description: "Quarterly access to positional and swing trading strategies.",
    price: "2199",
    duration: "3month",
    features: [
      "Get monthly access to our exclusive BTST",
      "Swing trading strategies",
      "Expert insights and strategy updates",
      "Our top trading strategies with substantial savings",
    ],
  },
  {
    name: "Positional + Swing (Half-Yearly)",
    description:
      "Half-yearly access to exclusive trading strategies and expert insights.",
    price: "3999",
    duration: "6month",
    features: [
      "Get monthly access to our exclusive BTST",
      "Swing trading strategies",
      "Expert insights and strategy updates",
      "Our top trading strategies with substantial savings",
    ],
  },
];

// Simple icon components
const CheckIcon = ({ className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 13l4 4L19 7"
    />
  </svg>
);

const AnalysisIcon = () => (
  <svg
    className="w-6 h-6 text-blue-600"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    />
  </svg>
);

const RiskIcon = () => (
  <svg
    className="w-6 h-6 text-blue-600"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
    />
  </svg>
);

const InsightIcon = () => (
  <svg
    className="w-6 h-6 text-blue-600"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
    />
  </svg>
);

const featureCards = [
  {
    title: "Learn, Practice, and Grow",
    description:
      "Enhance your trading skills, gain confidence with actionable strategies, and build market expertise.",
    icon: (
      <svg
        className="w-8 h-8 text-blue-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
  },
  {
    title: "Discover Expert Stock Ideas",
    description:
      "Discover expert stock ideas from a SEBI-registered RA to make confident and investment decisions.",
    icon: (
      <svg
        className="w-8 h-8 text-blue-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
  },
  {
    title: "Build Your Credibility",
    description:
      "Build your credibility by sharing stock ideas on our blog and working towards a proven performance record.",
    icon: (
      <svg
        className="w-8 h-8 text-blue-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
    ),
  },
  {
    title: "Validate Before You Invest",
    description:
      "Access in-depth analysis and precise entry/exit points to make informed investment decisions.",
    icon: (
      <svg
        className="w-8 h-8 text-blue-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
        />
      </svg>
    ),
  },
];
