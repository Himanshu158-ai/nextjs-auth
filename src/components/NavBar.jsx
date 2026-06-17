import React from 'react'
import Link from 'next/link'

const NavBar = () => {
    return (
        <div className="w-full border-b bg-white flex justify-between px-8 py-4">
            <Link href="/" className="font-semibold text-lg hover:opacity-70 transition text-gray-700">
                home
            </Link>
            <div className="flex gap-5">
                <Link href="/login" className="font-semibold text-lg hover:opacity-70 transition text-gray-700">
                    login
                </Link>
                <Link href="/register" className="font-semibold text-lg hover:opacity-70 transition text-gray-700">
                    register
                </Link>
                <Link href="/dashboard" className="font-semibold text-lg hover:opacity-70 transition text-gray-700">
                    dashboard
                </Link>
            </div>
        </div>
    )
}

export default NavBar