import React from "react";
import logo from "../../assets/logo.png";
import "./Footer.css";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation(["Footer"]);
  return (
    <div className="footer-wrapper">
      <div className="footer-toper">
        <img src={logo} alt="" />
        <div>
          <a href="">{t("media")}</a>
          <a href="">{t("news")}</a>
          <a href="">{t("impact")}</a>
          <a href="">{t("privacyPolicy")}</a>
          <a href="">{t("disclaimer")}</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p style={{ textAlign: "center" }}>{t("copyright")}</p>
      </div>
    </div>
  );
};

export default Footer;
