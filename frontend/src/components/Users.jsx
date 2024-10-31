/* eslint-disable react/jsx-key */
import { useState } from "react";
import { User } from "./User";

export const Users = () => {

    // eslint-disable-next-line no-unused-vars
    const [users, setUsers] = useState([{
        firstName: "Rushil",
        lastName: "Jariwala",
        _id: 1
    }]);

    return (
        <div className="mt-5">
            <div className="font-bold text-md">
                Users
            </div>
            <div className="mt-3">
                <input type="text" placeholder="Search Users..." className=" font-normal p-1 w-full rounded border border-sky-900 shadow-sm"/>
            </div>
            <div>
                {users.map(user => <User user={user} />)}
            </div>
        </div>
    )
}