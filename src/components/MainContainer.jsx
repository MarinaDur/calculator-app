import { styled } from "styled-components";
import Header from "./Header";
import Screen from "./Screen";
import Flex from "../ui/Flex";
import Calculator from "./Calculator";

const StyledMainContainer = styled(Flex)`
  width: 95%;
  max-width: 410px;
  flex-direction: column;
  /* gap: 2rem; */
  white-space: normal;
`;

function MainContainer() {
  return (
    <StyledMainContainer>
      <Header />
      <Screen />
      <Calculator />
    </StyledMainContainer>
  );
}

export default MainContainer;
