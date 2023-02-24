import styled from "styled-components";

export const ContainerForm = styled.form`
    width: 400px;
    height: 600px;
    border: 2px solid #424242;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    input{
        width: 370px;
        height: 30px;
        margin: 1rem 0;
        background: none;
        border: none;
        border-bottom: 2px solid #424242;
        text-align: center;
        font-size: 1rem;
        outline: 0;
        ::placeholder{
            text-align: center;
            font-size: 1rem;
            color: #333;
            font-weight: bold;
        }
    }

    button{
        width: 370px;
        height: 30px;
        margin: 1rem 0;
        border-radius: 10px;
        border: none;
    }
    a{
        cursor: pointer;
        :hover{
            text-decoration: underline;
        }
    }
`