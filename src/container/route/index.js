import {BrowserRouter, Route, Routes} from "react-router-dom";

export default function RoutePage() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/login"} element={"login"}/>
                <Route path={"/"} element={"acceuil"}/>
                <Route path={"/home_page"} element={"home page"}/>
            </Routes>
        </BrowserRouter>
    );
}