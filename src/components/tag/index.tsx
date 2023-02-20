import React, { PropsWithChildren } from 'react';
import { Translator } from '../translator';
import styles from './tag.module.scss';

interface ITag extends PropsWithChildren {
  text?: string,
  injectStyles?: string,
  translate?: boolean
}

export const Tag: React.FC<ITag> = ({
  text, injectStyles, children, translate = true,
}) => (
  text !== 'unknown'
    ? (
      <span className={[styles.tag, injectStyles].join(' ')}>
        {translate ? <Translator text={text} /> : text}
        {children}
      </span>
    )
    : null
);
