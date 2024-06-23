import React from 'react';
import cn from 'classnames';
import Image from 'next/image';

import { Typewriter } from '@/app/components/Typewriter/Typewriter';

import styles from './Experience.module.scss';

export const Experience = () => {
  return (
    <section className={styles.root}>
      <Typewriter Component="h1" className={styles.title}>
        Digital <mark>product designer</mark> with <mark>6+&nbsp;years</mark> of&nbsp;experience focusing on&nbsp;
        <mark>EdTech products</mark>
      </Typewriter>
      <ul className={styles.elements}>
        <li className={styles.element}>
          <div className={styles.block}>
            <p className={cn(styles.subtitle, styles.subtitleIcon)}>
              <Image src="/icons/arrow--up-right.svg" width={18} height={18} alt="Стрелочка" />
              Reached top-30
            </p>
            <p className={styles.text}>edtech company in CIS</p>
          </div>
          <div className={styles.block}>
            <p className={styles.subtitle}>
              Lead Product Designer <mark>@Infourok.ru</mark>
            </p>
            <p className={styles.text}>2023 — 2024</p>
          </div>
        </li>
        <li className={styles.element}>
          <div className={styles.block}>
            <p className={styles.subtitle}>+185%</p>
            <p className={styles.text}>revenue growth</p>
          </div>
          <div className={styles.block}>
            <p className={styles.subtitle}>
              Senior Product Designer <mark>@Infourok.ru</mark>
            </p>
            <p className={styles.text}>2020 — 2023</p>
          </div>
        </li>
        <li className={styles.element}>
          <div className={styles.block}>
            <p className={styles.subtitle}>Work with</p>
            <ul className={styles.items}>
              <li className={styles.item}>
                <p className={styles.text}>
                  <Image src="/images/company/softmoc.png" width={16} height={18} alt="SoftMoc" />
                  SoftMoc
                </p>
              </li>
              <li className={styles.item}>
                <p className={styles.text}>
                  <Image src="/images/company/toysfortotscanada.png" width={22} height={22} alt="toysfortotscanada" />
                  toysfortotscanada
                </p>
              </li>
            </ul>
          </div>
          <div className={styles.block}>
            <p className={styles.subtitle}>
              UX/UI Designer <mark>@ITMINT</mark>
            </p>
            <p className={styles.text}>2018 — 2019</p>
          </div>
        </li>
      </ul>
    </section>
  );
};
