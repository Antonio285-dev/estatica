import { Container, Card, Table } from 'react-bootstrap'

function Servicios() {
  const procesoCompra = [
    'Seleccionar el producto tecnológico deseado.',
    'Consultar disponibilidad y características.',
    'Realizar el pedido mediante nuestro formulario de contacto.',
    'Confirmar método de pago y entrega.',
    'Recibir el producto en excelentes condiciones.',
  ]

  const serviciosOfrecidos = [
    'Venta de celulares y computadoras.',
    'Accesorios tecnológicos originales.',
    'Asesoría personalizada para elegir productos.',
    'Soporte técnico para dispositivos electrónicos.',
    'Garantía en productos seleccionados.',
  ]

  const productos = [
    { producto: 'Laptop', marca: 'Asus', categoria: 'Computadora', precio: '$900', disponibilidad: 'Disponible' },
    { producto: 'iPhone', marca: 'Apple', categoria: 'Celular', precio: '$600', disponibilidad: 'Disponible' },
    { producto: 'Audifonos', marca: 'Sony', categoria: 'Accesorio', precio: '$80', disponibilidad: 'Disponible' },
    { producto: 'MacBook', marca: 'Apple', categoria: 'Computadora', precio: '$1200', disponibilidad: 'Bajo pedido' },
  ]

  return (
    <section id="servicios" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-2 fs-2">Servicios y Características</h2>
        <p className="text-center text-muted mb-4 fs-5">
          Ofrecemos diferentes servicios para brindar una mejor experiencia de compra.
        </p>

        <Card className="shadow-sm p-3 p-md-4 border-0 mb-4 mx-auto" style={{ maxWidth: '800px' }}>
          <Card.Body className="text-center">
            <div className="mb-3 mb-md-4">
              <h4 className="text-primary mb-2 mb-md-3 fs-4">Proceso de compra</h4>
              <ol className="ps-3 ps-md-4 mb-0 d-inline-block text-start">
                {procesoCompra.map((paso, index) => (
                  <li key={index} className="mb-1 mb-md-2 fs-5">{paso}</li>
                ))}
              </ol>
            </div>

            <div>
              <h4 className="text-primary mb-2 mb-md-3 fs-4">Servicios que ofrecemos</h4>
              <ul className="ps-3 ps-md-4 mb-0 d-inline-block text-start">
                {serviciosOfrecidos.map((servicio, index) => (
                  <li key={index} className="mb-1 mb-md-2 fs-5">{servicio}</li>
                ))}
              </ul>
            </div>
          </Card.Body>
        </Card>

        <h3 className="text-center mb-4 fs-3">Catálogo de productos disponibles</h3>
        <div className="table-responsive bg-white rounded shadow-sm p-2 p-md-3 mx-auto" style={{ maxWidth: '900px' }}>
          <Table striped bordered hover className="text-center align-middle mb-0">
            <thead className="table-light">
              <tr>
                <th className="fs-6">Producto</th>
                <th className="fs-6">Marca</th>
                <th className="fs-6">Categoría</th>
                <th className="fs-6">Precio</th>
                <th className="fs-6">Disponibilidad</th>
              </tr>
            </thead>
            <tbody>
              {productos.map((producto, index) => (
                <tr key={index}>
                  <td className="fs-6">{producto.producto}</td>
                  <td className="fs-6">{producto.marca}</td>
                  <td className="fs-6">{producto.categoria}</td>
                  <td className="fs-6">{producto.precio}</td>
                  <td className="fs-6">{producto.disponibilidad}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Container>
    </section>
  )
}

export default Servicios