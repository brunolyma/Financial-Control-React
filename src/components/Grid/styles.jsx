import styled from "styled-components";

export const Table = styled.table`
  max-width: 112rem;
  width: 98%;

  padding: 2.5rem;
  margin: 2rem auto;

  background-color: #fff;
  box-shadow: 0 0 0.5rem #ccc;
  border-radius: 0.5rem;
`;

export const Thead = styled.thead``;
export const Tbody = styled.tbody``;
export const Tr = styled.tr``;

export const Th = styled.th`
    text-align: start;
    border-bottom: inset;
    padding-bottom: .5rem;
    text-align: ${(props) => (props.alignCenter ? "center" : "start")};
    width: ${(props) => (props.width ? props.width + "%" : "auto" )};
`;
