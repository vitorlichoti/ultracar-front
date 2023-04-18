import { useState } from 'react'
import { Button, Container, Image } from 'react-bootstrap'
import logonova from '../assets/logonova.png'
import { useNavigate } from "react-router-dom";

import '../styles/Home.css'

function Home() {
  const navigate = useNavigate();
  return (
    <Container className='home-container'>
      <Image width={400} src={logonova}></Image>
      <button
        className='start-button'
        onClick={() => navigate('/system') }
      >
        Iniciar
      </button>
    </Container>
  )
}

export default Home