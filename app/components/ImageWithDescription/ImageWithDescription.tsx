import React, { FC, ReactNode } from 'react';

import styles from './ImageWithDescription.module.scss';
import Image from 'next/image';

type Props = {
  imagePath: string;
  imageWidth: number;
  imageHeight: number;
  text: string | ReactNode;
};

export const ImageWithDescription: FC<Props> = ({ imagePath, imageWidth, imageHeight, text }) => {
  return (
    <section className={styles.root}>
      <Image className={styles.image} src={imagePath} width={imageWidth} height={imageHeight} alt="Plan" />
      <p className={styles.text}>{text}</p>
    </section>
  );
};
