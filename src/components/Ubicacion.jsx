import { Container, Row, Col } from 'react-bootstrap'
import { FaMapMarkerAlt, FaVideo } from 'react-icons/fa'

function Ubicacion() {
  return (
    <section className="py-5">
      <Container>
        <h2 className="text-center mb-4">Nuestra Ubicación</h2>
        <Row>
          <Col md={6} className="mb-4">
            <div className="p-3 bg-light rounded shadow-sm h-100">
              <div className="d-flex align-items-center mb-3">
                <FaMapMarkerAlt size={30} className="text-danger me-2" />
                <h4 className="mb-0">Encuéntranos</h4>
              </div>
              <p className="mb-3">
                <strong>Dirección:</strong> Canalejas, Jilotepec, Estado de México
              </p>
              <div className="ratio ratio-16x9">
                <iframe
                  src="https://www.google.com/maps?q=Canalejas,Jilotepec,Estado+de+México&output=embed"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </Col>
          <Col md={6} className="mb-4">
            <div className="p-3 bg-light rounded shadow-sm h-100">
              <div className="d-flex align-items-center mb-3">
                <FaVideo size={30} className="text-primary me-2" />
                <h4 className="mb-0">Conoce más de nosotros</h4>
              </div>
              <div className="ratio ratio-16x9">
                <iframe
                  src="https://player.vimeo.com/video/269224700?h=dcc2904600" width="100%" height="400"
                  width="100%"
                  height="300"
                  allowFullScreen
                  title="Video de presentación"
                ></iframe>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Ubicacion