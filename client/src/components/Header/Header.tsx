import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Header: React.FC = () => {
  return (
    <header>
      <Container>
        <Row>
          <Col>
            <h2>Header</h2>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
