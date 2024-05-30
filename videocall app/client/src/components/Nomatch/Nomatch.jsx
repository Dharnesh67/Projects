import React from "react";
import { Link } from "react-router-dom";

const Nomatch = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-400 via-blue-300 to-blue-800">
      <div className="content flex justify-center items-center gap-3 flex-col text-center p-6 bg-white rounded-lg shadow-xl">
        <div className="header text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-400 animate-pulse">
          404
        </div>
        <div className="subheader text-2xl font-semibold text-gray-700 mb-4">
          Call Not Found
        </div>
        <Link 
          className="p-4 border-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition duration-300 ease-in-out transform hover:-translate-y-1" 
          to={"/"}
        >
          Return To Homepage
        </Link>
      </div>
    </div>
  );
};

export default Nomatch;
