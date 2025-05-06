import { motion } from "framer-motion";
import { FaCog, FaLightbulb, FaRocket, FaUsers } from "react-icons/fa";
import profilePhoto from "../assets/team/everson.jpg"; // Substitua pelo nome real da sua foto
// Se você tiver uma foto, importe aqui:
// import profilePhoto from "../assets/team/your-photo.jpg"; // Substitua pelo nome real da sua foto

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const values = [
    {
      id: 1,
      // @ts-expect-error - className não existe no tipo IconBaseProps
      icon: <FaLightbulb className="text-4xl text-primary mb-4" />,
      title: "Inovação",
      description:
        "Buscamos constantemente novas tecnologias e soluções criativas para os desafios dos nossos clientes.",
    },
    {
      id: 2,
      // @ts-expect-error - className não existe no tipo IconBaseProps
      icon: <FaUsers className="text-4xl text-primary mb-4" />,
      title: "Colaboração",
      description:
        "Trabalhamos em parceria com nossos clientes, entendendo suas necessidades e objetivos.",
    },
    {
      id: 3,
      // @ts-expect-error - className não existe no tipo IconBaseProps
      icon: <FaCog className="text-4xl text-primary mb-4" />,
      title: "Excelência",
      description:
        "Comprometimento com qualidade excepcional em todos os aspectos do nosso trabalho.",
    },
    {
      id: 4,
      // @ts-expect-error - className não existe no tipo IconBaseProps
      icon: <FaRocket className="text-4xl text-primary mb-4" />,
      title: "Resultados",
      description:
        "Focados em entregar soluções que geram impacto real e mensurável para os negócios.",
    },
  ];

  const team = [
    {
      id: 1,
      name: "Everson F. Machado",
      role: "CEO & Fundador",
      bio: "Desenvolvedor full-stack apaixonado por novas tecnologias e arquiteturas de software avançadas.",
      // Se você tiver uma foto, adicione a propriedade photo:
      photo: profilePhoto,
    },
  ] as Array<{
    id: number;
    name: string;
    role: string;
    bio: string;
    photo?: string;
  }>;

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
              Sobre a Zenith8
            </h1>
            <p className="text-xl text-gray-300">
              Somos uma agência de tecnologia focada em elevar negócios através
              de soluções digitais inovadoras.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Nossa História</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Tudo começou com uma ideia simples: transformar boas ideias em
                  experiências digitais memoráveis.
                </p>
                <p>
                  Em 2020, nascia a Agência Zenith, focada em desenvolvimento
                  web e soluções criativas para empreendedores que queriam
                  marcar presença online. Ao longo dos anos, construímos sites,
                  fortalecemos marcas e aprendemos com cada projeto entregue.
                </p>
                <p>Mas em 2025, sentimos que era hora de evoluir.</p>
                <p>
                  Assim surgiu a Zenith8 — mais do que uma mudança de nome, um
                  novo posicionamento. O "8" representa infinitas
                  possibilidades, inovação contínua e a ambição de ir além dos
                  limites. Mantivemos o DNA criativo e a paixão por tecnologia,
                  mas ampliamos nossa visão: queremos impactar negócios, cidades
                  e pessoas por meio de soluções digitais inteligentes.
                </p>
                <p>Estamos apenas no começo.</p>
                <p>
                  E se você está lendo isso, talvez sua história também esteja
                  prestes a se conectar com a nossa.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-[500px] w-full overflow-hidden rounded-lg shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-light to-primary opacity-90 z-10"></div>
                <div className="absolute inset-0 z-20 flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <h3 className="text-3xl font-bold mb-4">Nossa Missão</h3>
                    <p className="text-xl mb-8">
                      Transformar ideias em soluções digitais inovadoras que
                      impulsionam o crescimento dos nossos clientes.
                    </p>
                    <div className="flex justify-center space-x-4">
                      <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                        <span className="block text-4xl font-bold">100+</span>
                        <span>Projetos Entregues</span>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                        <span className="block text-4xl font-bold">50+</span>
                        <span>Clientes Satisfeitos</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nossos Valores */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Nossos Valores</h2>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto">
              Princípios que guiam nosso trabalho e nos ajudam a entregar o
              melhor para nossos clientes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value) => (
              <motion.div
                key={value.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: value.id * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg p-8 flex"
              >
                <div className="mr-6">{value.icon}</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nossa Equipe */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Nossa Equipe</h2>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto">
              Conheça os talentos por trás das soluções inovadoras da Zenith8
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: member.id * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg p-6 text-center"
              >
                {/* Aqui é onde você pode alternar entre foto e iniciais */}
                {member.photo ? (
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                )}
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
