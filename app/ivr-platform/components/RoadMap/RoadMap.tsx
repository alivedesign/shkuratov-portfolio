import React, { FC } from 'react';

import styles from './RoadMap.module.scss';

type Props = {};

export const RoadMap: FC<Props> = () => {
  return (
    <div className={styles.root}>
      <ul className={styles.items}>
        <li className={styles.item}>
          <h3 className={styles.subtitle}>1. Researches</h3>
          <p className={styles.text}>Collecting data, designing a&nbsp;mind map, and creating a&nbsp;roadmap</p>
        </li>
        <li className={styles.item}>
          <h3 className={styles.subtitle}>
            <mark>2. Prototypes</mark>
          </h3>
          <p className={styles.text}>Creating low- and high-fidelity prototypes</p>
        </li>
        <li className={styles.item}>
          <h3 className={styles.subtitle}>
            4. Final <mark>Design</mark>
          </h3>
          <p className={styles.text}>After building the components, transition to&nbsp;the design phase</p>
        </li>
        <li className={styles.item}>
          <h3 className={styles.subtitle}>
            3. Design <mark>System</mark>
          </h3>
          <p className={styles.text}>Building a&nbsp;system from the beginning to&nbsp;facilitate future growth</p>
        </li>
      </ul>
    </div>
  );
};
