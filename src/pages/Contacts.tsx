
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/contexts/LanguageContext";

const Contacts = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 to-slate-800/85"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070')] bg-cover bg-center"></div>
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Contact <span className="text-yellow-400">Us</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Get in touch with our experts for all your explosive solutions needs
          </motion.p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent mb-8">
                Get In Touch
              </h2>
              
              <div className="space-y-6">
                {[
                  {
                    icon: Phone,
                    title: "Phone",
                    info: "+258 713 365 874",
                    description: "Available 24/7 for emergency services"
                  },
                  {
                    icon: Mail,
                    title: "Email",
                    info: "info@hdacompany.com",
                    description: "We'll respond within 24 hours"
                  },
                  {
                    icon: MapPin,
                    title: "Address",
                    info: "Maputo, Mozambique",
                    description: "Visit our headquarters"
                  },
                  {
                    icon: Clock,
                    title: "Business Hours",
                    info: "Mon - Fri: 8:00 AM - 6:00 PM",
                    description: "Saturday: 9:00 AM - 2:00 PM"
                  }
                ].map((contact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="bg-yellow-500 p-3 rounded-lg">
                      <contact.icon className="h-6 w-6 text-slate-900" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{contact.title}</h3>
                      <p className="text-yellow-400 font-semibold mb-1">{contact.info}</p>
                      <p className="text-gray-300 text-sm">{contact.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="bg-slate-700 border-yellow-400/30">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-300 mb-2">First Name</label>
                        <Input 
                          className="bg-slate-600 border-slate-500 text-white placeholder-gray-400 focus:border-yellow-400 transition-all duration-300 hover:border-yellow-400/50"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-300 mb-2">Last Name</label>
                        <Input 
                          className="bg-slate-600 border-slate-500 text-white placeholder-gray-400 focus:border-yellow-400 transition-all duration-300 hover:border-yellow-400/50"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-gray-300 mb-2">Email</label>
                      <Input 
                        type="email"
                        className="bg-slate-600 border-slate-500 text-white placeholder-gray-400 focus:border-yellow-400 transition-all duration-300 hover:border-yellow-400/50"
                        placeholder="john@example.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-300 mb-2">Phone</label>
                      <Input 
                        className="bg-slate-600 border-slate-500 text-white placeholder-gray-400 focus:border-yellow-400 transition-all duration-300 hover:border-yellow-400/50"
                        placeholder="+258 XXX XXX XXX"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-300 mb-2">Subject</label>
                      <Input 
                        className="bg-slate-600 border-slate-500 text-white placeholder-gray-400 focus:border-yellow-400 transition-all duration-300 hover:border-yellow-400/50"
                        placeholder="How can we help you?"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-300 mb-2">Message</label>
                      <Textarea 
                        className="bg-slate-600 border-slate-500 text-white placeholder-gray-400 focus:border-yellow-400 transition-all duration-300 hover:border-yellow-400/50 min-h-[120px]"
                        placeholder="Tell us about your project requirements..."
                      />
                    </div>
                    
                    <Button 
                      type="submit"
                      size="lg"
                      className="w-full bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold transition-all duration-300 hover:scale-105"
                    >
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent mb-4">
              Visit Our Location
            </h2>
            <p className="text-xl text-gray-300">
              Find us in the heart of Maputo
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-slate-800 p-4 rounded-lg"
          >
            <div className="bg-slate-600 h-96 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-400">
                <MapPin className="h-16 w-16 mx-auto mb-4" />
                <p className="text-lg">Interactive Map Coming Soon</p>
                <p className="text-sm">Maputo, Mozambique</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contacts;
