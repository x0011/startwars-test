import React, { PropsWithChildren } from 'react';
import styles from './title.module.scss';

interface ITitle extends PropsWithChildren {
  injectStyles?: string
}

export const Title: React.FC<ITitle> = ({ children, injectStyles }) => (
  <h1 className={[styles.title, injectStyles].join(' ')}>{children}</h1>
);
