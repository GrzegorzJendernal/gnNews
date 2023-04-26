import styled, {keyframes} from "styled-components";
import spinner from "./iconSpinner.svg";

export const SpinnerBox = styled.div`
  text-align: center;
  margin-top: 88px;
`;

const rotation = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.img.attrs({
  src: spinner,
  alt: "Loading...",
})`
  width: 80px;
  height: auto;
  margin-top: 48px;
  animation: ${rotation} 1.5s linear infinite;
`;
