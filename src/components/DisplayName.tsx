import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import styles from './DisplayName.less';

function DisplayName({ name }: { name: string | null }): JSX.Element {
  const sequence = [`Hi ${name}...`, 2400];

  if (!name) return <></>;

  return (
    <div className={styles.typing}>
      <TypeAnimation cursor={true} sequence={sequence} speed={70} wrapper='h1' repeat={Infinity} />
    </div>
  );
}

export default DisplayName;
