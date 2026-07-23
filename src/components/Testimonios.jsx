import { Container, Row, Col, Card } from 'react-bootstrap'
import { FaStar } from 'react-icons/fa'

function Testimonios() {
  const testimonios = [
    {
      id: 1,
      nombre: 'Juan Pérez',
      calificacion: 5,
      comentario: 'Excelente servicio, mi laptop llegó en perfectas condiciones y muy rápido. ¡100% recomendado!',
      imagen: '/img/juan.JPG',
    },
    {
      id: 2,
      nombre: 'María López',
      calificacion: 4,
      comentario: 'Muy buenos productos y precios competitivos. El soporte técnico me ayudó con todas mis dudas.',
      imagen: '/img/Maria_Lopez.jpg',
    },
    {
      id: 3,
      nombre: 'Carlos Ramírez',
      calificacion: 5,
      comentario: 'Compré un iPhone y estoy encantado. La garantía funciona de maravilla y el envío fue súper rápido.',
      imagen: '/img/Carlos Ramirez.jpg',
    },
  ]

  const renderEstrellas = (calificacion) => {
    return [...Array(5)].map((_, index) => (
      <FaStar
        key={index}
        className={index < calificacion ? 'text-warning' : 'text-muted'}
      />
    ))
  }

  return (
    <section id="testimonios" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">Lo que dicen nuestros clientes</h2>
        <Row>
          {testimonios.map((testimonio) => (
            <Col key={testimonio.id} md={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body className="text-center">
                  {/* Imagen del cliente en formato circular */}
                  <div className="mb-3">
                    <img
                      src={testimonio.imagen}
                      alt={testimonio.nombre}
                      className="rounded-circle"
                      width="80"
                      height="80"
                      style={{ objectFit: 'cover', border: '3px solid #0d6efd' }}
                    />
                  </div>
                  <Card.Title>{testimonio.nombre}</Card.Title>
                  <div className="mb-3">
                    {renderEstrellas(testimonio.calificacion)}
                  </div>
                  <Card.Text className="fst-italic">
                    "{testimonio.comentario}"
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Testimonios