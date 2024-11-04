import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { Header } from "../components/Header";

export const Signin = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    return (
        <div>
            <Header />
            <section className="bg-white dark:bg-gray-900 pt-10">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full bg-white rounded-xl shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-2xl items-center text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Sign In
                            </h1>
                            <div className="font-medium text-gray-500">
                                Enter your information to access your account
                            </div>
                            <form className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-950 dark:text-white">Username</label>
                                    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="rushil@gmail.com" required="" onChange={(e) => {
                                        setUsername(e.target.value);
                                    }} />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-950 dark:text-white">Password</label>
                                    <input type="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" onChange={(e) => {
                                        setPassword(e.target.value);
                                    }} />
                                </div>
                                <button type="submit" className="w-full text-white bg-sky-500 hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={
                                    async (e) => {
                                    e.preventDefault();
                                    const backendURL = import.meta.env.VITE_BACKEND_URL;
                                    const response = await axios.post(`${backendURL}/user/signin`, {
                                        username,
                                        password,
                                    }
                                    );
                                    console.log("Token:", response.data.token); // Check if the token exists
                                    localStorage.setItem("token", response.data.token)
                                    localStorage.setItem("firstname", response.data.firstname)
                                    navigate("/dashboard?firstname=" + response.data.firstname)}}>Sign In</button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Dont have an account? <Link to="/signup" className="font-medium text-sky-500 hover:underline dark:text-sky-600">Sign Up</Link>
                            </p>
                        </form>
                    </div>
                </div>
        </div>
            </section >
        </div >
    )
}
