import React, { PropsWithChildren } from 'react';
import cn from 'classnames';

import { Row } from './Row/Row';
import { Cell } from './Cell/Cell';

import styles from './LayoutGallery.module.scss';

type Props = {
  className?: string;
};

export const LayoutGallery = ({ children, className }: PropsWithChildren<Props>) => {
  return <div className={cn(styles.layout, className)}>{children}</div>;
};

LayoutGallery.Row = Row;
LayoutGallery.Cell = Cell;
