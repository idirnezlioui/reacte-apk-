// styles/orbStyle.js
import styled, { keyframes } from 'styled-components';

export const getMoveOrb = (width, height) => keyframes`
    0% {
        transform: translate(0, 0);
    }
    50% {
        transform: translate(${width}px, ${height / 2}px);
    }
    100% {
        transform: translate(0, 0);
    }
`;

export const OrbStyled = styled.div`
    width: 70vh;
    height: 70vh;
    position: absolute;
    border-radius: 50%;
    margin-left: -37vh;
    margin-top: -37vh;
    background: linear-gradient(180deg, #F56692 0%, #F2994A 100%);
    filter: blur(400px);
    animation: ${({ animation }) => animation} 15s alternate linear infinite;
`;
