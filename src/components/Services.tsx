import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Shirt, WashingMachine, Waves, Zap } from "lucide-react";

const services = [
  {
    title: "Wash & Fold",
    description: "Perfect for everyday laundry. We wash, dry, and neatly fold everything for you.",
    icon: WashingMachine,
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/a4bf9a74-5280-4e79-aa6b-f67a02ed2de3/service-wash-fold-e8fcf022-1776447438604.webp",
    color: "bg-blue-500",
  },
  {
    title: "Dry Cleaning",
    description: "Premium care for your delicate items like suits, silk dresses, and coats.",
    icon: Shirt,
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/a4bf9a74-5280-4e79-aa6b-f67a02ed2de3/service-dry-cleaning-50969614-1776447438506.webp",
    color: "bg-purple-500",
  },
  {
    title: "Ironing & Pressing",
    description: "Look sharp with our professional ironing service. Crisp finish for all your apparel.",
    icon: Zap,
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/a4bf9a74-5280-4e79-aa6b-f67a02ed2de3/service-ironing-81bb1c98-1776447437686.webp",
    color: "bg-amber-500",
  },
  {
    title: "Bulk Laundry",
    description: "Specialized cleaning for bedding, curtains, and large household items.",
    icon: Waves,
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/a4bf9a74-5280-4e79-aa6b-f67a02ed2de3/hero-laundry-room-cd589187-1776447438263.webp",
    color: "bg-cyan-500",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-white py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">Our Premium Services</h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            We provide a wide range of laundry and dry cleaning services to meet your specific needs. 
            All handled with expert care and modern technology.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group h-full overflow-hidden border-none shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute top-4 right-4 flex h-12 w-12 items-center justify-center rounded-xl ${service.color} text-white shadow-lg`}>
                    <service.icon className="h-6 w-6" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="mb-2 text-xl font-bold text-slate-900">{service.title}</h3>
                  <p className="text-slate-600">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}