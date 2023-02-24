import axios from "axios"
import { useState } from "react"
import { AnimLoading, ContainerBase } from "../../style/globalStyle"
import { ContainerForm } from "./style"
import { useNavigate } from "react-router-dom"

export const LoginPage = ()=>{
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const sendLogin = (ev)=>{
        ev.preventDefault()
        const body = {
            email: email,
            password: password
        }
        axios
            .post(`https://login-crud.onrender.com/users/login`, body)
            .then((response)=>{
                localStorage.setItem('token', response.data.token)
                if(response.data.token) navigate('/Home')
            })
            .catch((error)=>{
                alert(error.response.data);
            })
    }

    const sendCreateAccount = (ev)=>{
        ev.preventDefault()
        navigate('/Create')
    }

return (
        <ContainerBase>
            <ContainerForm onSubmit={sendLogin}>
                <h1>Sistema de Login</h1>
                <input
                    placeholder="Digite seu email."
                    type='email'
                    value={email}
                    onChange={(ev)=>{setEmail(ev.target.value)}}
                />
                <input
                    placeholder="Digite sua senha."
                    type={'text'}
                    value={password}
                    onChange={(ev)=>{setPassword(ev.target.value)}}
                />

                <button colorScheme='grey' variant='outline' disabled={ email === '' || password.length < 6}> Logar</button>
                <button colorScheme='grey' variant='outline' type='button' onClick={sendCreateAccount}> Cadastre-se</button>
                <p>Esqueceu sua senha? <a>Clique aqui!</a></p>
                
            </ContainerForm>
        </ContainerBase>
    )
}