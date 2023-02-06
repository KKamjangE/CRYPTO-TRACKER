import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  width: 200px;
  height: 200px;
`;
const H1 = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

function App() {
  return <Container>{/* <H1>Protected</H1> */}</Container>;
}

export default App;
