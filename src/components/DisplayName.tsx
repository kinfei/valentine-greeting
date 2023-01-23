import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import styles from './DisplayName.less';

const seconds = 1800;

function DisplayName({ name = '' }: { name: string | null }): JSX.Element {
  const sequence = [
    `Hi ${name}❤️`,
    seconds,
    'Happy valentine to you',
    seconds,
    'You’re the bright spot in my day, every day.',
    seconds,
    'Love you 3000',
    seconds,
    'I love you more than ever.',
    seconds
  ];

  if (!name) {
    sequence.splice(0, 2);
  }

  return (
    <div className={styles.typing}>
      <TypeAnimation cursor={false} sequence={sequence} speed={60} wrapper='h1' repeat={Infinity} />
    </div>
  );
}

export default DisplayName;
