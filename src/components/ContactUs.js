import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function ContactUs() {
  return (
    <section class="light-gray pt-12 lg-pt-12 xl-pt-14 pb-14 sm-pb-20 xl-pb-32 flex justify-center items-center sm-min-h-screen 2xl-min-h-full">
      <div class="max-w-8xl mx-auto items-middle sm:py-5">
        <Container>
          <Row className="py-1 py-md-3">
            <Col>
              <h1 className="codevspace-h1 text-black font-bold">
                <p>
                  <span id="contact_us">Contact Us</span>
                </p>
              </h1>
              <p className="py-3 py-md-5 codevspace-text">
                Have a question or need more information about our services?
                Send a hello &#x1F44B; to {" "}
                <a className="codevspace-color" href="mailto:hello@codevspace.com?subject=CodevSpace services query">
                  hello@codevspace.com
                </a>{" "}
                and we'll get back to you as soon as possible.
              </p>
            </Col>
          </Row>
          <Row>
          <Col>
              <h1 className="codevspace-h2 text-black font-bold">
                <p>
                  <span>Our offices</span>
                </p>
              </h1>
            </Col>
          </Row>
          <Row>
          <Col className="px-3 py-3">
              <h1 className="text-md-center py-3 text-dark codevspace-text">
                <p>
                  <span>India</span>
                </p>
              </h1>
              <p className="text-md-center">
                <span className="text-1rem">
                  Pune, Maharashtra
                </span>
              </p>
              <p className="text-md-center">
                <span className="text-1rem">
                &#x260E; +91-9860-114-900
                </span>
              </p>
            </Col>
            <Col className="px-3 py-3">
              <h1 className="text-md-center py-3 text-dark codevspace-text">
                <p>
                  <span>USA</span>
                </p>
              </h1>
              <p className="text-md-center">
                <span className="text-1rem">
                  Pleasanton, CA
                </span>
              </p>
              <p className="text-md-center">
                <span className="text-1rem">
                &#x260E; +1-682-593-2127
                </span>
              </p>
            </Col>
            <Col className="px-3 py-3">
              <h1 className="text-md-center py-3 text-dark codevspace-text">
                <p>
                  <span>Australia</span>
                </p>
              </h1>
              <p className="text-md-center">
                <span className="text-1rem">
                  Perth, WA
                </span>
              </p>
              <p className="text-md-center">
                <span className="text-1rem">
                &#x260E; +61-477-723-357
                </span>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </section>

    // <Container className="contact-us-container">
    //   <Row>
    //     <Col md={6}>
    //       <h1>Contact Us</h1>
    //       <p>
    //         Have a question or need more information about our services? Fill out the form below and we'll get back to you as soon as possible.
    //       </p>
    //       <Form>
    //         <Form.Group controlId="formName">
    //           <Form.Label>Name</Form.Label>
    //           <Form.Control type="text" placeholder="Enter your name" />
    //         </Form.Group>
    //         <Form.Group controlId="formEmail">
    //           <Form.Label>Email address</Form.Label>
    //           <Form.Control type="email" placeholder="Enter your email" />
    //         </Form.Group>
    //         <Form.Group controlId="formMessage">
    //           <Form.Label>Message</Form.Label>
    //           <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
    //         </Form.Group>
    //         <Button variant="primary" type="submit">
    //           Submit
    //         </Button>
    //       </Form>
    //     </Col>
    //     <Col md={6}>
    //       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2839.325559166563!2d-73.98565948447039!3d40.74844227090719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25995ba12cd29%3A0x57ebfa4afbeab48d!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1620269888474!5m2!1sen!2sus" title="Map" className="map" allowFullScreen="" loading="lazy"></iframe>
    //     </Col>
    //   </Row>
    // </Container>
  );
}

export default ContactUs;
