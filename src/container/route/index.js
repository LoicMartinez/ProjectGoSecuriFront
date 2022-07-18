import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginPage from "../LoginPage";
import HomePage from "../HomePage";
import FacialRecognitionLoginPage from "../facialRecognitionLoginPage";

export default function RoutePage() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/login"} element={<LoginPage/>}/>
                <Route path={"/"} element={<HomePage/>}/>
                <Route path={"/home_page"} element={<HomePage/>}/>
                <Route path={"/facialRecognition"} element={<FacialRecognitionLoginPage/>}/>
            </Routes>F
        </BrowserRouter>
    );
}