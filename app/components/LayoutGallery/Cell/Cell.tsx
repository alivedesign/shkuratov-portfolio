import React, { FC, PropsWithChildren } from 'react';
import cn from 'classnames';

import styles from '../LayoutGallery.module.scss';

type Props = {
  className?: string;
  onMobile?: boolean;
  onDesktop?: boolean;
};

export const Cell: FC<PropsWithChildren<Props>> = ({ children, className, onDesktop, onMobile }) => {
  return (
    <div
      className={cn(styles.cell, className, {
        [styles.onMobile]: onMobile,
        [styles.onDesktop]: onDesktop,
      })}
    >
      {children}
    </div>
  );
};
