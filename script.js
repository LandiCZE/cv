const toggleButton = document.querySelector("#theme-toggle");
const langButtons = document.querySelectorAll(".lang-button");

const cvData = {
  cs: {
    labels: {
      title: "Životopis",
      role: "Quality Assurance • Praha",
      email: "Email:",
      phone: "Telefon:",
      linkedin: "LinkedIn:",
      profile: "Profil",
      experience: "Praxe",
      education: "Vzdělání",
      skills: "Dovednosti",
      linkedinSection: "LinkedIn",
      hobbies: "Koníčky",
      projects: "Projekty",
      languages: "Jazyky",
      themeToggleDark: "Přepnout na tmavý",
      themeToggleLight: "Přepnout na světlý",
    },
    name: "Jiří Landsmann",
    photo: {
      src: "profile-photo.jpg",
      alt: "Profilová fotografie",
    },
    contact: {
      email: "jirka.landsmann@gmail.com",
      phone: "+420 777 595 164",
      linkedin: {
        label: "linkedin.com/in/jiri-landsmann",
        url: "https://www.linkedin.com/in/jiri-landsmann/",
      },
    },
    profile:
      "Quality Assurance specialista se zaměřením na mobilní kampaně a Android. Mám zkušenosti s testováním na mobilních zařízeních, kontrolou kvality a podporou release procesu.",
    linkedinHighlights: [
      "QA specialist pro mobile campaigns v Avastu (part-time, 2018–současnost).",
      "Praxe s Androidem a testováním na mobilních zařízeních.",
      "Studium IT (Ing.) na VŠE a bakalářské studium informatiky na ČVUT FEL.",
    ],
    experience: [
      {
        title: "Quality Assurance Specialist pro mobile campaigns – Avast",
        period: "06/2018 – současnost",
        bullets: [
          "Testování mobilních kampaní a aplikací na Androidu.",
          "Kontrola kvality releaseů a kampaní.",
          "Práce s mobilními zařízeními a reporting výsledků.",
        ],
      },
    ],
    education: [
      {
        title: "Vysoká škola ekonomická v Praze (VŠE)",
        period: "09/2022 – 01/2026",
        description: "Informační technologie (Ing.).",
      },
      {
        title:
          "Fakulta elektrotechnická, České vysoké učení technické v Praze (ČVUT FEL)",
        period: "2019 – 2022",
        description: "Computer Science (Bc.).",
      },
    ],
    skills: [
      "Quality Assurance",
      "Test automation",
      "Android testing",
      "TypeScript / Node.js",
      "Python (pandas, scikit-learn)",
      "Git",
      "Bash / Linux",
      "API testing",
    ],
    hobbies: [
      "Badminton",
      "Pub kvíz",
      "Deskovky",
      "Cestování",
    ],
    projects: [
      {
        title: "Backend Developer & Team Lead – LendMe",
        description:
          "Školní projekt v týmu 6 lidí. Vývoj backendové části aplikace LendMe v TypeScriptu, návrh struktury backendu a aplikační logiky, spolupráce s frontendem na integraci a vedení týmu.",
        bullets: [
          "GitHub: doplň konkrétní repozitář (https://github.com/...).",
          "Vedení týmu 6 členů: plánování práce, rozdělování úkolů a kontrola výstupů.",
          "Řešení technických i organizačních problémů během vývoje.",
          "Technologie: TypeScript, Node.js, Git (případně Express/NestJS + databáze).",
        ],
      },
      {
        title: "Diplomová práce – Approximation of Measures to Lower Granularities",
        description:
          "Návrh a implementace vlastního algoritmu pro aproximaci agregovaných dat na nižší granularitu nad reálnými socioekonomickými daty.",
        bullets: [
          "Využití regresních modelů, strojového učení a clusteringu.",
          "Návrh simulační pipeline pro generování jemnější granularit.",
          "Vyhodnocení výsledků pomocí metrik MAE a RMSE.",
          "Technologie: Python, pandas, scikit-learn, Jupyter, Git.",
        ],
      },
      {
        title: "Automated Quiz Registration",
        description:
          "Automatizace procesu přihlašování na online kvíz pomocí skriptu pro opakované úlohy a eliminaci manuální práce.",
        bullets: [
          "Ošetření chybových stavů a časování běhu.",
          "Technologie: Python, Bash.",
        ],
      },
      {
        title: "Approximation",
        description:
          "Implementace algoritmů pro aproximaci dat, práce s datovými sadami a evaluace výsledků.",
        bullets: [
          "Technologie: Python, Jupyter.",
          "GitHub: https://github.com/LandiCZE/approximation",
        ],
      },
      {
        title: "ADBcommands",
        description:
          "Sada shell skriptů pro automatizaci práce v terminálu.",
        bullets: [
          "Technologie: Bash, Linux.",
          "GitHub: https://github.com/LandiCZE/ADBcommands",
        ],
      },
      {
        title: "Curriculum Vitae",
        description:
          "Vlastní online životopis hostovaný přes GitHub Pages.",
        bullets: [
          "Technologie: HTML, Git.",
          "GitHub: https://github.com/LandiCZE/curriculum-vitae",
        ],
      },
    ],
    languages: [
      { name: "Čeština", level: "Rodilý mluvčí" },
      { name: "Angličtina", level: "Pokročilá (B2)" },
    ],
  },
  en: {
    labels: {
      title: "Curriculum Vitae",
      role: "Quality Assurance • Prague",
      email: "Email:",
      phone: "Phone:",
      linkedin: "LinkedIn:",
      profile: "Profile",
      experience: "Experience",
      education: "Education",
      skills: "Skills",
      linkedinSection: "LinkedIn",
      hobbies: "Hobbies",
      projects: "Projects",
      languages: "Languages",
      toolbarNote: "Update your details in script.js under the cvData object.",
      themeToggleDark: "Switch to dark",
      themeToggleLight: "Switch to light",
    },
    name: "Jiri Landsmann",
    photo: {
      src: "profile-placeholder.svg",
      alt: "Profile photo",
    },
    contact: {
      email: "jirka.landsmann@gmail.com",
      phone: "+420 777 595 164",
      linkedin: {
        label: "linkedin.com/in/jiri-landsmann",
        url: "https://www.linkedin.com/in/jiri-landsmann/",
      },
    },
    profile:
      "Quality Assurance specialist focused on mobile campaigns and Android. Experienced in mobile device testing, quality checks, and supporting release processes.",
    linkedinHighlights: [
      "QA specialist for mobile campaigns at Avast (part-time, 2018–present).",
      "Hands-on Android and mobile device testing experience.",
      "IT studies: Master's at Prague University of Economics and Business and Bachelor's in Computer Science at CTU FEL.",
    ],
    experience: [
      {
        title: "Quality Assurance Specialist for mobile campaigns – Avast",
        period: "Jun 2018 – Present",
        bullets: [
          "Test mobile campaigns and Android app flows.",
          "Run quality checks for releases and campaigns.",
          "Work with mobile devices and report results.",
        ],
      },
    ],
    education: [
      {
        title: "Prague University of Economics and Business",
        period: "Sep 2022 – Jan 2026",
        description: "Master's degree in Information Technology.",
      },
      {
        title:
          "Faculty of Electrical Engineering, Czech Technical University in Prague",
        period: "2019 – 2022",
        description: "Bachelor's degree in Computer Science.",
      },
    ],
    skills: [
      "Quality Assurance",
      "Test automation",
      "Android testing",
      "TypeScript / Node.js",
      "Python (pandas, scikit-learn)",
      "Git",
      "Bash / Linux",
      "API testing",
    ],
    hobbies: [
      "Badminton",
      "Pub quiz",
      "Board games",
      "Travel",
    ],
    projects: [
      {
        title: "Backend Developer & Team Lead – LendMe",
        description:
          "University project in a 6-member team. Built the backend part of the LendMe app in TypeScript, designed backend structure and business logic, collaborated with frontend on API integration, and led team delivery.",
        bullets: [
          "GitHub: add the final repository URL (https://github.com/...).",
          "Led a 6-member team: planning, task allocation, and output reviews.",
          "Solved both technical and organizational issues during development.",
          "Tech: TypeScript, Node.js, Git (optionally Express/NestJS + database).",
        ],
      },
      {
        title: "Diploma Thesis – Approximation of Measures to Lower Granularities",
        description:
          "Designed and implemented a custom algorithm for approximating aggregated data to lower granularity using real socio-economic datasets.",
        bullets: [
          "Used regression models, machine learning, and clustering.",
          "Designed a simulation pipeline for generating finer-grained measures.",
          "Evaluated outputs with MAE and RMSE metrics.",
          "Tech: Python, pandas, scikit-learn, Jupyter, Git.",
        ],
      },
      {
        title: "Automated Quiz Registration",
        description:
          "Automated online quiz registration with scripting for repetitive tasks and manual work reduction.",
        bullets: [
          "Implemented error handling and run timing safeguards.",
          "Tech: Python, Bash.",
        ],
      },
      {
        title: "Approximation",
        description:
          "Implemented data approximation algorithms, worked with datasets, and evaluated results.",
        bullets: [
          "Tech: Python, Jupyter.",
          "GitHub: https://github.com/LandiCZE/approximation",
        ],
      },
      {
        title: "ADBcommands",
        description:
          "A shell script set for terminal workflow automation.",
        bullets: [
          "Tech: Bash, Linux.",
          "GitHub: https://github.com/LandiCZE/ADBcommands",
        ],
      },
      {
        title: "Curriculum Vitae",
        description:
          "Personal online résumé hosted on GitHub Pages.",
        bullets: [
          "Tech: HTML, Git.",
          "GitHub: https://github.com/LandiCZE/curriculum-vitae",
        ],
      },
    ],
    languages: [
      { name: "Czech", level: "Native" },
      { name: "English", level: "Upper-intermediate (B2)" },
    ],
  },
};

const elements = {
  labelCv: document.querySelector("#label-cv"),
  name: document.querySelector("#name"),
  role: document.querySelector("#role"),
  labelEmail: document.querySelector("#label-email"),
  labelPhone: document.querySelector("#label-phone"),
  labelLinkedin: document.querySelector("#label-linkedin"),
  photo: document.querySelector("#photo"),
  email: document.querySelector("#email"),
  phone: document.querySelector("#phone"),
  linkedin: document.querySelector("#linkedin"),
  toolbarNote: document.querySelector("#toolbar-note"),
  labelProfile: document.querySelector("#label-profile"),
  labelExperience: document.querySelector("#label-experience"),
  labelEducation: document.querySelector("#label-education"),
  labelSkills: document.querySelector("#label-skills"),
  labelLinkedinSection: document.querySelector("#label-linkedin-section"),
  labelHobbies: document.querySelector("#label-hobbies"),
  labelProjects: document.querySelector("#label-projects"),
  labelLanguages: document.querySelector("#label-languages"),
  profile: document.querySelector("#profile"),
  linkedinHighlights: document.querySelector("#linkedin-highlights"),
  experience: document.querySelector("#experience"),
  education: document.querySelector("#education"),
  skills: document.querySelector("#skills"),
  hobbies: document.querySelector("#hobbies"),
  projects: document.querySelector("#projects"),
  languages: document.querySelector("#languages"),
};

let currentLang = localStorage.getItem("cv-lang") || "cs";
let currentTheme = localStorage.getItem("cv-theme") || "light";

const setThemeLabel = () => {
  const labels = cvData[currentLang].labels;
  toggleButton.textContent =
    currentTheme === "dark" ? labels.themeToggleLight : labels.themeToggleDark;
};

const setTheme = (theme) => {
  currentTheme = theme;
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("cv-theme", theme);
  setThemeLabel();
};

const PHOTO_FALLBACK_SRC = "profile-placeholder.svg";

const setPhoto = (photo) => {
  elements.photo.onerror = () => {
    if (elements.photo.src.endsWith(PHOTO_FALLBACK_SRC)) return;
    elements.photo.src = PHOTO_FALLBACK_SRC;
  };
  elements.photo.src = photo.src;
  elements.photo.alt = photo.alt;
};

const renderList = (container, items, renderItem) => {
  container.innerHTML = "";
  items.forEach((item) => {
    container.appendChild(renderItem(item));
  });
};

const render = (lang) => {
  const data = cvData[lang];
  currentLang = lang;
  localStorage.setItem("cv-lang", lang);
  document.documentElement.setAttribute("lang", lang);
  document.title = data.labels.title;

  elements.labelCv.textContent = data.labels.title;
  elements.name.textContent = data.name;
  elements.role.textContent = data.labels.role;
  elements.labelEmail.textContent = data.labels.email;
  elements.labelPhone.textContent = data.labels.phone;
  elements.labelLinkedin.textContent = data.labels.linkedin;
  setPhoto(data.photo);
  elements.email.textContent = data.contact.email;
  elements.phone.textContent = data.contact.phone;
  elements.linkedin.textContent = data.contact.linkedin.label;
  elements.linkedin.href = data.contact.linkedin.url;
  elements.toolbarNote.textContent = data.labels.toolbarNote;

  elements.labelProfile.textContent = data.labels.profile;
  elements.labelExperience.textContent = data.labels.experience;
  elements.labelEducation.textContent = data.labels.education;
  elements.labelSkills.textContent = data.labels.skills;
  elements.labelLinkedinSection.textContent = data.labels.linkedinSection;
  elements.labelHobbies.textContent = data.labels.hobbies;
  elements.labelProjects.textContent = data.labels.projects;
  elements.labelLanguages.textContent = data.labels.languages;
  elements.profile.textContent = data.profile;

  elements.linkedinHighlights.innerHTML = "";
  const highlightList = document.createElement("ul");
  highlightList.className = "highlight-list";
  data.linkedinHighlights.forEach((highlight) => {
    const item = document.createElement("li");
    item.textContent = highlight;
    highlightList.appendChild(item);
  });
  elements.linkedinHighlights.appendChild(highlightList);

  renderList(elements.experience, data.experience, (item) => {
    const wrapper = document.createElement("div");
    wrapper.className = "item";
    const title = document.createElement("h3");
    title.textContent = item.title;
    const period = document.createElement("span");
    period.textContent = item.period;
    wrapper.append(title, period);
    if (item.bullets) {
      const list = document.createElement("ul");
      item.bullets.forEach((bullet) => {
        const li = document.createElement("li");
        li.textContent = bullet;
        list.appendChild(li);
      });
      wrapper.appendChild(list);
    }
    return wrapper;
  });

  renderList(elements.education, data.education, (item) => {
    const wrapper = document.createElement("div");
    wrapper.className = "item";
    const title = document.createElement("h3");
    title.textContent = item.title;
    const period = document.createElement("span");
    period.textContent = item.period;
    const description = document.createElement("p");
    description.textContent = item.description;
    wrapper.append(title, period, description);
    return wrapper;
  });

  elements.skills.innerHTML = "";
  data.skills.forEach((skill) => {
    const chip = document.createElement("span");
    chip.textContent = skill;
    elements.skills.appendChild(chip);
  });

  elements.hobbies.innerHTML = "";
  data.hobbies.forEach((hobby) => {
    const chip = document.createElement("span");
    chip.textContent = hobby;
    elements.hobbies.appendChild(chip);
  });

  renderList(elements.projects, data.projects, (item) => {
    const wrapper = document.createElement("div");
    wrapper.className = "item";
    const title = document.createElement("h3");
    title.textContent = item.title;
    const description = document.createElement("p");
    description.textContent = item.description;
    wrapper.append(title, description);
    if (item.bullets) {
      const list = document.createElement("ul");
      item.bullets.forEach((bullet) => {
        const li = document.createElement("li");
        li.textContent = bullet;
        list.appendChild(li);
      });
      wrapper.appendChild(list);
    }
    return wrapper;
  });

  renderList(elements.languages, data.languages, (item) => {
    const wrapper = document.createElement("div");
    const name = document.createElement("strong");
    name.textContent = item.name;
    const level = document.createElement("span");
    level.textContent = item.level;
    wrapper.append(name, level);
    return wrapper;
  });

  langButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === lang);
  });

  setThemeLabel();
};

render(currentLang);
setTheme(currentTheme);

langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    render(button.dataset.lang);
  });
});

toggleButton.addEventListener("click", () => {
  setTheme(currentTheme === "light" ? "dark" : "light");
});
