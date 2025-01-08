import './App.css';
import React, { useState } from "react";
import Contacts from './Sections/Contacts';
import Hero from './Sections/Hero';
import Projects from './Sections/Projects';
import Hobbies from './Sections/Hobbies';
import Selector from './Sections/Selector.js';


const App = () => {
  const [activeSection, setActiveSection] = useState("");

  const handleIntersect = (id) => {
    setActiveSection(id); // Update active section when it comes into view
  };
  return (
    <div className="App" >
    <Selector activeSection={activeSection}/>
     <Hero id='hero' onIntersect={handleIntersect}/>
     <Hobbies id="hobbies" onIntersect={handleIntersect}/>
     <Projects id="projects" onIntersect={handleIntersect}/>
     <Contacts id="contacts" onIntersect={handleIntersect}/> 
    </div>
  );
}

export default App;
