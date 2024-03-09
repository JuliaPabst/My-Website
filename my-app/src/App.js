import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navigation from "./Components/Navigation.js";
import AboutGerman from "./Components/AboutGerman.js";
import ProjectsGerman from "./Components/ProjectsGerman.js";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("me");

  function selectMode(mode) {
    if (mode === "me") {
      setMode("me");
    } else {
      setMode("projects");
    }
  }

  return (
    <div className="app">
      <header>
        <Navigation selectMode={selectMode} className="no-padding" />
      </header>
      {mode === "me" ? <AboutGerman /> : <ProjectsGerman />}
    </div>
  );
}

export default App;
