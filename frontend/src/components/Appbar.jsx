import { useState, useEffect, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export const Appbar = () => {
    const [searchParams] = useSearchParams();
    const firstname = searchParams.get("firstname");
    const navigate = useNavigate();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const avatarRef = useRef(null);

    const handleSignOut = () => {
        localStorage.removeItem("token");
        navigate("/");
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current && !dropdownRef.current.contains(event.target) &&
                avatarRef.current && !avatarRef.current.contains(event.target)
            ) {
                setIsDropdownOpen(false);
            }
        };

        // Attach the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Clean up the event listener
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="shadow h-14 flex justify-between my-2">
            <div className="flex flex-col justify-center h-full ml-10">
                <img
                    alt="Logo"
                    src="/logo.png"
                    className="h-12 w-auto cursor-pointer"
                />
            </div>
            <div className="flex relative">
                <div className="flex flex-col justify-center h-full mr-4">
                    Hello, {firstname.charAt(0).toUpperCase() + firstname.slice(1)}
                </div>
                <div
                    ref={avatarRef} // Reference for the avatar element
                    className="rounded-full h-12 w-12 bg-slate-200 flex justify-center items-center mt-1 mr-2 cursor-pointer"
                    onClick={() => setIsDropdownOpen((prev) => !prev)} // Toggle dropdown
                >
                    <div className="flex flex-col justify-center h-full text-xl">
                        {firstname[0].toUpperCase()}
                    </div>
                </div>
                {/* Dropdown Menu */}
                {isDropdownOpen && (
                    <div
                        ref={dropdownRef} // Reference for the dropdown element
                        className="absolute right-0 w-40 bg-white shadow-lg rounded-md mt-2"
                    >
                        <ul className="py-2">
                            <li
                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                onClick={handleSignOut} // Sign out functionality
                            >
                                Sign Out
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};
