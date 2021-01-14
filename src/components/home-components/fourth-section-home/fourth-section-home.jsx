import React from "react";

import styles from "./fourth-section-home.module.css";
import { appDataText } from "../../../appDataText/appDataText";
import imagePeople from "../../../images/imageHome/imagePeople.jpeg";
import imageProfesional from "../../../images/imageHome/imageProfesional2.jpeg";
import imageCompanie from "../../../images/imageHome/imageCompanie.jpeg";
import ContainerService from "./container-service/container-service";

function FourthSectionHome() {
  const bodyPeople = (
    <ul>
      <li className={styles.text}>
        {appDataText.english.home.fourthSectionHome.services.people.service1}
      </li>
      <li className={styles.text}>
        {appDataText.english.home.fourthSectionHome.services.people.service2}
      </li>
      <li className={styles.text}>
        {appDataText.english.home.fourthSectionHome.services.people.service3}
      </li>
    </ul>
  );
  const bodyProfesional = (
    <ul>
      <li className={styles.text}>
        {
          appDataText.english.home.fourthSectionHome.services.profesional
            .service1
        }
      </li>
      <li className={styles.text}>
        {
          appDataText.english.home.fourthSectionHome.services.profesional
            .service2
        }
      </li>
      <li className={styles.text}>
        {
          appDataText.english.home.fourthSectionHome.services.profesional
            .service3
        }
      </li>
    </ul>
  );
  const bodyCompanie = (
    <div className={styles.bodyCompanie}>
      {
        appDataText.english.home.fourthSectionHome.services.companies
          .description
      }
    </div>
  );

  return (
    <div className={styles.containerSection}>
      <h2 className={styles.title}>
        {appDataText.english.home.fourthSectionHome.title}
      </h2>
      <div className={styles.services}>
        <ContainerService
          body={bodyPeople}
          title={
            appDataText.english.home.fourthSectionHome.services.people.title
          }
          image={imagePeople}
          classNameContainerText={styles.marginLeftContainerText}
          classNameContainerBody={styles.marginLeftContainerBody}
          textButton={
            appDataText.english.home.fourthSectionHome.services.people
              .buttonText
          }
        />
        <ContainerService
          body={bodyProfesional}
          title={
            appDataText.english.home.fourthSectionHome.services.profesional
              .title
          }
          image={imageProfesional}
          textButton={
            appDataText.english.home.fourthSectionHome.services.profesional
              .buttonText
          }
          imageRight={true}
        />
        <ContainerService
          body={bodyCompanie}
          title={
            appDataText.english.home.fourthSectionHome.services.companies.title
          }
          image={imageCompanie}
          textButton={
            appDataText.english.home.fourthSectionHome.services.companies
              .buttonText
          }
        />
      </div>
    </div>
  );
}
export default FourthSectionHome;
