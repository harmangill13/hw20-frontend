import "./App.css";
import "./index.css"

// IMPORT COMPONENTS
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
// IMPORT PAGES
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";

function App() {
  // URL should have YOUR HEROKU URL for your backend, make sure you include the trailing slash
  const URL = "https://my-portfolio13-219152eb14b7.herokuapp.com/";

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/projects" element={<Projects URL={URL}/>}/>
        <Route exact path="/about" element={<About URL={URL}/>}/>
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
