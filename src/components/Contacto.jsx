import { useState, useRef } from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import emailjs from '@emailjs/browser'

function Contacto() {
  const formRef = useRef()
  const [mensaje, setMensaje] = useState('')
  const [cargando, setCargando] = useState(false)

  const enviarCorreo = (e) => {
    e.preventDefault()
    setCargando(true)

    emailjs
      .sendForm(
        'service_70gle6p',
        'template_prj7ewh',
        formRef.current,
        'LiL4JF1QuPKwsc6pt' // Tu clave pública
      )
      .then(() => {
        setMensaje('✅ ¡Mensaje enviado correctamente! Nos pondremos en contacto pronto.')
        formRef.current.reset()
        setCargando(false)
      })
      .catch((error) => {
        console.error('Error al enviar:', error)
        setMensaje('❌ Hubo un error al enviar el mensaje. Por favor intenta de nuevo.')
        setCargando(false)
      })
  }

  return (
    <section id="contacto" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">Contáctanos</h2>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Form ref={formRef} onSubmit={enviarCorreo} className="p-4 bg-white rounded shadow-sm">
              
              <Form.Group className="mb-3">
                <Form.Label>Nombre completo</Form.Label>
                <Form.Control 
                  type="text" 
                  name="nombre" 
                  placeholder="Nombre" 
                  required 
                />
              </Form.Group>
              
              <Form.Group className="mb-3">
                <Form.Label>Correo electrónico</Form.Label>
                <Form.Control 
                  type="email" 
                  name="correo" 
                  placeholder="Email" 
                  required 
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Teléfono (Opcional)</Form.Label>
                <Form.Control 
                  type="tel" 
                  name="telefono" 
                  placeholder="Telefono" 
                />
              </Form.Group>
              
              <Form.Group className="mb-3">
                <Form.Label>Mensaje</Form.Label>
                <Form.Control 
                  as="textarea" 
                  rows={4} 
                  name="mensaje" 
                  placeholder="¿En qué podemos ayudarte?" 
                  required 
                />
              </Form.Group>
              
              <div className="d-grid">
                <Button variant="primary" type="submit" disabled={cargando}>
                  {cargando ? 'Enviando...' : 'Enviar Mensaje'}
                </Button>
              </div>
              
              {mensaje && (
                <p className={`mt-3 text-center fw-bold ${mensaje.includes('✅') ? 'text-success' : 'text-danger'}`}>
                  {mensaje}
                </p>
              )}
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contacto