import Link from 'next/link';
import React from 'react'

const Home = () => {

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-lg w-full bg-white rounded-2xl shadow-lg p-8 text-center">
        
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          This is Home
        </h1>

        <p className="text-gray-600 mb-8">
          Please login or create an account to
          access protected content inside the Dashboard.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/login" className="flex-1 bg-black text-white py-3 rounded-lg font-medium hover:opacity-90 transition">
            Login
          </Link>

          <Link href="/register" className="flex-1 text-gray-700 border border-gray-300 py-3 rounded-lg font-medium hover:bg-gray-50 transition">
            Register
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Home