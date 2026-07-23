import { Container, Row, Col } from 'react-bootstrap'

function Nosotros() {
  return (
    <section id="nosotros" className="py-5">
      <Container>
        <h2 className="text-center mb-4">Nosotros</h2>
        <Row className="align-items-center">
          <Col md={6} className="text-center mb-4 mb-md-0">
            <img 
              src="/img/satisfecho.png" 
              alt="Cliente satisfecho" 
              className="img-fluid"
              style={{ maxWidth: '300px', borderRadius: '15px' }}
            />
          </Col>
          <Col md={6}>
            <h3>¿Quiénes somos?</h3>
            <p>En nuestra tienda electrónica nos dedicamos a ofrecer una amplia variedad de productos tecnológicos de alta calidad para satisfacer las necesidades de nuestros clientes. Nuestro objetivo es brindar una experiencia de compra confiable, sencilla y segura.</p>
            <p>Creemos que la tecnología es una herramienta fundamental para facilitar las actividades diarias. En nuestro catálogo encontrarás teléfonos, computadoras, laptops, tablets, audífonos, componentes y accesorios de las mejores marcas.</p>
            <p>Nuestro compromiso es ofrecer productos de excelente calidad y una atención al cliente cercana y profesional, asesorándote antes, durante y después de tu compra.</p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Nosotros