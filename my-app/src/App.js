import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navigation from "./Components/Navigation.js";
import AboutGerman from "./Components/AboutGerman.js";
import AboutEnglish from "./Components/AboutEnglish.js";
import ProjectsGerman from "./Components/ProjectsGerman.js";
import ProjectsEnglish from "./Components/ProjectsEnglish.js";
import { useState } from "react";

function App() {
  const [language, setLanguage] = useState("German");
  const [mode, setMode] = useState("me");

  function selectLanguage() {
    if (language === "English") {
      setLanguage("German");
    } else {
      setLanguage("English");
    }
  }

  function selectMode(mode) {
    if (mode == "me") {
      setMode("me");
    } else {
      setMode("projects");
    }
  }

  return (
    <div className="app">
      <header>
        <Navigation
          selectLanguage={selectLanguage}
          language={language}
          selectMode={selectMode}
        />
      </header>
      {language === "German" ? (
        mode === "me" ? (
          <AboutGerman />
        ) : (
          <ProjectsGerman />
        )
      ) : mode === "me" ? (
        <AboutEnglish />
      ) : (
        <ProjectsEnglish />
      )}
    </div>
  );
}

export default App;
