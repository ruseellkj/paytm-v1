'use client'
import { Bars3Icon } from '@heroicons/react/24/outline'

const navigation = [
    { name: 'Home', href: '#' },
    { name: 'Txn', href: '#' },
    { name: 'Company', href: '#' },
    { name: 'Contact', href: '#' },
]

export const Header = () => {
    return (
        <header className="absolute inset-x-0 top-0 z-50">
            <nav aria-label="Global" className="flex items-center justify-between py-2 lg:px-8">
                <div className="flex lg:flex-1">
                    <a href="/" className="-m-1.5 p-1.5">
                        <img
                            alt=""
                            src="/logo.png"
                            className="h-20 w-auto"
                        />
                        <p className='text-center font-medium text-black hover:text-sky-900'>easyTxn</p>
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        // onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-gray-900">
                            {item.name}
                        </a>
                    ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end ">
                    <button className=' bg-sky-500 hover:bg-sky-600 shadow-inner rounded-md mr-4 px-8 py-2'>
                        <a href="/signup" className="text-sm/6 font-semibold text-white">
                            Sign Up
                        </a>
                    </button>
                    <button className='bg-sky-500 hover:bg-sky-600 shadow-inner rounded-md ml-4 px-8 py-2'>
                        <a href="/signin" className="text-sm/6 font-semibold text-white">
                            Sign In
                        </a>
                    </button>
                </div>
            </nav>
        </header>
    )
}