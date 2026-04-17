import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, MapPin, Package, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";

interface BookingFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BookingForm({ isOpen, onClose }: BookingFormProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: "wash-fold",
    name: "",
    email: "",
    address: "",
    date: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      toast.success("Booking Request Received!", {
        description: "We'll contact you shortly to confirm your pickup time.",
      });
      setTimeout(() => {
        onClose();
        setStep(1);
      }, 2000);
    }
  };

  const updateData = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg overflow-hidden rounded-[2rem] bg-white shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-10 rounded-full bg-slate-100 p-2 text-slate-500 hover:bg-slate-200 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="p-8 md:p-10">
              <div className="mb-8">
                <div className="flex items-center gap-4">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className={`h-2 flex-1 rounded-full transition-colors ${
                        step >= i ? "bg-cyan-600" : "bg-slate-100"
                      }`}
                    />
                  ))}
                </div>
                <div className="mt-4 flex justify-between text-xs font-bold uppercase tracking-wider text-slate-400">
                  <span className={step === 1 ? "text-cyan-600" : ""}>Service</span>
                  <span className={step === 2 ? "text-cyan-600" : ""}>Details</span>
                  <span className={step === 3 ? "text-cyan-600" : ""}>Schedule</span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {step === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-4"
                  >
                    <h2 className="text-2xl font-bold text-slate-900">Choose a Service</h2>
                    <RadioGroup 
                      value={formData.service} 
                      onValueChange={(v) => updateData("service", v)}
                      className="grid gap-4"
                    >
                      {[
                        { id: "wash-fold", title: "Wash & Fold", icon: Package },
                        { id: "dry-clean", title: "Dry Cleaning", icon: MapPin },
                        { id: "ironing", title: "Ironing Only", icon: Calendar },
                      ].map((s) => (
                        <Label
                          key={s.id}
                          className={`flex cursor-pointer items-center justify-between rounded-2xl border-2 p-4 transition-all hover:bg-slate-50 ${
                            formData.service === s.id ? "border-cyan-600 bg-cyan-50" : "border-slate-100"
                          }`}
                        >
                          <div className="flex items-center gap-4">
                            <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                              formData.service === s.id ? "bg-cyan-600 text-white" : "bg-slate-100 text-slate-500"
                            }`}>
                              <s.icon className="h-5 w-5" />
                            </div>
                            <span className="font-semibold text-slate-700">{s.title}</span>
                          </div>
                          <RadioGroupItem value={s.id} className="sr-only" />
                          {formData.service === s.id && <CheckCircle2 className="h-5 w-5 text-cyan-600" />}
                        </Label>
                      ))}
                    </RadioGroup>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-4"
                  >
                    <h2 className="text-2xl font-bold text-slate-900">Your Contact Info</h2>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input 
                          id="name" 
                          required 
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) => updateData("name", e.target.value)}
                          className="h-12 rounded-xl"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          required 
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) => updateData("email", e.target.value)}
                          className="h-12 rounded-xl"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="address">Pickup Address</Label>
                        <Input 
                          id="address" 
                          required 
                          placeholder="123 Fresh St, City"
                          value={formData.address}
                          onChange={(e) => updateData("address", e.target.value)}
                          className="h-12 rounded-xl"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-4"
                  >
                    <h2 className="text-2xl font-bold text-slate-900">When should we come?</h2>
                    <div className="space-y-2">
                      <Label htmlFor="date">Pickup Date</Label>
                      <Input 
                        id="date" 
                        type="date" 
                        required
                        value={formData.date}
                        onChange={(e) => updateData("date", e.target.value)}
                        className="h-12 rounded-xl"
                      />
                    </div>
                    <div className="rounded-2xl bg-cyan-50 p-4 text-sm text-cyan-700">
                      <strong>Note:</strong> We'll text you 30 minutes before arrival. Standard turnaround is 48 hours unless express is selected later.
                    </div>
                  </motion.div>
                )}

                <div className="flex gap-4 pt-4">
                  {step > 1 && (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setStep(step - 1)}
                      className="h-12 flex-1 rounded-xl"
                    >
                      Back
                    </Button>
                  )}
                  <Button
                    type="submit"
                    className="h-12 flex-1 rounded-xl bg-cyan-600 hover:bg-cyan-700"
                  >
                    {step === 3 ? "Confirm Booking" : "Continue"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}