import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
//Animation
import { AnimatePresence } from "framer-motion";
//Router
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Nav/>
      <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/aboutme" exact element={<AboutMe/>}/>
        <Route path="/work" exact element={<Projects/>}/>
        <Route path ="/contact" exact element={<Contact/>}/>
      </Routes>
      <Footer/>
      </AnimatePresence>
    </div>
  );
}

export default App;
