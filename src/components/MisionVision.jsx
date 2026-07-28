import { Container, Row, Col, Card } from 'react-bootstrap'

function MisionVision() {
  return (
    <section id="mision" className="py-5 bg-light">
      <Container>
        <Row>
          <Col md={6} className="mb-4">
            <Card className="h-100 shadow-sm text-center p-4">
              <Card.Body>
                <Card.Title as="h3">Misión</Card.Title>
                <p>
                  Brindar a nuestros clientes productos electrónicos de alta calidad, ofreciendo una
                  experiencia de compra segura, confiable y accesible, con tecnología innovadora y
                  precios competitivos.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="mb-4">
            <Card className="h-100 shadow-sm text-center p-4">
              <Card.Body>
                <Card.Title as="h3">Visión</Card.Title>
                <p>
                  Ser una de las tiendas electrónicas más reconocidas por la calidad de nuestros productos, la
                  excelencia en el servicio al cliente y la innovación constante en el mercado tecnológico.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default MisionVision