import React from 'react';

const TailwindTest = () => {
  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
      <div className="shrink-0">
        <div className="h-12 w-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-xl">T</span>
        </div>
      </div>
      <div>
        <div className="text-xl font-medium text-black">Tailwind CSS</div>
        <p className="text-slate-500">Successfully integrated!</p>
        <div className="mt-2 flex space-x-2">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            Working
          </span>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            Configured
          </span>
        </div>
      </div>
    </div>
  );
};

export default TailwindTest;
