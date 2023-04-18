import { useState, FunctionComponent } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ServiceForm from './ServiceForm';

interface NewServiceProps {
  show: boolean;
  handleCloseShow: () => void;
}

const NewService: FunctionComponent<NewServiceProps> = ({show, handleCloseShow}) => {
  return (
    <>
      <Offcanvas show={show} onHide={handleCloseShow} backdrop="static">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Adicionar um novo Serviço</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ServiceForm />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default NewService