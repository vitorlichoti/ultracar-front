import { Row, Button, Col, Form } from "react-bootstrap";


function ServiceForm() {
  return (
    <Form>
      <Form.Group as={Col} controlId="formGridText">
        <Form.Label>Técnico</Form.Label>
        <Form.Control type="text" placeholder="Digite o seu nome" />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridText">
        <Form.Label>Cliente</Form.Label>
        <Form.Control type="text" placeholder="Digite o nome do cliente" />
      </Form.Group>

      <Row>
        <Form.Group as={Col} className="mb-3" controlId="formGridText">
          <Form.Label>Veículo</Form.Label>
          <Form.Control type="text" placeholder="Digite a marca e ano" />
        </Form.Group>

        <Form.Group as={Col} className="mb-3" controlId="formGridText">
          <Form.Label>Placa do Veículo</Form.Label>
          <Form.Control type="text" placeholder="Digite a marca e ano" />
        </Form.Group>
      </Row>

      <Form.Group as={Col} controlId="formGridState">
        <Form.Label>Peça Trocada</Form.Label>
        <Form.Select defaultValue="Choose...">
          <option>Escolha uma opção...</option>
          <option>...</option>
        </Form.Select>
      </Form.Group>

    <Button variant="primary" type="submit">
      Iniciar Serviço
    </Button>
  </Form>
  )
}

export default ServiceForm