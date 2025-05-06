import { motion } from "framer-motion";
import {
  FaCode,
  FaMobile,
  FaPalette,
  FaBrain,
  FaLaptopCode,
  FaServer,
  FaChartLine,
  FaShieldAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Services = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const services = [
    {
      id: 1,
      icon: <FaCode className="text-5xl text-primary mb-6" />,
      title: "Desenvolvimento Web",
      description:
        "Criamos sites e aplicações web responsivas, modernas e de alta performance, adaptadas às necessidades do seu negócio e do seu público-alvo.",
      features: [
        "Sites institucionais",
        "Lojas virtuais",
        "Aplicações web personalizadas",
        "Sistemas de gestão",
        "Portais corporativos",
      ],
    },
    {
      id: 2,
      icon: <FaMobile className="text-5xl text-primary mb-6" />,
      title: "Desenvolvimento Mobile",
      description:
        "Desenvolvemos aplicativos nativos e híbridos para iOS e Android com interfaces intuitivas e experiências de usuário excepcionais.",
      features: [
        "Apps nativos (iOS e Android)",
        "Apps híbridos multiplataforma",
        "Integrações com APIs",
        "Funcionalidades offline",
        "UI/UX mobile especializado",
      ],
    },
    {
      id: 3,
      icon: <FaPalette className="text-5xl text-primary mb-6" />,
      title: "Design UI/UX",
      description:
        "Projetamos interfaces atraentes e experiências de usuário que encantam os clientes, sempre alinhadas com as melhores práticas do mercado.",
      features: [
        "Wireframes e protótipos",
        "Design de interfaces",
        "Testes de usabilidade",
        "Redesign de plataformas",
        "Identidade visual digital",
      ],
    },
    {
      id: 4,
      icon: <FaBrain className="text-5xl text-primary mb-6" />,
      title: "Soluções com IA",
      description:
        "Implementamos tecnologias de inteligência artificial para automatizar processos, analisar dados e criar experiências personalizadas.",
      features: [
        "Chatbots e assistentes virtuais",
        "Sistemas de recomendação",
        "Análise preditiva",
        "Processamento de linguagem natural",
        "Reconhecimento de imagens",
      ],
    },
    {
      id: 5,
      icon: <FaLaptopCode className="text-5xl text-primary mb-6" />,
      title: "Consultoria Tecnológica",
      description:
        "Oferecemos orientação estratégica para implementação de tecnologias inovadoras que impulsionam o crescimento do seu negócio.",
      features: [
        "Planejamento tecnológico",
        "Migração para a nuvem",
        "Auditoria de sistemas",
        "Avaliação de fornecedores",
        "Otimização de processos digitais",
      ],
    },
    {
      id: 6,
      icon: <FaServer className="text-5xl text-primary mb-6" />,
      title: "Infraestrutura e DevOps",
      description:
        "Gerenciamos e otimizamos ambientes de infraestrutura na nuvem, garantindo alta disponibilidade e escalabilidade.",
      features: [
        "Arquitetura na nuvem (AWS, Azure, GCP)",
        "CI/CD e automação",
        "Containerização (Docker, Kubernetes)",
        "Monitoramento e logging",
        "Otimização de performance",
      ],
    },
    {
      id: 7,
      icon: <FaChartLine className="text-5xl text-primary mb-6" />,
      title: "Marketing Digital",
      description:
        "Estratégias de marketing digital para aumentar a visibilidade da sua marca e atrair mais clientes para seu negócio.",
      features: [
        "SEO (otimização para buscadores)",
        "Marketing de conteúdo",
        "Estratégias de redes sociais",
        "E-mail marketing",
        "Analytics e relatórios de performance",
      ],
    },
    {
      id: 8,
      icon: <FaShieldAlt className="text-5xl text-primary mb-6" />,
      title: "Segurança Digital",
      description:
        "Implementamos medidas de segurança avançadas para proteger dados e aplicações contra ameaças digitais.",
      features: [
        "Auditorias de segurança",
        "Implementação de LGPD",
        "Autenticação segura",
        "Criptografia de dados",
        "Treinamento em segurança",
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-secondary to-gray-900 text-white">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nossos Serviços
            </h1>
            <p className="text-xl text-gray-300">
              Soluções digitais completas e personalizadas para impulsionar o
              seu negócio
            </p>
          </motion.div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {services.map((service) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: service.id * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="p-8">
                  <div className="text-center mb-6">
                    {service.icon}
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6 text-center">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center text-gray-700"
                      >
                        <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Processo de Trabalho */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Nosso Processo</h2>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto">
              Trabalhamos de forma estruturada para garantir resultados
              excepcionais
            </p>
          </motion.div>

          <div className="relative">
            {/* Linha do tempo */}
            <div className="hidden md:block absolute left-1/2 top-0 w-1 h-full bg-primary-light transform -translate-x-1/2"></div>

            <div className="space-y-12 relative">
              {/* Etapa 1 */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="md:w-1/2 md:pr-12 md:text-right"
              >
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-primary mb-2">
                    1. Descoberta
                  </h3>
                  <p className="text-gray-600">
                    Entendemos seus objetivos de negócio, público-alvo e
                    necessidades específicas para alinhar a solução tecnológica.
                  </p>
                </div>
                <div className="hidden md:block absolute right-0 top-8 w-5 h-5 rounded-full bg-primary transform translate-x-2.5"></div>
              </motion.div>

              {/* Etapa 2 */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="md:w-1/2 md:ml-auto md:pl-12"
              >
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-primary mb-2">
                    2. Planejamento
                  </h3>
                  <p className="text-gray-600">
                    Definimos a arquitetura, tecnologias, cronograma e recursos
                    necessários para o projeto.
                  </p>
                </div>
                <div className="hidden md:block absolute left-0 top-8 w-5 h-5 rounded-full bg-primary transform -translate-x-2.5"></div>
              </motion.div>

              {/* Etapa 3 */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="md:w-1/2 md:pr-12 md:text-right"
              >
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-primary mb-2">
                    3. Design e Desenvolvimento
                  </h3>
                  <p className="text-gray-600">
                    Criamos protótipos, desenvolvemos o código e implementamos
                    as funcionalidades de forma iterativa.
                  </p>
                </div>
                <div className="hidden md:block absolute right-0 top-8 w-5 h-5 rounded-full bg-primary transform translate-x-2.5"></div>
              </motion.div>

              {/* Etapa 4 */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="md:w-1/2 md:ml-auto md:pl-12"
              >
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-primary mb-2">
                    4. Testes e Garantia de Qualidade
                  </h3>
                  <p className="text-gray-600">
                    Realizamos testes rigorosos para garantir que tudo funcione
                    perfeitamente antes do lançamento.
                  </p>
                </div>
                <div className="hidden md:block absolute left-0 top-8 w-5 h-5 rounded-full bg-primary transform -translate-x-2.5"></div>
              </motion.div>

              {/* Etapa 5 */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="md:w-1/2 md:pr-12 md:text-right"
              >
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-primary mb-2">
                    5. Lançamento e Implementação
                  </h3>
                  <p className="text-gray-600">
                    Colocamos sua solução no ar e garantimos uma transição suave
                    para o ambiente de produção.
                  </p>
                </div>
                <div className="hidden md:block absolute right-0 top-8 w-5 h-5 rounded-full bg-primary transform translate-x-2.5"></div>
              </motion.div>

              {/* Etapa 6 */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="md:w-1/2 md:ml-auto md:pl-12"
              >
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-primary mb-2">
                    6. Suporte e Evolução
                  </h3>
                  <p className="text-gray-600">
                    Oferecemos suporte contínuo e implementamos melhorias
                    baseadas em feedback e novas necessidades.
                  </p>
                </div>
                <div className="hidden md:block absolute left-0 top-8 w-5 h-5 rounded-full bg-primary transform -translate-x-2.5"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
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
              Vamos conversar sobre o seu projeto?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl mb-8"
            >
              Entre em contato para uma consultoria gratuita e descubra como
              podemos ajudar a transformar suas ideias em realidade.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Link
                to="/contato"
                className="bg-white text-primary hover:bg-gray-100 font-bold text-lg px-8 py-3 rounded inline-block transition-colors"
              >
                Solicitar Orçamento
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
