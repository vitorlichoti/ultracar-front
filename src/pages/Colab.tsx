import { Container, Col } from "react-bootstrap";
import SystemNavBar from "../components/SystemNavBar";

import { colabs } from "../mocks/mocktasks";
import TasksToDo from "../components/TasksToDo";
import TasksDone from "../components/TasksDone";

import '../styles/Colab.css'

function Colab() {
  const handleCloseShow = () => null;

  return (
    <Container>
      <SystemNavBar handleCloseShow={handleCloseShow}/>
      <Container className="colab-main-container">
        <div>
          {colabs.map((e, i) => (
            <li key={i}>
              {e}
            </li>
          ))}
        </div>
        <div className="colab-tasks-container">
          <TasksToDo />
          <TasksDone />
        </div>
      </Container>
    </Container>
  )
}

export default Colab