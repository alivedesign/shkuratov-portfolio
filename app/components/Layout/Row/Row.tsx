import React, { FC, PropsWithChildren } from 'react';
import cn from 'classnames';

import styles from '../Layout.module.scss';

type Props = {
  flex?: boolean;
  className?: string;
};

export const Row: FC<PropsWithChildren<Props>> = ({ children, flex, className }) => {
  return <div className={cn(styles.row, className, { [styles.flex]: flex })}>{children}</div>;
};
