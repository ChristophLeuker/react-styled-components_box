import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
// import BoxWithStyledComponents from "../components/BoxWithStyledComponents.js";
import styled from "styled-components";
import StyledBox from "../components/BoxWithStyledComponents.js";

const Container = styled.div`
  display: flex;
  flex-direction: row;

  background-color: yellow;
`;

export default function HomePage() {
  return (
    <Container>
      <BoxWithClassName />
      <BoxWithClassName isBlack />
      <StyledBox />
      <StyledBox isBlack />
    </Container>
  );
}
