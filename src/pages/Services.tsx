import { motion } from "framer-motion";
import { Zap, Target, BookOpen, Wrench, Shield, Users, Phone, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 to-slate-800/85"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070')] bg-cover bg-center"></div>
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Our <span className="text-yellow-400">Services</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Comprehensive explosive solutions and blasting services tailored to your specific needs
          </motion.p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent mb-4">
              Core Services
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Zap,
                title: "Explosive Products Supply",
                description: "High-quality explosive products for various applications",
                features: [
                  "ANFO Explosives",
                  "Emulsion Explosives", 
                  "Detonators & Boosters",
                  "Safety Equipment",
                  "International Supply Chain"
                ]
              },
              {
                icon: Target,
                title: "Professional Blasting Services",
                description: "Expert blasting operations with precision and safety",
                features: [
                  "Controlled Demolition",
                  "Rock Excavation",
                  "Quarry Operations",
                  "Site Preparation",
                  "Custom Blasting Solutions"
                ]
              },
              {
                icon: BookOpen,
                title: "Blasting Consultancy",
                description: "Expert consultation and training services",
                features: [
                  "Blast Design & Planning",
                  "Safety Assessments",
                  "Training Programs",
                  "Technical Support",
                  "Regulatory Compliance"
                ]
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="bg-slate-700 border-yellow-400/30 h-full transition-all duration-300 hover:border-yellow-400 hover:shadow-lg hover:shadow-yellow-400/20">
                  <CardContent className="p-8">
                    <service.icon className="h-12 w-12 text-yellow-400 mb-6 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                    <p className="text-gray-300 mb-6">{service.description}</p>
                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="text-gray-300 flex items-center">
                          <CheckCircle className="h-4 w-4 text-yellow-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent mb-4">
              Additional Services
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Wrench,
                title: "Equipment Maintenance",
                description: "Professional maintenance services for blasting equipment"
              },
              {
                icon: Shield,
                title: "Safety Training",
                description: "Comprehensive safety training programs for personnel"
              },
              {
                icon: Users,
                title: "Technical Support",
                description: "24/7 technical support and emergency response"
              },
              {
                icon: Phone,
                title: "Emergency Services",
                description: "Rapid response for urgent blasting requirements"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <Card className="bg-slate-700 border-yellow-400/30 h-full transition-all duration-300 hover:border-yellow-400 text-center">
                  <CardContent className="p-6">
                    <service.icon className="h-10 w-10 text-yellow-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-lg font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-300 text-sm">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              How we deliver exceptional results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", description: "Initial assessment and requirement analysis" },
              { step: "02", title: "Planning", description: "Detailed project planning and design" },
              { step: "03", title: "Execution", description: "Safe and efficient project execution" },
              { step: "04", title: "Support", description: "Ongoing support and maintenance" }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center relative"
              >
                <div className="text-6xl font-bold text-yellow-400/20 mb-4">{process.step}</div>
                <h3 className="text-xl font-bold text-yellow-400 mb-3">{process.title}</h3>
                <p className="text-gray-300">{process.description}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-yellow-400/30"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get <span className="text-yellow-400">Started?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Contact us today to discuss your blasting requirements and get a customized solution
            </p>
            <Button 
              size="lg" 
              className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold px-8 py-4 text-lg"
            >
              Request Consultation
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;