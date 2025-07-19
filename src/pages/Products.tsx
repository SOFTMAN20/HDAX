
import { motion } from "framer-motion";
import { Package, Shield, Zap, Truck, Star, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Products = () => {
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
            Our <span className="text-yellow-400">Products</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Premium explosive products and safety equipment for industrial applications
          </motion.p>
        </div>
      </section>

      {/* Main Products */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent mb-4">
              Product Categories
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Zap,
                title: "ANFO Explosives",
                description: "Ammonium Nitrate/Fuel Oil mixtures for controlled blasting",
                features: [
                  "High explosive power",
                  "Cost-effective solution",
                  "Customizable density",
                  "Weather resistant",
                  "Easy handling"
                ],
                image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=400"
              },
              {
                icon: Package,
                title: "Emulsion Explosives",
                description: "Water-resistant emulsion explosives for wet conditions",
                features: [
                  "Water-resistant formula",
                  "Consistent performance",
                  "Safe transportation",
                  "Controlled detonation",
                  "Environmental compliance"
                ],
                image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=400"
              },
              {
                icon: Shield,
                title: "Safety Equipment",
                description: "Complete range of blasting safety equipment and accessories",
                features: [
                  "Personal protective equipment",
                  "Detonators & primers",
                  "Safety fuses",
                  "Warning systems",
                  "Storage solutions"
                ],
                image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=400"
              }
            ].map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="bg-slate-700 border-yellow-400/30 h-full transition-all duration-300 hover:border-yellow-400 hover:shadow-lg hover:shadow-yellow-400/20 overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-8">
                    <product.icon className="h-12 w-12 text-yellow-400 mb-6 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-2xl font-bold text-white mb-4">{product.title}</h3>
                    <p className="text-gray-300 mb-6">{product.description}</p>
                    <ul className="space-y-3">
                      {product.features.map((feature, i) => (
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

      {/* Product Features */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent mb-4">
              Why Choose Our Products
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Star,
                title: "Premium Quality",
                description: "Highest quality standards in manufacturing"
              },
              {
                icon: Shield,
                title: "Safety Certified",
                description: "All products meet international safety standards"
              },
              {
                icon: Truck,
                title: "Reliable Delivery",
                description: "Secure and timely delivery worldwide"
              },
              {
                icon: CheckCircle,
                title: "Proven Performance",
                description: "Trusted by industry professionals globally"
              }
            ].map((feature, index) => (
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
                    <feature.icon className="h-10 w-10 text-yellow-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-lg font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Need Product <span className="text-yellow-400">Information?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Contact our experts for detailed product specifications and pricing
            </p>
            <Button 
              size="lg" 
              className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold px-8 py-4 text-lg"
            >
              Request Product Catalog
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products;
