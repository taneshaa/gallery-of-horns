import React from "react";
import HornedBeast from "./HornedBeast";
// import data from './data.json'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./App.css"



class Main extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     data: this.props.data,
  //   }
  // }
  render() {
    return (
      <main>
        <Container>
          <Row>
            {this.props.data.map((beast, index) => (
              <Col key={index} className="mb-4">
                <HornedBeast
                  beast={beast}
                  title={beast.title}
                  image_url={beast.image_url}
                  description={beast.description}
                  key={index}
                />
              </Col>
            ))}
          </Row>

        </Container>

      </main>
    );
  }
}

export default Main;