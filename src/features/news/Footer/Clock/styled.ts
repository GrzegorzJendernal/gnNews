import styled from "styled-components";

export const StyledClock = styled.span`
  display: flex;
  font-size: small;
  color: ${({theme}) => theme.colors.clockText};
  justify-content: right;
  padding: 10px;
`;
