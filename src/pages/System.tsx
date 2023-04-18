import { Container } from "react-bootstrap";
import { useState } from 'react';
import SystemNavBar from "../components/SystemNavBar";
import NewService from "../components/NewService";
import TasksToDo from "../components/TasksToDo";
import TasksDone from "../components/TasksDone";

import "../styles/System.css"

const System = () => {
  const [show, setShow] = useState(false);
  const handleCloseShow = () => setShow(!show);
  return (
    <Container>
      <SystemNavBar handleCloseShow={handleCloseShow} />
      <Container className="taks-status-container">
        <TasksToDo />
        <TasksDone />
      </Container>
      <NewService show={show} handleCloseShow={handleCloseShow} />
    </Container>
  )
}

export default System