import React, { FC } from 'react';

import styles from './Stats.module.scss';

type Props = {};

export const Stats: FC<Props> = () => {
  return (
    <div className={styles.root}>
      <ul className={styles.items}>
        <li className={styles.item}>
          <h3 className={styles.subtitle}>75%</h3>
          <p className={styles.text}>Task success rate</p>
        </li>
        <li className={styles.item}>
          <h3 className={styles.subtitle}>30&nbsp;days</h3>
          <p className={styles.text}>Project Time</p>
        </li>
        <li className={styles.item}>
          <h3 className={styles.subtitle}>
            <span>63</span> &rarr; 48
          </h3>
          <p className={styles.text}>Streamlined pages</p>
        </li>
      </ul>
    </div>
  );
};
