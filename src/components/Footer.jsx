import { Container, Row, Col } from 'react-bootstrap'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="bg-dark text-white py-5">
      <Container>
        <Row>
          {/* Columna 1: Sobre la tienda */}
          <Col md={4} className="mb-4">
            <h5 className="text-info mb-3">⚡ Tienda Electrónica</h5>
            <p className="small">
              Tu tienda de confianza para productos electrónicos de alta calidad.
              Comprometidos con la excelencia y satisfacción del cliente.
            </p>
          </Col>

          {/* Columna 2: Contacto */}
          <Col md={4} className="mb-4">
            <h5 className="text-info mb-3">Contacto</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <FaPhone className="me-2" />
                <span className="small">+52 55 1234 5678</span>
              </li>
              <li className="mb-2">
                <FaEnvelope className="me-2" />
                <span className="small">contacto@tiendaelectronica.com</span>
              </li>
              <li className="mb-2">
                <FaMapMarkerAlt className="me-2" />
                <span className="small">Canalejas, Jilotepec, Estado de México</span>
              </li>
            </ul>
          </Col>

          {/* Columna 3: Enlaces */}
          <Col md={4} className="mb-4">
            <h5 className="text-info mb-3">Avisos</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none small">
                  Aviso de Privacidad
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none small">
                  Términos y Condiciones
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none small">
                  Preguntas Frecuentes
                </a>
              </li>
            </ul>
          </Col>
        </Row>

        {/* Redes Sociales */}
        <Row className="mt-4">
          <Col className="text-center">
            <h6 className="mb-3">Síguenos en redes sociales</h6>
            <div className="d-flex justify-content-center gap-3">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white fs-4"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white fs-4"
              >
                <FaInstagram />
              </a>
            </div>
          </Col>
        </Row>

        {/* Copyright */}
        <Row className="mt-4">
          <Col className="text-center">
            <hr className="border-secondary" />
            <p className="small mb-0">
              © 2026 Tienda Electrónica. Todos los derechos reservados.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer