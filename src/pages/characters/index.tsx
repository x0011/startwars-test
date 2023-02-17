import React from 'react';
import App from '../../components/app/App';
import { Container } from '../../components/container';
import { useBackground } from '../../shared/hooks/useBackground';
import { BaseTemplatePage } from '../templates/base';
import styles from './charactersPage.module.scss';

export const CharactersPage = () => (
  <BaseTemplatePage>
    <Container injectStyles={styles.wrapper}>
      <App />
    </Container>
  </BaseTemplatePage>
);
