import { BrowserRouter, Route, Routes } from "react-router-dom"
import { CreatePage } from "../pages/CreatePage/createPage"
import { Homepage } from "../pages/HomePage/homepage"
import { LoginPage } from "../pages/LoginPage/loginpage"

export const Router = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<LoginPage/>}/>
                <Route path="/Login" element={<LoginPage/>}/>
                <Route path="/Create" element={<CreatePage/>}/>
                <Route path="/Home" element={<Homepage/>}/>
            </Routes>
        </BrowserRouter>
    )
}