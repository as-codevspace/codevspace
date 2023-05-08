import { Container, Row, Col } from "react-bootstrap";
export default function Home() {
  return (
    <section id="home" class="flex justify-center items-center py-3 py-md-5 light-gray">
      <Container className="py-3 py-md-5">
        <Row>
          <Col md={6} className="py-3 py-md-5">
            <h1 className="text-black codevspace-h1">
              <span>
                <p>
                  <span className="font-AgencyFB">From Idea to Launch</span>
                </p>
                <p>We are technology partners for businesses of all sizes</p>
              </span>
            </h1>
            <h2 className="codevspace-text pt-3 pt-md-5">
            <span className="font-AgencyFB">&lt;/&gt; CodevSpace</span> helps startups and enterprises innovate and build user focused products. Our experienced team combines design & technology to deliver high quality products
            </h2>
          </Col>
          <Col md={6} className="py-3 py-md-5 text-center">
              <img
                alt="idea"
                src="/Launch.png"
                className="w-[302px] sm:w-[402px] lg:w-[602px] img-fluid mx-auto"
              />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
