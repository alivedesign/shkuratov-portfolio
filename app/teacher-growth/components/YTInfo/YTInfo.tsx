import React, { FC } from 'react';

import styles from './YTInfo.module.scss';
import Image from 'next/image';

type Props = {};

export const YTInfo: FC<Props> = () => {
  return (
    <div className={styles.root}>
      <div className={styles.img}>
        <Image
          src="/images/teacher-growth/YTInfo/image.png"
          width={382}
          height={175}
          alt="people subscribed to a regular physics teacher who shares his lessons on his YouTube channel"
        />
      </div>
      <div className={styles.info}>
        <p className={styles.title}>1.15M</p>
        <p className={styles.text}>
          <mark>people subscribed to&nbsp;a&nbsp;regular physics teacher</mark> who shares his lessons on&nbsp;his
          YouTube channel
        </p>
      </div>
    </div>
  );
};
