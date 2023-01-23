import React, { useEffect } from 'react';

import LottiePlayer from './components/LottiePlayer';

import animationData from './assets/valentine.json';
import DisplayName from './components/DisplayName';
import { useTimeoutState } from './hooks';
import { useLocation } from 'react-router-dom';

function App(): JSX.Element {
  const [showLoading, setShowLoading] = useTimeoutState(false);

  const { search } = useLocation();
  const name = new URLSearchParams(search).get('name');

  useEffect(() => {
    if (!name) return;
    setShowLoading(true, { timeout: 3000 });
  }, []);

  if (showLoading) return <DisplayName name={name} />;

  return <LottiePlayer animationData={animationData} />;
}

export default React.memo(App);
