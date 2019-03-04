import React from 'react';
import Collapsible from 'react-collapsible';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

class DailyChores extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <Collapsible trigger="Daily Chores">
          <ChoreLine />
        </Collapsible>
      </div>
    )
  }
}

class ChoreLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <Row>Clean the Dishes</Row>
              <Row >days completed here </Row>
            </Col>
            <Col>
              is it complete?
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default DailyChores;
