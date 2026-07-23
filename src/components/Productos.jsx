import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { FaLaptop, FaMobileAlt, FaHeadphones } from 'react-icons/fa'

function Productos() {
  const productos = [
    { id: 1, nombre: 'Laptop Asus', precio: '$15,000', icono: <FaLaptop size={50} />, img: '/img/asus.png' },
    { id: 2, nombre: 'iPhone 15', precio: '$22,000', icono: <FaMobileAlt size={50} />, img: '/img/iphone.jpeg' },
    { id: 3, nombre: 'Audífonos Sony', precio: '$3,500', icono: <FaHeadphones size={50} />, img: '/img/sony.png' },
    { id: 4, nombre: 'MacBook Pro', precio: '$35,000', icono: <FaLaptop size={50} />, img: '/img/macbook.png' },
    { id: 5, nombre: 'Nintendo Switch', precio: '$7,500', icono: <FaMobileAlt size={50} />, img: '/img/switch.jpg' },
    { id: 6, nombre: 'Samsung A16', precio: '$4,200', icono: <FaMobileAlt size={50} />, img: '/img/A16.jpg' },
  ]

  return (
    <section id="productos" className="py-5">
      <Container>
        <h2 className="text-center mb-4">Nuestros Productos</h2>
        <Row>
          {productos.map((producto) => (
            <Col key={producto.id} md={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <div className="card-img-wrapper">
                  <Card.Img variant="top" src={producto.img} alt={producto.nombre} />
                </div>
                <Card.Body className="text-center d-flex flex-column">
                  <div className="text-primary mb-2">{producto.icono}</div>
                  <Card.Title>{producto.nombre}</Card.Title>
                  <Card.Text className="fw-bold text-success">{producto.precio}</Card.Text>
                  <Button variant="primary" className="mt-auto">Comprar</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Productos