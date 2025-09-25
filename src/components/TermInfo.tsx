import { User, WebsiteName, Wrapper } from "./styles/TerminalInfo.styled";

const TermInfo = () => {
  return (
    <Wrapper>
      <User>jiggy</User>@<WebsiteName>terminal.jiggy.dev</WebsiteName>:~$
    </Wrapper>
  );
};

export default TermInfo;
