import styled from "styled-components";
import  Danger from "./danger.svg";

export const ErrorBox = styled.div`
  text-align: center;
  margin-top: 95px;
`;

export const Sign = styled.img.attrs({
	src: Danger,
	alt: "Sign",
})`
  width: 37px;
  height: 33.34px;
  margin-bottom: 23px;
`;

export const Title = styled.h3`
  font-weight: 700;
  font-size: 24px;
  margin: 0 0 32px;
`;

export const Link = styled.a`
  display: flex;
  justify-content: center;
  text-decoration: none;
  margin: 32px auto 0;
`;