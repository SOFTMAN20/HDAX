
import { motion } from "framer-motion";
import { ArrowRight, Shield, Zap, Mountain, Phone, Mail, MapPin, Users, Award, Clock, Target, Wrench, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Index = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-md z-50 border-b border-slate-700">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3"
            >
              <img 
                src="/lovable-uploads/de034e97-3212-4844-9be3-b0bf04d07d5e.png" 
                alt="HDA Company Limited Logo" 
                className="h-12 w-12 object-contain"
              />
              <div className="text-2xl font-bold bg-gradient-to-r from-red-500 to-yellow-400 bg-clip-text text-transparent">
                HDA COMPANY LIMITED
              </div>
            </motion.div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-white hover:text-red-400 transition-colors">{t('home')}</a>
              <a href="#services" className="text-white hover:text-red-400 transition-colors">{t('services')}</a>
              <a href="#products" className="text-white hover:text-red-400 transition-colors">{t('products')}</a>
              <a href="#about" className="text-white hover:text-red-400 transition-colors">{t('about')}</a>
              <a href="#contact" className="text-white hover:text-red-400 transition-colors">{t('contact')}</a>
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-800/90 z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070')] bg-cover bg-center"></div>
        
        <div className="relative z-20 text-center max-w-4xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            {t('heroTitle')}
            <span className="text-red-400 block">{t('heroSubtitle')}</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
          >
            {t('heroDescription')}
            <span className="block text-lg mt-2">{t('heroTagline')}</span>
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              size="lg" 
              className="bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-4 text-lg group"
            >
              {t('ourServices')}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-8 py-4 text-lg"
            >
              {t('getConsultation')}
            </Button>
          </motion.div>
        </div>

        {/* Floating Animation Elements */}
        <div className="absolute inset-0 z-15">
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-2 h-2 bg-red-400 rounded-full opacity-60"
          ></motion.div>
          <motion.div
            animate={{ y: [0, -30, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-1/3 right-1/3 w-3 h-3 bg-red-400 rounded-full opacity-40"
          ></motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-800">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t('coreServices')}</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {t('servicesDescription')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: t('explosiveProducts'),
                description: t('explosiveProductsDesc'),
                features: [t('anfoExplosives'), t('detonators'), t('safetyEquipment'), t('internationalSupply')]
              },
              {
                icon: Target,
                title: t('blastingServices'),
                description: t('blastingServicesDesc'),
                features: [t('controlledDemolition'), t('rockExcavation'), t('quarryOperations'), t('sitePreparation')]
              },
              {
                icon: BookOpen,
                title: t('blastingConsultancy'),
                description: t('blastingConsultancyDesc'),
                features: [t('blastDesign'), t('safetyAssessments'), t('trainingPrograms'), t('technicalSupport')]
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
                <Card className="bg-slate-700 border-slate-600 h-full hover:bg-slate-600 transition-all duration-300 hover:border-red-500">
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <service.icon className="h-12 w-12 text-red-400 mb-4" />
                      <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                      <p className="text-gray-300 mb-6">{service.description}</p>
                    </div>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="text-gray-400 flex items-center">
                          <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
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

      {/* Products Section */}
      <section id="products" className="py-20 bg-slate-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t('productsTitle')}</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('productsDescription')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "ANFO Explosives", description: "Ammonium Nitrate Fuel Oil for efficient blasting" },
              { name: "Emulsion Explosives", description: "Water-resistant explosives for wet conditions" },
              { name: "Detonators", description: "Precision timing devices for controlled blasting" },
              { name: "Boosters", description: "High-energy initiating charges" },
              { name: "Safety Equipment", description: "Personal protective equipment for blasting operations" },
              { name: "Blasting Accessories", description: "Complete range of blasting support equipment" },
              { name: "Shaped Charges", description: "Specialized charges for precise cutting operations" },
              { name: "Mining Tools", description: "Professional-grade mining and drilling equipment" }
            ].map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-slate-700 p-6 rounded-lg border border-slate-600 hover:border-red-400 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center mb-4">
                  <Mountain className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{product.name}</h3>
                <p className="text-gray-400 text-sm">{product.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-red-500 to-red-600">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Users, number: "50+", label: t('expertTeam') },
              { icon: Award, number: "200+", label: t('successfulProjects') },
              { icon: Clock, number: "15+", label: t('yearsExperience') },
              { icon: Shield, number: "100%", label: t('safetyRecord') }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-white"
              >
                <stat.icon className="h-12 w-12 mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-800">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t('aboutTitle')}</h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                {t('aboutDescription')}
              </p>
              <p className="text-lg text-gray-400 mb-8">
                {t('aboutDetails')}
              </p>
              <div className="space-y-4">
                {[
                  "Certified explosive handling and supply specialists",
                  "International market reach beyond Tanzania",
                  "Comprehensive blasting consultancy services",
                  "Advanced safety management and training programs",
                  "Full range of mining explosive accessories"
                ].map((item, index) => (
                  <div key={index} className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-red-400 rounded-full mr-4"></div>
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-lg p-8">
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-6">{t('whyChoose')}</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col items-center text-center">
                      <Shield className="h-8 w-8 mb-2" />
                      <span className="text-sm font-medium">{t('uncompromisingSafety')}</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <Award className="h-8 w-8 mb-2" />
                      <span className="text-sm font-medium">{t('provenExcellence')}</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <Users className="h-8 w-8 mb-2" />
                      <span className="text-sm font-medium">{t('expertTeam')}</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <Wrench className="h-8 w-8 mb-2" />
                      <span className="text-sm font-medium">{t('fullService')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t('getInTouch')}</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {t('contactDescription')}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-red-400 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{t('headOffice')}</h3>
                  <p className="text-gray-300">Jasma Cash and Carry</p>
                  <p className="text-gray-300">Mbeya 1113, Tanzania</p>
                  <p className="text-gray-400 text-sm mt-1">Serving mining operations across Tanzania and internationally</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-red-400 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{t('phone')}</h3>
                  <p className="text-gray-300">+255 753 392 262</p>
                  <p className="text-gray-400 text-sm mt-1">{t('emergencySupport')}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-red-400 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{t('email')}</h3>
                  <p className="text-gray-300">info@hdacompany.co.tz</p>
                  <p className="text-gray-400 text-sm mt-1">{t('emailDescription')}</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="bg-slate-700 border-slate-600">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">{t('requestQuote')}</h3>
                  <form className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder={t('yourName')}
                        className="w-full px-4 py-3 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-400"
                      />
                      <input
                        type="text"
                        placeholder={t('company')}
                        className="w-full px-4 py-3 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-400"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder={t('emailAddress')}
                        className="w-full px-4 py-3 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-400"
                      />
                    </div>
                    <div>
                      <select className="w-full px-4 py-3 bg-slate-600 border border-slate-500 rounded-lg text-white focus:outline-none focus:border-red-400">
                        <option value="">{t('selectService')}</option>
                        <option value="explosives">{t('explosiveProducts')}</option>
                        <option value="blasting">{t('blastingServices')}</option>
                        <option value="consultancy">{t('blastingConsultancy')}</option>
                        <option value="accessories">Mining Accessories</option>
                      </select>
                    </div>
                    <div>
                      <textarea
                        placeholder={t('projectDetails')}
                        rows={4}
                        className="w-full px-4 py-3 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-400 resize-none"
                      ></textarea>
                    </div>
                    <Button className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3">
                      {t('sendInquiry')}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/lovable-uploads/de034e97-3212-4844-9be3-b0bf04d07d5e.png" 
                  alt="HDA Company Limited Logo" 
                  className="h-10 w-10 object-contain"
                />
                <div className="text-xl font-bold bg-gradient-to-r from-red-500 to-yellow-400 bg-clip-text text-transparent">
                  HDA COMPANY LIMITED
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                {t('footerDescription')}
              </p>
              <div className="text-gray-500 text-sm">
                <p>Jasma Cash and Carry</p>
                <p>Mbeya 1113, Tanzania</p>
                <p>Phone: +255 753 392 262</p>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">{t('ourServices')}</h4>
              <ul className="space-y-2 text-gray-400">
                <li>{t('explosiveProducts')}</li>
                <li>{t('blastingServices')}</li>
                <li>{t('blastingConsultancy')}</li>
                <li>{t('trainingPrograms')}</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">{t('coverageArea')}</h4>
              <ul className="space-y-2 text-gray-400">
                <li>{t('domesticTanzania')}</li>
                <li>{t('eastAfricaRegion')}</li>
                <li>{t('internationalMarkets')}</li>
                <li>{t('remoteSiteOperations')}</li>
              </ul>
            </div>
          </div>
          <div className="text-center pt-8 border-t border-slate-700">
            <div className="text-gray-500 text-sm">
              © 2024 HDA Company Limited. {t('allRightsReserved')}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
