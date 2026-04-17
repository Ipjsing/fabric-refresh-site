import { motion } from "framer-motion";
import { Check, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const plans = [
  {
    name: "Standard Wash",
    price: "1.99",
    unit: "per lb",
    description: "Everyday laundry washed and neatly folded.",
    features: [
      "Wash & Fold",
      "Scented or Fragrance-Free",
      "Free Pickup & Delivery",
      "2-Day Turnaround",
    ],
    recommended: false,
  },
  {
    name: "Premium Plus",
    price: "2.75",
    unit: "per lb",
    description: "For the extra care your favorites deserve.",
    features: [
      "Separation by Color/Fabric",
      "Premium Eco-Detergents",
      "Stain Treatment",
      "1-Day Express Option",
      "Reusable Laundry Bag",
    ],
    recommended: true,
  },
  {
    name: "Business Tier",
    price: "49.99",
    unit: "per month",
    description: "Subscription based laundry for small offices.",
    features: [
      "Up to 25lbs weekly",
      "Priority Scheduling",
      "Uniform Pressing",
      "Dedicated Account Manager",
    ],
    recommended: false,
  },
];

interface PricingProps {
  onBookClick: () => void;
}

export function Pricing({ onBookClick }: PricingProps) {
  return (
    <section id="pricing" className="bg-slate-50 py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">Simple, Transparent Pricing</h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            No hidden fees. We charge per pound for wash & fold and per item for dry cleaning.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative flex flex-col rounded-3xl p-8 transition-all ${
                plan.recommended 
                  ? "bg-white shadow-2xl ring-2 ring-cyan-500 scale-105 z-10" 
                  : "bg-white/50 shadow-xl"
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-cyan-600 px-4 py-1 text-xs font-bold uppercase tracking-wider text-white">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-extrabold tracking-tight text-slate-900">${plan.price}</span>
                  <span className="ml-1 text-slate-500">/{plan.unit}</span>
                </div>
                <p className="mt-2 text-sm text-slate-500">{plan.description}</p>
              </div>

              <div className="mb-8 space-y-4">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-cyan-100 text-cyan-600">
                      <Check className="h-3 w-3" />
                    </div>
                    <span className="text-sm text-slate-600">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto">
                <Button 
                  onClick={onBookClick}
                  className={`w-full rounded-xl py-6 ${
                    plan.recommended 
                      ? "bg-cyan-600 hover:bg-cyan-700" 
                      : "bg-slate-900 hover:bg-slate-800"
                  }`}
                >
                  Get Started
                </Button>
                <div className="mt-4 flex items-center justify-center gap-1 text-xs text-slate-400">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Info className="h-3 w-3" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Minimum order of 15 lbs applies to all wash & fold orders.</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <span>Minimum $20 order for free delivery</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}