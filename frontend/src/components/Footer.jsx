export const Footer = () => {
    return (
        <>
            <footer className="flex flex-row items-center w-full py-2 text-center border-t border-slate-200 justify-evenly">
                <div>
                    <img
                        href="/"
                        alt=""
                        src="/logo.png"
                        className="h-12 cursor-pointer"
                    />
                </div>
                <ul className="flex flex-wrap justify-between items-center gap-y-1 gap-x-12">
                    <li>
                        <a href="#" className="text-slate-700 hover:text-slate-500 focus:text-slate-500 text-sm">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-slate-700 hover:text-slate-500 focus:text-slate-500 text-sm">
                            Txn
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-slate-700 hover:text-slate-500 focus:text-slate-500 text-sm">
                            Company
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-slate-700 hover:text-slate-500 focus:text-slate-500 text-sm">
                            Contact
                        </a>
                    </li>
                </ul>
            </footer>
        </>
    );
};
