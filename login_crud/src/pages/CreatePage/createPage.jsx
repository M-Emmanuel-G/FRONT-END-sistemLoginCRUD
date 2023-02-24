import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { AnimLoading, ContainerBase } from "../../style/globalStyle"
import { ContainerForm } from "./style"

export const CreatePage = ()=>{
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const sendCreate= (ev)=>{
        ev.preventDefault()

        const body = {
            name,
            email,
            password
        }
       
        axios
            .post(`https://login-crud.onrender.com/users/signup`, body)
            .then((resp)=>{
                alert(resp.data.message)
                navigate('/login')
            })
            .catch((error)=>{console.log(error.response.data);})
    }

    return(
        <ContainerBase>
            <ContainerForm onSubmit={sendCreate}>
                <h2>Crie sua conta</h2>
                <input
                    placeholder="Digite seu nome."
                    value={name}
                    onChange={(ev)=>{setName(ev.target.value)}}
                />
                <input
                    placeholder="Digite seu email."
                    value={email}
                    onChange={(ev)=>{setEmail(ev.target.value)}}
                />
                <input
                    placeholder="Digite uma senha."
                    value={password}
                    onChange={(ev)=>{setPassword(ev.target.value)}}
                />
                <button disabled = { name === '' || email === '' || password.length < 6 }>Criar conta</button>
                <button onClick={()=>{navigate('/Login')}} type="text">Voltar</button>
            </ContainerForm>
        </ContainerBase>
    )
}