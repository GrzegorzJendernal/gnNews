import styled, { css, CSSProperties } from "styled-components";

export const ContentBox = styled.div`
	padding: 15px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 5px;
  }
`;

interface TileBoxProps {
	listView: boolean;
	style?: CSSProperties;
}
export const Box = styled.div<TileBoxProps>`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
	grid-gap: 15px;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    grid-template-columns: 1fr;
  }

  ${({listView}) => listView && css`
	display: block;
	`}
`;

export const Article = styled.div<TileBoxProps>`
  background-color: #cccccc;
	padding: 8px;
	border-radius: 12px;

  ${({listView}) => listView && css`
    border-bottom: black 1px solid;
	  border-radius: unset;
	  background-color: white;
  `}
  &:hover {
    background-color: #e6e6e6;
  }
`;

export const Header = styled.h1`
	margin: 8px;
	font-size: 35px;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 28px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 16px;
  }
`;

export const Image = styled.img`
	width: 22vw;
	display: block;
	margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    width: 25vw;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    width: 40vw;
  }
`;

export const Title = styled.h2`
	font-size: 26px;
	
  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 14px;
  }
`;

export const Paragraph = styled.p`
	font-size: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 14px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 10px;
  }
`;