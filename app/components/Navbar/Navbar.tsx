'use client';
import React, { FC, useState } from 'react';

import styles from './Navbar.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { APP_URLs } from '@/app/constants/appUrls';
import { SOCIAL_LINKS } from '@/app/constants/socialLinks';
import cn from 'classnames';
import { usePathname } from 'next/navigation';

type Props = {};

export const Navbar: FC<Props> = () => {
  const [isOpenBurger, setIsOpenBurger] = useState(false);
  const onToggleBurger = () => {
    setIsOpenBurger((v) => !v);
  };
  const pathname = usePathname();

  const handleLinkClick = () => {
    if (window.innerWidth < 1440) {
      onToggleBurger();
    }
  };

  const createLinkItem = (href: string, linkText: string, className: string) => {
    return (
      <Link href={href} className={cn(className, { [styles.linkActive]: pathname === href })} onClick={handleLinkClick}>
        {linkText}
      </Link>
    );
  };

  return (
    <>
      <div className={cn(styles.desktopMenu, { [styles.desktopMenuOpen]: isOpenBurger })}>
        <Link href={APP_URLs.HOME} className={styles.logo}>
          <Image src="/images/logo.svg" width={56} height={56} alt="Logo" />
        </Link>
        <nav className={styles.nav}>
          <ul className={styles.items}>
            <li className={styles.item}>{createLinkItem(APP_URLs.HOME, 'Home', styles.link)}</li>
            <li className={styles.item}>
              <p className={styles.text}>Works</p>
              <ul className={styles.elements}>
                <li className={styles.element}>
                  {createLinkItem(
                    APP_URLs.COURSE_CONSTRUCTOR,
                    'Course Constructor',
                    cn(styles.link, styles.linkPrimary)
                  )}
                </li>
                <li className={styles.element}>
                  {createLinkItem(APP_URLs.EDU_MARKETPLACE, 'Edu Marketplace', cn(styles.link, styles.linkPrimary))}
                </li>
                <li className={styles.element}>
                  {createLinkItem(APP_URLs.TEACHER_GROWTH, 'TeacherGrowth', cn(styles.link, styles.linkPrimary))}
                </li>
                <li className={styles.element}>
                  {createLinkItem(APP_URLs.IVR_PLATFORM, 'IVR Platform', cn(styles.link, styles.linkPrimary))}
                </li>
              </ul>
            </li>
            <li className={styles.item}>
              <Link className={styles.link} href="/EvgenyShkuratovCV.pdf" target="_blank">
                Resume
                <svg width="18" height="19" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.625 3.875V5h7.082l-9.332 9.332.793.793L13.5 5.793v7.082h1.125v-9h-9z" />
                </svg>
              </Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.link} href="#contacts">
                Contacts
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.socials}>
          <a className={styles.social} href={SOCIAL_LINKS.LINKEDIN} target="_blank">
            <Image src="/icons/social/linkedin.svg" width={40} height={40} alt="LinkedIn" />
          </a>
          <a className={styles.social} href={SOCIAL_LINKS.TG} target="_blank">
            <Image src="/icons/social/tg.svg" width={40} height={40} alt="Telegram" />
          </a>
          <a className={styles.social} href={SOCIAL_LINKS.MEDIUM} target="_blank">
            <Image src="/icons/social/medium.svg" width={40} height={40} alt="Medium" />
          </a>
        </div>
      </div>
      <div className={styles.mobileMenu}>
        <div className={cn('container', styles.mobileMenuWrap)}>
          <Link href={APP_URLs.HOME} className={styles.logo}>
            <Image src="/images/logo.svg" width={38} height={38} alt="Logo" />
          </Link>
          <button className={styles.burger} type="button" onClick={onToggleBurger}>
            {isOpenBurger ? (
              <Image src="/icons/burger/burger-close.svg" width={24} height={24} alt="Закрыть" />
            ) : (
              <Image src="/icons/burger/burger-open.svg" width={36} height={36} alt="Открыть" />
            )}
          </button>
        </div>
      </div>
    </>
  );
};
