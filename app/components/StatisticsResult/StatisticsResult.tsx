import React, { FC, ReactNode } from 'react';

import styles from './StatisticsResult.module.scss';
import Image from 'next/image';

type Props = {
  title?: ReactNode | string;
  subtitle?: ReactNode | string;
  text?: ReactNode | string;
};

export const StatisticsResult: FC<Props> = ({ title, subtitle, text }) => {
  return (
    <div className={styles.root}>
      <div className={styles.img}>
        <Image src="/icons/ordinal.svg" width={56} height={56} alt="ordinal" />
      </div>
      <div className={styles.content}>
        {title && <p className={styles.title}>{title}</p>}
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        {text && <p className={styles.text}>{text}</p>}
      </div>
    </div>
  );
};
