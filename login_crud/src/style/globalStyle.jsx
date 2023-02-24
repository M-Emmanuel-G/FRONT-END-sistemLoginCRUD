import styled, { keyframes } from "styled-components";

export const ContainerBase = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const AnimConfig = keyframes`

    0%{transform:rotate(0deg)}

    100%{transform:rotate(360deg)}

`

export const AnimLoading = styled.div`

    width: 20px;
    height: 20px;
    background: none;
    border: 5px solid transparent;
    border-top: 5px solid #333;
    border-radius: 50%;
    animation: ${AnimConfig} .5s linear infinite;
`