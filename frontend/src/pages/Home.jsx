'use client'
import { useNavigate } from 'react-router-dom';
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { useEffect } from 'react';

export const Home = () => {

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        const firstname = localStorage.getItem("firstname");
        if (token) {
            navigate(`/dashboard?firstname=${firstname}`);
        }
    }, [navigate]);

    return (
        <div className="bg-white">
            <Header />
            <div className="relative isolate px-6 lg:px-8">
                <div className="mx-auto max-w-2xl py-30 sm:py-48 lg:py-56">
                    <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                        <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-sky-900/30">
                            Introducing our new app goTransfer
                        </div>
                    </div>
                    <div className="text-center">
                        <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
                            India&apos;s Most-Loved Payments App
                        </h1>
                        <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
                            Recharge & pay bills, book flights & movie tickets, invest in stocks & mutual funds, and do a lot more.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a
                                href="#"
                                className="rounded-full bg-sky-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Download goTransfer App
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
