import { motion } from "motion/react";
import {
  ArrowUpRight,
  ArrowRight,
  TrendingUp,
  Search,
  ShoppingCart,
  Globe,
  Palette,
  MousePointerClick,
  Code
} from "lucide-react";
import { Link } from "react-router-dom";
import ProcessSection from "@/components/ProcessSection";
import heroBg from "@/assets/Techytech_hero.webp";

const servicesList = [
  {
    icon: Search,
    title: "Search Engine Optimization",
    description: "Rank higher. Get found.",
    link: "/services"
  },
  {
    icon: TrendingUp,
    title: "Performance Marketing",
    description: "Drive measurable growth.",
    link: "/services"
  },
  {
    icon: Code,
    title: "React Development",
    description: "Component driven web experience",
    link: "/services"
  },
  {
    icon: Globe,
    title: "Website Development",
    description: "Fast, modern websites built for conversion and scale",
    link: "/services"
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Development",
    description: "Digital storefront built to convert, from cart to checkout",
    link: "/services"
  },
  {
    icon: MousePointerClick,
    title: "Digital Marketing",
    description: "Turn attention into revenue.",
    link: "/services"
  }
];

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-background select-none">

      {/* Main Hero Container */}
      <section
        className="relative z-10 w-full min-h-dvh bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="w-full min-h-dvh flex flex-col items-center justify-center p-4 md:p-8 relative bg-black/70">
          <div className="absolute inset-0" />
          <h1 className="relative z-10 text-3xl sm:text-5xl md:text-6xl lg:text-9xl text-white font-display uppercase tracking-[-0.025em] text-center drop-shadow-md">
            Ideas that move <span className="text-secondary"> brands </span>forward.
          </h1>

          {/* Hero CTA Buttons */}
          <div className="relative z-10 mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-5 sm:px-8 py-5 font-body text-sm sm:text-base font-semibold bg-secondary text-primary hover:bg-white hover:text-primary transition-all duration-300 group active:scale-95 cursor-pointer"
            >
              <span>Explore Services</span>
              <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 sm:px-8 py-5 font-body text-sm sm:text-base font-semibold text-white hover:bg-white hover:text-black border border-white hover:border-white transition-all duration-300 group active:scale-95 cursor-pointer"
            >
              <span>Contact Us</span>
              <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section (Matching Reference Screenshot - Placed Right After Hero Section) */}
      <section className="relative z-10 w-full bg-[#f4f0eb] text-black py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-12 border-b border-[#e2dcd5]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

            {/* Left Column: Heading, Subtitle & CTA */}
            <div className="lg:col-span-5 flex flex-col justify-between self-stretch pr-0 lg:pr-4">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-[#151514]">
                    OUR SERVICES
                  </span>
                </div>

                <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold font-display leading-[1.08] tracking-[0.025em] text-[#151514]">
                  Full-stack digital marketing and web solutions.
                </h2>

                <p className="font-body text-sm sm:text-base text-[#151514]/80 leading-relaxed max-w-md pt-2">
                  From websites to social media, we craft strategies that turn clicks into customers.
                </p>
              </div>

              <div className="pt-8 lg:pt-14">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#151514] text-[#f4f0eb] hover:bg-secondary hover:text-primary transition-all duration-300 font-body text-sm font-medium group active:scale-95 shadow-sm cursor-pointer"
                >
                  <span>View All Services</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Column: 3x2 Grid of Minimalist Cards */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-4">
                {servicesList.map((service, idx) => {
                  const IconComponent = service.icon;
                  return (
                    <Link
                      key={idx}
                      to={service.link}
                      className="group relative flex flex-col justify-between p-6 sm:p-6 min-h-[190px] sm:min-h-[210px] bg-white/70 hover:bg-white rounded-xl border border-[#ded8d0] hover:border-[#c5bdb3] hover:shadow-md transition-all duration-300 ease-out cursor-pointer"
                    >
                      <div className="space-y-4">
                        <div className="text-[#151514] group-hover:text-secondary transition-colors duration-200">
                          <IconComponent className="w-6 h-6 stroke-[1.8]" />
                        </div>
                        <div>
                          <h3 className="text-base sm:text-lg font-bold text-[#151514] font-body leading-snug">
                            {service.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-[#151514]/70 mt-1 font-body leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </div>

                      <div className="flex justify-end pt-4">
                        <ArrowRight className="w-4 h-4 text-[#151514]/70 group-hover:text-secondary group-hover:translate-x-1 transition-all duration-200" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* section: Digital Agency Statement */}
      <div className="w-screen h-screen bg-black flex items-center justify-center overflow-hidden relative z-2">
        <div className="w-3/4 px-8 py-24 flex flex-col gap-8 items-center justify-between">
          <h1 className="text-background text-6xl lg:text-[22vh] text-center font-semibold font-display leading-[0.91] tracking-[0.010em] select-none">
            BRANDS. <br></br> WEBSITES. <br></br> MARKETING.
          </h1>
          <div className="w-full md:w-2/4">
            <p className="text-white text-sm md:text-md text-center">
              TechyTech helps startups, enterprises, and eCommerce brands scale through performance marketing, SEO, web development, and AI-driven growth strategies.
            </p>
          </div>
          <div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <ProcessSection />

    </div>
  );
}
