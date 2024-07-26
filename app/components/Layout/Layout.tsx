import React, { PropsWithChildren } from 'react';
import cn from 'classnames';

import { Row } from './Row/Row';

import styles from './Layout.module.scss';
import { Gap } from '@/app/components/Layout/Gap/Gap';

type Props = {
  className?: string;
};

export const Layout = ({ children, className }: PropsWithChildren<Props>) => {
  return <div className={cn(styles.layout, className)}>{children}</div>;
};

Layout.Row = Row;
Layout.Gap = Gap;
