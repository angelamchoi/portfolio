import AboutMe from "./pages/AboutMe";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
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
        <Route path="/" exact element={<AboutMe/>}/>
        <Route path="/aboutme" exact element={<AboutMe/>}/>
        <Route path="/work" exact element={<Work/>}/>
        <Route path ="/contact" exact element={<Contact/>}/>
      </Routes>
      <Work/>
      <Contact/>
      </AnimatePresence>
    </div>
  );
}

export default App;
