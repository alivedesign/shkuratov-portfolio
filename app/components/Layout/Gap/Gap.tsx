import React, { FC } from 'react';
import cn from 'classnames';

import styles from './Gap.module.scss';

type Size = 40;

export type Props = {
  size: Size;
  direction?: 'horizontal' | 'vertical';
  tag?: 'div' | 'span';
  className?: string;
  dataTestId?: string;
};

const SIZE_TO_CLASSNAME_MAP = {
  40: 'size-40',
};

export const Gap: FC<Props> = ({ size, direction = 'vertical', tag: Component = 'div', className }) => (
  <Component data-gap-size={SIZE_TO_CLASSNAME_MAP[size]} className={cn(styles.gap, styles[direction], className)} />
);
