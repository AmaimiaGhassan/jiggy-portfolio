import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Amaimia Ghassan</HighlightSpan>!
      </p>
      <p>
        I'm <HighlightAlt>Fresh Cyber-security Graduate</HighlightAlt> based in Tunisia.
      </p>
      <p>
        I am passionate about cyber security and <br />
        leveraging technology to protect systems and data from threats.
      </p>
    </AboutWrapper>
  );
};

export default About;
