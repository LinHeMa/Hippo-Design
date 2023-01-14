import { useState } from "react";
import styled from "styled-components";
import reactLogo from "./assets/react.svg";
import Button from "./InputComponent/Button/Button";

const Row = styled.div`
  display: flex;
  justify-content: center;
`;

function App() {
  return (
    <div className="App">
      <Row>
        <Button size="xs" />
        <Button size="s" />
        <Button size="m" />
        <Button size="l" />
        <Button size="xl" />
      </Row>
    </div>
  );
}

export default App;
