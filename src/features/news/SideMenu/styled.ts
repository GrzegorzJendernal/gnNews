import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.nav`
	width: 180px;
	min-height: 100vh;
  background-color: #4d4d4d;
	margin: 0;

  @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
	  width: unset;
    max-width: 180px;
  }
`;

export const Button = styled.button`
	margin: 8px;
  border: 1px solid white;
  background-color: #4d4d4d;
  color: white;
  cursor: pointer;
  border-radius: 20px;

  &:hover {
    background-color: #666666;
  }
`;

export const Title = styled.h2`
	color: white;
	font-size: 18px;
	margin: 10px;
	text-align: center;

  @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
    font-size: 10px;
    margin: 5px;
  }
`;

export const List = styled.ul`
	margin-top: 0;
	padding: 8px;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  display: grid;
  grid-template-columns: 20px auto;
  grid-gap: 10px;
  color: white;
  padding: 8px;
  cursor: pointer;
  border-radius: 20px;

  &:hover {
    background-color: #666666;
  }

  &.active {
    border: 1px solid white;
  }
`;

export const Item = styled.li`
  list-style: none;
`;

export const Country = styled.span`
  display: flex;
  align-items: center;
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;

  @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
    font-size: 10px;
    line-height: 12px;
  }
`;