import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import Cookies from "js-cookie";
import React from 'react';
import { useNavigate } from "react-router-dom";
let token = Cookies.get("token");

export default function Header({
  smoothScroll,
  activeSection,
  typpage,
  typeactive,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();

  React.useEffect(() => {
  token = Cookies.get("token");
  }, [navigate]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="logo">
          <div className="logo-icon">
            <span>NBM</span>
          </div>
          <span className="logo-text">NBMstoreG</span>
        </div>

        {typpage == "index" ? (
          <nav className={`nav`}>
            <a
              href="#home"
              className={activeSection === "home" ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                smoothScroll("home");
              }}
            >
              الرئيسية
            </a>
            <a
              href="#why-us"
              className={activeSection === "why-us" ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                smoothScroll("why-us");
              }}
            >
              لماذا نحن
            </a>
            <a
              href="#services"
              className={activeSection === "services" ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                smoothScroll("services");
              }}
            >
              خدماتنا
            </a>
            <a
              href="#pricing"
              className={activeSection === "pricing" ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                smoothScroll("pricing");
              }}
            >
              الباقات
            </a>

            <div className="mobile-auth-buttons">
              <Link to="/logint" style={{ textDecoration: "none" }} className="login-btn">
                  تسجيل دخول
              </Link>

              <Link to="/logint" className="signup-btn" style={{ textDecoration: "none" }}>
                  انشاء حساب
              </Link>
            </div>
          </nav>
        ) : (
          <></>
        )}

        {!token ? (
          <div className="auth-buttons">
            <Link to="/login" style={{ textDecoration: "none" }}>
              <button className="login-btn">تسجيل دخول</button>
            </Link>

            <Link to="/register" style={{ textDecoration: "none" }}>
              <button
                className="signup-btn"
              >
                انشاء حساب
              </button>
            </Link>
          </div>
        ) : (
          <></>
        )}

        <div className={token ? "" : "btnnavigation"}>
          <Navigation typeactive={typeactive} />
        </div>
      </div>
    </header>
  );
}
