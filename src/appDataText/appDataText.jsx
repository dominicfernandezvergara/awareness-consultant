import React from "react";

// Team images
import imageP1 from "../images/imageAbout/imageTeam/imageTeamCarolina 2.png";
import imageP2 from "../images/imageAbout/imageTeam/imageTeamClara.png";
import imageP3 from "../images/imageAbout/imageTeam/imageTeamLorena.png";
import imageP4 from "../images/imageAbout/imageTeam/imageTeamAndrea.png";
import imageP5 from "../images/imageAbout/imageTeam/imageTeamArnaldo.png";
import imageP6 from "../images/imageAbout/imageTeam/imageTeamMaria.png";
import imageP7 from "../images/imageAbout/imageTeam/imageTeamCarmen.png";
import imageP8 from "../images/imageAbout/imageTeam/imageTeamLuis.png";
import imageP9 from "../images/imageAbout/imageTeam/imagenTeamAnezka.png";

//Take Free images
import imageTakeFree1 from "../images/imageTakeFree/noSeNaceMujer.jpg";
import imageTakeFree2 from "../images/imageTakeFree/lasEmocionesNegativas.jpg";
import imageTakeFree3 from "../images/imageTakeFree/tipsHomeOffice.jpg";
import imageTakeFree4 from "../images/imageTakeFree/fatigaPandemica.jpg";
import imageTakeFree5 from "../images/imageTakeFree/maslow Piramide.jpg";
import imageTakeFree6 from "../images/imageTakeFree/distorsiones.jpg";
import imageTakeFree7 from "../images/imageTakeFree/Relacion saludable 1.jpg";
import imageTakeFree8 from "../images/imageTakeFree/Derechos sexuales.jpg";

//Take Free docs
import docTakeFree1 from "../docs/takeFreeDocs/ElMitoDeLaMadre.pdf";
import docTakeFree2 from "../docs/takeFreeDocs/PoemaRUMI.pdf";
import docTakeFree3 from "../docs/takeFreeDocs/TIPS para teletrabajo Awareness Consultant.pdf";
import docTakeFree4 from "../docs/takeFreeDocs/Fatiga pandemica.pdf";
import docTakeFree5 from "../docs/takeFreeDocs/Qué me falta o me sobra para estar en armonía.pdf";
import docTakeFree6 from "../docs/takeFreeDocs/Distorsiones cognitivas.pdf";
import docTakeFree7 from "../docs/takeFreeDocs/Poema Perlz.pdf";
import docTakeFree8 from "../docs/takeFreeDocs/Infografía DDSSRR.pdf";

export const appDataText = {
  espanol: {
    // Header español
    headerArray: [
      { name: "Inicio", path: "/inicio" },
      {
        name: "Nosotros",
        path: "/nosotros",
      },
      {
        name: "Servicios",
        path: "/servicios",
        subcategories: [
          {
            name: "Serv. Personas Naturales",
            path: "/servicios-personas-naturales",
            number: 0,
          },
          {
            name: "Serv. Psicológos",
            path: "/servicios-psicológos",
            number: 1,
          },
          { name: "Serv. Empresas", path: "/servicios-empresas", number: 2 },
          {
            name: "Terapias Complementarias",
            path: "/terapias-complementarias",
            number: 3,
          },
        ],
      },
      {
        name: "Contacto",
        path: "/contacto",
      },
      {
        name: "Libreria colectiva ",
        path: "/libreria-colectiva",
      },
    ],

    header: {
      home: {
        name: "Inicio",
        path: "/inicio",
      },
      aboutUs: {
        name: "Nosotros",
        path: "/nosotros",
      },
      services: {
        name: "Servicios",
        path: "/servicios",
        subcategories: {
          name: "Serv. Personas Naturales",
          path: "/servicios-personas-naturales",
          name2: "Serv. Psicológos",
          path2: "/servicios-psicológos",
          name3: "Serv. Empresas",
          path3: "/servicios-empresas",
          name4: "Terapias Complementarias",
          path4: "/terapias-complementarias",
        },
      },
      contactUs: {
        name: "Contacto",
        path: "/contacto",
      },
      takeFree: {
        name: "Libreria colectiva ",
        path: "/libreria-colectiva",
      },
    },

    // home español
    home: {
      banner: {
        title: "Awareness Consultant",
        text: "Orientación psicológica, social y juridica",
        buttonText: "Comienza hoy",
        path: "/contacto",
      },
      fistSectionHome: {
        slider1: {
          title: "Asesoramiento psicológico y red profesional",
          subtitle: "Piensa - Actúa - Trasciende",
        },
        slider2: {
          title: "Servicios Online",
          text: "Asesorías profesionales de calidad desde tu domicilio.",
        },
        slider3: {
          title: "Prevención universal primaria en delitos sexuales",
          text:
            "Servicio orientado a adultos, padres o cuidadores de niños/as.",
        },
      },
      secondSectionHome: {
        title: (
          <div>
            <strong>Asesorías psicológicas y red profesional</strong>{" "}
            <span>en línea</span>
          </div>
        ),
        text:
          "Queremos poner a tu alcance diversas formas de tratamiento. Te hablaremos de ansiedad, de estrés, de depresión, de autoestima, entre otros. Te enseñaremos técnicas de relajación y técnicas de la psicología positiva utilizando tus recursos y fortalezas personales.",
        buttonText: "Contactános",
        description:
          "Queremos poner a tu alcance diversas formas de tratamiento.",
        description2:
          "Te hablaremos de ansiedad, de estrés, de depresión, de autoestima, entre otros",
        description3:
          "Te enseñaremos técnicas de relajación y técnicas de la psicología positiva utilizando tus recursos y fortalezas personales.",
      },
      thirdSectionHome: {
        title: "¿Por qué elegirnos?",
        text: "",
        buttonText: "Comienza hoy",
        subtitleIcon1: "Accesible",
        subtitleIcon2: "Cuidadosa",
        subtitleIcon3: "Segura",
        subtitleIcon4: "Eficaz",
        text1:
          "Desde el lugar que tú prefieras y en un horario conveniente para ti.",
        text2: "100% confidencial y libre de críticas. ¡Estás en buenas manos!",
        text3: "Mantenemos los más altos estándares de integridad y ética.",
        text4: "El enfoque es la búsqueda de soluciones a tu necesidad.",
      },
      fourthSectionHome: {
        title: "Nuestros Servicios",
        services: {
          buttonText: "Leer más",
          people: {
            title: "Personas Naturales",
            description: (
              <div>
                Podrás disminuir malestares psíquicos en general, a través de{" "}
                <strong>
                  psicoterapia individual o grupal exclusivo adultos
                </strong>{" "}
                y diversas terapias complementarias.
              </div>
            ),
            description2: (
              <div>
                Además contamos con{" "}
                <strong>
                  charlas preventivas de abuso sexual infantil (ASI).
                </strong>
              </div>
            ),
            description3: (
              <div>
                Y <strong>asesorías jurídicas </strong>
                cercanas a las personas.
              </div>
            ),
          },
          profesional: {
            title: "Psicólogos y terapeutas profesionales",
            description: (
              <div>
                Orientado a la <strong>supervisión profesional</strong>, podrás
                resolver nudos críticos en la intervención y ejercicio
                profesional diario, y amortiguar sentimientos de malestar y/o
                agotamiento en profesionales.
              </div>
            ),
          },
          companies: {
            title: "Equipos profesionales y Empresas",
            description: (
              <div>
                Elaboración de{" "}
                <strong>
                  planes semestrales o anuales de autocuidado de equipos
                  profesionales{" "}
                </strong>
                a medida.
              </div>
            ),
            description2:
              "Psicoeducación para profesionales co-garantes de derecho (profesores/as, educadores/as, enfermeros/as, doctores/as y administrativos. A fin de desarrollar una primera respuesta apropiada y detectar de forma temprana señales de agresiones sexuales o delitos violentos en NNA.",
          },
        },
      },

      fifthSectionHome: {
        title: "¿Cómo funciona?",
        subtitle: "3 sencillos pasos para empezar tu proceso de cambio.",
        firstStep: {
          title: "Paso Uno",
          description:
            "Dinos qué servicio te interesa a través de nuestra página de contacto.",
        },
        secondStep: {
          title: "Paso Dos",
          description:
            "Nos pondremos en contacto contigo, y te daremos los detalles que necesites saber.",
        },
        buttonText: "Comienza Hoy",
        thirdStep: {
          title: "Paso Tres",
          description: "Comienza con tus sesiones y alcanza tu bienestar.",
        },
      },
      giftSectionHome: {
        text: "Descarga nuestro pdf",
        text2: "Gratuito",
        text3:
          "Un cuento para niños y adultos sobre emociones básicas y esenciales.",
        buttonText: "Descargar PDF",
      },
      offer: {
        title: "Promoción para iniciar tu proceso de cambio",
        subtitle: "Servicio recomendado para empezar psicoterapia",
        text: "Aplicación test de personalidad",
        text1: "Sesión psicológica diagnóstica",
        text2: "Sesión de retroalimentación y apreciación clínica",
        text3:
          "Buscamos contribuir al mejoramiento de la calidad de vida de todas las personas que lo deseen y se movilicen por ello.",
        text4:
          "Brindamos asesorías profesionales respetuosas, de acuerdo a la necesidad de cada ser humano y basada en los recursos.",
        text5: "Precio normal por cada sesión €25",
        buttonText: "contáctanos",
        buttonText2: "Comienza hoy",
      },
    },

    // About Us español
    aboutUs: {
      title: "Awareness Consultant",
      subtitle: "Sobre “Awareness Consultant”",
      text: (
        <div>
          <strong>Awareness Consultant</strong> surge un año después desde que
          comienza a sentirse el COVID en Europa. La pandemia del COVID-19 ha
          tenido un efecto enorme en nuestras vidas. Muchos de nosotros nos
          hemos visto enfrentados a nuevas situaciones,
          emociones,comportamientos y creencias. Esto puede resultar altamente
          estresante, abrumador y provocador de crisis en distintas edades.
        </div>
      ),
      text2: (
        <div>
          Las medidas de salud pública, como el distanciamiento social, son
          necesarias para reducir la propagación del COVID-19, pero pueden
          hacernos sentir aislados y aumentar el estrés y la ansiedad. (Según un
          estudio reciente, que correlaciona COVID y salud mental,{" "}
          <strong>
            estrés, ansiedad e insomnio, son las principales consecuencias
            psíquicas en los seres humanos).
          </strong>
        </div>
      ),
      text3: (
        <strong>
          Aprender a sobrellevar el estrés de manera sana permitirá que usted y
          las personas con las que está en contacto desarrollen nuevas
          estrategias de afrontamiento y solución de conflictos.
        </strong>
      ),
      text4:
        "El estrés puede provocar diversas consecuencias negativas para la salud mental de las personas. Esto incluye a todos los seres humanos, sin importar raza, etnia o sexo.",
      text5:
        "Respecto de los profesionales de la salud, y quienes estamos en primera línea desde distintos roles.",
      text6:
        "Ser profesional en tiempos de pandemia, podría suponer crisis no normativa; debido a la sobrecarga emocional de los pacientes y la propia.",
      // text7: (
      //   <div>
      //     Los psicólogos si bien{" "}
      //     <strong>debemos analizarnos y supervisar nuestros casos</strong> como
      //     parte del código de ética que nos rige, en la práctica se desconoce y
      //     queda al libre albedrío del profesional.
      //   </div>
      // ),
      // text8: (
      //   <div>
      //     En <strong>Awareness Consultant</strong>; queremos entregar servicios
      //     profesionales de calidad, siendo éticamente responsables de la
      //     relación asimétrica que se genera entre profesional – paciente. Por lo
      //     que, cada profesional que participa aquí, es monitoreado en su
      //     ejercicio profesional.
      //   </div>
      // ),
      buttonText: "Colaboradores",
      mission: {
        title: "Misión",
        text:
          "Es una asociación privada de profesionales éticos y comprometidos con el bienestar físico, psíquico y emocional de las personas y el propio autocuidado.",
        text2:
          "Con especial vocación en orientar y psicoeducar a grupos vulnerables: Niñez, Adolescencia, Mujeres, Minorías Sexuales, Migrantes, personas víctimas de violencias en general.",
      },
      vision: {
        title: "Visión",
        text: (
          <div>
            Trabaja para contribuir a <strong>los buenos tratos</strong> y, al
            pleno ejercicio de los derechos humanos, considerando La Declaración
            Universal de los Derechos Humanos , la cual fue proclamada por la
            Asamblea General de las Naciones Unidas en París, el 10 de diciembre
            de 1948, como un ideal común para todos los pueblos y naciones. Y en
            especial contribuir significativamente a la protección y prevención
            de los derechos de niños, as y adolescentes. Bajo el marco, de la
            Convención Internacional del Niño; tratado internacional de las
            Naciones Unidas, firmado en 1989 y entró en vigor desde el 2 de
            septiembre de 1990.
          </div>
        ),
      },
      founder: {
        title: "Creadora y coordinadora",
        name: "Carolina Urbina Cepeda",
        experience: {
          text1:
            "Desde hace un año nuestra coordinadora reside en República Checa. Acompaña terapéuticamente personas de habla hispana, residentes en Unión Europea y otros de Chile. Cree urgente y necesario tener colegas de confianza y éticos, para una mejor sociedad en el futuro.",
          text2:
            "Así como además, la pregunta más frecuente en su ejercicio profesional desde los pacientes, es los intentos fallido por tomar psicoterapia, por lo que, hoy en día se dedica a asesorar a quienes consultas y derivar donde cada persona necesite.",
        },
      },
      team: {
        title: "Nuestro equipo",
        subtitle: "Nuestros colaboradores",
        buttonText: "Leer más",
        team: [
          {
            image: imageP1,
            name: "Carolina Urbina Cepeda",
            occupation: "Coordinadora y Psicóloga",
            formacion: {
              title: "Formación",
              description:
                "Psicóloga y Licenciada en Psicología, Universidad Autónoma de Chile. Título Revalidado en Univerzita Karlova, Czech Republic.",
              description2:
                "Diplomada en estrategias de diagnóstico e intervención en agresiones sexuales infantiles, CICLOS Consultores, U. Academia Humanismo Cristiano",
              description3: (
                <div>
                  Última Formación en{" "}
                  <strong>
                    Herramientas de trabajo, para psicólogos pandemia, CEP
                  </strong>
                  ,Colegio de Psicólogos de Chile.
                </div>
              ),
            },
            description: {
              title: "Descripción",
              description:
                "La experiencia profesional en Chile se concentró en área psicosociojurídica. Como terapeuta individual- familiar, y en cargos de gestión y coordinación, en diversos proyectos de políticas públicas de Infancias financiadas por SENAME.",
              description2:
                "Trabajó en diversas ONG,s en proyectos PRM (Programa de reparación de maltrato y abuso sexual) y FAE (Programas familias de acogidas) y en contacto directo con TRIBUNALES DE FAMILIA Y FISCALÍAS DE CHILE.",
              description3:
                "Fue voluntaria durante un año de CORFAPES “Centro de rehabilitación psicosocial para personas con trastornos psicóticos.",
            },
          },

          {
            image: imageP2,
            name: "Clara Montes Montero",
            occupation: "Psicóloga /Apoyo técnico y comunitario.",
            formacion: {
              title: "Formación",
              description:
                "Psicóloga, con 17 años de experiencia. Mención Clínica y de la Salud (Universidad Complutense de Madrid, título revalidado por la Universidad de Chile). Terapeuta Floral, sistemas Bach y California (Instituto Mount Vernon, Santiago de Chile). Coach Transpersonal (Escuela Innerkey, Madrid).",
            },
            description: {
              title: "Descripción",
              description:
                "“Durante muchos años, en mi labor como psicóloga en el servicio público, desarrollé varias actividades dirigidas a la comunidad con el objetivo de hacer más accesibles algunos temas relacionados con la salud mental, promoviendo así la vital importancia de nuestro bienestar emocional. Hoy, en el desempeño de mi profesión en el ámbito privado, quiero aportar a la comunidad para una mejor salud mental en la sociedad en general.”",
            },
          },

          {
            image: imageP3,
            name: "Lorena Marambio Vera",
            occupation: "Trabajadora social /Apoyo técnico y comunitario.",
            formacion: {
              title: "Formación",
              description:
                "Asistente Social, Licenciada en Trabajo social, Universidad Academia de Humanismo Cristiano.",
              description2:
                "Diplomada en: Programación Neurolingüística, Prevención y tratamiento de adicciones, Mediación familiar, Políticas públicas y Derechos Humanos, Magister en Trabajo Social.",
            },
            description: {
              title: "Descripción",
              description:
                "Profesional con más de 16 años de ejercicio de la profesión, con amplia formación profesional y cargo de Dirección en Programa de Reparación en Maltrato Grave y Abuso Sexual constitutiva de delito a niños, niñas y adolescente.",
            },
          },

          {
            image: imageP4,
            name: "Andrea Marcus Romero",
            occupation: "Psicólogo y consejera sexual",
            formacion: {
              title: "Formación",
              description:
                "Psicóloga y Licenciada en Psicología, Universidad de Viña del Mar. Diplomada en Sexualidad Humana en Escuela Transdisciplinaria de Sexualidad (ETSEX).",
            },
            description: {
              title: "Descripción",
              description:
                "Psicóloga con 4 años de experiencia, actualmente me desenvuelvo en el área educacional. Y, puesto que durante el último año me he especializado en Sexualidad humana (área que me apasiona y motiva muchísimo) he decidido complementar mi ejercicio laboral con atención individualizada de consejería en sexualidad a quienes tengan problemáticas relacionadas, así como también, implementar talleres que buscan educar, empoderar y desmitificar mitos y creencias erróneas en torno al mismo.",
            },
          },
          {
            image: imageP5,
            name: "Arnaldo Bustos Ortega",
            occupation: "Psicólogo Infanto Juvenil y adultos",
            formacion: {
              title: "Formación",
              description:
                "Psicólogo con 6 años de experiencia. Licenciado en psicología y psicólogo profesional, Universidad Autónoma de Chile. Diplomado en Psicología Jurídica: Evaluación Psicológica Forense, Pontífice Universidad Católica de Chile. Diplomado en literatura infanto- juvenil: Creación, edición y publicación. Universidad de Santiago de Chile. Diplomado en abordaje de estrategias psicológicas en salud mental, psicoanálisis lacaniano. Universidad Andrés bello. Certificado en Parentalidad Positiva (Triple P – Nivel 4 Estándar). Universidad de Queensland. Magister en neuropsicología (formación), Universidad Mayor.",
            },
            description: {
              title: "Descripción",
              description:
                "Una persona dedicada a la lectura, ética, respetuoso y responsable.",
            },
          },
          {
            image: imageP9,
            name: "Anežka Špačková",
            occupation: "Fisioterapeuta",
            formacion: {
              title: "Formación",
              description:
                "Fisioterapeuta con 6 años de experiencia. Licenciada en Karlova Univerzita. Maestría en la 2ª Facultad de Medicina del Hospital Universitario Motol. Curso de locomoción refleja de Vojta, parte A del curso de estudio, Curso de Dinámica de las cadenas musculares y tendinosas utilizando posiciones de yoga I.",
            },
            description: {
              title: "Descripción",
              description:
                "Disfruto identificando formas de terapia que se adapten individualmente a los clientes. Consideramos el problema en el contexto de los principios psicosomáticos. “Creo que mejorando el control de nuestro propio cuerpo, y los estereotipos del movimiento, podemos lograr grandes resultados en cada persona”.",
            },
          },

          {
            image: imageP6,
            name: "María Diaz Figueroa",
            occupation: "Abogado",
            formacion: {
              title: "Formación",
              description: "Abogado, Universidad Santo Tomás, Chile.",
            },
            description: {
              title: "Descripción",
              description:
                "Con más de 10 años de experiencia y formación especializada en infancia y adolescencia, cuya forma de trabajo se centra esencialmente en las personas de manera comprensiva y empática, procurando siempre acercar las instituciones jurídicas al caso particular. Busca la mayor comprensión posible tanto del conflicto que requiere asesoría profesional como las posibles estrategias para su solución.”",
            },
          },

          {
            image: imageP7,
            name: "Carmen Chacón Abarca",
            occupation: "Terapias complementarias",
            formacion: {
              title: "Formación",
              description:
                "Terapeuta integral femenina, Shiva & Shakti Alquimia. Astróloga, Astro terapéutica, astrología evolutiva. Viajera, amante de la luz y sombra, infinita.",
            },
            description: {
              title: "Descripción",
              description:
                "“A través de un camino de más de 10 años de búsqueda y sanación personal, he podido integrar diversas terapias al servicio de la sanación y de la conexión con las energías femeninas y masculinas. Entre estas, he puesto al servicio Reiki, Masaje tradicional tailandés, Masaje champí y Pindas, Yoga integral, Consteladora familiar, Cosmética Natural, Aroma y gemoterapia, geometría sagrada, entre otras.",
              description2:
                "En esta vida, soy viajera en una búsqueda incansable del equilibrio y la magia”.",
            },
          },
          {
            image: imageP8,
            name: "Luis Morgado Santibañez",
            occupation: "Asesor digital",
            formacion: {
              title: "Formación",
              description:
                "Administrador de Redes Computacionales (DUOC UC Sede Melipilla, Chile). General English, Explore English School (Melbourne) Diploma of Project Management and Information Technology ECA (Education Centre Australia Campus Melbourne). Bachelor of Business Information System (Torrens University, Melbourne, Australia).",
            },
            description: {
              title: "Descripción",
              description:
                "“Una persona altamente motivada y confiable, amante de la tecnología y sistemas de la información. Mi solida ética de trabajo y mis habilidades de comunicación, me permiten ser parte de un equipo de alto rendimiento.",
              description2:
                " Decidí mudarme a un país de habla inglesa para seguir ampliando mis conocimientos en tecnología y lenguajes de programación, así como ampliar la red social multicultural. En la era Digital tengo un gran interés por la inteligencia artificial y como los seres humanos seremos capaces de relacionarnos con ella”.",
            },
          },
        ],
      },
    },

    // Services español

    services: {
      title: "Nuestros servicios",
      buttonText: "Comienza aquí",
      naturalPeopleService: {
        title: "Servicios Personas Naturales",
        serviceNaturalPeople1: {
          title: "Psicoterapia individual y grupal adultos",
          phrase: "“Tú eres aquello que haces, no aquello que dices que harás”",
          description:
            "Hemos de tener en cuenta la problemática o trastorno a tratar por un lado, y el perfil y características del paciente, por otro, para recomendarle el tipo de servicio que necesita.",
          benefits: {
            title: "Beneficios",
            description:
              "Con sólo 8 sesiones, utilizaremos el clásico método de Terapia breve, con esto podrás tener un mapa acerca de ti, tu situación presente, tus heridas, recursos y un plan de acción personalizado!",
          },

          subtitlelanguage: "Idioma : ",
          language: "Español",
        },
        serviceNaturalPeople2: {
          title: "Terapias complementarias",
          phrase:
            "“Las emociones inexpresadas nunca mueren. Son enterradas vivas y salen más tarde de peores formas (Sigmund Freud)”",
          description:
            "Terapias complementarias son aquellas que se utilizan conjuntamente con la medicina convencional indicadas por profesionales con la finalidad de complementar a un tratamiento convencional. Hay diversas terapias complementarias que pueden ser de ayuda para aliviar el dolor físico y emocional.",
          terapiasComplementarias: {
            terapia1: {
              title: "Respiración consciente",
              description:
                "Parece mentira que el recurso más maravilloso y accesible con que contamos los seres humanos para el restablecimiento de la salud y el equilibrio de nuestro sistema psico-físico-emocional sea tan poco utilizado.",
              subtitlelanguage: "Idioma :",
              language: "Español e Inglés",
              benefits: {
                title: "Beneficios",
                Benefits: [
                  "Recuperación del equilibrio psico- físico- emocional.",
                  "Mejor manejo y gestión de las emociones.",
                  "Disminuyen miedos y temores.",
                  "Mejora las funciones esenciales del organismo.",
                  "Incrementa la creatividad.",
                  "Aumenta la capacidad de concentración.",
                  "Fortalece el sistema inmunitario.",
                  "Mejora la salud en general.",
                ],
              },
              tips: {
                title: "Consejos para empezar a respirar adecuadamente",
                tip: [
                  "No respires de manera determinada.",
                  "No busques controlar la respiración.",
                  "No hagas respiraciones “importantes o perfectas”.",
                  "Deja de lado la idea de cómo pensás que deberías respirar.",
                  "Observa la mente crítica que desecha importantes pensamientos.",
                ],
              },
            },

            terapia2: {
              title: "Alimentación consciente",
              phrase: "“ Como atento/a, me nutro, me doy lo que necesito”",
              description:
                "¿Te ha pasado alguna vez que después de comer te has sentido pesada, incluso te ha dolido el estómago por haber comido demasiado?",
              description2:
                "La alimentación consciente se basa en darle la importancia que se merece al momento de comer. En otras palabras, estar presente mientras comemos, evitando distracciones, saboreando la comida, elegir lo que comes.",
              description3:
                "Esto de forma calmada, aceptando nuestras sensaciones y sentimientos mientras comemos.",
              description4:
                "De hecho, muchos programas para reducir peso utilizan la técnica de “atención plena”",
              subtitlelanguage: "Idioma :",
              language: "Español e Inglés",
              benefits: {
                title: "Beneficios",
                benefits: [
                  "Promueve la concentración. Mientras comes de forma consciente y diriges toda tu atención a la tarea que realizas, también estás practicando la concentración.",
                  "Ayuda a diferenciar hambre psicológica y hambre fisiológica. A veces usamos la comida para hacernos sentir mejor, es decir, satisfacer nuestras necesidades emocionales. Por ejemplo, comer por aburrimiento, por tristeza o por estrés. Cuando estamos presentes, podemos diferenciar estas.",
                  "Mejora en controlar tu peso. Cuando estás atento a la comida, como la textura, el sabor, también estás practicando el auto-control. Este autocontrol ayuda a controlar lo que comemos, y necesitamos comer.",
                  "Reduce el estrés y ansiedad. Evitar comer de forma compulsiva nos permite estar más consciente de nuestras emociones. De esta forma, estar presente y consciente nos permite reducir los sentimientos de estrés y ansiedad.",
                  "Pérdida de peso. Pararse a disfrutar de la comida nos permite detectar cuando estamos saciados, lo que lleva a una reducción de peso.",
                ],
              },
            },
            terapia3: {
              title: "Asesorías en sexualidad",
              phrase:
                "“ Dar produce más felicidad que recibir, no porque sea una privación, sino porque en el acto de dar está la expresión de mi vitalidad” (Erich Fromm).",
              description:
                "La consejería en salud sexual, es un servicio de prestación de información y acompañamiento a quien percibe que ciertos factores, eventos o conductas influyen determinantemente sus experiencias respecto a su sexualidad.",
              description2:
                "Este espacio, no solo contempla ayudar a las personas que presentan un problema, si no también para aquellas que tienen un conjunto considerable de dudas que motivan consultar,  para aquellos que tienen dificultades para enfrentar la educación sexual de sus hijos(as/es), y cualquier persona que tenga otras razones acorde a esta temática.",
              subtitlelanguage: "Idioma :",
              language: "Español",
              subServices: {
                subtitle: "Vamos a mencionar algunos :",
                service: [
                  {
                    title:
                      "Complicaciones en la lubricación, eyaculación, deseo sexual y orgasmo : ",
                    description:
                      "La labor que se realiza es especificar qué elementos puntualmente provocan una mala experiencia en la persona, educar respecto a prácticas de autocuidado indispensables, re significar las creencias, y proporcionar un mejor manejo de sus vivencias íntimas consigo mismas y con la pareja o las parejas.",
                  },
                  {
                    title: "Prácticas Complementarias en la Sexualidad : ",
                    description:
                      "Ante estas eventualidades este espacio presta un servicio de información respecto a las necesidades de la persona consigo mismo, y con la(s) pareja(s) para el disfrute de actividades complementarias y exploratorias que puedan enriquecer la vivencia de la práctica sexual, ya sea uso de juguetes, uso de lubricantes, adoptar juegos de rol, y otras pautas lúdicas que favorezcan el aprendizaje y una intimidad sana.",
                  },
                  {
                    title:
                      "Acompañamiento a personas con VIH (Virus de Inmunodeficiencia Humana) y otras infecciones de transmisión sexual : ",
                    description:
                      "El trabajo que se realiza es otorgar un acceso a la información sobre la enfermedad, acompañar terapéuticamente a la persona respecto a su proceso de recuperación y/o enfermedad, corregir mitos o información mal administrada, con objetivo de que la persona tenga una conducta adherente al tratamiento, aprenda prácticas de autocuidado libre de riesgos, y favorecer su proceso personal.",
                  },
                  {
                    title:
                      "Gestión de prácticas sexuales sanas, protegidas, consensuadas e informadas y promoción de autocuidado : ",
                    description:
                      "Este espacio presta un apoyo educativo y formativo, acorde a la etapa de la persona consultante, analiza la información adquirida personalmente respecto a su motivo de consulta, proporcionar recursos de apoyo que motiven una mayor autonomía, con objetivo de generar una base sólida sobre educación sexual que le permitirá una mejor toma de decisiones a futuro.",
                  },
                  {
                    title: "Disfunciones sexuales : ",
                    description:
                      "El aporte de este espacio es la administración de elementos educativos y terapéuticos, ya que se presta información sobre las características de la disfunción que adolece, se analizan los factores que influyen en la mantención de esta complicación, para posteriormente proporcionar herramientas técnicas con el fin de establecer un mejor manejo en la persona, re significando su experiencia y favoreciendo la reactivación de la vida sexual.",
                  },
                ],
              },
            },
            terapia4: {
              title: "Acompañamiento medicina huevo Yoni",
              phrase:
                "“Reencuéntrate con el centro energético, tu útero, tu matriz, el amor y fuerza propia”",
              description:
                "¿Has escuchado hablar de los huevos yoni? Es muy probable que sí, pues en los últimos años se han convertido en una tendencia en el mundo holístico y enfoque vibracional en los temas relacionados con la sanación de la energía sexual, el empoderamiento sexual femenino y la salud sexual de la mujer.",
              description2:
                "El nombre de estos huevos proviene de la palabra sánscrita yoni, que significa “espacio sagrado” y se suele usar para referirse indistinta o conjuntamente al útero, vulva, vagina o vientre, en el sentido de “fuente de vida”.",
              description3:
                "Los huevos yoni son piedras preciosas y semipreciosas (cuarzo cristal, cuarzo rosa, jade, obsidiana, amatista, ópalo y aventurina, principalmente) talladas en forma de huevo, con el fin de insertarlas en la vagina durante periodos variables, para obtener sus beneficios físicos y energéticos.",
              subtitlelanguage: "Idioma :",
              language: "Español",
              use: {
                title: "¿Cómo se usan los huevos yoni?",
                description:
                  "Como ya se mencionó, para usar los huevos yoni es necesario introducirlos en la vagina, ya sea durante algunas horas, a lo largo del día o toda la noche. Para empezar, se recomienda dejarlos adentro durante 2 horas, tres veces a la semana, y aumentar tanto el tiempo como la frecuencia poco a poco, hasta lograr usarlos diariamente. Es generalmente aconsejable llevarlos un máximo de 12 horas consecutivas.",
              },
              benefits: {
                title: "Beneficios",
                benefits: [
                  "Ayudan a regular el ciclo menstrual y al equilibrio hormonal.",
                  "Ayudan a mejorar la lubricación, por lo que son útiles en casos de sequedad vaginal.",
                  "Aumentan el flujo vaginal y con ello las defensas de la vagina.",
                  "Mejoran la circulación sanguínea e incrementan la oxigenación de los tejidos.",
                  "Fortalecen los músculos del suelo pélvico, lo que contribuye a prevenir y combatir la incontinencia urinaria.",
                  "Ayudan a la mujer a ser consciente de sí misma y de su musculatura vaginal, lo cual es útil durante la recuperación posparto, así como para tener más orgasmos y más intensos.",
                  "Producen un aumento de la sensualidad y sensibilidad durante la penetración.",
                  "Mejoran el estado emocional de la mujer, pues ésta desarrolla una mayor comprensión de su cuerpo.",
                  "La libido, la confianza y la autoestima se incrementan considerablemente.",
                  "Al presionar puntos de reflexología dentro de la vagina, aumentan la vitalidad, el empoderamiento y la energía vital femenina.",
                  "Conectan a la mujer con su energía sexual como fuente de sanación, transformación, desbloqueo y liberación.",
                  "Funcionan como sanadores de energía para ayudar a las mujeres a transformar el trauma almacenado, renovar espiritualmente el espacio y el corazón de su útero, aumentar su energía sexual y conectar con su energía femenina.",
                ],
              },
            },
            terapia5: {
              title: "Carta Astral",
              phrase:
                "“Fortalezas y debilidades de mi personalidad según tu signo del Zodiaco, que debes conocer para ser un triunfador”",
              description:
                "Es una radiografía del alma del individuo”; te da información de las posiciones de los planetas en el momento de tu nacimiento, y cómo esas posiciones influyen en tu personalidad y determinan tu carácter. Desde la psicología, la conformación de nuestra personalidad es principalmente o 70% por nuestro entorno, lo genético influye pero no más que el ambiente.",
              description2:
                "Una Carta Natal es un informe personalizado e individual que se elabora en base a tu fecha, hora y lugar de nacimiento. Se requieren esos datos porque con ellos se calcula la posición de los planetas en el cielo en ese mismo momento en que llegaste a esta Tierra y a esta Vida.",
              description3:
                "Este informe conlleva datos acerca de tu configuración tanto a nivel físico, como emocional y mental y, hasta es posible, determinar cierta línea de aprendizaje que has de transitar de una u otra manera a lo largo de tu vida.",
              subtitlelanguage: "Idioma :",
              language: "Español",
              benefits: {
                title: "Beneficios",
                description: (
                  <p>
                    Por ejemplo,{" "}
                    <strong>conocer la posición de nuestra Luna natal</strong>{" "}
                    nos permite acceder a cómo es nuestro mundo interno, nuestro
                    ámbito emocional, el inconsciente, y todo lo referido a
                    nuestros primeros años de vida. La relación con nuestra{" "}
                    <strong>figura materna</strong> y la disposición para las
                    <strong>relaciones afectivas</strong>. Si, generalmente,
                    experimentamos angustias o muchas dificultades en tu manera
                    de expresar las emociones, puedes pedirle a tu profesional
                    de confianza que, al elaborar tu Carta Natal, haga foco y
                    profundice en tu Luna Natal.
                  </p>
                ),
              },
            },
            terapia6: {
              title: "Constelaciones familiares",
              phrase:
                "“Quien sana su lealtad familiar, puede alcanzar todo su potencial”.",
              description:
                "Una Constelación Familiar es un proceso terapéutico que trabaja sobre la parte más profunda de nuestra conciencia. La teoría sobre la que se basa esta técnica es que las personas poseemos ciertos anclajes negativos inconscientes, que nos transmiten sentimientos dolorosos y de los cuales a veces no sabemos desprendernos. Estos anclajes nos conducen a menudo a reproducir determinados comportamientos o vivir ciertas situaciones negativas de forma repetida, sin que sepamos muy bien cómo solucionarlo.",
              description2:
                "Bert Hellinger, psicoterapeuta alemán y ex sacerdote desarrolló este método a mediados de la década de 1990 y es el fundador de esta técnica. A lo largo de su trayectoria ha tratado y estudiado a familias durante más de 50 años, y observó que muchos de nosotros utilizamos inconscientemente patrones familiares destructivos que nos conducen hacia la ansiedad, la depresión, la ira, la culpa, la soledad, el alcoholismo e incluso la enfermedad como una forma de «pertenencia» a nuestras familias.",
              subtitlelanguage: "Idioma :",
              language: "Español",
              uso: {
                title: "Temas que se pueden constelar :",
                uso: [
                  "Dificultades en las relaciones familiares.",
                  "Desarrollo personal.",
                  "Traumas de la infancia.",
                  "Conflictos de pareja, actual o relaciones del pasado",
                  "Problemas con los hijos.",
                  "Orientación en momentos vitales de cambio.",
                  "Depresión, tristeza y melancolía, con o sin causa aparente.",
                  "Pérdidas y duelos – Superar sucesos trágicos.",
                  "Recursos para afrontar enfermedades.",
                  "Exclusión y problemas de relaciones sociales.",
                  "Destinos difíciles (muertes prematuras, abortos).",
                  "Sentimiento de Auto-sabotaje para no conseguir éxito económico, profesional, o personal.",
                  "Orientación a nivel profesional y proyectos.",
                ],
              },
            },
            terapia7: {
              title: "Tarot Terapéutico",
              phrase:
                "“Reflexiona a través de preguntas casuales, pero conectadas”",
              description:
                "El Tarot Terapéutico es una orientación y una guía que ayuda a quien lo consulte para descubrir dónde nacen las raíces de sus problemas y para que el mismo consultante pueda fluir liberando  sus bloqueos. La persona que acuda a su consejo le hará frente a las verdades que el Tarot le muestra y lo impulsará a tener otra visión más abierta, resolutiva y positiva.",
              description2:
                "Tarot es una herramienta maravillosa que no se centra en la predicción del futuro sino que observa el presente y nos sitúa en él. A través de la energía de las cartas y su significado, nos despierta al autoconocimiento para que podamos tomar decisiones desde otra perspectiva y, así, sanar y liberar los procesos de crecimiento.",
              description3: (
                <div>
                  <strong>
                    Somos quienes somos por las decisiones que tomamos y somos
                    responsables de lo que suceda en nuestra vida
                  </strong>
                  , es uno de sus principios.
                </div>
              ),
              description4:
                "Todo lo que atraemos es porque está en sintonía con lo que sentimos. Las cartas de Tarot nos mostrarán estados de conciencia y cómo se manifiestan para bien o para mal.",
              subtitlelanguage: "Idioma :",
              language: "Español e Inglés",
              benefits: {
                title: "Beneficios",
                description:
                  "Método que permite descubrir nuestro verdadero potencial y ayuda a disolver bloqueos y resolver problemas.",
                description2:
                  "Lo que permite esta herramienta es conocer hechos, comprenderlos y resolverlos: según cómo utilicemos nuestras capacidades será el resultado en nuestro destino.",
              },
            },
          },
        },
        serviceNaturalPeople3: {
          title: "Charlas preventivas abuso sexual infantil (ASI) ",
          description:
            "En enero 2021, un informe de la PDI muestra que las denuncias por agresiones sexuales, cuyas víctimas mayoritarias son niños y niñas, disminuyeron más de 50% con relación a 2019. Contrario a lo esperado, esta no es una buena noticia, pues la baja puede explicarse por temor: obligados a convivir con el agresor producto del Covid, las víctimas no se atreven a contar. (CIPER, Chile, 2021).",
          description2:
            "Lo primero es destacar que, en el contexto de pandemia y especialmente en cuarentena, se ha descrito el aumento de algunos factores de riesgo a nivel familiar identificados para el abuso infantil. Por ejemplo, aislamiento social, aumento de consumo de alcohol, conflictividad en el hogar y dificultades de salud mental. Además, se ha mencionado que el estrés familiar y social a causa de la pandemia aumenta el riesgo de violencia (Pereda y Díaz-Faes, 2020).",
          description3: (
            <div>
              <strong>
                Se ha visto que las agresiones sexuales se producen en distintos
                niveles socioeconómicos y diferentes contextos. Lo que tiende a
                ocurrir es que los niveles socioeconómicos más altos denuncian
                menos estos hechos{" "}
              </strong>
              (Smith y Bentovim, 1994).
            </div>
          ),
          benefits: {
            title: "Beneficios",
            description:
              "Recibirás orientación en cuanto a; cómo proceder de acuerdo con el marco ético, legal y emocional.",
          },

          subtitlelanguage: "Idioma : ",
          language: "Español",
        },
        serviceNaturalPeople4: {
          title: "Prestaciones Jurídicas",
          phrase: "“El poder del abogado, está en la incertidumbre de la ley”",
          description:
            "Tiene como objetivo desarrollar asesorías jurídicas cercanas a las personas, que permita la solución efectiva de sus conflictos, mejorando sustancialmente la calidad y eficiencia en los recursos disponibles.",
          subtitlelanguage: "Idioma :",
          language: "Español",
          subservices: {
            title: "¿En qué materias?",
            subservice1: {
              title: "En materia de Familia :",
              description:
                "Juicios de divorcio, pensiones de alimentos, cuidado personal, régimen comunicacional, medidas de protección por vulneración de Derechos a NNA, entre otros.",
            },
            subservice2: {
              title: "En materia Laboral :",
              description:
                "Procedimientos administrativos ante Inspección del Trabajo, despidos injustificados, cobro de prestaciones, nulidad del despido entre otros.",
            },
            subservice3: {
              title: "En materia Civil :",
              description:
                "Contratos, cobranza de instrumentos mercantiles como letras de cambio,cheques, etc; legalizaciones de documentos, tercerías y entre otros.",
            },
          },
        },
      },
      profesionalServices: {
        title: "Servicios para psicólogos o terapeutas",
        serviceProfesionalServices3: {
          title: "Supervisión de casos",
          phrase: "“Sigue a tu corazón pero lleva contigo a tu cerebro”",
          description: (
            <div>
              El <strong>estudio de casos</strong> consiste en un método o
              técnica de investigación cualitativa, habitualmente utilizado en
              las ciencias de la salud y sociales, el cual se caracteriza por
              precisar de un proceso de búsqueda e indagación, así como el{" "}
              <strong>análisis</strong> sistemático de uno o varios{" "}
              <strong>casos</strong> a fin de resolver nudos críticos en la
              intervención y elaborar planes de acción personalizados y reales.
            </div>
          ),
          subtitlelanguage: "Idioma :",
          language: "Español",
          note: {
            title: "Nota",
            note: [
              <strong>
                Los psicólogos conocen la importancia de la salud mental.
              </strong>,
              <p>
                Analizar conjuntamente nuestro quehacer profesional y la{" "}
                <strong>contratransferencia</strong>. Esto ocurre cuando el
                analista transfiere elementos de sus problemas pasados o
                presentes al paciente que está siendo objeto de análisis.
              </p>,
              "Un psicólogo tiene la capacidad de ayudar, puede enfrentarse a situaciones que, en ocasiones, pueden llegar a superarlo y causarle un gran malestar emocional.",
              "Nos rige un código de ética que nos invita a revisar qué nos ocurre personalmente con algunos casos.",
            ],
          },
          step: {
            title: "¿Cómo se realiza?",
            step: [
              "Se selecciona un caso.",
              "Se elaboran preguntas.",
              "Se elaboran hipótesis.",
              "Se recopilan datos.",
              "Se analiza el tipo de intervención utilizada.",
              "Análisis e interpretación de los resultados.",
              "Elaboración de nuevas estrategias de intervención.",
            ],
          },
        },
      },
      companiesServices: {
        title: "Equipos profesionales y Empresas",
        companieService1: {
          title: "Elaboración de programas semestral o anual de Autocuidado",
          phrase:
            "“Cuando miro el mundo soy pesimista, pero cuando miro a la gente soy optimista”",
          description1: (
            <div>
              Trabajar profesionalmente en áreas de políticas públicas, implica
              asumir múltiples desafíos y consecuencias, asociados a la temática
              y a la organización de la tarea y en ocasiones lleva a los
              profesionales a padecer <strong>burnout</strong>.
            </div>
          ),
          description2:
            "Esto ha llevado a que Plan de autocuidado sea una tarea que cumplir en las organizaciones. El objeto del estudio es identificar las estrategias de los profesionales, a nivel individual y de equipo, y conocer la percepción de efectividad de éstas.",
          description3:
            "Se elabora plan de autocuidado a distancia, personalizado desde enfoque psicología positiva, logrando visualizar y conectar con los recursos disponibles, toda vez que se maneja información  el presupuesto para este ítem es bajo.",
          description4:
            "Se ofrece un plan de acuerdo “al bolsillo” de cada proyecto u organización y se habilita a las jefaturas para poder implementarlos como parte de sus espacios de descompresión.",
          subtitlelanguage: "Idioma :",
          language: "Español",
          note: {
            title: "Nota",
            note: (
              <strong>
                La Organización Mundial de la Salud (OMS) ha procedido al
                reconocimiento oficial del burnout o “síndrome de estar quemado”
                o de desgaste profesional como enfermedad tras la ratificación
                de la revisión número 11 de la Clasificación Estadística
                Internacional de Enfermedades y Problemas de Salud Conexos
                (CIE-11).
              </strong>
            ),
            note2: (
              <div>
                El término 'burnout' fue acuñado por primera vez en 1974 por
                Herbert Freudenberger, en su libro “Burnout: The High Cost of
                High Achievement” Por lo general, el trastorno es consecuencia
                de un estrés laboral crónico, y se caracteriza por{" "}
                <strong>
                  un estado de agotamiento emocional, una actitud cínica o
                  distante frente al trabajo (despersonalización), y una
                  sensación de ineficacia y de no hacer adecuadamente las tareas
                </strong>
                . A ello se suma la pérdida de habilidades para la comunicación.
              </div>
            ),
            note3:
              "El Síndrome de Burnout se incluye así entre los principales problemas de salud mental y en la antesala de muchas de las patologías psíquicas derivadas de un escaso control y de la carencia de una prevención primaria de este síndrome.",
          },
          symptoms: {
            title:
              "Entre los signos y síntomas más comunes de agotamiento se destacan :",
            symptoms1: (
              <div>
                <strong>
                  La alienación de las actividades relacionadas con el trabajo:
                </strong>{" "}
                las personas que experimentan agotamiento ven sus trabajos como
                cada vez más estresantes y frustrantes. Pueden volverse cínicos
                sobre sus condiciones de trabajo y las personas con las que
                trabajan.
              </div>
            ),
            symptoms2: (
              <div>
                <strong>Síntomas físicos:</strong> el estrés crónico puede
                provocar síntomas físicos, como dolores de cabeza y de estómago
                o problemas intestinales.
              </div>
            ),
            symptoms3: (
              <div>
                <strong>Agotamiento emocional:</strong> el agotamiento causa que
                las personas se sientan agotadas, incapaces de hacer frente y
                cansadas. A menudo les falta energía para hacer su trabajo.
              </div>
            ),
            symptoms4: (
              <div>
                <strong>Rendimiento reducido:</strong> el agotamiento afecta
                principalmente las tareas cotidianas en el trabajo, o en el
                hogar, cuando el trabajo principal de alguien consiste en cuidar
                a los miembros de la familia. Los individuos con agotamiento se
                sienten negativos sobre las tareas. Tienen dificultad para
                concentrarse y, a menudo, carecen de creatividad.
              </div>
            ),
          },
        },
      },
    },

    // contact Us español
    contact: {
      title: "Contacta con nosotros",
      subtitle2: "Escríbenos",
      subtitle: "Información",
      text:
        "Te ha ocurrido que has probado terapia en el pasado y no seguistes, abandonaste o no te gusto el psicólogo/a?",
      text2: (
        <div>
          Entonces estás en el lugar correcto, eso ocurre porque cuando vamos al
          psicólogo no sabemos qué tipo de enfoque él/ella emplea; ya que
          existen 7 enfoque tradicionales en el ejercicio profesional y
          normalmente NO sabemos cuál de esos nosotros necesitamos, aplicamos
          principio básico de psicología{" "}
          <i>Cada ser humano es único e irrepetible</i>.
        </div>
      ),
      text3: <strong>Aquí vamos a usar el que tú necesites!</strong>,
      textFooter: "Contacta con nosotros",
      addresse: {
        title: "Dirección",
        addresse: "Asesorias profesionales online",
      },
      email: {
        title: "correo",
        correo: "asesorias.profesionales.holistic@gmail.com",
      },
      fono: {
        title: "Whatsapp",
        fono: 420776212480,
      },
      giro: {
        title: "Giro",
        giro:
          "SERVICIOS PRESTADOS DE FORMA INDEPENDIENTE POR OTROS PROFESIONALES DE PSICOLOGÍA",
      },
      buttonText: "Submit",
      input: {
        name: "Nombre",
        email: "Correo electrónico",
        country: "País",
        service: "Servicio",
        service2: "Selecciona un servicio",
        terapiaComplementaria: "Terapia Complementaria",
        terapiaComplementaria2: "Selecciona una terapia complementaria",
        comment: "Comentario",
        errorRequiredInformation: "Informacion requerida para continuar",
      },
      transferData: {
        title: "Datos para transferencias",
        text:
          "Pagos se realizan 15 minutos antes de la sesión individual, para otros servicios se reserva cupo con 50% del valor.",
        europe: {
          title: "Datos bancarios",
          typeCurrency: (
            <div>
              <strong>Tipo de moneda :</strong> Euros y coronas checas
            </div>
          ),
          bank: (
            <div>
              <strong>Banco :</strong> Equa bank
            </div>
          ),
          accountNumber: (
            <div>
              <strong>Numero de cuenta :</strong> 1033413121 /6100
            </div>
          ),
          IBAN: (
            <div>
              <strong>IBAN :</strong> CZ7161000000001033413121
            </div>
          ),
        },
        chile: {
          title: "Datos bancarios",
          typeCurrency: (
            <div>
              <strong>Tipo de moneda :</strong> Pesos chilenos
            </div>
          ),
          bank: (
            <div>
              <strong>Banco :</strong> Banco Santander
            </div>
          ),
          accountNumber: (
            <div>
              <strong>Cuenta corriente :</strong> 67779860
            </div>
          ),
          run: (
            <div>
              <strong>Rut :</strong> 17.986.034-1
            </div>
          ),
        },
      },
      servicesListForm: {
        title: "Selecciona un servicios",
        services: {
          naturalPeople: {
            service1: "Psicoterapia Breve Adultos",
            service2: "Terapias complementarias",
            service3: "Charlas Preventivas Abuso Sexual Infantil",
            service4: "Prestaciones Jurídicas",
            service5: "Necesito orientación de un profesional",
            subservice: {
              title: "Terapias complementarias",
              subservice1: "Respiración consciente",
              subservice2: "Alimentación consciente",
              subservice3: "Asesorías en sexualidad",
              subservice4: "Acompañamiento medicina huevo Yoni",
              subservice5: "Carta Astral",
              subservice6: "Constelaciones familiares",
              subservice7: "Tarot Terapéutico",
            },
          },
          profesionalServices: {
            service1: "Entrenamiento profesional",
            service2: "Psicoterapia para terapeutas",
            service3: "Supervisión de casos",
          },
          companiesServices: {
            service1: "Elaboración de programa autocuidado",
          },
        },
      },
    },
    // Testimony español
    testimony: {
      title: "Testimonios",
      testimony1: {
        title: "Mujer, 29 años",
        subtitle: "Síntomas de ansiedad y duelo",
        text:
          "Desde hace un tiempo estoy asistiendo a sesiones, nunca antes había recibido terapia psicológica, lo veía lejano e innecesario, pero no imaginaba lo sanador e importante que sería para mí. Cuando comencé estaba en un momento muy gris de vida, en donde estaba muy confundida y perdida acerca de mis decisiones y sobre lo que yo quería. Actualmente puedo decir que he adquirido las herramientas necesarias para enfrentarme a la vida, eso incluye saber distinguir desde qué vereda decido resolver y tomar decisiones, teniendo en cuenta lo que siento, lo que quiero y pienso. Hoy en día miro hacia atrás, visualizo todo mi avance y me sorprendo, siento que mi psicóloga ha sido un apoyo fundamental, y es por esto que le estoy tremendamente agradecida.",
      },
      testimony2: {
        title: "Hombre, 28 años",
        subtitle: "Psicólogo",
        text:
          "Entrar al área de salud , no fue una experiencia fácil para mí , sentí que salí con pocas herramientas en la universidad y a la vez sentía la obligación de rendir como un buen profesional, por lo que siempre estaba ansioso cada vez que iba a trabajar y salía más ansioso cada vez que me supervisan...Más que un acompañamiento sentía solo un discurso de ego y de poca comprensión por parte de mis compañeros de trabajo y jefaturas.",
        text2:
          "Sin embargo; cuando me puse a trabajar con mi psicóloga, me sentí apoyado en todo, me enseñó herramientas útiles y prestaba atención a mi persona, como un ser humano , y no como una marioneta de salud mental.",
        text3:
          "En el transcurso del tiempo empecé a trabajar con una metodología más sólida, me sentí más seguro y empecé a tener mejores alcances con mis pacientes por lo que sin duda alguna contribuyó a un cambio de mi experiencia, ahora si voy con ganas al trabajo.",
      },
      testimony3: {
        title: "Mujer, 46 años",
        subtitle: "Abuso de sustancias y desesperanza",
        text:
          "Comencé mis terapias hace 5 meses, vivo hace 13 años en República Checa, con un millón de cambios, carencias, luchando por una adaptación a una cultura fuerte y muy diferente a la mía...No es mala, pero no ha sido fácil, intenté muchas otras terapias, siempre quedé con la sensación de que algo faltaba. Cuando vi el contacto de esta profesional en Facebook, la contacté y desde la primera sesión me sentí muy contenida, fue fuerte, porque en 60 minutos yo quería expresar mi vida completa, incluyendo la pasada. Ella fue muy receptiva con mi emoción, ella para mí ha sido un pilar fundamental para mirarme, ir hacia dentro, ver nuevamente mi esencia y creo que seguiré en terapia de por vida, porque cada vez me siento mejor. Junto con ella, el trabajo deja de ser duro y tortuoso, sino un camino hermoso, lleno de luz y sueños.",
      },
      testimony4: {
        title: "Hombre, 36 años",
        subtitle: "Profesional con síntomas de ansiedad y déficit atencional",

        text:
          "Ha tenido un impacto conocerla, en mi vida motivacional y emocional. Siempre ha sido una relación sin discriminación, me ha acompañado en diferentes etapas de la vida, he obtenido un apoyo moral, siempre a estado ahí para seguir generando impactos en mi vida.",
      },
      testimony5: {
        title: "Mujer, 32 años",
        subtitle: "Diagnóstico Trastorno obsesivo compulsivo y Asperger.",
        text:
          "“Para mi tomar terapia ha sido muy gratificante, ya que tiene un enfoque holístico del tratamiento. En Praga. República Checa, me costó encontrar alguien que no sólo usara la terapia cognitiva conductual y que estuviera dispuesta a incorporal elementos de terapias alternativas y mindfulness, que son bastante buenas para trabajar con problemas de trastorno obsesivo compulsivo y déficit atencional. Después de terminar la Universidad estuve super cansada y desorganizada, y con las terapias ya puedo organizarme y enfrentar un ritmo normal”.",
      },
      testimony6: {
        title: "Madre e hijos, terapia familiar",
        subtitle: "",
        text:
          "“Llegué buscando apoyo para mi hijo y estamos muy contentos de haberlo encontrado. Su método de trabajo envolvió a toda nuestra familia y gracias a el nos dimos cuenta de muchas cosas que habíamos pasado por alto como familia y nos ayudó muchísimo. Me gustó también su manera de ver las cosas: “mamá feliz, hijos felices”. Al final, terminé yo tomando más sesiones que mis hijos, le agradezco que me haya llevado por ese camino porque significó una gran ayuda para mí e ir resolviendo temas desde mi niñez. Hoy hemos avanzado mucho, toda la familia. Hoy tenemos una vida mucho más tranquila y en armonía. ¡Muchas gracias!”.",
      },
    },
    takeFree: {
      title: "Libreria colectiva",
      body: [
        {
          title: "Tips para teletrabajo",
          text:
            "Ya llevamos más de un año conviviendo con el COVID-19 y muchas personas siguen trabajando desde sus casas.",
          text2: <strong>Y tú, ¿cómo estás teletrabajando?...</strong>,
          image: imageTakeFree3,
          doc: docTakeFree3,
          buttonText: "Descargar PDF",
        },
        {
          title: "Fatiga pandémica",
          text: (
            <i>
              “La vida no es lo que se supone que debe ser; es: LO QUE ES. La
              forma de lidiar con ella, es lo que hace la diferencia”. (Virginia
              Satir).
            </i>
          ),

          image: imageTakeFree4,
          doc: docTakeFree4,
          buttonText: "Descargar PDF",
        },
        {
          title: "Las emociones “negativas” son esenciales y fundamentales.",
          text:
            "Como dar la bienvenida a todas las emociones y aceptarlas como mensajeros muy útiles.",
          image: imageTakeFree2,
          doc: docTakeFree2,
          buttonText: "Descargar PDF",
        },
        {
          title: "“No se nace mujer; se llega a serlo”",
          text: (
            <strong>
              ¿EN QUÉ MOMENTO O SITUACIONES DAS MÁS DE LO QUE PUEDES Y QUIERES?
            </strong>
          ),
          text2:
            "Revisión sistemática  “El Segundo Sexo, 1949”. Feminismo Europeo.",
          image: imageTakeFree1,
          doc: docTakeFree1,
          buttonText: "Descargar PDF",
        },
        {
          title: "¿QUÉ NECESITO, ME FALTA O ME SOBRA PARA SENTIRME EN ARMONÍA?",
          text: (
            <div>
              Teoría psicológica Central A. Maslow: “conforme se satisfacen las
              necesidades más básicas, los seres humanos desarrollamos
              necesidades y deseos más elevadas”.
            </div>
          ),
          image: imageTakeFree5,
          doc: docTakeFree5,
          buttonText: "Descargar PDF",
        },
        {
          title: "Distorsiones o errores cognitivos ",
          text: (
            <div>
              Pensamientos irracionales, que ocultan, ignoran o disfrazan la
              realidad y hacen difícil lograr nuestros propósitos.
            </div>
          ),
          image: imageTakeFree6,
          doc: docTakeFree6,
          buttonText: "Descargar PDF",
        },
        {
          title: "Relaciones saludables, ¿qué ayuda a tenerlas?",
          text: (
            <div>
              Las relaciones de adulto están influenciadas por las experiencias
              anteriores, y el vínculo que se establece en la infancia, además
              de otros factores.
            </div>
          ),
          image: imageTakeFree7,
          doc: docTakeFree7,
          buttonText: "Descargar PDF",
        },
        {
          title: "Derechos sexuales y reproductivos, ¿qué son?",
          text: (
            <div>
               Condiciones para ejercer sus derechos sexuales y
              reproductivos sin sufrir discriminación, coacción ni violencia.
            </div>
          ),
          image: imageTakeFree8,
          doc: docTakeFree8,
          buttonText: "Descargar PDF",
        },
      ],
    },

    // Alert
    alert: {
      success: {
        text: "¡Tu correo fue enviado exitosamente!",
      },
      error: {
        text: "¡Ha ocurrido un error al enviar tu mensaje!",
      },
    },
  },
};
