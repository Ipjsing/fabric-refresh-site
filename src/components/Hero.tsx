import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Clock, ShieldCheck } from "lucide-react";

interface HeroProps {
  onBookClick: () => void;
}

export function Hero({ onBookClick }: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-48 md:pb-32">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 -z-10 h-full w-full opacity-10">
        <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-cyan-400 blur-3xl"></div>
        <div className="absolute top-1/2 left-0 h-72 w-72 rounded-full bg-emerald-400 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-cyan-50 px-4 py-1 text-sm font-semibold text-cyan-700 ring-1 ring-cyan-100">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500"></span>
              </span>
              Fresh Laundry, Delivered to Your Door
            </div>
            
            <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-slate-900 md:text-6xl lg:text-7xl">
              Focus on Life,<br />
              <span className="text-cyan-600">We'll Do the Laundry.</span>
            </h1>
            
            <p className="mb-8 max-w-lg text-lg text-slate-600 md:text-xl">
              Professional eco-friendly laundry and dry cleaning services with free pickup and delivery. Your clothes deserve the best care.
            </p>
            
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button 
                onClick={onBookClick}
                size="lg" 
                className="group h-14 rounded-full bg-cyan-600 px-8 text-lg hover:bg-cyan-700 shadow-xl shadow-cyan-200"
              >
                Schedule First Pickup
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="h-14 rounded-full border-slate-200 px-8 text-lg hover:bg-slate-50"
              >
                How it Works
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3">
              {[
                { icon: Clock, text: "24h Turnaround" },
                { icon: ShieldCheck, text: "Eco-Friendly Care" },
                { icon: CheckCircle2, text: "Quality Guaranteed" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm font-medium text-slate-600">
                  <item.icon className="h-5 w-5 text-cyan-600" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 overflow-hidden rounded-[2.5rem] border-[8px] border-white shadow-2xl">
              <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/a4bf9a74-5280-4e79-aa6b-f67a02ed2de3/hero-laundry-room-cd589187-1776447438263.webp" 
                alt="Modern Laundry Service" 
                className="aspect-square w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            
            {/* Floating UI Elements */}
            <div className="absolute -right-6 top-1/4 z-20 hidden rounded-2xl bg-white p-4 shadow-xl md:block">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-500">Order Status</div>
                  <div className="text-sm font-bold text-slate-900">Wash Completed!</div>
                </div>
              </div>
            </div>

            <div className="absolute -left-10 bottom-1/4 z-20 hidden rounded-2xl bg-white p-4 shadow-xl md:block">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-8 w-8 rounded-full border-2 border-white bg-slate-200">
                      <img src={`https://i.pravatar.cc/150?u=${i}`} alt="user" className="h-full w-full rounded-full" />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-500">Happy Clients</div>
                  <div className="text-sm font-bold text-slate-900">2.5k+ Members</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}