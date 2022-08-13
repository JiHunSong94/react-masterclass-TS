import styled from "styled-components";

const Container = styled.div`
  backgroung-color: ${(props) => props.theme.bgColor};
`;
const H1 = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

function App() {
  return (
    <Container>
      <H1>Procted</H1>
    </Container>
  );
}

export default App;
