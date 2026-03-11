import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Office Address',
    lines: ['Port Harcourt, Nigeria'],
  },
  {
    icon: Phone,
    title: 'Phone',
    lines: ['+234 0903 334 7755',
       '+44 790 202 7442 (UK)'],
  },
  {
    icon: Mail,
    title: 'Email',
    lines: ['info@tevcoenergy.com',],
  },
  {
    icon: Clock,
    title: 'Working Hours',
    lines: ['Monday – Friday: 8:00 AM – 5:00 PM', 'Saturday: 9:00 AM – 1:00 PM'],
  },
];

const serviceOptions = [
  { value: 'wireline', label: 'Wireline Services' },
  { value: 'intervention', label: 'Well Intervention' },
  { value: 'stimulation', label: 'Stimulation' },
  { value: 'manpower', label: 'Manpower Training & Supply' },
  { value: 'procurement', label: 'Procurement' },
  { value: 'other', label: 'Other' },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service_interest: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API Delay (replacing broken base44 client)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log('Form Data Submitted:', formData);
      setSubmitted(true);
    } catch (error) {
      console.error('Submission failed', error);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({ 
      name: '', 
      email: '', 
      phone: '', 
      company: '', 
      service_interest: '', 
      message: '' 
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 bg-slate-950 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&q=80"
            alt="Contact Background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950 to-slate-950" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tighter">
              Let's Discuss Your <br />
              <span className="text-red-600 italic">Next Project</span>
            </h1>
            <p className="text-slate-400 max-w-2xl text-lg md:text-xl font-light leading-relaxed">
              Have questions about our specialized oil and gas services? Our technical 
              experts are ready to provide the solutions you need.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16 items-start">
            
            {/* Contact Info Column */}
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-8 tracking-tight">
                  Contact Information
                </h2>
                <div className="space-y-10">
                  {contactInfo.map((item) => (
                    <div key={item.title} className="flex items-start gap-6 group">
                      <div className="w-14 h-14 bg-slate-50 border border-slate-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-red-600 group-hover:border-red-600 transition-all duration-300">
                        <item.icon className="w-6 h-6 text-slate-900 group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <h3 className="text-xs font-black tracking-widest uppercase text-slate-400 mb-2">
                          {item.title}
                        </h3>
                        {item.lines.map((line) => (
                          <p key={line} className="text-slate-900 font-bold text-lg leading-snug">
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Lagos Visual Placeholder */}
              <div className="relative rounded-sm overflow-hidden border border-slate-100 h-[280px] group shadow-xl">
                <img
                  src="MAP PH.png"
                  alt="Port Harcourt Operations"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-red-600/10 mix-blend-multiply" />
                <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-sm shadow-lg">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">Regional HQ: Port Harcourt</span>
                </div>
              </div>
            </div>

            {/* Contact Form Column */}
            <div className="lg:col-span-3">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="bg-slate-50 border border-slate-100 rounded-sm p-16 text-center shadow-2xl shadow-slate-200/50"
                  >
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">Message Received</h3>
                    <p className="text-slate-500 text-lg mb-10 font-light leading-relaxed">
                      Thank you for reaching out. A technical representative from <br /> 
                      <span className="font-bold text-slate-900">Tevco Energy</span> will contact you within 24 hours.
                    </p>
                    <Button
                      onClick={handleReset}
                      className="bg-slate-900 hover:bg-red-600 text-white font-bold text-xs uppercase tracking-widest px-10 py-6 rounded-sm transition-all"
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <motion.div 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="bg-white border border-slate-100 rounded-sm p-10 md:p-12 shadow-2xl shadow-slate-200/60"
                  >
                    <div className="mb-10">
                      <h2 className="text-3xl font-black text-slate-900 mb-3 tracking-tight">Send a Message</h2>
                      <p className="text-slate-500 font-light">Complete the form below for technical inquiries or service quotes.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                          <Label htmlFor="name" className="text-[10px] font-black uppercase tracking-widest text-slate-400">Full Name *</Label>
                          <Input
                            id="name"
                            placeholder="e.g. Samuel Adekunle"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                            className="h-14 bg-slate-50/50 border-slate-100 focus:bg-white focus:ring-red-600 transition-all text-slate-900 font-medium"
                          />
                        </div>
                        <div className="space-y-3">
                          <Label htmlFor="email" className="text-[10px] font-black uppercase tracking-widest text-slate-400">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="samuel@company.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                            className="h-14 bg-slate-50/50 border-slate-100 focus:bg-white focus:ring-red-600 transition-all"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                          <Label htmlFor="phone" className="text-[10px] font-black uppercase tracking-widest text-slate-400">Phone Number</Label>
                          <Input
                            id="phone"
                            placeholder="+234..."
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="h-14 bg-slate-50/50 border-slate-100 focus:bg-white"
                          />
                        </div>
                        <div className="space-y-3">
                          <Label htmlFor="company" className="text-[10px] font-black uppercase tracking-widest text-slate-400">Company</Label>
                          <Input
                            id="company"
                            placeholder="Organization Name"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            className="h-14 bg-slate-50/50 border-slate-100 focus:bg-white"
                          />
                        </div>
                      </div>

                      <div className="space-y-3">
                        <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Service of Interest</Label>
                        <Select
                          value={formData.service_interest}
                          onValueChange={(value) => setFormData({ ...formData, service_interest: value })}
                        >
                          <SelectTrigger className="h-14 bg-slate-50/50 border-slate-100 focus:bg-white">
                            <SelectValue placeholder="Select specialized service" />
                          </SelectTrigger>
                          <SelectContent>
                            {serviceOptions.map((opt) => (
                              <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-3">
                        <Label htmlFor="message" className="text-[10px] font-black uppercase tracking-widest text-slate-400">Message *</Label>
                        <Textarea
                          id="message"
                          placeholder="Describe your operational requirements..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          required
                          className="bg-slate-50/50 border-slate-100 focus:bg-white min-h-[160px] resize-none"
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-red-600 hover:bg-red-700 text-white h-16 text-xs font-black uppercase tracking-[0.2em] rounded-sm transition-all shadow-xl shadow-red-600/20 active:scale-[0.98]"
                      >
                        {loading ? (
                          <span className="flex items-center gap-3">
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Processing Request
                          </span>
                        ) : (
                          <span className="flex items-center gap-3">
                            <Send className="w-4 h-4" />
                            Submit Inquiry
                          </span>
                        )}
                      </Button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}