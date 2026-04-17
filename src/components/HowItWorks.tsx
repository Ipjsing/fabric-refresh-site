import { motion } from "framer-motion";
import { CalendarCheck, Car, Package, Sparkles } from "lucide-react";

const steps = [
  {
    title: "Schedule Pickup",
    description: "Book a time that works for you online or via our app. We're available 7 days a week.",
    icon: CalendarCheck,
    color: "bg-cyan-100 text-cyan-600",
  },
  {
    title: "We Collect",
    description: "Our driver will pick up your laundry from your doorstep or a designated safe spot.",
    icon: Car,
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    title: "Expert Cleaning",
    description: "We clean your items according to your preferences and our high quality standards.",
    icon: Sparkles,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Free Delivery",
    description: "Freshly cleaned and folded clothes are delivered back to you within 24-48 hours.",
    icon: Package,
    color: "bg-purple-100 text-purple-600",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">How FreshSpin Works</h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            Experience the simplest way to get your laundry done. From pickup to delivery, we handle everything.
          </p>
        </div>

        <div className="relative grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Connector Line (Desktop) */}
          <div className="absolute top-1/4 left-0 hidden h-0.5 w-full bg-slate-100 lg:block -z-10"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative flex flex-col items-center text-center"
            >
              <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${step.color} shadow-sm ring-4 ring-white`}>
                <step.icon className="h-8 w-8" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-slate-900">{step.title}</h3>
              <p className="text-slate-600">{step.description}</p>
              
              {/* Counter */}
              <div className="absolute -top-4 -left-2 text-6xl font-black text-slate-50 opacity-10">
                0{index + 1}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 overflow-hidden rounded-[2rem] shadow-2xl">
          <img 
            src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/a4bf9a74-5280-4e79-aa6b-f67a02ed2de3/process-delivery-van-b5776734-1776447438280.webp" 
            alt="Delivery Process" 
            className="w-full object-cover max-h-[400px]"
          />
        </div>
      </div>
    </section>
  );
}