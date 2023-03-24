import styled from "styled-components";

export const Wrapper = styled.div`
	margin-top: 10px;
	border: black 1px solid;
`;

export const List = styled.ul`
	list-style: none;
	display: flex;
	flex-direction: column;
	padding: 10px;
`;

export const Item = styled.li`
  height: 40px;
  background-color: #000000;
  color: white;
  font-size: 20px;
  line-height: 24px;
  font-weight: 400;
  padding: 8px 24px;
  border: 1px solid #FFFFFF;
  border-radius: 24px;
  cursor: pointer;
`;

export const Flag = styled.img`
	width: 20px;
`;