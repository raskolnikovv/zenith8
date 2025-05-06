import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

const Contact = () => {
  // Número de WhatsApp da empresa
  const whatsappNumber = "5547992934942";
  const whatsappMessage =
    "Olá, gostaria de saber mais sobre os serviços da Zenith8.";

  const openWhatsApp = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-primary text-xl" />,
      title: "Endereço",
      info: "Rua João Bonifácio Correa, 1553 - São Francisco do Sul, SC, 89240-000",
    },
    {
      icon: <FaPhone className="text-primary text-xl" />,
      title: "Telefone",
      info: "+55 (47) 99293-4942",
    },
    {
      icon: <FaEnvelope className="text-primary text-xl" />,
      title: "E-mail",
      info: "zenith8.contato@gmail.com",
    },
    {
      icon: <FaClock className="text-primary text-xl" />,
      title: "Horário de Atendimento",
      info: "Segunda à Sexta, 9h às 18h",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-secondary to-gray-900 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Entre em Contato
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Estamos prontos para transformar suas ideias em soluções digitais
              de sucesso
            </p>

            <motion.button
              onClick={openWhatsApp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#25D366] text-white py-4 px-8 rounded-lg font-bold text-lg flex items-center mx-auto"
            >
              <FaWhatsapp className="mr-3 text-2xl" />
              Fale Conosco pelo WhatsApp
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Informações de Contato */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Informações de Contato */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
                <h2 className="text-2xl font-bold mb-6">
                  Informações de Contato
                </h2>

                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 mt-1">{item.icon}</div>
                      <div className="ml-4">
                        <h3 className="font-bold text-gray-800">
                          {item.title}
                        </h3>
                        <p className="text-gray-600">{item.info}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <motion.button
                    onClick={openWhatsApp}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#25D366] text-white py-3 px-6 rounded-lg font-bold flex items-center"
                  >
                    <FaWhatsapp className="mr-2 text-xl" />
                    Iniciar Conversa no WhatsApp
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Redes Sociais */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-6">Redes Sociais</h2>
                <div className="flex space-x-4">
                  <a
                    href="https://instagram.com/zenith8.tech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 hover:bg-primary hover:text-white w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
                    aria-label="Instagram"
                  >
                    <FaInstagram className="text-xl" />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 hover:bg-primary hover:text-white w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
                    aria-label="Facebook"
                  >
                    <FaFacebook className="text-xl" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 hover:bg-primary hover:text-white w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
                    aria-label="Twitter"
                  >
                    <FaTwitter className="text-xl" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 hover:bg-primary hover:text-white w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="text-xl" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section className="py-12">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-4 rounded-lg shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d429.19271155216455!2d-48.629851847742664!3d-26.26280747345695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1spt-BR!2sbr!4v1746562772714!5m2!1spt-BR!2sbr"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Zenith8"
              className="rounded-lg"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
