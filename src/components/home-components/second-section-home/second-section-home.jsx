import React from "react";
import ButtonApp from "../../button";
import cn from "classnames";
import PropTypes from "prop-types";

import styles from "./second-section-home.module.css";
import { appDataText } from "../../../appDataText/appDataText";
import { Button } from "@material-ui/core";

// la funcion recibe un titulo
//un texto, el texto del boton(buttonText)
//el path para la redireccion que hace el boton(path)
//el color para el boton que puede ser "primary" o "secondary"
//Style que puede ser "black" o nada para que sea de fondo blanco.
function SecondSectionHome({ paths, colorButton }) {
  return (
    <div className={styles.containerSecondSection}>
      <h1 className={styles.title}>¡Bienvenido!</h1>
      <p className={styles.text}>
        {appDataText.espanol.home.SecondSectionHome.title}
      </p>
      <ButtonApp
        text={appDataText.espanol.home.SecondSectionHome.buttonText}
        path="./contacto"
        color="secondary"
      />
    </div>
  );
}

SecondSectionHome.propTypes = {
  paths: PropTypes.string.isRequired,
  colorButton: PropTypes.string.isRequired,
};
export default SecondSectionHome;
