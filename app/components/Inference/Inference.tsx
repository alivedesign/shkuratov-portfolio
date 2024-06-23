import React, { FC, PropsWithChildren, ReactNode } from 'react';

import styles from './Inference.module.scss';
import cn from 'classnames';

type Props = {
  textSize?: 'md' | 'lg';
};

export const Inference: FC<PropsWithChildren<Props>> = ({ textSize = 'md', children }) => {
  return (
    <section className={cn(styles.root)}>
      <p
        className={cn(styles.text, {
          [styles.textMedium]: textSize === 'md',
          [styles.textLarge]: textSize === 'lg',
        })}
      >
        {children}
      </p>
    </section>
  );
};
