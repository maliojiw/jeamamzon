import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Loginpage from "./pages/Loginpage";
import Registerpage from "./pages/Registerpage";


function Router() {

    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Loginpage/>}/>
            <Route path="/register" element={<Registerpage/>}/>
        </Routes>
    );
}
export default Router;