//parent of all parents- most parent component

import React from 'react';
//import logo from './logo.svg';
import './App.css';
import data from './data.json'
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import { render } from '@testing-library/react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import "bootstrap/dist/css/bootstrap.min.css";



class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Main data ={data}/>
        <Footer />
      </>
    );
  }
}
export default App;
