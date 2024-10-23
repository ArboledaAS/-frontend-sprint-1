import styled, { keyframes } from "styled-components";


const keyframe = keyframes`
  
    0% {
      clip-path: circle(0%);
    }
    40% {
      clip-path: circle(40%);
    }
    100% {
      clip-path: circle(125%);
      }
    `

export const Prueba = styled.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background-color: #242424;

animation: 3.5s cubic-bezier(.25, 1, .30, 1) ${keyframe} both;
`

