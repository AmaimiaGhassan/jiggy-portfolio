import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4"]) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
        “Talk is cheap. Show me the code”? I got you. <br />
        Here are some of my projects you shouldn't misss
      </ProjectsIntro>
      {projects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      <Usage cmd="projects" marginY />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "SOC Automation Lab",
    desc: "Spearheaded implementation of a SOC automation lab utilizing Wazuh, TheHive, and Shuffle, resulting in a 15% reduction in false positive alerts and freeing up 10 hours per week for critical tasks.",
    url: "",
  },
  {
    id: 2,
    title: "Active Directory Pentesting HomeLab",
    desc: "Designed, built, and maintained a personal homelab that simulates a full Active Directory environment, integrating and managing various monitoring and security tools to practice system administration, network management, and security monitoring in a hands-on environment.",
    url: "https://ghassanamaimia.hashnode.dev/oscp-journey-active-directory-home-lab",
  },
  {
    id: 3,
    title: "Cyber Security Personal Blog",
    desc: "A platform to share my thoughts and experiences in the field of Cyber Security.",
    url: "https://ghassanamaimia.hashnode.dev",
  },
  {
    id: 4,
    title: "Source code web Crawler",
    desc: "a python based automation tool that I developped to crawl the source code of a web app after succesfully finding a LFI",
    url: "https://github.com/AmaimiaGhassan/Crawler",
  },
];

export default Projects;
