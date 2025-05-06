import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SEOHelmet from "./components/SEOHelmet";
import { trackPageView } from "./utils/analytics";
import { captureError } from "./utils/error-monitoring";

// Componente de ScrollToTop para garantir que as páginas carreguem no topo
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    try {
      // Rolagem para o topo
      window.scrollTo(0, 0);

      // Rastreia visualização de página para analytics
      trackPageView(pathname);

      // Atualiza o título da página conforme a navegação
      updateMetaTags(pathname);
    } catch (error) {
      // Captura e reporta erros
      captureError(error as Error, { location: pathname });
    }
  }, [pathname]);

  return null;
};

// Função para atualizar meta tags dinâmicas
const updateMetaTags = (pathname: string) => {
  let title = "Zenith8 | Soluções Digitais Inovadoras";
  let description =
    "A Zenith8 é uma agência de desenvolvimento web e mobile especializada em soluções digitais inovadoras.";

  switch (pathname) {
    case "/":
      title = "Zenith8 | Soluções Digitais Inovadoras";
      description =
        "Transforme sua presença digital com a Zenith8. Desenvolvemos soluções tecnológicas inovadoras para elevar seu negócio ao topo.";
      break;
    case "/sobre":
      title = "Sobre Nós | Zenith8";
      description =
        "Conheça a história da Zenith8, nossa missão, valores e a equipe por trás de soluções tecnológicas inovadoras.";
      break;
    case "/servicos":
      title = "Nossos Serviços | Zenith8";
      description =
        "Oferecemos serviços de desenvolvimento web, mobile, design UI/UX, consultoria tecnológica e soluções com inteligência artificial.";
      break;
    case "/portfolio":
      title = "Portfólio | Zenith8";
      description =
        "Conheça os projetos desenvolvidos pela Zenith8. Casos de sucesso e soluções personalizadas para diferentes setores.";
      break;
    case "/contato":
      title = "Contato | Zenith8";
      description =
        "Entre em contato com a Zenith8. Estamos prontos para ajudar a transformar sua presença digital e impulsionar seu negócio.";
      break;
  }

  // Atualiza o título e a descrição do documento
  document.title = title;

  // Atualiza a meta description
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute("content", description);
  }

  // Atualiza as tags Open Graph
  const ogTitle = document.querySelector('meta[property="og:title"]');
  const ogDescription = document.querySelector(
    'meta[property="og:description"]'
  );

  if (ogTitle) ogTitle.setAttribute("content", title);
  if (ogDescription) ogDescription.setAttribute("content", description);

  // Atualiza as tags Twitter
  const twitterTitle = document.querySelector('meta[property="twitter:title"]');
  const twitterDescription = document.querySelector(
    'meta[property="twitter:description"]'
  );

  if (twitterTitle) twitterTitle.setAttribute("content", title);
  if (twitterDescription)
    twitterDescription.setAttribute("content", description);
};

// Componente principal de SEO para toda a aplicação
const AppSEO = () => {
  return (
    <SEOHelmet
      title="Zenith8 | Soluções Digitais Inovadoras"
      description="A Zenith8 é uma agência de desenvolvimento web e mobile especializada em criar soluções digitais inovadoras que transformam a presença online de empresas."
    >
      {/* Tags de segurança adicionais */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Zenith8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
      />
      <meta name="theme-color" content="#2E9D5D" />
    </SEOHelmet>
  );
};

// Componente ErrorBoundary básico para capturar erros de renderização
class ErrorBoundary extends React.Component<{ children: React.ReactNode }> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Reporta erro para o Sentry
    captureError(error, { errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="container-custom py-20 text-center">
          <h2 className="text-2xl font-bold mb-4">Algo deu errado</h2>
          <p className="mb-4">
            Desculpe pelo inconveniente. Tente recarregar a página.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="btn-primary"
          >
            Recarregar
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <AppSEO />
        <div className="min-h-screen flex flex-col">
          <ScrollToTop />
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sobre" element={<About />} />
              <Route path="/servicos" element={<Services />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contato" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
