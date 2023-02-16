import { Tag } from '..';
import styles from './genderTag.module.scss';

export enum GenderColorsEnum {
  'male' = 'green',
  'female' = 'purple',
  'hermaphrodite' = 'yellow',
  'n/a' = 'n/a',
}

interface IGenderTag {
  gender: keyof typeof GenderColorsEnum,
}

export const GenderTag: React.FC<IGenderTag> = ({ gender }) => {
  if (gender) return <Tag injectStyles={styles[GenderColorsEnum[gender]]} text={gender} />;
  return null;
};
