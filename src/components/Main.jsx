import { styled } from "styled-components";
import Flex from "../ui/Flex";
import MainContainer from "./MainContainer";

const StyledMain = styled(Flex)`
  width: 100vw;
  height: 100vh;
  justify-content: center;
  background: var(--cl-bg-main);
`;

function Main() {
  return (
    <StyledMain as="main">
      <MainContainer />
    </StyledMain>
  );
}

export default Main;
