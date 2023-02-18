import React from 'react';
import styles from './genderIcon.module.scss';
import { ReactComponent as AlienIcon } from './assets/img/alien.svg';
import { ReactComponent as ManIcon } from './assets/img/man.svg';
import { ReactComponent as FemaleIcon } from './assets/img/female.svg';
import { ReactComponent as GenderlessIcon } from './assets/img/genderless.svg';
import { GenderColorsEnum } from '../tag/GenderTag';

interface IIcons {
  gender: keyof typeof GenderColorsEnum,
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement> & {
    title?: string | undefined;
  }>
}

const icons: IIcons[] = [
  { gender: 'hermaphrodite', icon: AlienIcon },
  { gender: 'male', icon: ManIcon },
  { gender: 'female', icon: FemaleIcon },
  { gender: 'n/a', icon: GenderlessIcon },
];

interface IGenderIcon {
  gender: keyof typeof GenderColorsEnum,
  injectStyles?: string
}

export const GenderIcon: React.FC<IGenderIcon> = ({ gender, injectStyles }) => {
  const currentItem = icons.filter((item) => item.gender === gender)[0];
  const IconElem = currentItem.icon;
  return <IconElem width="auto" height="auto" className={injectStyles} />;
};
