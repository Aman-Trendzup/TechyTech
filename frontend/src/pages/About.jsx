import {
  ArrowRight,
  ArrowUpRight,
  Globe,
  Rocket,
  Brain,
  Users,
  BarChart3,
  Zap,
  Target,
  Palette,
  Award,
  Headphones,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";
import { NumberTicker } from "@/components/magicui/number-ticker";

const marketplaces = [
  {
    name: "CopeCart",
    color: "#4d88ff",
    link: "https://copecart.com",
    tagline: "High-conversion checkout & EU compliance infrastructure",
  },
  {
    name: "Digistore24",
    color: "#28d17c",
    link: "https://digistore24.com",
    tagline: "Automated affiliate network & global sales processing",
  },
  {
    name: "ClickBank",
    color: "#ff7a29",
    link: "https://clickbank.com",
    tagline: "Premier digital marketplace with worldwide scale and distribution",
  },
];

const trustPillars = [
  {
    title: "Results-Focused",
    desc: "Every project is architected around measurable business outcomes, quantifiable conversion rates, and compounding ROI.",
  },
  {
    title: "Continuous Innovation",
    desc: "We continuously deploy modern frameworks, AI-assisted development tools, and edge-first performance architectures.",
  },
  {
    title: "Radical Transparency",
    desc: "Direct communication, sprint milestones, real-time code reviews, and honest metrics throughout the relationship.",
  },
  {
    title: "Long-Term Partnership",
    desc: "We scale alongside our clients through ongoing technical advisory, platform maintenance, and proactive optimizations.",
  },
  {
    title: "Rigorous Quality Assurance",
    desc: "Every deployment passes automated testing, accessibility auditing, core web vitals optimization, and security checks.",
  },
];

const stats = [
  { value: 200, suffix: "+", label: "Projects Delivered" },
  { value: 100, suffix: "+", label: "Happy Clients" },
  { value: 15, suffix: "+", label: "Industries Served" },
  { value: 98, suffix: "%", label: "Satisfaction Rate" },
  { value: 5, suffix: "+", label: "Years Experience" },
];

const whyChooseReasons = [
  {
    title: "AI-Powered Strategies",
    icon: Brain,
    desc: "We leverage advanced AI models to optimize campaigns and predict market trends in real-time.",
  },
  {
    title: "Dedicated Specialists",
    icon: Users,
    desc: "Your brand gets a dedicated team of engineers and marketing specialists focused solely on your growth.",
  },
  {
    title: "Real-Time Telemetry",
    icon: BarChart3,
    desc: "Transparent, live dashboards so you always know exactly how your platforms and campaigns perform.",
  },
  {
    title: "Fast Execution",
    icon: Zap,
    desc: "Agile methodologies ensure rapid deployment to capture market opportunities without procedural lag.",
  },
  {
    title: "ROI-Focused Campaigns",
    icon: Target,
    desc: "Every strategy we deploy is engineered to maximize conversion efficiency and measurable returns.",
  },
  {
    title: "Precision Brand Design",
    icon: Palette,
    desc: "World-class visual storytelling and typography that elevate your prestige and captivate your audience.",
  },
  {
    title: "Certified Stacks",
    icon: Award,
    desc: "Engineers holding premier industry certifications across modern web frameworks, AWS, and Google Cloud.",
  },
  {
    title: "Operational Support",
    icon: Headphones,
    desc: "Round-the-clock monitoring and dedicated technical assistance to ensure continuous operational uptime.",
  },
];

export default function About() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background text-[#151514] select-none">

      {/* Hero Header Section (Swiss Editorial Layout matching Services & Home) */}
      <section className="relative z-10 w-full bg-[#f4f0eb] border-b border-[#e2dcd5] py-16 sm:py-20 lg:py-12 px-4 sm:px-6 lg:px-12">
        <div className="w-full mx-auto">
          <div>
            <div>
              <h1 className="text-5xl sm:text-6xl lg:text-5xl xl:text-6xl text-center font-bold font-display leading-[0.92] tracking-[0.015em] uppercase text-[#151514]">
                Architecting the future of digital scale
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Row */}
      <section className="relative z-10 w-full py-16 sm:py-20 lg:py-10 px-4 sm:px-6 lg:px-12 bg-[#f4f0eb] border-b border-[#e2dcd5]">
        <div className="max-w-7xl mx-auto space-y-12">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Vision */}
            <div className="group relative flex flex-col justify-between p-6 sm:p-10 min-h-[240px] bg-white/70 hover:bg-white rounded-2xl border border-[#ded8d0] hover:border-[#c5bdb3] hover:shadow-md transition-all duration-300 ease-out">
              <div className="space-y-5">
                <div className="w-12 h-12 rounded-xl bg-secondary/15 border border-secondary/30 flex items-center justify-center text-secondary">
                  <Globe className="w-6 h-6 stroke-[2]" />
                </div>
                <h3 className="font-display text-2xl sm:text-3xl text-[#151514] tracking-wide uppercase leading-tight">
                  Our Vision
                </h3>
                <p className="font-body text-[#151514]/75 text-sm sm:text-base leading-relaxed">
                  To become a globally trusted digital partner recognized for technical precision, radical transparency, and measurable business growth.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="group relative flex flex-col justify-between p-8 sm:p-10 min-h-[240px] bg-white/70 hover:bg-white rounded-2xl border border-[#ded8d0] hover:border-[#c5bdb3] hover:shadow-md transition-all duration-300 ease-out">
              <div className="space-y-5">
                <div className="w-12 h-12 rounded-xl bg-secondary/15 border border-secondary/30 flex items-center justify-center text-secondary">
                  <Rocket className="w-6 h-6 stroke-[2]" />
                </div>
                <h3 className="font-display text-2xl sm:text-3xl text-[#151514] tracking-wide uppercase leading-tight">
                  Our Mission
                </h3>
                <p className="font-body text-[#151514]/75 text-sm sm:text-base leading-relaxed">
                  To empower ambitious businesses through technology, thoughtful design, and strategic digital solutions that create sustainable value.
                </p>
              </div>
            </div>
          </div>

          {/* Impact Stats Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5 pt-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="group relative p-6 bg-white/60 hover:bg-white rounded-xl border border-[#ded8d0] hover:border-[#c5bdb3] flex flex-col items-center justify-center text-center transition-all duration-300 ease-out hover:shadow-sm"
              >
                <div className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-[#151514] group-hover:text-secondary transition-colors duration-200">
                  <NumberTicker value={stat.value} />
                  <span>{stat.suffix}</span>
                </div>
                <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-[#151514]/60 mt-2 font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Marketplaces Section */}
      <section className="relative z-10 w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 bg-[#f4f0eb] border-b border-[#e2dcd5]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-[#151514]">
                  DISTRIBUTION & PARTNERSHIPS
                </span>
                <div className="w-8 h-[1px] bg-[#151514]/40" />
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display uppercase tracking-[0.015em] leading-[0.94] text-[#151514]">
                Verified on Trusted Marketplaces
              </h2>

              <p className="font-body text-[#151514]/80 text-sm sm:text-base leading-relaxed max-w-xl">
                Alongside bespoke client development, TechyTech creates standalone digital products and publications distributed worldwide through officially verified commerce platforms.
              </p>
            </div>

            <div className="lg:col-span-6 flex flex-col gap-4">
              {marketplaces.map((market) => (
                <a
                  key={market.name}
                  href={market.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-6 sm:p-7 rounded-xl bg-white/70 hover:bg-white border border-[#ded8d0] hover:border-[#c5bdb3] hover:shadow-md transition-all duration-300 flex items-center justify-between"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <span
                        className="font-display text-2xl sm:text-3xl font-bold transition-opacity hover:opacity-85 tracking-wider"
                        style={{ color: market.color }}
                      >
                        {market.name}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#151514]/65 font-body">
                      {market.tagline}
                    </p>
                  </div>

                  <div className="w-10 h-10 rounded-full bg-[#151514]/5 group-hover:bg-secondary group-hover:text-primary flex items-center justify-center text-[#151514] transition-all duration-200 shrink-0 ml-4">
                    <ArrowUpRight className="w-4 h-4 stroke-[2]" />
                  </div>
                </a>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Trust Pillars */}
      <section className="relative z-10 w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 bg-[#f4f0eb] border-b border-[#e2dcd5]">
        <div className="max-w-7xl mx-auto space-y-12">

          <div className="flex flex-col items-start gap-3 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-[#151514]">
                OUR PRINCIPLES
              </span>
              <div className="w-8 h-[1px] bg-[#151514]/40" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold font-display uppercase tracking-[0.015em] text-[#151514]">
              Why Businesses Trust TechyTech
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {trustPillars.map((pillar) => (
              <div
                key={pillar.title}
                className="group relative p-7 bg-white/70 hover:bg-white rounded-xl border border-[#ded8d0] hover:border-[#c5bdb3] hover:shadow-md transition-all duration-300 ease-out flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-secondary/15 border border-secondary/30 flex items-center justify-center text-secondary">
                    <CheckCircle2 className="w-5 h-5 stroke-[2]" />
                  </div>
                  <h3 className="font-display text-2xl text-[#151514] tracking-wide uppercase leading-tight group-hover:text-secondary transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="font-body text-[#151514]/70 text-xs sm:text-sm leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Full-width Statement Section (Home page aesthetic) */}
      <div className="w-screen min-h-[60vh] bg-black flex items-center justify-center overflow-hidden relative z-2 py-20 px-6 sm:px-8">
        <div className="w-full max-w-5xl flex flex-col gap-8 items-center justify-between text-center">
          <h2 className="text-background text-5xl sm:text-7xl lg:text-[16vh] font-semibold font-display leading-[0.91] tracking-[0.010em] select-none uppercase">
            SCALE WITH <br /> INTEGRITY.
          </h2>
          <div className="w-full max-w-xl">
            <p className="text-white text-sm sm:text-base font-body leading-relaxed">
              Ready to elevate your digital presence with a team that values architecture, engineering, and measurable ROI?
            </p>
          </div>
          <div className="pt-2">
            <Link to="/contact">
              <button className="bg-primary font-bold font-body text-secondary rounded-full px-8 py-3.5 hover:bg-white hover:text-primary transition-all duration-300 ease-out cursor-pointer shadow-sm">
                Get in Touch
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Why Choose Reasons (3x Grid) */}
      <section className="relative z-10 w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 bg-[#f4f0eb]">
        <div className="max-w-7xl mx-auto space-y-12">

          <div className="flex flex-col items-start gap-3 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-[#151514]">
                THE ADVANTAGE
              </span>
              <div className="w-8 h-[1px] bg-[#151514]/40" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold font-display uppercase tracking-[0.015em] text-[#151514]">
              Why Choose TechyTech
            </h2>
            <p className="font-body text-[#151514]/75 text-sm sm:text-base leading-relaxed">
              We don't just run ads or build templates; we engineer scalable growth engines.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyChooseReasons.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group relative p-6 bg-white/70 hover:bg-white rounded-xl border border-[#ded8d0] hover:border-[#c5bdb3] hover:shadow-md transition-all duration-300 ease-out flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-secondary/15 border border-secondary/30 flex items-center justify-center text-secondary">
                      <Icon className="w-5 h-5 stroke-[2]" />
                    </div>
                    <h3 className="font-display text-xl text-[#151514] tracking-wide uppercase leading-tight group-hover:text-secondary transition-colors">
                      {item.title}
                    </h3>
                    <p className="font-body text-[#151514]/70 text-xs sm:text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </div>
  );
}
