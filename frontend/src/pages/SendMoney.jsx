import { useSearchParams } from 'react-router-dom';
import axios from "axios";
import { useState } from 'react';
import { Transfer } from '../components/Transfer';

export const SendMoney = () => {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const name = searchParams.get("name");
    const [amount, setAmount] = useState(0);
    const [loading, setLoading] = useState(false);
    const [transferSuccess, setTransferSuccess] = useState(false);

    const handleTransfer = async () => {
        setLoading(true); 
        try {
            await axios.post("http://localhost:3000/api/v1/account/transfer", {
                toUser: id,
                amount
            }, {
                headers: {  
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            });
            setTransferSuccess(true);
        } catch (error) {
            console.error("Error during transfer:", error);
        } finally {
            setLoading(false);
        }
    };

    if(transferSuccess){
        return <Transfer firstname={name}/>
    }

    return (
        <div className="flex justify-center h-screen bg-gray-100">
            <div className="h-full flex flex-col justify-center">
                <div className="border h-min text-card-foreground max-w-md p-4 space-y-8 w-96 bg-white shadow-lg rounded-lg">
                    <div className="flex flex-col space-y-1.5 h-12">
                        <h2 className="text-3xl font-bold text-center mt-7">Send Money</h2>
                    </div>
                    <div className="px-8 py-11">
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 rounded-full bg-sky-700 flex items-center justify-center">
                                <span className="text-2xl text-white">{name[0].toUpperCase()}</span>
                            </div>
                            <h3 className="text-2xl font-semibold">{name.charAt(0).toUpperCase() + name.slice(1)}</h3>
                        </div>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ml-1 mt-5"
                                    htmlFor="amount"
                                >
                                    Amount (in Rs)
                                </label>
                                <input
                                    type="number"
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                                    id="amount"
                                    placeholder="Enter amount"
                                    onChange={(e) => {
                                        setAmount(e.target.value);
                                    }}
                                />
                            </div>
                            <button
                                className={`justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full ${loading ? 'bg-gray-500' : 'bg-green-500'} text-white`} 
                                onClick={handleTransfer}
                                disabled={loading} // Disable button while loading
                            >
                                {loading ? (
                                    <>
                                        Loading...
                                    </>
                                ) : (
                                    "Initiate Transfer"
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
