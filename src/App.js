//parent of all parents- most parent component

import React from 'react';
//import logo from './logo.svg';
import './App.css';
import data from './data.json'
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
//import "bootstrap/dist/css/bootstrap.min.css";



function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
