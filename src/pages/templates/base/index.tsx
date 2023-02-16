import React, { PropsWithChildren } from 'react';
import { Header } from '../../../components/header';

export const BaseTemplatePage: React.FC<PropsWithChildren> = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);
