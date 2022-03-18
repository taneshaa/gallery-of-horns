import React from "react";
import HornedBeast from "./HornedBeast";
import data from './data.json'
import {Container, Row} from "react-bootstrap";
import "./App.css"



class Main extends React.Component {
  render() {
    return (
      <>
      {
        //taking seed data from json file, mapping over it and passing each title, description and image through the horned beast component
        data.map(beast => (
          <HornedBeast title={beast.title} imgurl={beast.image_url} description={beast.description}/>
          
        ))
      }
      </>
    )
  }
}

export default Main