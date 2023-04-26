import styled from "styled-components";

export const Container = styled.span`
  display: flex;
  gap: 50px;

  @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
    gap: 30px;
  }

  @media (max-width: ${({theme}) => theme.breakpoints.small}) {
    gap: 15px;
  }
`;
