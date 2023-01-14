import React from "react";
import styled from "styled-components";
import { ButtonSizesEnum, ButtonTypes } from "./interfaces";
import { ButtonSizes } from "./Variations";

const Container = styled.div<ButtonTypes>`
  max-width: 50px;
  max-height: ${({ size }) => ButtonSizes[size]};
  border: 1px solid black;
  font-size: 16px;
`;
interface ButtonProps {
  size: string;
}
const Button = ({ size }: ButtonProps) => {
  return <Container size={size}>Button</Container>;
};

export default Button;
