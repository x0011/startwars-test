import React, { PropsWithChildren } from 'react';
import styles from './styles.module.scss';

interface IContainer extends PropsWithChildren {
  injectStyles?: string,
}

export const Container: React.FC<IContainer> = ({ children, injectStyles }) => (
  <div className={[styles.wrapper, injectStyles || null].join(' ')}>
    {children}
  </div>
);
