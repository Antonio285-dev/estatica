import { Container, Row, Col, Button } from 'react-bootstrap'
import { FaShippingFast, FaShieldAlt, FaCreditCard, FaHeadset, FaLaptop, FaMobileAlt } from 'react-icons/fa'

function Inicio() {
  // Características que generan confianza en el cliente
  const caracteristicas = [
    { icono: <FaShippingFast />, titulo: 'Envío Gratis', desc: 'En compras mayores a $1,000' },
    { icono: <FaShieldAlt />, titulo: 'Garantía Total', desc: '1 año de garantía oficial' },
    { icono: <FaCreditCard />, titulo: 'Pago Seguro', desc: 'Múltiples métodos de pago' },
    { icono: <FaHeadset />, titulo: 'Soporte 24/7', desc: 'Atención cuando la necesites' },
  ]

  return (
    <section id="inicio">
      {/* 1. Hero Principal (Banner de bienvenida) */}
      <div className="bg-primary text-white py-5 mt-5">
        <Container>
          <Row className="align-items-center py-4">
            {/* Columna de Texto */}
            <Col md={6} className="text-center text-md-start mb-4 mb-md-0">
              <h1 className="display-4 fw-bold">
                Bienvenido a <span className="text-info">Tienda Electrónica</span>
              </h1>
              <p className="lead mb-4">
                Descubre los mejores productos tecnológicos al mejor precio. 
                Laptops, smartphones, audífonos y más con garantía y envío a todo el país.
              </p>
              {/* Botones de Acción (CTA) */}
              <div className="d-flex gap-3 justify-content-center justify-content-md-start flex-wrap">
                <Button variant="light" size="lg" href="#productos" className="fw-bold text-primary shadow-sm">
                  Ver Productos
                </Button>
                <Button variant="outline-light" size="lg" href="#servicios" className="fw-bold">
                  Nuestros Servicios
                </Button>
              </div>
            </Col>

            {/* Columna Visual (Iconos representativos) */}
            <Col md={6} className="text-center">
              <div className="d-flex justify-content-center gap-4 text-info opacity-75">
                <FaLaptop size={130} className="shadow-lg" style={{ filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.3))' }} />
                <FaMobileAlt size={130} className="shadow-lg" style={{ filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.3))' }} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* 2. Barra de Beneficios / Características */}
      <div className="bg-light py-4 border-bottom">
        <Container>
          <Row className="text-center">
            {caracteristicas.map((item, index) => (
              <Col key={index} xs={6} md={3} className="mb-3 mb-md-0">
                <div className="text-primary mb-2 d-flex justify-content-center">
                  {item.icono}
                </div>
                <h6 className="fw-bold mb-1">{item.titulo}</h6>
                <p className="small text-muted mb-0">{item.desc}</p>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </section>
  )
}

export default Inicio