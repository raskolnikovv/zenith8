import { useState } from "react";
import { motion } from "framer-motion";
import { FaGlobe, FaMobile, FaStore, FaArrowRight } from "react-icons/fa";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "EcoCommerce",
      category: "ecommerce",
      type: "Loja Virtual",
      description:
        "Desenvolvimento de uma loja virtual completa para produtos sustentáveis, com integração de pagamentos e gestão de estoque.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
      image: "https://via.placeholder.com/600x400?text=EcoCommerce",
      // @ts-expect-error - Incompatibilidade com tipos do react-icons
      icon: <FaStore className="text-primary text-xl" />,
    },
    {
      id: 2,
      title: "HealthTrack",
      category: "mobile",
      type: "Aplicativo Mobile",
      description:
        "Aplicativo de monitoramento de saúde e bem-estar que permite aos usuários acompanhar atividades físicas, alimentação e sono.",
      technologies: ["React Native", "Firebase", "Redux", "HealthKit API"],
      image: "https://via.placeholder.com/600x400?text=HealthTrack",
      // @ts-expect-error - Incompatibilidade com tipos do react-icons
      icon: <FaMobile className="text-primary text-xl" />,
    },
    {
      id: 3,
      title: "FinTech Dashboard",
      category: "web",
      type: "Aplicação Web",
      description:
        "Dashboard interativo para uma fintech que oferece análise de dados financeiros em tempo real e visualizações personalizadas.",
      technologies: ["Angular", "TypeScript", "D3.js", "Node.js", "PostgreSQL"],
      image: "https://via.placeholder.com/600x400?text=FinTech+Dashboard",
      // @ts-expect-error - Incompatibilidade com tipos do react-icons
      icon: <FaGlobe className="text-primary text-xl" />,
    },
    {
      id: 4,
      title: "TravelBuddy",
      category: "mobile",
      type: "Aplicativo Mobile",
      description:
        "Aplicativo de planejamento de viagens que oferece roteiros personalizados, recomendações locais e reservas em tempo real.",
      technologies: ["Flutter", "Dart", "Google Maps API", "Firebase"],
      image: "https://via.placeholder.com/600x400?text=TravelBuddy",
      // @ts-expect-error - Incompatibilidade com tipos do react-icons
      icon: <FaMobile className="text-primary text-xl" />,
    },
    {
      id: 5,
      title: "EdTech Platform",
      category: "web",
      type: "Plataforma Web",
      description:
        "Plataforma educacional completa com cursos online, sistema de avaliação e certificação digital para estudantes.",
      technologies: ["React", "Next.js", "MongoDB", "AWS", "WebRTC"],
      image: "https://via.placeholder.com/600x400?text=EdTech+Platform",
      // @ts-expect-error - Incompatibilidade com tipos do react-icons
      icon: <FaGlobe className="text-primary text-xl" />,
    },
    {
      id: 6,
      title: "FashionHub",
      category: "ecommerce",
      type: "Marketplace",
      description:
        "Marketplace de moda que conecta designers independentes com consumidores, oferecendo uma experiência de compra personalizada.",
      technologies: ["Vue.js", "Node.js", "MySQL", "Docker", "Cloudinary"],
      image: "https://via.placeholder.com/600x400?text=FashionHub",
      // @ts-expect-error - Incompatibilidade com tipos do react-icons
      icon: <FaStore className="text-primary text-xl" />,
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-secondary to-gray-900 text-white">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nosso Portfólio
            </h1>
            <p className="text-xl text-gray-300">
              Conheça alguns dos projetos que desenvolvemos para nossos clientes
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filtros */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center space-x-2 md:space-x-4">
            <button
              onClick={() => setFilter("all")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 mb-2 ${
                filter === "all"
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Todos
            </button>
            <button
              onClick={() => setFilter("web")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 mb-2 ${
                filter === "web"
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Web
            </button>
            <button
              onClick={() => setFilter("mobile")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 mb-2 ${
                filter === "mobile"
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Mobile
            </button>
            <button
              onClick={() => setFilter("ecommerce")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 mb-2 ${
                filter === "ecommerce"
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              E-commerce
            </button>
          </div>
        </div>
      </section>

      {/* Projetos */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-lg group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <button className="bg-primary text-white px-4 py-2 rounded-full flex items-center space-x-2 text-sm">
                      <span>Ver detalhes</span>
                      <FaArrowRight />
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    {project.icon}
                    <span className="text-sm font-medium text-gray-500 ml-2">
                      {project.type}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Estatísticas */}
      <section className="py-20 bg-primary text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="p-6"
            >
              <h3 className="text-4xl font-bold mb-2">100+</h3>
              <p className="text-gray-200">Projetos Entregues</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-6"
            >
              <h3 className="text-4xl font-bold mb-2">50+</h3>
              <p className="text-gray-200">Clientes Satisfeitos</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="p-6"
            >
              <h3 className="text-4xl font-bold mb-2">15+</h3>
              <p className="text-gray-200">Prêmios de Design</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="p-6"
            >
              <h3 className="text-4xl font-bold mb-2">5+</h3>
              <p className="text-gray-200">Anos de Experiência</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">
              O Que Nossos Clientes Dizem
            </h2>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto">
              A satisfação de nossos clientes é o nosso maior indicador de
              sucesso
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-lg relative"
            >
              <div className="text-primary text-4xl absolute -top-5 left-8">
                "
              </div>
              <p className="text-gray-600 mb-6 relative z-10">
                A Zenith8 entregou um site que superou todas as nossas
                expectativas. O design moderno e a usabilidade têm recebido
                elogios constantes dos nossos clientes.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center text-white font-bold">
                  ML
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">Maria Lima</h4>
                  <p className="text-gray-500 text-sm">CEO, GreenTech</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-lg relative"
            >
              <div className="text-primary text-4xl absolute -top-5 left-8">
                "
              </div>
              <p className="text-gray-600 mb-6 relative z-10">
                O aplicativo desenvolvido pela equipe da Zenith8 revolucionou
                nosso modelo de negócio. A experiência do usuário é impecável e
                a performance é excelente.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center text-white font-bold">
                  RS
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">Ricardo Santos</h4>
                  <p className="text-gray-500 text-sm">Diretor, MobiHealth</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-lg relative"
            >
              <div className="text-primary text-4xl absolute -top-5 left-8">
                "
              </div>
              <p className="text-gray-600 mb-6 relative z-10">
                Trabalhar com a Zenith8 foi uma experiência incrível. Eles
                realmente entenderam nossas necessidades e nos entregaram uma
                solução sob medida.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center text-white font-bold">
                  CA
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">Carla Almeida</h4>
                  <p className="text-gray-500 text-sm">
                    Gerente de Marketing, FashionStore
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
