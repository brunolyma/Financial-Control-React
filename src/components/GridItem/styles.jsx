import styled from "styled-components";

export const Tr = styled.tr``;

export const Td = styled.td`
  padding-top: 1.5rem;

  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  word-break: break-all;

  svg {
    height: 1.8rem;
    width: 1.8rem;
  }
`;
