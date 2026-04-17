import { Droplets, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-slate-50 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="space-y-6">
            <a href="#" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-600 text-white">
                <Droplets className="h-6 w-6" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">
                Fresh<span className="text-cyan-600">Spin</span>
              </span>
            </a>
            <p className="text-sm leading-relaxed text-slate-500">
              The modern solution for all your laundry and dry cleaning needs. We focus on quality, eco-friendly practices, and your convenience.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="text-slate-400 transition-colors hover:text-cyan-600">
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-6 text-sm font-bold uppercase tracking-wider text-slate-900">Company</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-cyan-600">About Us</a></li>
              <li><a href="#" className="hover:text-cyan-600">Our Story</a></li>
              <li><a href="#" className="hover:text-cyan-600">Sustainability</a></li>
              <li><a href="#" className="hover:text-cyan-600">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-sm font-bold uppercase tracking-wider text-slate-900">Support</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-cyan-600">Help Center</a></li>
              <li><a href="#" className="hover:text-cyan-600">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-cyan-600">Terms of Service</a></li>
              <li><a href="#" className="hover:text-cyan-600">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-sm font-bold uppercase tracking-wider text-slate-900">Newsletter</h4>
            <p className="mb-4 text-sm text-slate-500">Subscribe for special offers and laundry tips.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm focus:border-cyan-600 focus:outline-none"
              />
              <button className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-slate-800">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t pt-8 text-center text-xs text-slate-400">
          <p>© {currentYear} FreshSpin Laundry Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}