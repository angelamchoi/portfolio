import AboutMe from "./pages/AboutMe";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";


//Router
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Nav/>
      <Routes>
        <Route path="/" exact element={<AboutMe/>}/>
        <Route path="/aboutme" exact element={<AboutMe/>}/>
        <Route path="/project" exact element={<Project/>}/>
        <Route path ="/contact" exact element={<Contact/>}/>
      </Routes>
      <AboutMe/>
      <Project/>
      <Contact/>
    </div>
  );
}

export default App;
