import React from 'react';
import App from '../../components/app/App';
import { Container } from '../../components/container';
import { CurrentLang } from '../../components/current-lang';
import { TranslateBtn } from '../../components/translate-btn';
import { BaseTemplatePage } from '../templates/base';
import styles from './charactersPage.module.scss';

export const CharactersPage = () => (
  <BaseTemplatePage>
    <Container injectStyles={styles.wrapper}>
      <CurrentLang />
      <App />
    </Container>
    <TranslateBtn />
  </BaseTemplatePage>
);
