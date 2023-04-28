import styled from "styled-components";

export const Button = styled.button`
  height: 40px;
  background-color: ${({theme}) => theme.colors.button.background};
  color: ${({theme}) => theme.colors.button.text};
  font-size: 14px;
  line-height: 150%;
  font-weight: 700;
  padding: 8px 24px;
  border: 1px solid ${({theme}) => theme.colors.button.border};
  border-radius: 24px;
  cursor: pointer;
  text-transform: uppercase;

  @media (max-width: ${({theme}) => theme.breakpoints.large}) {
    font-size: 11px;
  }

  @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
    font-size: 10px;
    padding: 4px 12px;
  }

  @media (max-width: ${({theme}) => theme.breakpoints.small}) {
    font-size: 8px;
    padding: 2px 6px;
  }

  &:hover {
    background-color: ${({theme}) => theme.colors.button.hover};
  }

  &:active {
    background-color: ${({theme}) => theme.colors.button.active};
  }
`;

export const LinkButton = styled(Button).attrs(() => ({
  as: "a",
}))`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;
