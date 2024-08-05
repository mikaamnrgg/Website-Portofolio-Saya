import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import Project2 from "../assets/projects/Project2.jpg";
import Project1 from "../assets/projects/Project1.jpg";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
        Berikut adalah beberapa proyek yang telah saya kerjakan. 
        </h1>
      
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Project1}
              isBlog={false}
              title="Desain Antarmuka"
              description="Desain antarmuka pengguna aplikasi DoPro (Domestic Product) untuk penjualan hasil UMKM kerajinan tangan menggunakan Figma.
              ."
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Project2}
              isBlog={false}
              title="Web Apotek"
              description="Web untuk mengelola penjualan obat di apotek dengan fitur CRUD (Create, Read, Update, Delete) Menggunakan Bahasa Pemrograman PHP, Basis Data MySQL, dan Frontend: HTML, CSS, JavaScript."
             
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  )
}

export default Projects