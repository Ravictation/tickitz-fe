import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/home";
import Signup from "./page/signup"
import Order from "./page/order"
import Tickets from "./page/tickets";
import History from "./page/history"
import Admin from "./page/admin";
import Admin_manage_movie from "./page/admin/manage_movie";
import Admin_list_movie from "./page/admin/list_movie";
import Signin from "./page/signin";
import Detail from "./page/detail";
import Profile from "./page/profile";
import Payment from "./page/payment";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sign-up" element={<Signup />} />
                <Route path="/order" element={<Order />} />
                <Route path="/success/tickets" element={<Tickets />} />
                <Route path="/profile/history" element={<History />} />
                <Route path="/movie/detail" element={<Detail />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/sign-in" element={<Signin />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/payment" element={<Payment />} />
                {/* verdi route */}
                <Route path="/list_movie" element={<Admin_list_movie />} />
                <Route path="/manage_movie" element={<Admin_manage_movie />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router   