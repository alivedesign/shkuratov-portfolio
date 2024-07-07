'use client';
import React, { FC, ReactNode, isValidElement, memo, useEffect, useState } from 'react';
import { ReactTyped } from 'react-typed';
import cn from 'classnames';
import styles from './Typewriter.module.scss';

interface Props {
  Component?: 'h1' | 'h2' | 'h3' | 'h4';
  children: ReactNode;
  variant?: 'primary';
  className?: string;
  speed?: number;
}

const isBrowser = () => typeof window !== 'undefined';

const renderChildrenToString = (children: ReactNode): string => {
  if (typeof children === 'string') {
    return children;
  } else if (Array.isArray(children)) {
    return children.map(renderChildrenToString).join('');
  } else if (isValidElement(children)) {
    const { props, type } = children as any;
    const tag = type;
    const attributes = Object.keys(props)
      .filter((key) => key !== 'children')
      .map((key) => `${key}="${props[key]}"`)
      .join(' ');
    const childrenAsString = renderChildrenToString(props.children);
    return `<${tag} ${attributes}>${childrenAsString}</${tag}>`;
  } else {
    return '';
  }
};

export const Typewriter: FC<Props> = memo(({ children, className, speed = 10, variant, Component = 'h3' }) => {
  const text = renderChildrenToString(children);

  const appearances = {
    [styles.primary]: variant === 'primary',
  };

  return (
    <>
      <Component className={cn(styles.title, styles.titleMobile, className, appearances)}>{children}</Component>
      <Component className={cn(styles.title, styles.titleDesktop, className, appearances)}>
        <ReactTyped startWhenVisible strings={[text]} typeSpeed={speed} showCursor={false} />
      </Component>
    </>
  );
});

Typewriter.displayName = 'Typewriter';
