import styled from "styled-components";

export const ContainerProfiles = styled.div`
    width: 400px;
    height: 600px;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    div{
        display: flex;
        flex-direction: column;
        h1{
            text-align: center;
        }
        input{
            width: 370px;
            height: 30px;
            border-radius: 10px;
            margin-bottom: 2rem;
        }
        button{
            width: 370px;
            height: 30px;
            margin: 1rem 0;
        }
        span{
           text-align: center;
           margin: 1rem 0;
           
        }
        form{
            width: 370px;
            display: flex;
            align-items: center;
            justify-content: center;
            display: none;
            input{
                width: 250px;
                height: 25px;
                margin: 0 1rem;
                outline: 0;
                border: none;
                font-size: 1rem;
                color: #333;
                text-align: center;
                ::placeholder{
                    font-size: 1rem;
                    color: #333;
                    text-align: center;
                }
            }
            button{
                width: 100px;
                height:30px;
            }
        }
        
    }
   
`