import styled from "styled-components";
import { ButtonSizesEnum, ButtonTypes } from "./interfaces";
import { ButtonMaxHeight } from "./Variations";

const Container = styled.div<ButtonTypes>`
  max-width: fit-content;
  max-height: ${({ size }) => ButtonMaxHeight[size]};
  border: 1px solid white;
  font-size: ${({ size }) => ButtonMaxHeight[size]};
  align-items: center;
  justify-items: center;
  display: flex;
`;
interface ButtonProps {
  size: ButtonSizesEnum;
}
const Button = ({ size }: ButtonProps) => {
  return <Container size={size}>Button</Container>;
};

export default Button;
