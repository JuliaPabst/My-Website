import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navigation from "./Components/Navigation.js";
import AboutGerman from "./Components/AboutGerman.js";
import AboutEnglish from "./Components/AboutEnglish.js";
import { useState } from "react";

function App() {
  const [language, setLanguage] = useState("German");

  function selectLanguage() {
    if (language === "English") {
      setLanguage("German");
    } else {
      setLanguage("English");
    }
  }

  return (
    <div className="app">
      <header>
        <Navigation selectLanguage={selectLanguage} language={language} />
      </header>
      {language === "German" ? <AboutGerman /> : <AboutEnglish />}
    </div>
  );
}

export default App;
