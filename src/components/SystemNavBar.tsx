import { Navbar, Container, Nav, Image, Button } from "react-bootstrap"
import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import logosemfundo from '../assets/cabecalho.png'

import '../styles/SystemNavBar.css'

interface SystemNavBarProps {
  handleCloseShow: () => void;
}

const SystemNavBar: FunctionComponent<SystemNavBarProps> = ({ handleCloseShow }) => {
  const navigate = useNavigate();

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand className="logo-nav" onClick={() => navigate('/system')}>
          <Image src={logosemfundo} width={100} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link
              onClick={handleCloseShow}
            >Adicionar Serviço</Nav.Link>
            <Nav.Link onClick={() => navigate('/colab')}>Colaboradores</Nav.Link>
          </Nav>
          <Button
            variant="secondary"
            onClick={() => navigate('/')}
          >Sair</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default SystemNavBar