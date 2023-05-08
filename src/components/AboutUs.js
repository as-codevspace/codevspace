import { Container, Row, Col } from "react-bootstrap";

export default function AboutUs() {
  return (
    <section class="bg-ds-light-gray pt-12 lg-pt-12 xl-pt-14 pb-14 sm-pb-20 xl-pb-32 flex justify-center items-center sm-min-h-screen 2xl-min-h-full">
      <div class="max-w-8xl mx-auto items-middle sm:py-5">
        <Container>
          <Row className="py-1 py-md-3">
            <Col>
              <h1 className="display-2 text-black font-bold">
                <p>
                  <span id="about_us">About Us</span>
                </p>
              </h1>
            </Col>
          </Row>
          <Row>
            <Col className="px-3 px-md-5 py-2 py-md-4">
              <p className="text-1.5rem">
                <span className="codevspace-color">CodevSpace</span> is a
                technology services company focused on providing innovative
                solutions that help companies drive growth, success, and
                efficiency. With a team of experienced professionals, we
                specialize in developing custom software, building enterprise
                applications, and managing complex IT projects.
              </p>
            </Col>
          </Row>
          <Row>
            <Col className="px-3 px-md-5 py-2 py-md-4">
              <p className="text-1.5rem">
                Our <span className="codevspace-color">mission</span> is to help
                businesses of all sizes harness the power of technology to
                achieve their goals. Whether you need to streamline your
                operations, enhance your customer experience, or develop new
                products and services, we can help you leverage the latest
                technologies to drive your success.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}
