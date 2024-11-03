import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Signup } from "./pages/Signup.jsx";
import { Signin } from "./pages/Signin.jsx";
import { SendMoney } from "./pages/SendMoney.jsx";
import { Dashboard } from "./pages/Dashboard.jsx";
import { Home } from "./pages/Home.jsx";
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signup" element={<><Header /><Signup /><Footer /></>} />
                    <Route path="/signin" element={<><Header /><Signin /><Footer /></>} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/send" element={<SendMoney />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
