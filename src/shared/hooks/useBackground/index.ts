import React, { useEffect } from 'react';

const addBodyClass = (className: string) => {
  const { dataset } = document.documentElement;
  dataset.bg = className;
};
const removeBodyClass = (className: string) => {
  const { documentElement } = document;
  documentElement.removeAttribute(className);
};
export const useBackground = () => {
  useEffect(() => {
    addBodyClass('blue');
    return () => {
      removeBodyClass('data-bg');
    };
  }, []);
};
