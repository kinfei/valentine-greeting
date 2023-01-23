import React, { Suspense } from 'react';
import Lottie from 'react-lottie';
import styles from './LottiePlayer.less';

function LottiePlayer({ animationData }: { animationData: any }): JSX.Element {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
  };

  return (
    <Suspense fallback='Loading...'>
      <div className={styles.lottieWrapper} onClick={() => null}>
        <Lottie options={defaultOptions} />
      </div>
    </Suspense>
  );
}

export default LottiePlayer;
