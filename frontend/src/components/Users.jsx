/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import { User } from "./User";
import axios from "axios";

export const Users = () => {

    // eslint-disable-next-line no-unused-vars
    const [users, setUsers] = useState([]);
    const [filter, setFilter ] = useState(""); 

    // debouncing 
    let timeout;
    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/user/bulk?filter=" + filter)
            .then(response => {
                setUsers(response.data.user)
            })
    }, [filter])

    return (
        <>
            <div className="font-bold text-md">
                Users
            </div>
            <div className="mt-3">
                <input type="text" placeholder="Search Users..." className=" font-normal p-1 w-full rounded border border-sky-900 shadow-sm" onChange={(e) => {
                    clearTimeout(timeout);
                    timeout = setTimeout(() => {
                        setFilter(e.target.value);
                    }, 500); // delay 5ms
                }}/>
            </div>
            <div>
                {users.map(user => <User user={user} />)}
            </div>
        </>
    )
}