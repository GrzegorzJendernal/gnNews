import styled from "styled-components";

export const PopupWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PopupContent = styled.div`
  background-color: white;
	max-width: 60vw;
  padding: 20px;
  border-radius: 5px;
`;

export const ButtonBox = styled.span`
  display: flex;
	justify-content: space-between;
`;

export const Button = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 25px;
	height: 25px;
`;