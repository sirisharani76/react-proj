import React from 'react';
import Body from './components/Body';
import Crads from './components/Cards';
import Cards1 from './components/Cards1';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Para from './components/Para';
import Para1 from './components/Para1';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Navigation />
      <Para />
      <Crads />
      <Para1 />
      <Body />
      <Cards1 />
      <Footer />


    </div>

  );
}

export default App;