"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, i18n } = useTranslation("common");

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const changeLanguage = (lng: string) => {
    if (i18n?.changeLanguage) {
      i18n.changeLanguage(lng);
    } else {
      console.error("i18n not initialized yet");
    }
  };

  return (
    <>
      {/* Top Bar */}
      <div
        className={`fixed top-0 left-0 w-full z-40 flex items-center justify-between px-6 py-4 transition-all ${
          scrolled ? "bg-black text-white shadow-md" : "bg-transparent text-white"
        }`}
      >
        {/* Left: ☰ button */}
        <button
          onClick={() => setMenuOpen(true)}
          aria-label="menu"
          className="text-3xl drop-shadow-lg"
        >
          ☰
        </button>

        {/* Center: Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <div className="font-serif text-2xl tracking-wide">JUMEIRAH</div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-6 font-medium">
          {/* Reserve button (always visible on all devices) */}
          <button
            className={`px-4 py-2 rounded-md font-semibold transition-colors ${
              scrolled ? "bg-white text-black" : "bg-black text-white"
            }`}
          >
            {t("Reserve")}
          </button>

          {/* Desktop only options */}
          <div className="hidden md:flex items-center gap-6">
            <select
              onChange={(e) => changeLanguage(e.target.value)}
              className="bg-black border border-white px-2 py-1 rounded"
              value={i18n.language}
            >
              <option value="en">English</option>
              <option value="ar">Arabic</option>
              <option value="fr">French</option>
              <option value="de">German</option>
              <option value="ur">Urdu</option>
            </select>

            <button className="hover:underline">{t("Login")}</button>
            <button className="hover:underline">{t("MyReservation")}</button>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-black text-white z-50 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close */}
        <div className="flex justify-end p-4">
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="close"
            className="text-2xl"
          >
            ✕
          </button>
        </div>

        {/* Logo */}
        <div className="mt-20 mb-10 text-center font-serif text-3xl">
          JUMEIRAH
        </div>

        {/* Links */}
        <nav className="flex flex-col items-center gap-6 text-lg">
          <Link href="#" onClick={() => setMenuOpen(false)}>
            {t("Home")}
          </Link>
          <Link href="#properties" onClick={() => setMenuOpen(false)}>
            {t("Properties")}
          </Link>
          <Link href="#gallery" onClick={() => setMenuOpen(false)}>
            {t("Gallery")}
          </Link>
          <Link href="#policies" onClick={() => setMenuOpen(false)}>
            {t("Policies")}
          </Link>
          <Link href="#faqs" onClick={() => setMenuOpen(false)}>
            {t("FAQS")}
          </Link>
          <Link href="#contact" onClick={() => setMenuOpen(false)}>
            {t("Contact")}
          </Link>
        </nav>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </>
  );
}
