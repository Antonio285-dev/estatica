import { Container, Row, Col } from 'react-bootstrap'

function Aliados() {
  const aliados = [
    { nombre: 'APPLE', url: 'https://www.apple.com/mx/mac/', imagen: '/img/apple.png' },
    { nombre: 'SAMSUNG', url: 'https://www.samsung.com/mx/', imagen: '/img/samsung.png' },
    { nombre: 'ASUS', url: 'https://www.asus.com/mx/', imagen: '/img/Asuss.png' },
    { nombre: 'SONY', url: 'https://store.sony.com.mx/', imagen: '/img/Sonyy.png' },
  ]

  return (
    <section className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5">Aliados Estratégicos</h2>
        <Row className="g-4"> {/* g-4 agrega un espacio uniforme entre columnas */}
          {aliados.map((aliado, index) => (
            <Col key={index} xs={6} md={3}>
              <a
                href={aliado.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none d-block h-100"
              >
                <div className="bg-white p-4 rounded-3 shadow-sm h-100 d-flex flex-column align-items-center justify-content-center aliado-card">
                  <img 
                    src={aliado.imagen} 
                    alt={`Logo de ${aliado.nombre}`} 
                    className="img-fluid mb-3" 
                    style={{ maxHeight: '70px', objectFit: 'contain' }} 
                  />
                  <span className="fw-bold text-secondary">{aliado.nombre}</span>
                </div>
              </a>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Aliados