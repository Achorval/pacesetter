import React, { Component } from 'react';
import reactFeature from '../../../core/assets/images/react-feature.svg';
import sassFeature from '../../../core/assets/images/sass-feature.svg';
import bootstrapFeature from '../../../core/assets/images/bootstrap-feature.svg';
import responsiveFeature from '../../../core/assets/images/responsive-feature.svg';
import { Card, CardBody, Row, Col } from 'reactstrap';

class Dashboard extends Component {
  render() {
    const heroStyles = {
      padding: '10px 0 30px'
    };

    return (
      <div>
        <Row>
          <Col md={6}>
            <div className="home-hero" style={heroStyles}>
              <h1>Welcome to Pacesetter.</h1>
              <p className="text-muted">
                Discover this UI dashboard framework that will help speed up
                your next web application project.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <Card className="p-4">
              <CardBody className="display-flex">
                <img
                  src={reactFeature}
                  style={{ width: 70, height: 70 }}
                  alt="react.js"
                  aria-hidden={true}
                />
                <div className="m-l">
                  <h2 className="h4">React.js</h2>
                  <p className="text-muted">
                    Built to quickly get your MVPs off the ground.
                  </p>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="p-4">
              <CardBody className="display-flex">
                <img
                  src={bootstrapFeature}
                  style={{ width: 70, height: 70 }}
                  alt="Bootstrap"
                  aria-hidden={true}
                />
                <div className="m-l">
                  <h2 className="h4">Bootstrap 4</h2>
                  <p className="text-muted">
                    The most popular framework to get your layouts built.
                  </p>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="p-4">
              <CardBody className="display-flex">
                <img
                  src={sassFeature}
                  style={{ width: 70, height: 70 }}
                  alt="Sass"
                  aria-hidden={true}
                />
                <div className="m-l">
                  <h2 className="h4">Sass</h2>
                  <p className="text-muted">
                    Easily change the design system styles to fit your needs.
                  </p>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="p-4">
              <CardBody className="display-flex">
                <img
                  src={responsiveFeature}
                  style={{ width: 70, height: 70 }}
                  alt="Responsive"
                  aria-hidden={true}
                />
                <div className="m-l">
                  <h2 className="h4">Responsive</h2>
                  <p className="text-muted">
                    Designed for screens of all sizes.
                  </p>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
