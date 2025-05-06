import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaMobile,
  FaPalette,
  FaBrain,
  FaLaptopCode,
  FaChevronDown,
} from "react-icons/fa";
import { Link } from "react-router-dom";
// @ts-ignore
import logo1 from "../assets/1.png";
// @ts-ignore
import logo3 from "../assets/3.png";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const services = [
    {
      id: 1,
      icon: <FaCode className="text-4xl text-primary mb-4" />,
      title: "Desenvolvimento Web",
      description:
        "Criamos sites e aplicações web responsivas, modernas e de alta performance.",
    },
    {
      id: 2,
      icon: <FaMobile className="text-4xl text-primary mb-4" />,
      title: "Desenvolvimento Mobile",
      description:
        "Aplicativos nativos e híbridos para iOS e Android com design intuitivo.",
    },
    {
      id: 3,
      icon: <FaPalette className="text-4xl text-primary mb-4" />,
      title: "Design UI/UX",
      description:
        "Interfaces atraentes e experiências de usuário que encantam os clientes.",
    },
    {
      id: 4,
      icon: <FaBrain className="text-4xl text-primary mb-4" />,
      title: "Soluções com IA",
      description:
        "Inteligência artificial para automatizar e otimizar processos de negócio.",
    },
    {
      id: 5,
      icon: <FaLaptopCode className="text-4xl text-primary mb-4" />,
      title: "Consultoria Tecnológica",
      description:
        "Orientação estratégica para implementação de tecnologias inovadoras.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative bg-gradient-to-r from-secondary to-gray-900 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute w-full h-full">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-20 w-80 h-80 bg-primary-light/30 rounded-full mix-blend-overlay filter blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/3 right-1/4 w-60 h-60 bg-primary/10 rounded-full mix-blend-overlay filter blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

          {/* Code-like animated elements */}
          <div className="hidden lg:block absolute top-20 left-40 text-primary/20 text-6xl font-mono animate-pulse">{`{}`}</div>
          <div
            className="hidden lg:block absolute bottom-20 right-60 text-primary/20 text-6xl font-mono animate-pulse"
            style={{ animationDelay: "1.5s" }}
          >{`</>`}</div>
          <div
            className="hidden lg:block absolute top-40 right-40 text-primary/20 text-6xl font-mono animate-pulse"
            style={{ animationDelay: "0.8s" }}
          >{`<>`}</div>
        </div>

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={fadeIn}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Transforme sua presença digital com a{" "}
                <span className="text-primary">Zenith8</span>
              </h1>
              <p className="text-gray-300 text-xl mb-8 max-w-xl">
                Desenvolvemos soluções tecnológicas inovadoras para elevar seu
                negócio ao topo. Do design ao desenvolvimento, conte com nossa
                expertise.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => {
                    const message = encodeURIComponent(
                      "Olá, gostaria de saber mais sobre os serviços da Zenith8."
                    );
                    window.open(
                      `https://wa.me/5547992934942?text=${message}`,
                      "_blank"
                    );
                  }}
                  className="btn-primary text-lg px-8 py-3 flex items-center group"
                >
                  <span>Fale Conosco</span>
                  <motion.span
                    className="ml-2 inline-block"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    →
                  </motion.span>
                </button>
                <Link
                  to="/servicos"
                  className="border-2 border-primary text-white hover:bg-primary hover:text-white transition-all duration-300 text-lg px-8 py-3 rounded"
                >
                  Nossos Serviços
                </Link>
              </div>

              {/* Scroll indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="hidden md:flex items-center mt-16 text-gray-400"
              >
                <span className="mr-2">Role para descobrir</span>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  <FaChevronDown />
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="hidden lg:block"
            >
              <div className="relative w-full h-[500px]">
                {/* Logo principal */}
                <motion.div
                  className="absolute top-0 right-0 w-[420px] h-[420px] bg-gradient-to-br from-primary/20 to-secondary/40 rounded-lg backdrop-blur-md border border-primary/20 shadow-2xl flex items-center justify-center overflow-hidden"
                  initial={{ y: 20 }}
                  animate={{ y: 0 }}
                  transition={{
                    y: {
                      repeat: Infinity,
                      repeatType: "reverse",
                      duration: 3,
                    },
                  }}
                >
                  <div className="w-full h-full flex items-center justify-center p-6 relative">
                    {/* Formas que orbitam o logo */}
                    <motion.div
                      className="absolute w-24 h-24 rounded-full border-4 border-primary/30"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    ></motion.div>

                    <motion.div
                      className="absolute w-48 h-48 rounded-full border-2 border-primary/20"
                      animate={{ rotate: -360 }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    ></motion.div>

                    {/* Logo */}
                    <motion.img
                      src={logo1}
                      alt="Zenith8 Logo"
                      className="w-80 z-10 drop-shadow-2xl"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    />
                  </div>
                </motion.div>

                {/* Card de tecnologia */}
                <motion.div
                  className="absolute bottom-0 left-0 w-[380px] h-[280px] bg-secondary/80 rounded-lg backdrop-blur-md border border-gray-700 shadow-2xl overflow-hidden"
                  initial={{ x: -20 }}
                  animate={{ x: 0 }}
                  transition={{
                    x: {
                      repeat: Infinity,
                      repeatType: "reverse",
                      duration: 3.5,
                      delay: 0.5,
                    },
                  }}
                >
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary-light via-primary to-primary-dark"></div>

                  <div className="w-full h-full flex flex-col justify-between p-8 relative">
                    <div className="flex items-center mb-6">
                      <div className="bg-primary/20 p-3 rounded-full mr-4">
                        <FaCode className="text-primary text-2xl" />
                      </div>
                      <div>
                        <div className="text-gray-400 text-sm">
                          Tecnologia de Ponta
                        </div>
                        <div className="text-white font-bold text-xl">
                          Web & Mobile
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-gray-700/30 h-8 rounded"></div>
                      <div className="bg-gray-700/30 h-8 rounded"></div>
                      <div className="bg-gray-700/30 h-8 rounded w-2/3"></div>
                    </div>

                    <div className="absolute right-6 bottom-6">
                      <img
                        src={logo3}
                        alt="Zenith8 Icon"
                        className="w-16 opacity-60"
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Elemento flutuante adicional */}
                <motion.div
                  className="absolute top-[180px] right-[350px] bg-primary/10 rounded-lg border border-primary/30 backdrop-blur-md p-3 shadow-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <motion.div
                    animate={{
                      rotate: [0, 5, 0, -5, 0],
                      y: [0, -5, 0, 5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <div className="text-primary">
                      <FaLaptopCode className="text-3xl" />
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Nossos Serviços
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-600 text-xl max-w-2xl mx-auto">
                Soluções tecnológicas completas para impulsionar o seu negócio
              </p>
            </motion.div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={fadeIn}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow group"
              >
                <div className="text-center">
                  {service.icon}
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Link to="/servicos" className="btn-primary inline-block px-8 py-3">
              Ver Todos os Serviços
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Pronto para impulsionar seu negócio?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl mb-8"
            >
              Entre em contato conosco hoje mesmo e descubra como podemos ajudar
              sua empresa a alcançar novos patamares com soluções digitais
              inovadoras.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <button
                onClick={() => {
                  const message = encodeURIComponent(
                    "Olá, gostaria de saber mais sobre os serviços da Zenith8."
                  );
                  window.open(
                    `https://wa.me/5547992934942?text=${message}`,
                    "_blank"
                  );
                }}
                className="bg-white text-primary hover:bg-gray-100 font-bold text-lg px-8 py-3 rounded inline-block transition-colors"
              >
                Fale Conosco
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
