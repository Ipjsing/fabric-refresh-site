import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Busy Professional",
    content: "FreshSpin has changed my life. I haven't done laundry in six months, and my clothes have never looked better. The pickup is always on time!",
    avatar: "https://i.pravatar.cc/150?u=sarah",
  },
  {
    name: "Michael Chen",
    role: "Remote Worker",
    content: "The quality of their dry cleaning is outstanding. I sent in an old coat with a tough stain, and it came back looking brand new. Highly recommend!",
    avatar: "https://i.pravatar.cc/150?u=michael",
  },
  {
    name: "Emily Rodriguez",
    role: "Mother of Two",
    content: "Bulk laundry service for bedding and curtains is a game changer for moms. Prices are fair and the delivery staff is very polite.",
    avatar: "https://i.pravatar.cc/150?u=emily",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">Loved by Thousands</h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            Don't just take our word for it. Here's what our regular customers have to say about FreshSpin.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-3xl bg-slate-50 p-8 shadow-sm transition-all hover:shadow-md"
            >
              <div className="mb-4 flex gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="mb-6 italic text-slate-600">"{testimonial.content}"</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full border-2 border-white shadow-sm"
                />
                <div>
                  <div className="font-bold text-slate-900">{testimonial.name}</div>
                  <div className="text-xs font-medium text-slate-500">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}