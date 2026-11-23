import {
  ArrowRight,
  Globe,
  Code2,
  Layers,
  ShoppingBag,
  Wrench,
  Server,
  Cloud,
  ShoppingCart,
  TrendingUp,
  Bot,
  ChartColumnIncreasing,
  Search,
  Sparkles,
  ArrowUpRight
} from "lucide-react";
import { Link } from "react-router-dom";

const servicesList = [
  {
    icon: Globe,
    title: "Website Development",
    description: "Ultra-responsive, visually captivating websites optimized for core web vitals, brand prestige, and maximum organic conversion.",
  },
  {
    icon: Code2,
    title: "React Development",
    description: "Component-driven web experiences built with modern React 19, Vite, and Next.js for blazing fast rendering and fluid state management.",
  },
  {
    icon: Layers,
    title: "Web Applications",
    description: "Full-stack web software, internal dashboards, and client portals engineered with secure REST/GraphQL backends and cloud resilience.",
  },
  {
    icon: ShoppingBag,
    title: "Shopify Development",
    description: "High-converting headless Shopify Plus storefronts, custom Liquid sections, checkout extensions, and seamless third-party app pipelines.",
  },
  {
    icon: Wrench,
    title: "Website Maintenance",
    description: "Ongoing updates, uptime monitoring, security patching, and technical support that keep your digital platform operating at peak velocity.",
  },
  {
    icon: Server,
    title: "Node.js Development",
    description: "High-throughput microservices, real-time architectures, and scalable API layers engineered for stability under demanding traffic loads.",
  },
  {
    icon: Cloud,
    title: "SaaS Product Development",
    description: "Architect and build scalable multi-tenant SaaS platforms that streamline complex workflows and accelerate recurring revenue cycles.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Development",
    description: "Tailored multi-channel shopping experiences designed with friction-free cart flows, high conversion rates, and global payment gateways.",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Grow your market presence through performance-driven customer acquisition strategies calibrated for compounding ROI and brand dominance.",
  },
  {
    icon: Bot,
    title: "AI Automation",
    description: "Eliminate repetitive manual bottlenecks and customer friction with bespoke AI integrations, intelligent pipelines, and autonomous agents.",
  },
  {
    icon: ChartColumnIncreasing,
    title: "Analytics & Reporting",
    description: "Turn ambiguous data into clear business intelligence with real-time attribution modeling, custom dashboards, and behavioral telemetry.",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Systematic technical audit, semantic indexing, and search engine authority engineering that secure top organic rankings on Google and AI engines.",
  }
];

export default function Services() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background text-[#151514] select-none">

      {/* Services Hero Header (Swiss Minimalist Layout matching Home Page) */}
      <section className="relative z-10 w-full bg-[#f4f0eb] border-b border-[#e2dcd5] py-6 sm:py-18 lg:py-12 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div>
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold font-display text-center tracking-[0.015em] uppercase text-[#151514]">
                Services built to move your business forward
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid (Swiss Minimalist Cards matching Home Page) */}
      <section className="relative z-10 w-full py-8 sm:py-12 lg:py-14 px-4 sm:px-6 lg:px-12 bg-[#f4f0eb]">
        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {servicesList.map((service, idx) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={idx}
                  className="group relative flex flex-col justify-between p-7 sm:p-8 min-h-[260px] bg-white/70 hover:bg-white rounded-2xl border border-[#ded8d0] hover:border-[#c5bdb3] hover:shadow-md transition-all duration-300 ease-out"
                >
                  <div className="space-y-5">
                    <div className="flex items-center justify-between">
                      <div className="text-[#151514] group-hover:text-secondary transition-colors duration-200">
                        <IconComponent className="w-7 h-7 stroke-[1.8]" />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#151514] font-body leading-tight">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#151514]/70 mt-2.5 font-body leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-[#ded8d0]/60 mt-6">
                    <Link
                      to="/contact"
                      className="text-xs font-semibold uppercase tracking-wider text-[#151514] group-hover:text-secondary transition-colors"
                    >
                      Inquire
                    </Link>
                    <ArrowRight className="w-4 h-4 text-[#151514]/60 group-hover:text-secondary group-hover:translate-x-1 transition-all duration-200" />
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
