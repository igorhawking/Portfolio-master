import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Olá a todos, eu sou <span className="purple">Igor Oliveira</span>
            de <span className="purple">São Paulo, Brasil.</span>
            <br />
            Atualmente, trabalho como desenvolvedor de software.
            <br />
            <br />
            Além de programar, algumas outras atividades que eu adoro fazer!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jogar Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Escrever Blogs Tecnológicos
            </li>
            <li className="about-activity">
              <ImPointRight /> Viajar
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Esforce-se para construir coisas que façam a diferença!"
          </p>
          <footer className="blockquote-footer">Igor</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
