import React from "react";

import styles from "./alimentacion-consciente.module.css";
import { appDataText } from "../../../../appDataText/appDataText";
import imagePsicoterapia from "../../../../images/imageServices/imageTerapiasComplementarias/alimentacion consciente.png";

// import imagePsicoterapia from "../../../../images/imageServices/imageTerapiasComplementarias/imageAlimentacionConsciente.jpg";
// <a href='https://www.freepik.es/vectores/dibujos-animados'>Vector de Dibujos animados creado por vectorjuice - www.freepik.es</a>
function AlimentacionConsciente() {
  const benefitsList =
    appDataText.espanol.services.naturalPeopleService.serviceNaturalPeople2
      .terapiasComplementarias.terapia2.benefits.benefits;

  return (
    <div className={styles.containerService}>
      <div className={styles.containerImage}>
        <img className={styles.image} alt="" src={imagePsicoterapia} />
      </div>
      <h2 className={styles.titleService}>
        {
          appDataText.espanol.services.naturalPeopleService
            .serviceNaturalPeople2.terapiasComplementarias.terapia2.title
        }
      </h2>
      <div className={styles.containerDescripcion}>
        <div className={styles.text}>
          {
            appDataText.espanol.services.naturalPeopleService
              .serviceNaturalPeople2.terapiasComplementarias.terapia2
              .description
          }
        </div>
        <div className={styles.text}>
          {
            appDataText.espanol.services.naturalPeopleService
              .serviceNaturalPeople2.terapiasComplementarias.terapia2
              .description2
          }
        </div>
        <div className={styles.text}>
          {
            appDataText.espanol.services.naturalPeopleService
              .serviceNaturalPeople2.terapiasComplementarias.terapia2
              .description3
          }
        </div>
        <div className={styles.text}>
          {
            appDataText.espanol.services.naturalPeopleService
              .serviceNaturalPeople2.terapiasComplementarias.terapia2
              .description4
          }
        </div>
      </div>
      <div className={styles.containerBenefist}>
        <h4 className={styles.subtitle}>
          {
            appDataText.espanol.services.naturalPeopleService
              .serviceNaturalPeople2.terapiasComplementarias.terapia2.benefits
              .title
          }
        </h4>
        <div className={styles.text}>
          {benefitsList.map((item, index) => {
            return (
              <ul key={index}>
                <li>{item}</li>
              </ul>
            );
          })}
        </div>
      </div>
      <div className={styles.lenguage}>
        <h4 className={styles.subtitleLenguage}>
          {
            appDataText.espanol.services.naturalPeopleService
              .serviceNaturalPeople2.terapiasComplementarias.terapia2
              .subtitlelanguage
          }
        </h4>
        <p className={styles.text}>
          {
            appDataText.espanol.services.naturalPeopleService
              .serviceNaturalPeople2.terapiasComplementarias.terapia2.language
          }
        </p>
      </div>
    </div>
  );
}
export default AlimentacionConsciente;
