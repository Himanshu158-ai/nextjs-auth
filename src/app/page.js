"use client"

import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';

const Home = () => {
  const [name, setName] = useState("")
  const router = useRouter();

  useEffect(() => {
    const name = localStorage.getItem("name");
    setName(name);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-lg w-full bg-white rounded-2xl shadow-lg p-8 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          This is Home
        </h1>

        <p className="text-gray-600 mb-8">
          {name ? ("Now you can access dashboad") : ("Please login or create an account toaccess protected content inside the Dashboard.")}
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          {!name ? (<>
              <Link href="/login" className="flex-1 bg-black text-white py-3 rounded-lg font-medium hover:opacity-90 transition">
                Login
              </Link>

              <Link href="/register" className="flex-1 text-gray-700 border border-gray-300 py-3 rounded-lg font-medium hover:bg-gray-50 transition">
                Register
              </Link>
            </>)
            :
            (<button
            onClick={()=>{
              localStorage.clear();
              router.push("/login");
            }}
            className="flex-1 bg-red-500 text-white py-3 rounded-lg font-medium hover:opacity-90 transition"
          >
            Logout
          </button>
          )}
        </div>

      </div>
    </div>
  );
}

export default Home