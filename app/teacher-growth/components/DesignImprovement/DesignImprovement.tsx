import React, { FC } from 'react';

import styles from './DesignImprovement.module.scss';
import Image from 'next/image';

type Props = {};

export const DesignImprovement: FC<Props> = () => {
  return (
    <div className={styles.root}>
      <Image
        className={styles.line}
        src="/images/teacher-growth/DesignImprovement/line.svg"
        width={476}
        height={92}
        alt=""
      />
      <ul className={styles.items}>
        <li className={styles.item}>
          <Image src="/images/teacher-growth/DesignImprovement/1.png" width={327} height={280} alt="" />
        </li>
        <li className={styles.item}>
          <Image src="/images/teacher-growth/DesignImprovement/2.png" width={327} height={280} alt="" />
        </li>
      </ul>
      <p className={styles.text}>Add more accent to&nbsp;the link &laquo;See More&raquo;</p>
    </div>
  );
};
