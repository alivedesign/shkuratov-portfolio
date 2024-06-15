import React, { FC } from 'react';

import styles from './About.module.scss';
import { Typewriter } from '@/app/components/Typewriter/Typewriter';

type Props = {};

export const About: FC<Props> = () => {
  return (
    <section className={styles.root}>
      <ul className={styles.items}>
        <li className={styles.item}>
          <p className={styles.subtitle}>4 years</p>
          <p className={styles.text}>work exclusively in the edtech industry</p>
        </li>
        <li className={styles.item}>
          <p className={styles.subtitle}>50+ Hours</p>
          <p className={styles.text}>in-depth research for education product</p>
        </li>
      </ul>
      <Typewriter Component="h2" className={styles.title}>
        Passionate about <mark>improving how people learn and teach with digital tools</mark>, aiming to&nbsp;make the
        process more effective and enjoyable
      </Typewriter>
    </section>
  );
};
