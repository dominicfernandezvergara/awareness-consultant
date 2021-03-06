import React from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import cn from "classnames";
import { useHistory } from "react-router-dom";

import styles from "./footer.module.css";
import Logo from "../logo";
import { appDataText } from "../../appDataText/appDataText";
import SocialMedia from "../social-media/social-media";

function Footer() {
  const history = useHistory();

  const onClickButtonPeopleServices = () => {
    history.push({
      pathname: "/servicios",
      state: { service: "Servicios Personas Naturales", number: 0 },
    });
  };
  const onClickButtonProfesionalServices = () => {
    history.push({
      pathname: "/servicios",
      state: { service: "Servicios Psicologos", number: 1 },
    });
  };
  const onClickButtonCompanieServices = () => {
    history.push({
      pathname: "/servicios",
      state: { service: "Servicios Empresas", number: 2 },
    });
  };
  const onClickButtonTerapieServices = () => {
    history.push({
      pathname: "/servicios",
      state: { service: "Servicios Empresas", number: 3 },
    });
  };
  return (
    <div className={styles.containerFooter}>
      <div className={styles.footerBody}>
        <div className={cn(styles.data, styles.containerServices)}>
          <h3 className={styles.title}>
            {appDataText.espanol.home.fourthSectionHome.title}
          </h3>
          <div className={styles.containerText}>
            <div className={styles.icon}>
              <ArrowForwardIosIcon />
            </div>
            <button
              onClick={onClickButtonPeopleServices}
              className={styles.button}
            >
              {appDataText.espanol.home.fourthSectionHome.services.people.title}
            </button>
          </div>

          <div className={styles.containerText}>
            <div className={styles.icon}>
              <ArrowForwardIosIcon />
            </div>
            <button
              onClick={onClickButtonProfesionalServices}
              className={styles.button}
            >
              {
                appDataText.espanol.home.fourthSectionHome.services.profesional
                  .title
              }
            </button>
          </div>
          <div className={styles.containerText}>
            <div className={styles.icon}>
              <ArrowForwardIosIcon />
            </div>
            <button
              onClick={onClickButtonCompanieServices}
              className={styles.button}
            >
              {
                appDataText.espanol.home.fourthSectionHome.services.companies
                  .title
              }
            </button>
          </div>
          <div className={styles.containerText}>
            <div className={styles.icon}>
              <ArrowForwardIosIcon />
            </div>
            <button
              onClick={onClickButtonTerapieServices}
              className={styles.button}
            >
              {
                appDataText.espanol.services.naturalPeopleService
                  .serviceNaturalPeople2.title
              }
            </button>
          </div>
        </div>
        <div className={styles.data}>
          <h3 className={styles.title}>
            {appDataText.espanol.contact.textFooter}
          </h3>
          <div className={styles.containerText}>
            <div className={styles.iconLink}>
              <PhoneIcon />
            </div>
            <a href="tel:420776212480" className={styles.text}>
              {appDataText.espanol.contact.fono.fono}
            </a>
          </div>
          <div className={styles.containerText}>
            <div className={styles.iconLink}>
              <EmailIcon />
            </div>
            <a
              href="mailto: asesorias.profesionales.holistic@gmail.com"
              className={styles.text}
            >
              {appDataText.espanol.contact.email.correo}
            </a>
          </div>
          <SocialMedia />
        </div>
      </div>
    </div>
  );
}
export default Footer;
