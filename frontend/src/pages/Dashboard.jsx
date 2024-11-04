import { useEffect, useState } from "react"
import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"
import axios from 'axios';


export const Dashboard = () => {

    const [balance, setBalance] = useState("");
    let token = localStorage.getItem('token');

    useEffect(() => {
        const fetchBalance = async () => {
            try {
                const backendURL = import.meta.env.VITE_BACKEND_URL;
                const response = await axios.get(`${backendURL}/account/balance`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setBalance(response.data.balance);
            } catch (error) {
                console.error("Error fetching balance:", error);
            }
        };

        if (token) {
            fetchBalance();
        }
    }, [token]);

    return (
        <div>
            <Appbar />
            <div className="m-10">
                <Balance value={balance} />
                <Users />
            </div>
        </div>
    )
}

