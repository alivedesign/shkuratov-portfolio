import React, { FC } from 'react';

import styles from './Stats.module.scss';
import { Typewriter } from '@/app/components/Typewriter/Typewriter';

type Props = {};

export const Stats: FC<Props> = () => {
  return (
    <div className={styles.root}>
      <Typewriter className={styles.title} Component="h4">
        All these enhancements enabled us to:
      </Typewriter>
      <ul className={styles.items}>
        <li className={styles.item}>
          <h3 className={styles.subtitle}>x3</h3>
          <p className={styles.text}>Number of resources created by each publisher</p>
        </li>
        <li className={styles.item}>
          <h3 className={styles.subtitle}>-50%</h3>
          <p className={styles.text}>Churn rate</p>
        </li>
        <li className={styles.item}>
          <h3 className={styles.subtitle}>
            <span>1.9K</span> -&gt; 4.0K
          </h3>
          <p className={styles.text}>Active publishers</p>
        </li>
      </ul>
    </div>
  );
};
