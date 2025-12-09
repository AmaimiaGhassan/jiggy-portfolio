import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
} from "../../utils/funcs";
import { Wrapper } from "../styles/Output.styled";
import { termContext } from "../Terminal";

const certifications = [
  {
    id: 1,
    title: "CRTP Certification",
    desc: "Certified Red Team Professional - Pentesting Active Directory Environments",
    url: "https://www.credential.net/3d411f2c-f8f1-4d40-b9ce-378f1d8cdd13#acc.9XhvsfI0",
  },
  {
    id: 2,
    title: "Ejpt Certification", 
    desc: "Elearn Security Junior Penetration Tester - Practical Pentesting Skills",
    url: "https://certs.ine.com/46d800c8-cea1-48f7-905e-f728d5f276ff",
  },
];

const Certifications = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command makes redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "certs")) {
      certifications.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  return (
    <Wrapper data-testid="certs">
      <p>" is not enough"? I got you.</p>
      <p>Here are some of my certifications that I succeeded to pass:</p>
      <br />
      {certifications.map(({ id, title, desc }) => (
        <div key={id}>
          <p><strong>{id}. {title}</strong></p>
          <p>{desc}</p>
          <br />
        </div>
      ))}
      <p>Usage: certs go [1-2]</p>
    </Wrapper>
  );
};

export default Certifications;
