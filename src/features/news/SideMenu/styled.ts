import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const Wrapper = styled.nav`
  width: 180px;
  min-height: 100vh;
  background-color: ${({theme}) => theme.colors.sideMenu.background};
  margin: 0;

  @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
    width: unset;
    max-width: 180px;
  }
`;

export const Button = styled.button`
  margin: 8px;
  border: 1px solid white;
  background-color: ${({theme}) => theme.colors.sideMenu.background};
  color: ${({theme}) => theme.colors.sideMenu.text};
  cursor: pointer;
  border-radius: 20px;
  transition: ${({theme}) => theme.transition.time};

  &:hover {
    background-color: ${({theme}) => theme.colors.sideMenu.hover};
  }
`;

export const Title = styled.h2`
  color: ${({theme}) => theme.colors.sideMenu.text};
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
  transition: ${({theme}) => theme.transition.time};
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  display: grid;
  grid-template-columns: 20px auto;
  grid-gap: 10px;
  color: ${({theme}) => theme.colors.sideMenu.text};
  padding: 8px;
  cursor: pointer;
  border-radius: 20px;
  transition: ${({theme}) => theme.transition.time};

  &:hover {
    background-color: ${({theme}) => theme.colors.sideMenu.hover};
  }

  &.active {
    border: 1px solid ${({theme}) => theme.colors.sideMenu.active};
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
