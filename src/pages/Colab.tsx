import { Button, Container, Row, Col } from "react-bootstrap";
import SystemNavBar from "../components/SystemNavBar";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import ColabTaskDone from "../components/ColabTaskDone";
import ColabTaskToDo from "../components/ColabTaskToDo";
import '../styles/Colab.css'

function Colab() {
  const handleCloseShow = () => null;
  const employees = useAppSelector((state) => state.counter.employees)
  const dispatch = useAppDispatch()

  return (
    <Container>
      <SystemNavBar handleCloseShow={handleCloseShow}/>
      <Container className="colab-main-container">
        <div>
          {employees.map((e, i) => (
            <Container key={i}>
              <Container style={{ display: 'flex', gap: '40px', justifyContent: 'space-around', alignItems: 'center'}}>
                <Button >
                  {e}
                </Button>
                <Container>
                  <ColabTaskToDo employee={e}  />
                  <ColabTaskDone employee={e} />
                </Container>
              </Container>
              <hr />
            </Container>
          ))}
        </div>
      </Container>
    </Container>
  )
}

export default Colab