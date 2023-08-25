import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/home";
import Signup from "./page/signup"
import Order from "./page/order"
import Tickets from "./page/tickets";
import History from "./page/history"
import Admin from "./page/admin";


function Router(){
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/sign-up" element={<Signup/>}/>
            <Route path="/order" element={<Order/>}/>
            <Route path="/success/tickets" element={<Tickets/>}/>
            <Route path="/profile/history" element={<History/>}/>
            <Route path="/admin" element={<Admin/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default Router