import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 30%;
  
  padding: 0.5rem 1.5rem;
  
  background-color: #fff;
  border-radius: .5rem;
  box-shadow: 0 0 .5rem #8c8c8c89;


  @media screen and (max-width: 750px) {
    width: 20%;

    p {
      font-size: 1.2rem;
    }

    span {
      font-size: 2rem;
    }

    svg {
      display: none;
    }
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 1rem;
  
  width: 100%;
  
  margin: 1.5rem;

  svg {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

export const HeaderTitle = styled.p`
  font-size: 2rem;
`;

export const Total = styled.span`
  font-size: 3rem;
  font-weight: 700;
`;
