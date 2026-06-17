import React from 'react'
import Link from 'next/link';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome Back
          </h1>
          <p className="text-gray-500 mt-2">
            Sign in to continue to your account
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full text-gray-700 border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-black focus:border-transparent transition"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full text-gray-700 border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-black focus:border-transparent transition"
            />
          </div>
          
          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg font-medium hover:opacity-90 transition"
          >
            Sign In
          </button>

          {/* Divider */}
          <div className="flex items-center gap-4">
            <div className="h-px bg-gray-300 flex-1"></div>
            <span className="text-sm text-gray-500">OR</span>
            <div className="h-px bg-gray-300 flex-1"></div>
          </div>

        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-600 mt-6" >
          Don't have an account?{" "}
          <Link href='/register' className="font-medium text-black cursor-pointer hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login