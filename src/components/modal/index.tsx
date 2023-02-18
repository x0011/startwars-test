import React, { PropsWithChildren, useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import styles from './modal.module.scss';

const modalElement = document.querySelector('#modal');

export const Modal: React.FC<PropsWithChildren> = ({ children }) => {
  // const element = useMemo(() => document.createElement('div'), []);
  // useEffect(() => {
  //   if (modalElement) modalElement.appendChild(element);
  //   return () => {
  //     modalElement?.removeChild(element);
  //   };
  // });
  if (!modalElement) return null;
  return createPortal(
    <div className={styles.wrapper}><div className={styles.modal}>{children}</div></div>,
    modalElement,
  );
};
