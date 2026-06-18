'use client';

import React, { useEffect, useState } from 'react'
import { redirect } from 'next/navigation';

const Dashboard = () => {
  const [name, setName] = useState("")

  useEffect(() => {
    const name = localStorage.getItem("name");
    setName(name);
    if (!name) {
      redirect('/');
    }
  }, []);


  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-lg w-full bg-white rounded-2xl shadow-lg p-8 text-center">

        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Dashboard
        </h1>

        <p className="text-gray-600 mb-8">
          {name ? (`Welcome ${name} This is a private dashboard.`):"Please login to access dashboard"}
        </p>

      </div>
    </div>
  );
}

export default Dashboard