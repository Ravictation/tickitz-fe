import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/home";
import Signup from "./page/signup"
import Order from "./page/order"
import Tickets from "./page/tickets";
import History from "./page/history"
import Admin from "./page/admin";
import Signin from "./page/signin";
import Detail from "./page/details";


function Router(){
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/sign-up" element={<Signup/>}/>
            <Route path="/order" element={<Order/>}/>
            <Route path="/success/tickets" element={<Tickets/>}/>
            <Route path="/profile/history" element={<History/>}/>
            <Route path="/movie/detail" element={<Detail/>}/>
            <Route path="/admin" element={<Admin/>}/>
            <Route path="/sign-in" element={<Signin/>}/>
            
        </Routes>
        </BrowserRouter>
    )
}

export default Router