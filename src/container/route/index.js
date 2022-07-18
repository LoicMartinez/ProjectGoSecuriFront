import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginPage from "../LoginPage";

export default function RoutePage() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/login"} element={<LoginPage/>}/>
                <Route path={"/"} element={"acceuil"}/>
                <Route path={"/home_page"} element={"home page"}/>
            </Routes>
        </BrowserRouter>
    );
}