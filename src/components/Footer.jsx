import { Container, Row, Col } from 'react-bootstrap'
import { FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="bg-dark text-white py-5">
      <Container>
        <Row className="g-4">
          {/* Columna 1: Redes Sociales */}
          <Col md={3} sm={6} className="mb-3">
            <h5 className="text-info mb-3">Redes Sociales</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none d-flex align-items-center">
                  <FaFacebook className="text-primary me-2 fs-5" />
                  <span>Facebook</span>
                </a>
              </li>
              <li className="mb-2">
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none d-flex align-items-center">
                  <FaInstagram className="text-danger me-2 fs-5" />
                  <span>Instagram</span>
                </a>
              </li>
            </ul>
          </Col>

          {/* Columna 2: Avisos */}
          <Col md={3} sm={6} className="mb-3">
            <h5 className="text-info mb-3">Avisos</h5>
            <ul className="list-unstyled small">
              <li className="mb-2">• Términos y condiciones de compra.</li>
              <li className="mb-2">• Los precios pueden cambiar sin previo aviso.</li>
              <li className="mb-2">• Los productos cuentan con garantía según fabricante.</li>
              <li className="mb-2">• Tiempo de entrega sujeto a disponibilidad.</li>
            </ul>
          </Col>

          {/* Columna 3: Política de privacidad */}
          <Col md={3} sm={6} className="mb-3">
            <h5 className="text-info mb-3">Política de privacidad</h5>
            <p className="small">
              Protegemos los datos personales proporcionados. La información de los formularios se usará únicamente para brindar atención y mejorar nuestros servicios.
            </p>
          </Col>

          {/* Columna 4: Contacto */}
          <Col md={3} sm={6} className="mb-3">
            <h5 className="text-info mb-3">Contacto</h5>
            <ul className="list-unstyled small">
              <li className="mb-2">
                <FaMapMarkerAlt className="text-danger me-2" />
                <span>Canalejas, Jilotepec, Estado de México</span>
              </li>
              <li className="mb-2">
                <FaPhone className="text-danger me-2" />
                <span>Teléfono: 555-123-4567</span>
              </li>
              <li className="mb-2">
                <FaEnvelope className="me-2" />
                <span>Correo: contacto@tiendaelectronica.com</span>
              </li>
              <li className="mb-2">
                <FaClock className="me-2" />
                <span>Horario: Lunes - Sábado 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </Col>
        </Row>

        {/* Línea separadora y Copyright */}
        <Row className="mt-4">
          <Col>
            <hr className="border-secondary" />
            <p className="text-center small mb-0">
              © 2026 Tienda Electrónica | Todos los derechos reservados
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer