import styled, { css, CSSProperties } from "styled-components";

export const ContentBox = styled.div`
	padding: 15px;
`;

interface TileBoxProps {
	listView: boolean;
	style?: CSSProperties;
}
export const Box = styled.div<TileBoxProps>`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
	grid-gap: 15px;

  ${({listView}) => listView && css`
	display: block;
	`}
`;

export const TileBox = styled.div<TileBoxProps>`
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

export const Title = styled.h1`
	margin-bottom: 40px;
`;

export const Image = styled.img`
	width: 25vw;
	display: block;
	margin: 0 auto;
`;