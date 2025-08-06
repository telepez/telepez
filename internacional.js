const translations = {
  es: {
    description: "Una lista gratuita de IPTV enfocado en canales de Latinoamérica y Sudamérica. Espejos se actualizan cada 10 minutos.",
    github: "GitHub",
    mirrors: "Repositorios espejos",
    discord: "Servidor de Discord",
    disclaimer: "Descargo de Responsabilidad"
  },
  en: {
    description: "A free IPTV service focused on Latin American and South American channels. Mirrors sync every 10 minutes.",
    github: "GitHub",
    mirrors: "Mirrors",
    discord: "Discord server",
    disclaimer: "Disclaimer"
  },
  br: {
    description: "Uma lista de IPTV gratuita focada em canais latinos e sul-americanos. Os espelhos sincronizam a cada dez minutos.",
    github: "GitHub",
    mirrors: "Repositórios espelho",
    discord: "Servidor Discord",
    disclaimer: "Isenção de responsabilidade"
  }
};

function updateLanguage(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });
}

const switcher = document.getElementById("languageSwitcher");

if (switcher) {
  const savedLang = localStorage.getItem("lang") || "es";
  switcher.value = savedLang;
  updateLanguage(savedLang);

  switcher.addEventListener("change", () => {
    const lang = switcher.value;
    localStorage.setItem("lang", lang);
    updateLanguage(lang);
  });
}
