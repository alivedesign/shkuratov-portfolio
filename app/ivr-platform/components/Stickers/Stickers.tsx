import React, { FC } from 'react';

import styles from './Stickers.module.scss';
import Image from 'next/image';

type Props = {};

export const Stickers: FC<Props> = () => {
  return (
    <div className={styles.root}>
      <ul className={styles.items}>
        <li className={styles.item}>
          <Image className={styles.image} src="/images/ivr-platform/Stickers/1.png" width={282} height={282} alt="" />
        </li>
        <li className={styles.item}>
          <Image className={styles.image} src="/images/ivr-platform/Stickers/2.png" width={282} height={282} alt="" />
        </li>
        <li className={styles.item}>
          <Image className={styles.image} src="/images/ivr-platform/Stickers/3.png" width={282} height={282} alt="" />
        </li>
        <li className={styles.item}>
          <Image className={styles.image} src="/images/ivr-platform/Stickers/4.png" width={282} height={282} alt="" />
        </li>
        <li className={styles.item}>
          <Image className={styles.image} src="/images/ivr-platform/Stickers/5.png" width={282} height={282} alt="" />
        </li>
      </ul>
    </div>
  );
};
