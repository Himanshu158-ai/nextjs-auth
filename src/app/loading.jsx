import React from 'react'

const loading = () => {
    return (

        <div className="flex items-center justify-center gap-2 min-h-screen">
            <div className="w-3 h-3 bg-black rounded-full animate-bounce"></div>
            <div
                className="w-3 h-3 bg-white rounded-full animate-bounce"
                style={{ animationDelay: "0.15s" }}
            ></div>
            <div
                className="w-3 h-3 bg-white rounded-full animate-bounce"
                style={{ animationDelay: "0.3s" }}
            ></div>
        </div>
    )
}

export default loading