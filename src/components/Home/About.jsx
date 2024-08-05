import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { SiInstagram } from "react-icons/si";



const About = () => {
    return (
        <Container fluid className="home-about-section" id="about">
          <Container>
            <Row>
              <Col md={8} className="home-about-description">
                <h4 style={{ fontSize: "2.6em" }}>
                BIARKAN SAYA MEMPERKENALKAN DIRI
                </h4>
                <p className="home-about-body">
                 Hai, Saya Micka Manurung. Mahasiswa semester 6 dari Politeknik Wilmar Bisnis Indonesia, Program Studi D4 Teknologi Rekayasa 
                Perangkat Lunak.
                <br />
                <br />
                Saya memiliki ketertarikan yang kuat dalam 
                desain grafis, UI/UX, dan pengembangan web. Dengan latar belakang yang mencakup pembuatan 
                elemen visual yang menarik, perancangan antarmuka pengguna yang intuitif, serta pengkodean dan 
                implementasi teknis, saya siap belajar lebih dan berkontribusi dalam menciptakan pengalaman web 
                yang optimal dan menarik.
                <br />
                <br />
    
                </p>


              </Col>
              <Col md={4} className="myAvtar">
                <Tilt>
                  <img src={LaptopImg} className="img-fluid" alt="avatar" />
                </Tilt>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="home-about-social">

                <p>
                Jangan ragu untuk menghubungi saya
                </p>
                <ul className="home-about-social-links">
                  <li className="social-icons">
                    <a
                      href="https://github.com/mikaamnrgg"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="github"
                    >
                      <AiFillGithub />
                    </a>
                 </li>
                  <li className="social-icons">
                    <a
                      href="mikaamnrgg"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                      aria-label="instagram"
                    >
                      <SiInstagram />
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Container>
      );
    
}

export default About