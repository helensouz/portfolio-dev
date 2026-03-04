import { useTranslation } from "react-i18next";
import "../styles/languageSwitcher.css";

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const languageSwitcher = () => {
    const newLang = i18n.language === "pt" ? "en" : "pt";
    i18n.changeLanguage(newLang);
    localStorage.setItem("lang", newLang);
  };

  return (
    <div className="toggle-container" onClick={languageSwitcher}>
      <span className="globe">🌍</span>
      <div className={`toggle ${i18n.language === "en" ? "active" : ""}`}>
        <span className="label">
          {i18n.language === "pt" ? "PT" : "EN"}
        </span>
      </div>
    </div>
  );
}

export default LanguageSwitcher;