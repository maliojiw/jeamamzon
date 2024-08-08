import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Loginpage from "./pages/Loginpage";
import Productpage from "./pages/Productpage";
import Registerpage from "./pages/Registerpage";
import Adminpage from "./pages/Adminpage";

function Router() {

    return(
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/login" element={<Loginpage/>}/>
            <Route path="/product" element={<Productpage/>}/>
            <Route path="/register" element={<Registerpage/>}/>
            <Route path="/admin" element={<Adminpage/>}/>
        </Routes>
    );
}
export default Router;