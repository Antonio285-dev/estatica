import { Container, Row, Col } from 'react-bootstrap'
import { FaCheckCircle, FaShoppingCart, FaTruck, FaHeadset } from 'react-icons/fa'

function Servicios() {
  const procesoCompra = [
    'Selecciona tu producto favorito',
    'Consultar disponibilidad y Caracteristicas',
    'Realizar el pedido mediante nuestro formulario de contacto',
    'Confirmar metodo de pago y entrega',
    'Recibir el producto en excelentes condiciones',
  ]

  const serviciosOfrecidos = [
    'Venta de celulares y computadoras',
    'Accesorios tecnológicos originales',
    'Asesoría personalizada para elegir productos',
    'Soporte técnico para dispositivos electrónicos',
    'Garantía en productos seleccionados',
  ]

  return (
    <section id="servicios" className="py-5">
      <Container>
        <h2 className="text-center mb-4">Nuestros Servicios</h2>
        <Row>
          <Col md={6} className="mb-4">
            <div className="p-4 bg-light rounded shadow-sm h-100">
              <FaShoppingCart size={40} className="text-primary mb-3" />
              <h3>Proceso de Compra</h3>
              <ol className="list-group list-group-numbered">
                {procesoCompra.map((paso, index) => (
                  <li key={index} className="list-group-item list-group-item-action">
                    {paso}
                  </li>
                ))}
              </ol>
            </div>
          </Col>
          <Col md={6} className="mb-4">
            <div className="p-4 bg-light rounded shadow-sm h-100">
              <FaHeadset size={40} className="text-success mb-3" />
              <h3>Servicios que Ofrecemos</h3>
              <ul className="list-group">
                {serviciosOfrecidos.map((servicio, index) => (
                  <li key={index} className="list-group-item d-flex align-items-center">
                    <FaCheckCircle className="text-success me-2" />
                    {servicio}
                  </li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Servicios