import styled from "styled-components";

export const Container = styled.span`
	display: flex;
	gap: 50px;
`;

export const Button = styled.button`
	height: 40px;
	background-color: #000000;
	color: white;
  font-size: 14px;
  line-height: 21px;
  font-weight: 700;
  padding: 8px 24px;
  border: 1px solid #FFFFFF;
  border-radius: 24px;
	cursor: pointer;
	text-transform: uppercase;
	
	&:hover {
		background-color: #4d4d4d;
	}
`;