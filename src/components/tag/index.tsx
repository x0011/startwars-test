import React, { PropsWithChildren } from 'react';
import styles from './tag.module.scss';

interface ITag {
  text?: string,
  injectStyles?: string
}

export const Tag: React.FC<ITag> = ({ text, injectStyles }) => (
  <span className={[styles.tag, injectStyles].join(' ')}>{text}</span>
);
