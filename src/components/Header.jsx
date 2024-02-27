import React from "react";
import { useEffect, useState } from "react";
import logo from "../assets/logo memk service/logo couleur.svg";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 100); // Change 100 to the desired scroll position
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 shadow-sm w-full bg-slate-100 z-50 ${
        scrolled ? "bg-sky-950 transition-all duration-300" : ""
      }`}
    >
      <nav className=" m-auto flex  max-w-7xl items-center justify-between px-3 py-5 z-50">
        <a href="/" className="flex items-center gap-3">
          <img src={logo} width={120} height={100} alt="logo" />
        </a>
        <ul className=" hidden lg:flex font-heading mx-auto space-x-12 px-4 font-semibold text-customBlue">
          <li>
            <a className="hover:text-customVert" href="/#">
              Accueil
            </a>
          </li>
          <li>
            <a className="hover:text-customVert" href="/#">
              Services
            </a>
          </li>
          <li>
            <a className="hover:text-customVert" href="/#">
              About
            </a>
          </li>
          <li>
            <a className="hover:text-customVert" href="/#">
              Contact
            </a>
          </li>
        </ul>
        <button className="group relative h-10 overflow-hidden  rounded-lg bg-customBlue px-6 text-base font-bold text-white">
          <a href="#contact">Nous Contacts</a>
          <div className="absolute inset-0 h-full w-full scale-0 rounded-lg transition-all duration-300 group-hover:scale-100 group-hover:bg-white/10"></div>
        </button>
      </nav>
    </header>
  );
}
