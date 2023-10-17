import React from "react";
import { useState } from "react";
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
  Companies,
} from "./ProjectsStyle";
import ProjectCard from "../Cards/ProjectCards";
import { projects } from "../../data/constants";

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("all");
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects, from logo designs to web
          apps, and have had the opportunity to serve many companies, including
          some well-known enterprises and organisations like SunRice, Macsim, St
          Luke's Anglican Church, and more.
        </Desc>
        <Companies src="assets/companies.png" />
        <ToggleButtonGroup>
          {toggle === "all" ? (
            <ToggleButton active value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          ) : (
            <ToggleButton value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          )}
          <Divider />

          {toggle === "logo" ? (
            <ToggleButton active value="logo" onClick={() => setToggle("logo")}>
              LOGO
            </ToggleButton>
          ) : (
            <ToggleButton value="logo" onClick={() => setToggle("logo")}>
              LOGO
            </ToggleButton>
          )}
          <Divider />
          {toggle === "packaging" ? (
            <ToggleButton
              active
              value="packaging"
              onClick={() => setToggle("packaging")}
            >
              PACKAGING
            </ToggleButton>
          ) : (
            <ToggleButton
              value="packaging"
              onClick={() => setToggle("packaging")}
            >
              PACKAGING
            </ToggleButton>
          )}
          <Divider />
          {toggle === "3D" ? (
            <ToggleButton active value="3d" onClick={() => setToggle("3d")}>
              3D
            </ToggleButton>
          ) : (
            <ToggleButton value="3d" onClick={() => setToggle("3d")}>
              3D
            </ToggleButton>
          )}
          <Divider />
          {toggle === "web design" ? (
            <ToggleButton
              active
              value="web design"
              onClick={() => setToggle("web design")}
            >
              WEB DESIGN
            </ToggleButton>
          ) : (
            <ToggleButton
              value="web design"
              onClick={() => setToggle("web design")}
            >
              WEB DESIGN
            </ToggleButton>
          )}
          <Divider />
          {toggle === "web development" ? (
            <ToggleButton
              active
              value="web development"
              onClick={() => setToggle("web development")}
            >
              WEB DEVELOPMENT
            </ToggleButton>
          ) : (
            <ToggleButton
              value="web development"
              onClick={() => setToggle("web development")}
            >
              WEB DEVELOPMENT
            </ToggleButton>
          )}
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === "all" &&
            projects.map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
          {projects
            .filter((item) => item.category.includes(toggle))
            .map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
