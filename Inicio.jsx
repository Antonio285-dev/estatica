import { Container } from 'react-bootstrap'

function Inicio() {
  return (
    <section id="inicio" className="py-5 mt-5">
      <Container>
        <div className="text-center py-5">
          <h1 className="display-5 fw-bold mb-3">Bienvenido</h1>
          <p className="lead text-muted">
            Encuentra los mejores productos tecnológicos al mejor precio.
          </p>
        </div>
      </Container>
    </section>
  )
}

export default Inicio