import React from 'react';
import { IconContext } from 'react-icons';
import { FaHeart } from 'react-icons/fa';
import styles from './HeartBubble.less';

const min = 4;
const max = 10;

function HeartBubble(): JSX.Element {
  const generateRandom = (min: number, max: number): number =>
    Math.floor(Math.random() * (max - min)) + min;

  return (
    <IconContext.Provider value={{ className: styles.heart }}>
      <div className={styles.bubblingHeart}>
        {Array(generateRandom(min, max))
          .fill(1)
          .map((_, i) => (
            <div key={i}>
              <FaHeart />
            </div>
          ))}
      </div>
    </IconContext.Provider>
  );
}

export default HeartBubble;
