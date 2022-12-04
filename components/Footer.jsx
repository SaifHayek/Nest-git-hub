import React from "react";
import styles from "../styles/Footer.module.css";
import { useTranslation } from "next-i18next";




const Footer = () => {
  const { t } = useTranslation();
  return <footer className={styles.footer}>{t("footer.copy")}</footer>;
};

export default Footer;
