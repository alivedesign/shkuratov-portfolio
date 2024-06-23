import React, { FC, ReactNode } from 'react';

import styles from './HeroLanding.module.scss';
import { VideoPlayer } from '@/app/components/HeroLanding/VideoPlayer/VideoPlayer';
import { Typewriter } from '@/app/components/Typewriter/Typewriter';

type Props = {
  ytID?: string;
  vimeoID?: string;
  title: string | ReactNode;
  statistics?: { count: string; text: string }[];
};

export const HeroLanding: FC<Props> = ({ ytID, vimeoID, statistics, title }) => {
  return (
    <section className={styles.root}>
      <Typewriter className={styles.title} Component="h1">
        {title}
      </Typewriter>
      <VideoPlayer className={styles.player} ytID={ytID} vimeoID={vimeoID} />
      <ul className={styles.items}>
        {statistics &&
          statistics.length > 0 &&
          statistics.map((el) => (
            <li className={styles.item} key={el.text}>
              <p className={styles.count}>{el.count}</p>
              <p className={styles.text}>{el.text}</p>
            </li>
          ))}
      </ul>
    </section>
  );
};
