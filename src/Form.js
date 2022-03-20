import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "react-bootstrap/Form";

class HornedForm extends React.Component {
  render() {
    return (
      <Form>
        <Form.Label>Horn Quantity</Form.Label>
        <Form.Group>
          <Form.Select onChange={this.props.updateHorn}>
            <option>Open this select quantity</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="100">One Hundred</option>
            <option value="All">All</option>
          </Form.Select>
        </Form.Group>
      </Form>
    )
  }

}

export default HornedForm
