import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { HowItWorks } from "./components/HowItWorks";
import { Pricing } from "./components/Pricing";
import { BookingForm } from "./components/BookingForm";
import { Testimonials } from "./components/Testimonials";
import { Footer } from "./components/Footer";
import { Toaster } from "@/components/ui/sonner";

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-cyan-100 selection:text-cyan-900">
      <Navbar onBookClick={() => setIsBookingOpen(true)} />
      
      <main>
        <Hero onBookClick={() => setIsBookingOpen(true)} />
        <Services />
        <HowItWorks />
        <Pricing onBookClick={() => setIsBookingOpen(true)} />
        <Testimonials />
      </main>

      <Footer />
      
      <BookingForm isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      
      <Toaster position="top-center" />
    </div>
  );
}

export default App;