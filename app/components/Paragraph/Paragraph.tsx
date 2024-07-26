import React, { FC, PropsWithChildren } from 'react';
import cn from 'classnames';

import styles from './Paragraph.module.scss';

type Props = {
  className?: string;
  maxWidth: number;
};

export const Paragraph: FC<PropsWithChildren<Props>> = ({ className, children, maxWidth }) => {
  return (
    <div className={cn(styles.root, className)} style={{ maxWidth }}>
      {children}
    </div>
  );
};
