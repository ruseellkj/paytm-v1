export const Balance = ({ value }) => {
    return (
        <div className="flex">
            <div className="font-bold text-lg">   
                Your balance
            </div>
            <div className="font-bold text-lg ml-4">
                Rs {value}
            </div>
        </div>
    )
}