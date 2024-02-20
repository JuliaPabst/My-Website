import React from "react";

export default function Footer({ selectLanguage, language }) {
  return (
    <div className="footer">
      {language === "German" ? (
        <button onClick={selectLanguage} className="navbar-button">
          🇬🇧 English
        </button>
      ) : (
        <button onClick={selectLanguage} className="navbar-button">
          🇩🇪 Deutsch
        </button>
      )}
    </div>
  );
}
