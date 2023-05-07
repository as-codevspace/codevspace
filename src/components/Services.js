import { Container, Row, Col } from "react-bootstrap";

export default function Services() {
  return (
    <section id="services" class="flex justify-center items-center py-3 py-md-5 bg-ds-light-gray">
      <div class="max-w-8xl mx-auto items-middle sm:py-5">
        <Container>
          <Row className="py-1 py-md-3">
            <Col>
            <h1 className="display-2 text-black font-bold">
              <p><span>Services</span></p>
            </h1>
            </Col>
          </Row>
          <Row xs={1} sm={2} md={3} className="py-1 py-md-3">
            <Col className="px-3 py-3">
              <h1 className="text-md-center py-3 text-dark text-1.5rem">
                <p>
                  <span>Custom Software Development</span>
                </p>
              </h1>
              <p>
                <span className="text-1rem">
                  We work closely with clients to understand their unique needs
                  and create custom software solutions. Our skilled team of
                  developers is proficient in multiple programming languages and
                  frameworks, ensuring we can create the best solution for each
                  project.
                </span>
              </p>
            </Col>
            <Col className="px-3 py-3">
              <h1 className="text-md-center py-3 text-dark text-1.5rem">
                <p>
                  <span>Web Development</span>
                </p>
              </h1>
              <p>
                <span className="text-1rem">
                  We specialize in creating responsive and dynamic digital
                  assets, including websites, web applications, e-commerce
                  platforms, and CMS-based sites. Our team of web developers
                  uses cutting-edge technologies to make sure your site is
                  visually appealing, user-friendly, and optimized for search
                  engines.
                </span>
              </p>
            </Col>
            <Col className="px-3 py-3">
              <h1 className="text-md-center py-3 text-dark text-1.5rem">
                <p>
                  <span>Mobile App Development</span>
                </p>
              </h1>
              <p>
                <span className="text-1rem">
                  Our mobile app developers create custom apps for various
                  platforms, including Android and iOS, using native or hybrid
                  development frameworks. We work with you to understand your
                  requirements and develop an app that meets your needs while
                  delivering a great user experience.
                </span>
              </p>
            </Col>
            <Col className="px-3 py-3">
              <h1 className="text-md-center py-3 text-dark text-1.5rem">
                <p>
                  <span>Cloud Services</span>
                </p>
              </h1>
              <p>
                <span className="text-1rem">
                  Our array of cloud services comprises SaaS, PaaS, and IaaS,
                  cloud migration, and DevOps. We assist clients in expanding
                  their business with bespoke cloud-based solutions. Our team is
                  well-versed in cloud computing and can offer adept
                  recommendations on the optimal solution for your enterprise.
                </span>
              </p>
            </Col>
            <Col className="px-3 py-3">
              <h1 className="text-md-center py-3 text-dark text-1.5rem">
                <p>
                  <span>IT Consulting</span>
                </p>
              </h1>
              <p>
                <span className="text-1rem">
                  Our IT consulting services offer proficient counsel on
                  maximizing your IT infrastructure, simplifying procedures, and
                  minimizing expenses. Our adept consultants collaborate with
                  you to fathom your enterprise's necessities and fashion a
                  personalized solution that satisfies your prerequisites.
                </span>
              </p>
            </Col>
            <Col className="px-3 py-3">
              <h1 className="text-md-center py-3 text-dark text-1.5rem">
                <p>
                  <span>Quality Assurance</span>
                </p>
              </h1>
              <p>
                <span className="text-1rem">
                  We provide testing and quality assurance services that
                  guarantee your software applications are free of bugs and
                  perform excellently. Our testing services are diverse and
                  include functional testing, performance testing, and security
                  testing.
                </span>
              </p>
            </Col>
            <Col className="px-3 py-3">
              <h1 className="text-md-center py-3 text-dark text-1.5rem">
                <p>
                  <span>Cybersecurity</span>
                </p>
              </h1>
              <p>
                <span className="text-1rem">
                  We provide cybersecurity services, such as penetration
                  testing, vulnerability assessment, risk management, and
                  compliance management, to aid clients in safeguarding their
                  data and meeting regulatory obligations.
                </span>
              </p>
            </Col>
            <Col className="px-3 py-3">
              <h1 className="text-md-center py-3 text-dark text-1.5rem">
                <p>
                  <span>UX/UI Design</span>
                </p>
              </h1>
              <p>
                <span className="text-1rem">
                  Our UX/UI design services create visually appealing and
                  user-friendly software applications that deliver a seamless
                  user experience. Our team works closely with you to understand
                  your brand and develops a personalized design that reflects
                  your brand identity.
                </span>
              </p>
            </Col>
            <Col className="px-3 py-3">
              <h1 className="text-md-center py-3 text-dark text-1.5rem">
                <p>
                  <span>Data Analytics & Business Intelligence</span>
                </p>
              </h1>
              <p>
                <span className="text-1rem">
                  We help businesses collect and analyze data from various
                  sources to provide insights into performance. We offer
                  services such as data mining, data warehousing, data cleaning,
                  data visualization, and predictive modeling to optimize
                  decision-making, reduce costs, and gain a competitive edge.
                </span>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}
