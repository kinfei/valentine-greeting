import React from 'react';

import LottiePlayer from './components/LottiePlayer';

import animationData from './assets/valentine.json';

function App(): JSX.Element {
  return <LottiePlayer animationData={animationData} />;
}

export default App;
