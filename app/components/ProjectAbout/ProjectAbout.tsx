import React, { FC } from 'react';

import styles from './ProjectAbout.module.scss';
import Link from 'next/link';
import { APP_URLs } from '@/app/constants/appUrls';

type Props = {
  type: 'COURSE_CONSTRUCTOR' | 'EDU_MARKETPLACE' | 'TEACHER_GROWTH' | 'IVR_PLATFORM';
};

export const ProjectAbout: FC<Props> = ({ type }) => {
  return (
    <Link href={APP_URLs[type]} className={styles.root}>
      {type}
    </Link>
  );
};
