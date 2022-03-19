//parent of all parents- most parent component
import SelectedBeast from './SelectedBeast';
import React from 'react';
//import logo from './logo.svg';
import './App.css';
import data from './data.json'
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import 'bootstrap/dist/css/bootstrap.min.css';




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      selectedBeast: {}

    }
  }
  // setting state of show to be false
  handleClose = () => {
    this.setState({ show: false })
  }
  // setting state of show to be true
  showModal = (beast) => {
    this.setState({ show: true, selectedBeast: beast })
  }
  render() {
    return (
      <>
        <Header />
        <Main data={data} showModal={this.showModal} />
        <SelectedBeast show={this.state.show} handleClose={this.handleClose} selectedBeast={this.state.selectedBeast}/>
        <Footer />
      </>
    );
  }
}
export default App;


//find which beast was clicked on,