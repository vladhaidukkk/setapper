import React from 'react';
import { useParams } from 'react-router-dom';

function SetupRedactor() {
  const { section, setupId } = useParams();

  return (
    <div className="flex-1">
      <h1 className="text-4xl">{section}</h1>
      <h2 className="text-2xl">{setupId}</h2>
    </div>
  );
}

export default SetupRedactor;
