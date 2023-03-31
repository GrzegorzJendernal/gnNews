import styled from "styled-components";

export const Wrapper = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
	background-color: #000000;
	display: flex;
	flex-direction: row;
	align-items: center;
	height: 84px;
	justify-content: space-between;
	padding-left: 60px;
	padding-right: 60px;

  @media (max-width: ${({theme}) => theme.breakpoints.large}) {
    padding-left: 50px;
    padding-right: 50px;
  }
	
  @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
    padding-left: 30px;
    padding-right: 30px;
  }

  @media (max-width: ${({theme}) => theme.breakpoints.small}) {
    padding-left: 15px;
    padding-right: 15px;
  }
`;

export const Logo = styled.img`
	height: 50px;
  width: auto;

  @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
    height: 40px;
  }
`;