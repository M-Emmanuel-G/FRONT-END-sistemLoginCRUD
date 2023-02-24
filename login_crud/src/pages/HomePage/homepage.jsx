import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import useRequestData from "../../hooks/useRequestData"
import { AnimLoading, ContainerBase } from "../../style/globalStyle"
import { ContainerProfiles } from "./style"

export const Homepage = ()=>{

    const [profile, setProfile] = useState([])
    const [newPass, setNewPass] = useState(``)
    const navigate = useNavigate()

    const header = {
        headers:{
            Authorization:localStorage.getItem('token'),
        }
    }
    
    const body = {
        password : newPass
    }
    
    const [data, isLoading] = useRequestData( 'https://login-crud.onrender.com/users/profile', header )

    const finishSession = ()=>{
        const confirm = window.confirm('Deseja finalizar sua sessão?')
        if( confirm ){
            localStorage.removeItem('token')
            navigate('/login')
        }
    }

    const updateAccount = ()=>{
     
        if( document.querySelector('.newPass').style.display === 'none'){
            document.querySelector('.newPass').style.display = 'flex'
        } else{
            document.querySelector('.newPass').style.display = 'none'
        }
    }

    const confirmUpdate = (id)=>{
        const confirm = window.confirm('Deseja realmente alterar sua senha?')
        if (confirm){
            axios
            .patch(`https://login-crud.onrender.com/users/update/${id}`, body, header )

            .then((response)=>{alert(response.data);})
            .catch((error)=>{alert(error.response.data)})
        }

    } 

    const deleteAccount = (id)=>{
        const confirm = window.confirm('Deseja realmente excluir sua conta?')
        if (confirm) {
            axios
                .delete(`https://login-crud.onrender.com/users/delete/${id}`,{headers:{
                    Authorization: localStorage.getItem('token')
                }})
                .then((response)=>{
                    alert('Sua conta foi removida com sucesso.')
                    navigate('/login')
                })
                    .catch((error)=>{alert('Ops..Sua conta não pode ser foi removida.')})
        }
    }

    const renderProfile = ()=>{
        return(
            <div>
                <h1>Profile:</h1>
                <span>Nome: <span>{data.name}</span></span>
                <span>Email: <span>{data.name}</span></span>
                <span>Senha: ****** </span>
                <button onClick={()=>{updateAccount()}}>Alterar senha</button>
                <form className="newPass" >
                    <input
                        placeholder="Digite sua nova senha."
                        value={newPass}
                        onChange={(ev)=>{setNewPass(ev.target.value)}}
                    />
                    <button type="button" onClick={()=>{confirmUpdate(profile.id)}}>Confirmar</button>
                </form>
                <button onClick={()=>{deleteAccount(profile.id)}}>Excluir conta</button>
                <button onClick={finishSession}>Terminar sessão</button>
            </div>
        )
    }

    return(
        <ContainerBase>
            <ContainerProfiles>
                {isLoading && <AnimLoading/>}
                {!isLoading && renderProfile()}
            </ContainerProfiles>
        </ContainerBase>
    )
}