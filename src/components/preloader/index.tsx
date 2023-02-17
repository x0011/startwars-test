import React from 'react';
import styles from './preloader.module.scss';
import { ReactComponent as LeiaLogo } from './assests/img/leia.svg';
import { ReactComponent as ChewbaccaLogo } from './assests/img/chewbacca.svg';
import { ReactComponent as EwokLogo } from './assests/img/ewok.svg';
import { ReactComponent as JabbaLogo } from './assests/img/jabba.svg';
import { ReactComponent as PalpatineLogo } from './assests/img/palpatine.svg';
import { ReactComponent as VaderLogo } from './assests/img/vader.svg';

const logos = [
  LeiaLogo,
  EwokLogo,
  ChewbaccaLogo,
  JabbaLogo,
  PalpatineLogo,
  VaderLogo,
];

const randomLogo = (Logos: React.FunctionComponent<React.SVGProps<SVGSVGElement> & {
  title?: string | undefined;
}>[]) => {
  const rnd = Math.floor(Math.random() * logos.length);
  return Logos[rnd];
};

export const Preloader = () => {
  const Elem = randomLogo(logos);
  return (
    <div className={styles.logo}>
      <Elem className={styles.img} />
    </div>
  );
};
