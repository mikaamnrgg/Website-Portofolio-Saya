import React from "react";
import { Container } from "react-bootstrap";

import Particle from '../components/Particle'
import Techstack from "../components/Skillset/Techstack";
import Toolstack from "../components/Skillset/Toolstack";

const Skillset = () => {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Keahlian 
        </h1>

        <Techstack />

        <h1 className="project-heading">
          Alat yang saya gunakan
        </h1>
        <Toolstack />
      </Container>
    </Container>
  )
}

export default Skillset