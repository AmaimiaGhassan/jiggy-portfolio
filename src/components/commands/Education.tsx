import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>Here is my education background!</EduIntro>
      {eduBg.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "B.Sc (Hons) in Automation& Industrial Informatics",
    desc: "ISET Nabeul | 2018 ~ 2021",
  },
  {
    title: "Master in Cyber Security",
    desc: "ISSAT Gafsa | 2023 - 2024",
  },
  {
    title: "Master in Information security",
    desc: "Tek-up  | 2024 - Present",
  },
];

export default Education;
