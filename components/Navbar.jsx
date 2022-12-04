import React, { useEffect } from "react";
import styles from "../styles/Navbar.module.css";
import LocaleSwitcher from "./Language-switcher";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  useEffect(() => {
    let dir = router.locale == "ar" ? "rtl" : "ltr";
    let lang = router.locale == "ar" ? "ar" : "en";
    document.querySelector("html").setAttribute("dir", dir);
    document.querySelector("html").setAttribute("lang", lang);
  }, [router.locale]);

  return (
    <header className={styles.header}>
      <nav className="nav">
        <h1 className="main-title">Github</h1>
        <LocaleSwitcher />
      </nav>
    </header>
  );
};

export default Navbar;
