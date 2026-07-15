import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'motion/react';
import { Calendar, Clock, MapPin, Smartphone, Wrench, FileText, Send, CheckCircle2, ChevronDown } from 'lucide-react';

const bookingSchema = z.object({
  name: z.string().min(2, "Name is required"),
  mobile: z.string().regex(/^[0-9]{10}$/, "Invalid 10-digit mobile number"),
  email: z.string().email("Invalid email address").optional().or(z.literal('')),
  brand: z.string().min(1, "Device brand is required"),
  model: z.string().min(1, "Device model is required"),
  service: z.string().min(1, "Service required is required"),
  description: z.string().optional(),
  date: z.string().min(1, "Preferred date is required"),
  time: z.string().min(1, "Preferred time is required"),
  pickup: z.boolean().optional(),
  address: z.string().optional()
}).superRefine((data, ctx) => {
  if (data.pickup && (!data.address || data.address.trim().length === 0)) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Address is required for pickup",
      path: ["address"]
    });
  }
});

type BookingFormValues = z.infer<typeof bookingSchema>;

export default function Booking() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: { pickup: false }
  });

  const watchPickup = watch("pickup");

  const onSubmit: SubmitHandler<BookingFormValues> = async (data) => {
    const message = `*New Service Request*

*Name:* ${data.name}
*Mobile:* ${data.mobile}
*Email:* ${data.email || 'N/A'}
*Device:* ${data.brand} ${data.model}
*Service:* ${data.service}
*Description:* ${data.description || 'N/A'}
*Date & Time:* ${data.date} at ${data.time}
*Pickup Required:* ${data.pickup ? 'Yes' : 'No'}${data.pickup ? `\n*Address:* ${data.address}` : ''}`;

    const whatsappUrl = `https://wa.me/919962333311?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    setIsSubmitted(true);
  };

  return (
    <section id="booking" className="py-24 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-6 text-secondary dark:text-white"
        >
          Book Your Repair Service
        </motion.h2>
        <p className="text-gray-500 dark:text-gray-400">Fast, reliable, and transparent service. We'll get back to you immediately.</p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass rounded-3xl p-6 md:p-10 border border-gray-200 dark:border-white/10 shadow-2xl relative overflow-hidden"
      >
        {isSubmitted ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring" }}
            >
              <CheckCircle2 className="w-24 h-24 text-green-500 mb-6" />
            </motion.div>
            <h3 className="text-3xl font-bold mb-4 text-secondary dark:text-white">Request Submitted!</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-md mx-auto">
              We have received your service request. Our team will contact you shortly to confirm your appointment.
            </p>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="px-8 py-3 bg-gray-100 dark:bg-white/10 rounded-full font-medium text-secondary dark:text-white hover:bg-gray-200 dark:hover:bg-white/20 transition-colors"
            >
              Book Another Service
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Personal Details */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Customer Name *</label>
                  <input {...register("name")} className="w-full bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
                  {errors.name && <span className="text-xs text-red-500 mt-1">{errors.name.message}</span>}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Mobile Number *</label>
                  <input {...register("mobile")} type="tel" className="w-full bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
                  {errors.mobile && <span className="text-xs text-red-500 mt-1">{errors.mobile.message}</span>}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <input {...register("email")} type="email" className="w-full bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
                  {errors.email && <span className="text-xs text-red-500 mt-1">{errors.email.message}</span>}
                </div>
              </div>

              {/* Device Details */}
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Brand *</label>
                    <div className="relative">
                      <select {...register("brand")} className="w-full appearance-none bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 pr-10 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-secondary dark:text-white">
                        <option value="">Select brand...</option>
                        <option value="Apple">Apple</option>
                        <option value="Samsung">Samsung</option>
                        <option value="OnePlus">OnePlus</option>
                        <option value="Xiaomi">Xiaomi / Redmi</option>
                        <option value="Vivo">Vivo</option>
                        <option value="Oppo">Oppo</option>
                        <option value="Realme">Realme</option>
                        <option value="Google Pixel">Google Pixel</option>
                        <option value="Motorola">Motorola</option>
                        <option value="Asus">Asus</option>
                        <option value="Nokia">Nokia</option>
                        <option value="Nothing">Nothing</option>
                        <option value="Other">Other</option>
                      </select>
                      <ChevronDown className="w-5 h-5 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                    {errors.brand && <span className="text-xs text-red-500 mt-1">{errors.brand.message}</span>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Model *</label>
                    <input {...register("model")} placeholder="e.g. iPhone 13" className="w-full bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
                    {errors.model && <span className="text-xs text-red-500 mt-1">{errors.model.message}</span>}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Service Required *</label>
                  <div className="relative">
                    <select {...register("service")} className="w-full appearance-none bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 pr-10 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-secondary dark:text-white">
                      <option value="">Select a service...</option>
                      <option value="screen">Screen Replacement</option>
                      <option value="battery">Battery Replacement</option>
                      <option value="motherboard">Motherboard Repair</option>
                      <option value="water">Water Damage</option>
                      <option value="other">Other Issue</option>
                    </select>
                    <ChevronDown className="w-5 h-5 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                  {errors.service && <span className="text-xs text-red-500 mt-1">{errors.service.message}</span>}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Problem Description</label>
                  <textarea {...register("description")} rows={2} className="w-full bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"></textarea>
                </div>
              </div>
            </div>

            <hr className="border-gray-200 dark:border-white/10 my-6" />

            {/* Appointment Details */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 flex items-center gap-2"><Calendar className="w-4 h-4"/> Date *</label>
                  <input {...register("date")} type="date" className="w-full bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all dark:[color-scheme:dark]" />
                  {errors.date && <span className="text-xs text-red-500 mt-1">{errors.date.message}</span>}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 flex items-center gap-2"><Clock className="w-4 h-4"/> Time *</label>
                  <input {...register("time")} type="time" className="w-full bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all dark:[color-scheme:dark]" />
                  {errors.time && <span className="text-xs text-red-500 mt-1">{errors.time.message}</span>}
                </div>
              </div>

              <div>
                <label className="flex items-center gap-3 cursor-pointer p-4 border border-gray-200 dark:border-white/10 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-colors mb-3">
                  <input type="checkbox" {...register("pickup")} className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary" />
                  <span className="font-medium text-sm">Request Pickup & Delivery</span>
                </label>
                
                {watchPickup && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}>
                    <input {...register("address")} placeholder="Enter full pickup address *" className="w-full bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
                    {errors.address && <span className="text-xs text-red-500 mt-1">{errors.address.message}</span>}
                  </motion.div>
                )}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="flex-1 bg-primary text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors disabled:opacity-70"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Service Request'}
                <Send className="w-4 h-4" />
              </button>
              
              <a 
                href="https://wa.me/919962333311?text=Hi%20Sumithra%20Cell%20City,%20I%20would%20like%20to%20enquire%20about%20a%20mobile%20repair%20service."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-[#25D366] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#20bd5a] transition-colors"
              >
                Continue on WhatsApp
              </a>
            </div>
          </form>
        )}
      </motion.div>
    </section>
  );
}
