import React from 'react';
import Menu from './Components/Router/Menu';
import Home from './Components/Router/Home';
import About from './Components/Router/About';
import Gallery from './Components/Router/Gallery';
import Contact from './Components/Router/Contact';
import Support from './Components/Router/Support';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
        <div>
          <Menu />
          <switch>
          <Route path="/"exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/contact" component={Contact} />
          <Route path="/support" component={Support} />
          
          </switch>  
        </div>
      </Router>
  );
}

export default App;
