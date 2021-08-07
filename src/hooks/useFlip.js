import React, { useState } from 'react';

const useFlip = () => {
  const [flipState, setFlipState] = useState(true);
  const toggleFlipState = () => {
    setFlipState(state => !state);
  };

  return [flipState, toggleFlipState];
};

export default useFlip;