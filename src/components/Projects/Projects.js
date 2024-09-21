import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Meus <strong className="purple">Trabalhos Recentes</strong>
        </h1>
        <p style={{ color: "white" }}>
          Aqui estão alguns projetos nos quais trabalhei recentemente.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="QuantumCloudStorage é um sistema de armazenamento em nuvem avançado e seguro, projetado para atender às necessidades de empresas e usuários que buscam uma proteção de armazenamento confiável e inovadora. Este projeto utiliza tecnologias de ponta, como criptografia quântica, inteligência artificial e blockchain, para garantir a segurança, privacidade e integridade dos dados armazenados na nuvem."
              ghLink="https://github.com/igaodevs/QuantumCloudStorage"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="Minha página pessoal de blog construída com Next.js e Tailwind CSS. Os conteúdos são extraídos de arquivos markdown e renderizados usando Next.js. Suporta modo escuro e é fácil de escrever blogs usando markdown."
              ghLink="https://github.com/igaodevs/CruzeiroConnect"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Site de empresa chamada appezshop feita com react js"
              ghLink="https://appezshop.com/"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Utilizando o conjunto de dados de doenças de plantas do Kaggle, treinei um modelo classificador de imagens usando o framework 'PyTorch' com CNN e Transfer Learning, contendo 38 classes de várias folhas de plantas. O modelo foi capaz de detectar folhas doentes e saudáveis de 14 plantas únicas, com uma precisão de 98% usando o modelo pré-treinado Resnet34."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="AI para o Bem Social"
              description="Usando 'Processamento de Linguagem Natural' para detectar postagens relacionadas ao suicídio e ideação suicida de usuários no espaço digital, ajudando assim na prevenção do suicídio."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Reconhecimento Facial e Detecção de Emoções"
              description="Treinei um classificador CNN usando o 'FER-2013 dataset' com Keras e Tensorflow. O classificador previu com sucesso os vários tipos de emoções humanas. A maior precisão obtida com o modelo foi de 60,1%. Utilizei Open-CV para detectar rostos em imagens e então passar o rosto para o classificador para prever a emoção da pessoa."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
