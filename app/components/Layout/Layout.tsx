import React, { PropsWithChildren } from 'react';
import cn from 'classnames';

import { Row } from './Row/Row';

import styles from './Layout.module.scss';

type Props = {
  className?: string;
};

export const Layout = ({ children, className }: PropsWithChildren<Props>) => {
  return <div className={cn(styles.layout, className)}>{children}</div>;
};

Layout.Row = Row;
