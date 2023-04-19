import { useState, FunctionComponent } from "react";
import { Row, Button, Col, Form } from "react-bootstrap";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { addEmployee, incremented } from "../features/counter/counter-slice";


interface NewServiceProps {
  handleCloseShow: () => void;
}

const ServiceForm: FunctionComponent<NewServiceProps> = ({handleCloseShow}) => {
  const [formValues, setFormValues] = useState({
    technicalName: '',
    clientName: '',
    vehicle: '',
    plate: '',
    parts: ''
  })
  const services = useAppSelector((state) => state.counter.services)
  const dispatch = useAppDispatch()

  const handleFormValues = (event: any) => {
    const name = event.target.name
    const value = event.target.value
    
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const handleSubmit = (event: any) => {
    event.preventDefault(formValues)
    const parts = services.find((e) => e.name === formValues.parts)
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    
    dispatch(incremented({
      ...formValues,
      done: false,
      parts: parts,
      dateStart: today.toLocaleDateString('pt-Br'),
      dateEnd: '',
    }))

    dispatch(addEmployee(formValues.technicalName))

    handleCloseShow()
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group as={Col} controlId="formGridText">
        <Form.Label>Técnico</Form.Label>
        <Form.Control
          type="text"
          name="technicalName"
          value={formValues.technicalName}
          placeholder="Digite o seu nome"
          onChange={handleFormValues}
        />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridText">
        <Form.Label>Cliente</Form.Label>
        <Form.Control
          type="text"
          name="clientName"
          value={formValues.clientName}
          onChange={handleFormValues}
          placeholder="Digite o nome do cliente"
        />
      </Form.Group>

      <Row>
        <Form.Group as={Col} className="mb-3" controlId="formGridText">
          <Form.Label>Veículo</Form.Label>
          <Form.Control
            type="text"
            name="vehicle"
            value={formValues.vehicle}
            onChange={handleFormValues}
            placeholder="Digite a marca e ano"
          />
        </Form.Group>

        <Form.Group as={Col} className="mb-3" controlId="formGridText">
          <Form.Label>Placa do Veículo</Form.Label>
          <Form.Control
            type="text"
            name="plate"
            value={formValues.plate}
            onChange={handleFormValues}
            placeholder="Informe a placa"
          />
        </Form.Group>
      </Row>

      <Form.Group as={Col} controlId="formGridState">
        <Form.Label>Peça Trocada</Form.Label>
        <Form.Select
          name="parts"
          value={formValues.parts}
          onChange={handleFormValues}
        >
          <option>Escolha uma opção...</option>
          {services?.map((e, i) => (
            <option
              key={i}
              value={e.name}
            >
              Peça:{e.name}
              Manutenção:{e.labor}
              Preço:{e.price}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

    <Button variant="primary" type="submit">
      Iniciar Serviço
    </Button>
  </Form>
  )
}

export default ServiceForm