import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      className="bg-secondary text-white"
      itemScope
      itemType="http://schema.org/WPFooter"
    >
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Sobre */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-bold">
                <span className="text-primary">ZENITH</span>
                <span className="text-white">8</span>
              </span>
            </Link>
            <p className="text-gray-300 mb-4">
              Desenvolvemos soluções tecnológicas inovadoras para impulsionar o
              seu negócio ao topo.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/zenith8.tech"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                <FaTwitter size={20} />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-primary pb-2">
              Links Rápidos
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/sobre"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  to="/servicos"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Serviços
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Portfólio
                </Link>
              </li>
              <li>
                <Link
                  to="/contato"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-primary pb-2">
              Nossos Serviços
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/servicos"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Desenvolvimento Web
                </Link>
              </li>
              <li>
                <Link
                  to="/servicos"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Desenvolvimento Mobile
                </Link>
              </li>
              <li>
                <Link
                  to="/servicos"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Design UI/UX
                </Link>
              </li>
              <li>
                <Link
                  to="/servicos"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Consultoria Tecnológica
                </Link>
              </li>
              <li>
                <Link
                  to="/servicos"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Soluções com IA
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div itemScope itemType="http://schema.org/Organization">
            <h3 className="text-lg font-bold mb-4 border-b border-primary pb-2">
              Contato
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                {/* @ts-expect-error - className não existe no tipo IconBaseProps */}
                <FaMapMarkerAlt className="text-primary mt-1 flex-shrink-0" />
                <span
                  className="text-gray-300"
                  itemProp="address"
                  itemScope
                  itemType="http://schema.org/PostalAddress"
                >
                  <span itemProp="streetAddress">
                    Rua João Bonifácio Correa, 1553
                  </span>{" "}
                  -{" "}
                  <span itemProp="addressLocality">
                    São Francisco do Sul - SC
                  </span>
                </span>
              </li>
              <li className="flex items-center space-x-3">
                {/* @ts-expect-error - className não existe no tipo IconBaseProps */}
                <FaPhone className="text-primary flex-shrink-0" />
                <a
                  href="tel:+5547992934942"
                  className="text-gray-300 hover:text-primary transition-colors"
                  itemProp="telephone"
                >
                  +55 (47) 99293-4942
                </a>
              </li>
              <li className="flex items-center space-x-3">
                {/* @ts-expect-error - className não existe no tipo IconBaseProps */}
                <FaEnvelope className="text-primary flex-shrink-0" />
                <a
                  href="mailto:zenith8.contato@gmail.com"
                  className="text-gray-300 hover:text-primary transition-colors"
                  itemProp="email"
                >
                  zenith8.contato@gmail.com
                </a>
              </li>
            </ul>
            <meta itemProp="name" content="Zenith8" />
            <link itemProp="url" href="https://zenith8.com.br" />
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            &copy; {year} Zenith8 Tech Agency. Todos os direitos reservados.
          </p>
          <p className="mt-2 text-sm">
            <Link
              to="/politica-de-privacidade"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              Política de Privacidade
            </Link>{" "}
            |
            <Link
              to="/termos-de-uso"
              className="text-gray-400 hover:text-primary transition-colors ml-2"
            >
              Termos de Uso
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
