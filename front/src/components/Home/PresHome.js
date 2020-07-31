import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';

export class PresHome extends Component {
  state = {
    // eslint-disable-next-line react/no-unused-state
    build: '',
    quote: '',
  }

  componentDidMount() {
    axios.get('http://localhost:3000/build').then((res) => {
      const { build } = res.data;
      this.setState({ build });
    });
    axios.get('http://localhost:3000/quote').then((res) => {
      const { quote } = res.data;
      this.setState({ quote });
    });
  }

  render() {
    return (
      <div className="pres">
        <Row className="pres__firstrow">
          <Col className="pres__short">{this.state.build} Devis effectués</Col>
          <Col className="pres__long">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</Col>
        </Row>
        <Row className="pres__secondrow">
          <Col className="pres__long">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</Col>
          <Col className="pres__short">{this.state.quote} PC montés</Col>
        </Row>
      </div>
    );
  }
}
export default PresHome;
