import { FunctionComponent } from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { PartsType, TasksType } from "../features/counter/counter-slice";
import { Button, Container } from "react-bootstrap";
import { useAppDispatch } from "../app/hooks";
import { decrement, refreshList } from "../features/counter/counter-slice";

interface TasksItemProps {
  task: TasksType;
  part: PartsType;
}

const TaskItem: FunctionComponent<TasksItemProps> = ({ task, part }) => {
  const dispatch = useAppDispatch();
  
  const handleDoneTask = (doneTask: TasksType) => {
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    dispatch(decrement({
      ...doneTask,
      done: true,
      dateEnd: today.toLocaleDateString('pt-Br')
    }))

    dispatch(refreshList(doneTask))
  }
  return (
    <Container style={{ display: 'flex', gap: '5px'}}>
      <CardGroup style={{ border: 'solid 2px black', borderRadius: '3px', marginBottom: '10px', width: '100%'}}>
        <Card.Body>Técnico: {task.technicalName}</Card.Body>
        <Card.Body>Cliente: {task.clientName}</Card.Body>
        <Card.Body>Veículo: {task.vehicle}</Card.Body>
        { !task.done ? <Card.Body>Data de início: {task.dateStart}</Card.Body>
          : <Card.Body>Data de Término: {task.dateEnd}</Card.Body> }
        <Card.Body>Total: RS {part?.price + part?.labor}</Card.Body>
      </CardGroup>
      {!task.done && <Button style={{ height: '50px'}} onClick={() => handleDoneTask(task)}>DONE</Button>}
    </Container>
  )
}

export default TaskItem