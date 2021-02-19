import React from 'react';
import Feature from './Components/Feature';
import Header from './Components/Header';
import About from './Components/About';
import Presentation from './Components/Presentation';
import Download from './Components/Download';

import Contact from './Components/Contact';
import aboutimage from './images/Frame 19.png'
import aboutimage1 from './images/download.png'

function App() {
  return (
    <div className="App">
      <Header />
      <Feature />
      <About
        image={aboutimage}
        title='Comes With All You Need For Daily Life'
        button='Get The App'
      />
      <Presentation />
      <Download
        image={aboutimage1}
        title='Download And Get The App'
        button='Download'
      />
      <Contact />
    </div>
  );
}

export default App;
