import styled from "styled-components";

export const Container = styled.div`
  max-width: 112rem;
  width: 98%;

  margin: 2rem auto;
  padding-block: 1.5rem;

  background-color: #fff;
  box-shadow: 0 0 0.5rem #ccc;
  border-radius: 0.5rem;

  display: flex;
  justify-content: space-around;
  gap: 1rem;

  @media (max-width: 750px) {
    display: grid;
  }
`;

export const InputContent = styled.div`
  display: flex;
  flex-direction: column;

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const Label = styled.label``;

export const Input = styled.input`
  padding: 0.5rem 1.5rem;

  outline: none;
  border-radius: 0.5rem;
  border: 0.1rem solid #ccc;

  font-size: 1.5rem;
`;

export const RadioGroup = styled.div`
  display: flex;
  align-items: center;

  input {
    margin-inline: 1.5rem;
    margin-top: 0;

    accent-color: black;
  }
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;

  border: none;
  border-radius: 0.5rem;
  background-color: teal;

  color: white;

  cursor: pointer;
`;
