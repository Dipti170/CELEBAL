import React from 'react';
import { useLocation } from 'react-router-dom';

const Suc = () => {
  const location = useLocation();
  const data = location.state;

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Submitted Details:</h1>
      <pre className="bg-gray-100 p-4 rounded">{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Suc;
