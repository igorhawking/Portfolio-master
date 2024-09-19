import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              DEIXE-ME <span className="purple"> APRESENTAR </span> A MIM MESMO
            </h1>
            <p className="home-about-body">
              Apaixonei-me por programação e aprendi pelo menos algo, eu acho… 🤷‍♂️
              <br />
              <br />Sou fluente em clássicos como
              <i>
                <b className="purple"> React Native, Javascript,React Js e Angular. </b>
              </i>
              <br />
              <br />
              Meu campo de interesse é construir novas&nbsp;
              <i>
                <b className="purple"> Tecnologias e Produtos Web e  </b> e também
                em áreas relacionadas a{" "}
                <b className="purple">
                  mobile.
                </b>
              </i>
              <br />
              <br />
              Sempre que possível, também aplico minha paixão por desenvolver
              produtos com <b className="purple">Node.js</b> e
              <i>
                <b className="purple">
                  {" "}
                  Bibliotecas e Frameworks Modernos de Javascript
                </b>
              </i>
              &nbsp; como
              <i>
                <b className="purple"> React.js e Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>ENCONTRE-ME EM</h1>
            <p>
              Sinta-se à vontade para <span className="purple">conectar-se </span>comigo
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/igaodevs"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
                  <AiOutlineTwitter />
                
              <li className="social-icons">
                <a
                  href="https://github.com/igaodevs"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/igao.json/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
