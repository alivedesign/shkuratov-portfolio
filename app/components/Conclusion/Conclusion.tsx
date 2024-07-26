import React, { FC, ReactNode } from 'react';

import styles from './Conclusion.module.scss';
import { Typewriter } from '@/app/components/Typewriter/Typewriter';
import Image from 'next/image';

type Props = {
  title?: string;
  content: (string | ReactNode)[];
};

export const Conclusion: FC<Props> = ({ title, content }) => {
  return (
    <section className={styles.root}>
      {title && (
        <Typewriter className={styles.title} Component="h4">
          <mark>{title}</mark>
        </Typewriter>
      )}
      <ul className={styles.items}>
        {content.map((el) => (
          <li className={styles.item} key={Math.random()}>
            <Image className={styles.img} src="/icons/idea.svg" width={24} height={24} alt="idea" />
            <p className={styles.text}>{el}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
