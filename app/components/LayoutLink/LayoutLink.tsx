import React, { PropsWithChildren } from 'react';
import cn from 'classnames';

import { Row } from './Row/Row';

import styles from './LayoutLink.module.scss';

type Props = {
  className?: string;
};

export const LayoutLink = ({ children, className }: PropsWithChildren<Props>) => {
  return <div className={cn(styles.layout, className)}>{children}</div>;
};

LayoutLink.Row = Row;
