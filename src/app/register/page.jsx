import React from 'react'
import Link from 'next/link';

const Register = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Create Account
          </h1>
          <p className="text-gray-500 mt-2">
            Create your account to get started
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">

          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full text-gray-700 border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-black focus:border-transparent transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
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
              placeholder="Create a password"
              className="w-full text-gray-700 border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-black focus:border-transparent transition"
            />
          </div>

          {/* Terms */}
          <label className="flex items-start gap-2 text-sm text-gray-600 cursor-pointer">
            <input type="checkbox" className="mt-1" />
            <span>
              I agree to the{" "}
              <span className="font-medium text-black hover:underline">
                Terms of Service
              </span>{" "}
              and{" "}
              <span className="font-medium text-black hover:underline">
                Privacy Policy
              </span>
            </span>
          </label>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg font-medium hover:opacity-90 transition"
          >
            Create Account
          </button>

          {/* Divider */}
          <div className="flex items-center gap-4">
            <div className="h-px bg-gray-300 flex-1"></div>
            <span className="text-sm text-gray-500">OR</span>
            <div className="h-px bg-gray-300 flex-1"></div>
          </div>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <Link href="/login" className="font-medium text-black cursor-pointer hover:underline">
            Sign In
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Register