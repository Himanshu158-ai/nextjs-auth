import React from 'react'
import { redirect } from 'next/navigation';

const Dashboard = () => {
  redirect('/');
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-lg w-full bg-white rounded-2xl shadow-lg p-8 text-center">
        
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Dashboard
        </h1>

        <p className="text-gray-600 mb-8">
          This is a private dashboard.
        </p>

      </div>
    </div>
  );
}

export default Dashboard