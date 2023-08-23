import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/home";
import Signup from "./page/signup"


function Router(){
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/signup" element={<Signup/>}/>
            
        </Routes>
        </BrowserRouter>
    )
}

export default Router