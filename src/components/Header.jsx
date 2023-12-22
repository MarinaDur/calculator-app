import { styled } from "styled-components";
import Heading from "../ui/Heading";
import Themes from "./Themes";
import Flex from "../ui/Flex";

const StyledHeader = styled(Flex)`
  width: 100%;
  justify-content: space-between;
  /* height: 50px; */
  align-items: flex-end;
  margin-bottom: 2rem;
`;

function Header() {
  return (
    <StyledHeader as="header">
      <Heading>calc</Heading>
      <Themes />
    </StyledHeader>
  );
}

export default Header;
