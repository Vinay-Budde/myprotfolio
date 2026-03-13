import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  MapPin, 
  Linkedin, 
  Github, 
  SendHorizontal,
  ArrowRight,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { Magnetic } from './ui/Magnetic';

/**
 * Contact Section Component
 * Handles user inquiries through a stylized form and social connection points.
 * Integrated with Web3Forms for direct email delivery.
 */
export const Contact = () => {
  // --- Form & Submission State ---
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });

  /**
   * Handle input changes to synchronize state with UI.
   */
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  /**
   * Submit form data to Web3Forms API.
   * Documentation: https://docs.web3forms.com/
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Verification: Check if the access key is correctly set
    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY || 'YOUR_ACCESS_KEY_HERE';
    
    if (accessKey === 'YOUR_ACCESS_KEY_HERE' || !accessKey) {
      alert('Error: You missed the final step! Please add your Web3Forms Access Key to the ".env" file to enable email delivery.');
      return;
    }

    setFormStatus('sending');

    try {
      // Prepare payload for Web3Forms
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey, 
          ...formData,
          from_name: formData.name,
          subject: `New Portfolio Message: ${formData.subject}`
        })
      });

      const result = await response.json();

      if (result.success) {
        setFormStatus('success');
        setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
        // Reset to idle after 5 seconds to allow for new messages
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setFormStatus('error');
    }
  };

  return (
    <section id="contact" className="py-32 px-4 relative overflow-hidden bg-transparent">
      
      {/* Background Aesthetic Atmosphere */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 -left-64 -translate-y-1/2 w-[600px] h-[600px] bg-orange-600/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 -right-32 w-[400px] h-[400px] bg-amber-600/5 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
        
        {/* Left Column: Communication Strategy & Information */}
        <div className="space-y-12">
          <div className="space-y-6">
            {/* Context Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-1.5 rounded-full bg-orange-600/10 border border-orange-500/20 text-[10px] font-black text-orange-500 uppercase tracking-[0.2em]"
            >
              Get in Touch
            </motion.div>
            
            {/* Primary Heading */}
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.9] uppercase">
              Let's build something <span className="text-orange-500">amazing</span> together.
            </h2>
            <p className="text-zinc-500 font-semibold text-sm md:text-base leading-relaxed tracking-tight max-w-lg">
              I'm currently available for freelance work and full-time positions. If you have a project that needs some creative injection, let's talk.
            </p>
          </div>

          {/* Quick Contact Methods */}
          <div className="space-y-4">
             {/* Email Engagement Point */}
             <div className="flex items-center gap-6 p-4 bg-zinc-900/30 border border-white/5 rounded-3xl shadow-2xl hover:border-orange-500/20 transition-all group">
                <div className="p-4 bg-orange-600/10 rounded-2xl text-orange-500">
                   <Mail size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1">Email Me</p>
                  <p className="text-white font-black tracking-tight text-lg">vinaybudde263@gmail.com</p>
                </div>
             </div>

             {/* Location Awareness */}
             <div className="flex items-center gap-6 p-4 bg-zinc-900/30 border border-white/5 rounded-3xl shadow-2xl hover:border-orange-500/20 transition-all group">
                <div className="p-4 bg-orange-600/10 rounded-2xl text-orange-500">
                   <MapPin size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1">Location</p>
                  <p className="text-white font-black tracking-tight text-lg">Punjab, India</p>
                </div>
             </div>
          </div>

          {/* Secondary Social Connections */}
          <div className="space-y-6 pt-4">
             <p className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.4em]">Social Channels</p>
             <div className="flex flex-wrap gap-4">
                {/* LinkedIn Connection */}
                <Magnetic>
                  <a 
                    href="https://linkedin.com/in/vinay-budde-bb8a0628a/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 px-8 py-4 bg-zinc-900/40 border border-white/5 rounded-2xl text-white font-black text-[10px] uppercase tracking-widest hover:bg-zinc-800 transition-all shadow-xl group"
                  >
                    <div className="p-2 bg-zinc-900 rounded-lg shadow-sm group-hover:bg-blue-600/10 transition-colors">
                       <Linkedin size={16} className="text-blue-400" />
                    </div>
                    LinkedIn
                  </a>
                </Magnetic>
                {/* GitHub Discovery */}
                <Magnetic>
                  <a 
                    href="https://github.com/Vinay-Budde" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 px-8 py-4 bg-zinc-900/40 border border-white/5 rounded-2xl text-white font-black text-[10px] uppercase tracking-widest hover:bg-zinc-800 transition-all shadow-xl group"
                  >
                    <div className="p-2 bg-zinc-900 rounded-lg shadow-sm group-hover:bg-white/10 transition-colors">
                       <Github size={16} className="text-white" />
                    </div>
                    GitHub
                  </a>
                </Magnetic>
             </div>
          </div>
        </div>

        {/* Right Column: Interaction Point (Form) */}
        <motion.div
           initial={{ opacity: 0, x: 30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="bg-zinc-900/30 p-10 md:p-14 rounded-[3.5rem] shadow-2xl border border-white/5 backdrop-blur-md"
        >
          <form className="space-y-8" onSubmit={handleSubmit}>
            {/* Identity Information Pair */}
            <div className="grid md:grid-cols-2 gap-8">
               <div className="space-y-3">
                  <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest ml-1">Full Name</label>
                  <input 
                    required 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    disabled={formStatus === 'sending'}
                    className="w-full px-6 py-5 bg-zinc-900/50 border border-white/5 rounded-2xl focus:outline-none focus:border-orange-500/50 transition-all text-white font-bold placeholder:text-zinc-600 disabled:opacity-50"
                  />
               </div>
               <div className="space-y-3">
                  <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest ml-1">Email Address</label>
                  <input 
                    required 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    disabled={formStatus === 'sending'}
                    className="w-full px-6 py-5 bg-zinc-900/50 border border-white/5 rounded-2xl focus:outline-none focus:border-orange-500/50 transition-all text-white font-bold placeholder:text-zinc-600 disabled:opacity-50"
                  />
               </div>
            </div>

            {/* Categorization Selection */}
            <div className="space-y-3">
               <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest ml-1">Subject</label>
               <div className="relative">
                  <select 
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    disabled={formStatus === 'sending'}
                    className="w-full px-6 py-5 bg-zinc-900/50 border border-white/5 rounded-2xl focus:outline-none focus:border-orange-500/50 transition-all text-white font-bold appearance-none cursor-pointer disabled:opacity-50"
                  >
                    <option>General Inquiry</option>
                    <option>Project Request</option>
                    <option>Job Opportunity</option>
                    <option>Collaboration</option>
                  </select>
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500">
                     <ArrowRight size={16} className="rotate-90" />
                  </div>
               </div>
            </div>

            {/* Content Payload Area */}
            <div className="space-y-3">
               <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest ml-1">Message</label>
               <textarea 
                 required 
                 name="message"
                 value={formData.message}
                 onChange={handleInputChange}
                 placeholder="Tell me about your project..."
                 disabled={formStatus === 'sending'}
                 className="w-full px-6 py-5 bg-zinc-900/50 border border-white/5 rounded-[2rem] focus:outline-none focus:border-orange-500/50 transition-all text-white font-bold min-h-[160px] resize-none placeholder:text-zinc-600 disabled:opacity-50"
               ></textarea>
            </div>

            {/* Submission Authority */}
            <div className="space-y-4">
              <Magnetic>
                 <button 
                   type="submit"
                   disabled={formStatus === 'sending' || formStatus === 'success'}
                   className={`w-full py-7 font-black rounded-[2rem] text-sm uppercase tracking-[0.3em] shadow-xl transition-all flex items-center justify-center gap-4 group
                     ${formStatus === 'success' 
                       ? 'bg-green-600 text-white cursor-default' 
                       : 'bg-orange-600 hover:bg-orange-500 text-white shadow-orange-600/20'
                     } disabled:opacity-70`}
                 >
                   {formStatus === 'idle' && (
                     <>Send Message <SendHorizontal size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                   )}
                   {formStatus === 'sending' && (
                     <div className="flex items-center gap-2">
                       <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                       Sending...
                     </div>
                   )}
                   {formStatus === 'success' && (
                     <div className="flex items-center gap-2">
                       <CheckCircle2 size={18} />
                       Message Sent!
                     </div>
                   )}
                   {formStatus === 'error' && (
                      <div className="flex items-center gap-2">
                        <AlertCircle size={18} />
                        Retry Message
                      </div>
                   )}
                 </button>
              </Magnetic>

              {/* Status Notifications */}
              {formStatus === 'success' && (
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-green-500 text-[10px] font-black uppercase tracking-widest"
                >
                  I'll get back to you shortly!
                </motion.p>
              )}
              {formStatus === 'error' && (
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-red-500 text-[10px] font-black uppercase tracking-widest"
                >
                  Something went wrong. Please try again or email directly.
                </motion.p>
              )}
            </div>
          </form>
        </motion.div>

      </div>
    </section>
  );
};
