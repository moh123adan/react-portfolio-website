import React from "react";
import { IconButton } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function LinkedInLink() {
  const linkedinURL = "https://www.linkedin.com/in/mohamed-adan-9537ba280/";

  return (
    <IconButton
      href={linkedinURL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
    >
      <LinkedInIcon />
    </IconButton>
  );
}

function EmailLink() {
  const email = "maxamedadan169@gmail.com";
  const subject = "Subject of the email";

  const emailURL = `mailto:${email}?subject=${encodeURIComponent(subject)}`;

  return (
    <IconButton
      href={emailURL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Email"
    >
      <EmailIcon />
    </IconButton>
  );
}

function GitHubLink() {
  const githubURL = "https://github.com/moh123adan";

  return (
    <IconButton
      href={githubURL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub"
    >
      <GitHubIcon />
    </IconButton>
  );
}

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, My Name is Mohamed</h2>
        <div className="prompt">
          <p>
            Software developer with a passion for learning and creating
            full-stack applications
          </p>
          <LinkedInLink />
          <EmailLink />
          <GitHubLink />
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Angular, Redux, HTML, CSS, NPM, BootStrap, MaterialUI,
              Yarn, TailwindCSS, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, Java ExpressJS, GraphQL,
              MongoDB SQL
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python, C#, TypeScript, Go</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
