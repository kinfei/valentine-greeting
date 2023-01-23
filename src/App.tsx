import React from 'react';
import { useLocation } from 'react-router-dom';
import DisplayName from './components/DisplayName';
import HeartBubble from './components/HeartBubble';

function App (): JSX.Element {
  const { search } = useLocation();
  const name = new URLSearchParams(search).get('name');

  return (
    <>
      <DisplayName name={name} />
      <HeartBubble />
    </>
  );
}

export default App;
