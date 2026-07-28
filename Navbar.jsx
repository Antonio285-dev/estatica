import { Navbar, Nav, Container } from 'react-bootstrap'
import './Navbar.css'

function MiNavbar() {
  return (
    <Navbar expand="lg" fixed="top" className="navbar-custom">
      <Container>
        <Navbar.Brand href="#inicio" className="d-flex align-items-center neon-brand">
          <img 
            src="/public/logo.png" 
            width="60" 
            className="me-2" 
            alt="Logo Tienda Electrónica"
          />
          <span className="brand-text">Tienda Electrónica</span>
        </Navbar.Brand>
        
        <Navbar.Toggle 
          aria-controls="menu" 
          className="navbar-toggler-custom"
        />
        
        <Navbar.Collapse id="menu">
          <Nav className="ms-auto">
            <Nav.Link href="#inicio" className="neon-link">Inicio</Nav.Link>
            <Nav.Link href="#nosotros" className="neon-link">Nosotros</Nav.Link>
            <Nav.Link href="#mision" className="neon-link">Misión</Nav.Link>
            <Nav.Link href="#productos" className="neon-link">Productos</Nav.Link>
            <Nav.Link href="#servicios" className="neon-link">Servicios</Nav.Link>
            <Nav.Link href="#testimonios" className="neon-link">Testimonios</Nav.Link>
            <Nav.Link href="#aliados" className="neon-link">Aliados</Nav.Link>
            <Nav.Link href="#contacto" className="neon-link">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MiNavbar