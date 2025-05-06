import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const activeClass = (path: string) => {
    if (isActive(path)) {
      return scrolled
        ? "text-primary font-bold border-b-2 border-primary"
        : "text-primary font-bold border-b-2 border-primary";
    }
    return "";
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold">
            <span className={scrolled ? "text-primary" : "text-white"}>
              ZENITH
            </span>
            <span className={scrolled ? "text-secondary" : "text-primary"}>
              8
            </span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className={`font-medium hover:text-primary transition-colors ${
              scrolled ? "" : "text-white"
            } ${activeClass("/")}`}
          >
            Home
          </Link>
          <Link
            to="/sobre"
            className={`font-medium hover:text-primary transition-colors ${
              scrolled ? "" : "text-white"
            } ${activeClass("/sobre")}`}
          >
            Sobre
          </Link>
          <Link
            to="/servicos"
            className={`font-medium hover:text-primary transition-colors ${
              scrolled ? "" : "text-white"
            } ${activeClass("/servicos")}`}
          >
            Serviços
          </Link>
          <Link
            to="/portfolio"
            className={`font-medium hover:text-primary transition-colors ${
              scrolled ? "" : "text-white"
            } ${activeClass("/portfolio")}`}
          >
            Portfólio
          </Link>
          <Link
            to="/contato"
            className={`btn-primary ${
              isActive("/contato") ? "ring-2 ring-white" : ""
            }`}
          >
            Contato
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden text-2xl ${scrolled ? "" : "text-white"}`}
          onClick={toggleMenu}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-full bg-white shadow-md transition-all duration-300 ${
          isOpen ? "max-h-screen py-4" : "max-h-0 overflow-hidden"
        }`}
      >
        <div className="container-custom flex flex-col space-y-4">
          <Link
            to="/"
            className={`font-medium py-2 hover:text-primary transition-colors ${
              isActive("/") ? "text-primary font-bold" : ""
            }`}
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/sobre"
            className={`font-medium py-2 hover:text-primary transition-colors ${
              isActive("/sobre") ? "text-primary font-bold" : ""
            }`}
            onClick={toggleMenu}
          >
            Sobre
          </Link>
          <Link
            to="/servicos"
            className={`font-medium py-2 hover:text-primary transition-colors ${
              isActive("/servicos") ? "text-primary font-bold" : ""
            }`}
            onClick={toggleMenu}
          >
            Serviços
          </Link>
          <Link
            to="/portfolio"
            className={`font-medium py-2 hover:text-primary transition-colors ${
              isActive("/portfolio") ? "text-primary font-bold" : ""
            }`}
            onClick={toggleMenu}
          >
            Portfólio
          </Link>
          <Link
            to="/contato"
            className={`btn-primary inline-block text-center ${
              isActive("/contato") ? "ring-2 ring-white" : ""
            }`}
            onClick={toggleMenu}
          >
            Contato
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
