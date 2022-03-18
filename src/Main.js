import React from "react";
import HornedBeast from "./HornedBeast";
import data from './data.json'

class Main extends React.Component {
  render() {
    return (
      <>
      {
        data.map(beast => (
          <HornedBeast title={beast.title} imgurl={beast.image_url} description={beast.description}/>
          
        ))
      }
      </>
    )
  }
}

export default Main