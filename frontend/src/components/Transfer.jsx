/* eslint-disable no-unused-vars */
import { useNavigate } from 'react-router-dom';
import Confetti from 'react-confetti';
import { useEffect, useState } from 'react';

export const Transfer = ({ firstname }) => {
    const navigate = useNavigate();
    const [showConfetti, setShowConfetti] = useState(true);


    useEffect(() => {
        const timer = setTimeout(() => {
            setShowConfetti(false);
        }, 5000); // Confetti lasts for 4 seconds
        return () => clearTimeout(timer);
    }, []);

    const handleNavigate = () => {
        navigate(`/dashboard?firstname=${firstname}`);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            {showConfetti && <Confetti />}
            <div className="border h-min text-card-foreground max-w-md p-6 w-96 bg-white shadow-lg rounded-lg">
                <div className="flex flex-col items-center space-y-4">
                    <span className="text-green-500 text-6xl animate-bounce">✔️</span> {/* Tick Icon with bounce animation */}
                    <h2 className="text-3xl font-bold">Transfer Successful!</h2>
                    <p className="text-lg">Your money has been sent successfully.</p>
                    <div className="mt-4 animate-pulse"> {/* Celebration effect */}
                        <span role="img" aria-label="celebration" className="text-4xl">🎉</span>
                        <span role="img" aria-label="celebration" className="text-4xl">🎊</span>
                    </div>
                    <button
                        className="mt-4 rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full bg-sky-500 text-white"
                        onClick={handleNavigate}
                    >
                        Go to Dashboard
                    </button>
                </div>
            </div>
        </div>
    );
}

