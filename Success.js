import React from 'react';
import { useLocation } from 'react-router-dom';

const Success = () => {
  const { state } = useLocation();

  return (
    <div style={{ padding: '20px' }}>
      <h2>Form Submitted Successfully!</h2>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
};

export default Success;
