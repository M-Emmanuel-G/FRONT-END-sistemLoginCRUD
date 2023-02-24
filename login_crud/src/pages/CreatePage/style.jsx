import styled from "styled-components";

export const ContainerForm = styled.form`
    width: 400px;
    height: 600px;
    border: 2px solid #424242;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    input{
        width: 370px;
        height: 30px;
        margin: 1rem 0;
        outline: 0;
        text-align: center;
        text-align: center;
        font-size: 1rem;
        color: #333;
        border: none;
        border-bottom: 2px solid #424242;
        ::placeholder{
            text-align: center;
            text-align: center;
            font-size: 1rem;
            color: #333;
        }
    }
    button{
        width: 250px;
        height: 30px;
        margin: 1rem 0;
        border-radius: 10px;
        border: none;
    }
`