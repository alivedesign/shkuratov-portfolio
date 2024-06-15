import React from 'react';

import styles from './Contact.module.scss';
import { Typewriter } from '@/app/components/Typewriter/Typewriter';
import { SOCIAL_LINKS } from '@/app/constants/socialLinks';
import cn from 'classnames';

export const Contact = () => {
  return (
    <footer className={styles.root} id="contacts">
      <ul className={styles.items}>
        <li className={styles.item}>
          <a className={cn(styles.link, styles.linkLinkedIn)} href={SOCIAL_LINKS.LINKEDIN} target="_blank">
            LinkedIn
          </a>
        </li>
        <li className={styles.item}>
          <a className={cn(styles.link, styles.linkTelegram)} href={SOCIAL_LINKS.TG} target="_blank">
            Telegram
          </a>
        </li>
        <li className={styles.item}>
          <a className={cn(styles.link, styles.linkMedium)} href={SOCIAL_LINKS.MEDIUM} target="_blank">
            Medium
          </a>
        </li>
      </ul>
      <Typewriter Component="h3" className={styles.title}>
        Passionate about enhancing education? Reach me at <a href={SOCIAL_LINKS.EMAIL}>ShkuratovDesigner@gmail.com</a>
      </Typewriter>
    </footer>
  );
};
