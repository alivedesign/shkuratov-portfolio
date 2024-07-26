import React, { FC } from 'react';

import styles from '../Navbar.module.scss';
import Link from 'next/link';
import cn from 'classnames';
import { usePathname } from 'next/navigation';

type Props = {
  href: string;
  linkText: string;
  className: string;
};

export const NavLink: FC<Props> = ({ linkText, className, href }) => {
  const pathname = usePathname();
  return (
    <Link href={href} className={cn(className, { [styles.linkActive]: pathname === href })}>
      {linkText}
    </Link>
  );
};
