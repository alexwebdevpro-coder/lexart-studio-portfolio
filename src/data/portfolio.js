import imgEden from "../assets/image/Site-Eden-Photographie.webp";
import imgKlaxon from "../assets/image/accueil_utilisateur.webp";
import imgCV from "../assets/image/CV-Capture.webp";

export const projects = [
  {
    label: "PROJ-01",
    img: imgEden,
    title: "Eden Photographie",
    desc: "Site vitrine pour une photographe professionnelle. Mise en valeur des galeries, navigation fluide et design épuré.",
    tags: ["React.js", "Bootstrap", "HTML", "CSS", "JavaScript"],
    link: "https://www.leden-photographie.fr/",
    github: "https://github.com/alexwebdevpro-coder/leden-photographie",
  },
  {
    label: "PROJ-02",
    img: imgKlaxon,
    title: "Touche pas au klaxon",
    desc: "Application fictive permettant de diffuser au sein de l'entreprise les trajets prévus afin de favoriser le covoiturage.",
    tags: [
      "PHP",
      "PDO",
      "Bootstrap",
      "MySQL",
      "izniburak/router",
      "Apache/XAMPP",
    ],
    link: "#",
    github: "https://github.com/alexwebdevpro-coder/touche-pas-au-klaxon",
  },
  {
    label: "PROJ-03",
    img: imgCV,
    title: "CV Alexis ZIRNHELT",
    desc: "Curriculum vitae au format numérique, structuré et optimisé pour une lecture rapide.",
    tags: ["HTML", "CSS"],
    link: "https://cvalexis-zirnhelt.vercel.app/",
    github: "https://github.com/alexwebdevpro-coder/cv_alexis-zirnhelt",
  },
];
