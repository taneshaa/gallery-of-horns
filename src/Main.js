import React from "react";
import HornedBeast from "./HornedBeast";

class Main extends React.Component {
  render() {
    return (
      <>
        <HornedBeast title={'beast one'}
        imgurl={''}
        description={'beasty beast'}/>
        <HornedBeast title={'beast two'}
        imgurl={''}
        description={'blah blah'}/>
      </>
    )
  }
}

export default Main