import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navigation from "./Components/Navigation.js";
import About from "./Components/About.js";

function App() {
  return (
    <div className="app">
      <header>
        <Navigation />
      </header>
      <About />
    </div>
  );
}

export default App;
