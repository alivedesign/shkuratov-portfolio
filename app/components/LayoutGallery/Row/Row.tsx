import React, { FC, PropsWithChildren } from 'react';
import cn from 'classnames';

import styles from '../LayoutGallery.module.scss';

type Props = {
  className?: string;
};

export const Row: FC<PropsWithChildren<Props>> = ({ children, className }) => {
  return <div className={cn(styles.row, className)}>{children}</div>;
};
