import React from "react";

class HornedBeast extends React.Component{
  render(){
    return(
      <><h2>{this.props.title}</h2>
      <img alt ={this.props.title}
      src={this.props.imgurl}/>
      <p>{this.props.description}</p></>
  
    )
  }
}

export default HornedBeast