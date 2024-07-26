import React, { FC } from 'react';

import styles from './ProjectAbout.module.scss';
import Link from 'next/link';
import { APP_URLs } from '@/app/constants/appUrls';
import cn from 'classnames';
import Image from 'next/image';

type VariantType = 'COURSE_CONSTRUCTOR' | 'EDU_MARKETPLACE' | 'TEACHER_GROWTH' | 'IVR_PLATFORM';

type Props = {
  variant: 'COURSE_CONSTRUCTOR' | 'EDU_MARKETPLACE' | 'TEACHER_GROWTH' | 'IVR_PLATFORM';
  size?: 'sm' | 'xl';
};

export const ProjectAbout: FC<Props> = ({ variant, size = 'sm' }) => {
  const appearances = {
    [styles.cc]: variant === 'COURSE_CONSTRUCTOR',
    [styles.em]: variant === 'EDU_MARKETPLACE',
    [styles.tg]: variant === 'TEACHER_GROWTH',
    [styles.ivr]: variant === 'IVR_PLATFORM',
  };

  const sizeVariant = {
    [styles.sm]: size === 'sm',
    [styles.xl]: size === 'xl',
  };
  const getTextContent = (variant: VariantType) => {
    switch (variant) {
      case 'COURSE_CONSTRUCTOR':
        return (
          <>
            Empowering <mark>6 Million Teachers</mark>: An Online Course Constructor
          </>
        );
      case 'EDU_MARKETPLACE':
        return (
          <>
            <mark>x3 Resources</mark> in the <mark>Largest</mark> Education Marketplace in CIS
          </>
        );
      case 'TEACHER_GROWTH':
        return (
          <>
            <mark>A Mobile App Concept</mark> Featuring Online Courses&nbsp;Created by Teachers
          </>
        );
      case 'IVR_PLATFORM':
        return (
          <>
            Designing an IVR Platform that Generated <mark>$500K+ Revenue in its First Year</mark>
          </>
        );
    }
  };
  return (
    <Link className={cn(styles.root, appearances)} href={APP_URLs[variant]}>
      <div className={cn(styles.wrap, appearances, sizeVariant)}>
        {variant === 'COURSE_CONSTRUCTOR' && (
          <>
            <Image
              className={cn(styles.img, styles.img1)}
              src="/images/project/cc/1.png"
              width={182}
              height={142}
              alt="COURSE_CONSTRUCTOR"
            />
            <Image
              className={cn(styles.img, styles.img2)}
              src="/images/project/cc/2.png"
              width={543}
              height={319}
              alt="COURSE_CONSTRUCTOR"
            />
            <Image
              className={cn(styles.img, styles.img3)}
              src="/images/project/cc/3.png"
              width={252}
              height={170}
              alt="COURSE_CONSTRUCTOR"
            />
          </>
        )}
        {variant === 'EDU_MARKETPLACE' && (
          <>
            <Image
              className={cn(styles.img, styles.img1)}
              src="/images/project/em/1.png"
              width={380}
              height={280}
              alt="EDU_MARKETPLACE"
            />
          </>
        )}
        {variant === 'TEACHER_GROWTH' && (
          <>
            <Image
              className={cn(styles.img, styles.img1)}
              src="/images/project/tg/1.png"
              width={160}
              height={323}
              alt="TEACHER_GROWTH"
            />
            <Image
              className={cn(styles.img, styles.img2)}
              src="/images/project/tg/2.png"
              width={160}
              height={323}
              alt="TEACHER_GROWTH"
            />
          </>
        )}
        {variant === 'IVR_PLATFORM' && (
          <>
            <Image
              className={cn(styles.img, styles.img1)}
              src="/images/project/ivr/1.png"
              width={193}
              height={201}
              alt="IVR_PLATFORM"
            />
            <Image
              className={cn(styles.img, styles.img2)}
              src="/images/project/ivr/2.png"
              width={628}
              height={306}
              alt="IVR_PLATFORM"
            />
            <Image
              className={cn(styles.img, styles.img3)}
              src="/images/project/ivr/3.png"
              width={214}
              height={158}
              alt="IVR_PLATFORM"
            />
          </>
        )}
      </div>
      <p className={styles.text}>{getTextContent(variant)}</p>
    </Link>
  );
};
