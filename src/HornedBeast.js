import React from "react";
import Emoji from "./emoji"
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";


class HornedBeast extends React.Component {
  constructor(props) {
    super(constructor);
    this.state = {
      favorites: "0"
    }
  }
  //track when a user clicks on an image or one of the beasts
  handleFavorites = () => {
    // const newStatus = this.state.status === "Nay" ? "Yay" : "Nay";
    this.setState({ favorite: this.state.favorite + 1 })
    console.log(this.state.favorite);
  };

handleClick = () => {
  this.fav();
  this.props.openModal(this.props.beast);
}
//referenced bens code from github for this, we have the same names for things "horned beast" and also got help from anthony
  render() {
    return (
      <>
        <Card className="h-100">
          <Card.Img
            className="imgage"
            variant="top"
            alt={this.props.title}
            src={this.props.image_url}
            onClick={this.handleClick}
          />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>♥ {this.state.favorite} ♥</Card.Text>
            <Card.Text>
              {this.props.description}
            </Card.Text>
            <Button
              variant="primary"
              className="glow-on-hover"
              onClick={this.fav}>
              {/* This Critter is my favorite */}
            </Button>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default HornedBeast;


//   render() {
//     console.log(this.state);
//     return (
//       <><h2>{this.props.title}</h2>
//         <img alt={this.props.title}
//           src={this.props.imgurl} />
//         <p>{this.props.description}</p></>

//     )
//   }
// };




//state allows you to update pieces of it so you can change certain components of your website


