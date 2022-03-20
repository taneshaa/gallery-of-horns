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
import HornedForm from './Form.js';




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      selectedBeast: {},
      filteredHorns: data,
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
  // function thats going to give a filtered array based on whatever our event.target.value is from the form
  // event is that function is going to find the quantity
  // target is the actual select number of horns in the drop down menu (target is label of the value)
  // value is what you set in the value attribute (ex: 1, 2 ,3, 100)
  updateHorn = (event) => {
    event.preventDefault();
    // filtered horns is going to be an array that will hold the filtered beasts based off of the event.target.value
    // data.filter looks at every beast, if the event.target.value came in as "All" then it gives all the beats
    let filteredHorns = data.filter(beast => {
      if (event.target.value === "All") {
        return beast;
      } else {
        // if this is equal to call, show me all the beasts, this return will only give you the beasts that have horns that are the select quantity as 1, 2 ,3, or 100 from the drop down from
        return beast.horns === +event.target.value
      }

    })
    this.setState({ filteredHorns })
  }




  render() {
    return (
      <>
        <Header />
        <HornedForm updateHorn={this.updateHorn} />
        {/* on page load "data" is going to hold the inital state of filteredHorns which is going to just be the data.json file. One the updateHorn function is fired, "data" will become the filteredHorns(data.json) array */}
        <Main data={this.state.filteredHorns} showModal={this.showModal} />
        <SelectedBeast show={this.state.show} handleClose={this.handleClose} selectedBeast={this.state.selectedBeast} />
        <Footer />
      </>
    );
  }
}
export default App;
