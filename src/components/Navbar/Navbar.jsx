import { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/images/logo.png";

import { FaBars, FaTimes, FaDownload } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = navLinks.map((item) =>
        document.getElementById(item.id)
      );

      sections.forEach((section) => {
        if (!section) return;

        const top = section.offsetTop - 120;
        const bottom = top + section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < bottom) {
          setActive(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={scrolled ? "navbar scrolled" : "navbar"}>
      <div className="nav-container">
        {/* Logo */}

        <a href="#home" className="logo">
          <img src={logo} alt="logo" />

          <span>Jai Pratap Singh</span>
        </a>

        {/* Desktop Menu */}

        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
          {navLinks.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={active === item.id ? "active-link" : ""}
                onClick={closeMenu}
              >
                {item.label}
              </a>
            </li>
          ))}

          <li className="mobile-btn">
            <a href="/Resume.pdf" download className="resume-btn">
              <FaDownload />

              Resume
            </a>
          </li>
        </ul>

        {/* Resume Button */}

        <a href="/Resume.pdf" download className="resume-btn desktop-btn">
          <FaDownload />

          Resume
        </a>

        {/* Mobile Menu */}

        <div
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </header>
  );
};

export default Navbar;