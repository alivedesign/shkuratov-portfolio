import React, { cloneElement, FC, PropsWithChildren, ReactElement, useEffect, useState } from 'react';

import styles from './HoverImageWrapper.module.scss';
import Image from 'next/image';
import cn from 'classnames';

type Props = {
  imageUrl: string;
};

export const HoverImageWrapper: FC<PropsWithChildren<Props>> = ({ children, imageUrl }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  const handleMouseMove = (event: MouseEvent) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    const mobileCheck = window.matchMedia('(pointer: coarse)');
    setIsMobile(mobileCheck.matches);

    const handleResize = () => {
      setIsMobile(window.matchMedia('(pointer: coarse)').matches);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isHovered && !isMobile) {
      window.addEventListener('mousemove', handleMouseMove);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isHovered, isMobile]);

  const childWithProps = React.isValidElement(children)
    ? cloneElement(children as ReactElement, {
        onMouseEnter: () => setIsHovered(true),
        onMouseLeave: () => setIsHovered(false),
      })
    : children;
  return (
    <>
      {childWithProps}
      <div
        className={cn(styles.img, isHovered && !isMobile && styles.isVisible)}
        style={{
          top: `${position.y + 10}px`,
          left: `${position.x + 10}px`,
        }}
      >
        <Image src={imageUrl} width={315} height={315} alt="ordinal" />
      </div>
    </>
  );
};
