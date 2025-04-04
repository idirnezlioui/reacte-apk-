// styles/buttonStyle.js
import styled from "styled-components";

export const ButtonStyled = styled.button`
  outline: none;
  border: none;
  font-family: inherit;
  font-size: inherit;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.4s ease-in-out;

  background: ${(props) => props.$bg || "transparent"};
  padding: ${(props) => props.$bPad || "0.5rem 1rem"};
  border-radius: ${(props) => props.$bRad || "5px"};
  color: ${(props) => props.$color || "#000"};
`;
