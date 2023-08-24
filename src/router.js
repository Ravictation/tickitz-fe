import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/home";
import Signup from "./page/signup"
import Order from "./page/order"
import Tickets from "./page/tickets";
import History from "./page/history"


function Router(){
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/sign-up" element={<Signup/>}/>
            <Route path="/order" element={<Order/>}/>
            <Route path="/success/tickets" element={<Tickets/>}/>
            <Route path="/profile/history" element={<History/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default Router