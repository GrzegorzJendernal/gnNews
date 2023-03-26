import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.nav`
	max-width: 180px;
  background-color: #4d4d4d;
	margin: 0;
`;

export const List = styled.ul`
	list-style: none;
	padding: 0;
	margin-top: 0;
`;

export const Item = styled.li`
  display: grid;
  grid-template-columns: 20px auto;
  grid-gap: 10px;
  color: white;
  padding: 8px 16px;
  cursor: pointer;
`;

export const Flag = styled.img`
	width: 20px;
	align-self: center;
`;

export const Country = styled.span`
  display: flex;
  align-items: center;
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: cadetblue;
  font-size: 14px;
  line-height: 21px;
  font-weight: 700;
  &.active {
    border: 1px solid cadetblue;
    border-radius: 24px;
  }
`;