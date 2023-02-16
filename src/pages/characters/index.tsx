import React from 'react';
import App from '../../components/app/App';
import { Container } from '../../components/container';
import { useBackground } from '../../shared/hooks/useBackground';
import { BaseTemplatePage } from '../templates/base';

export const CharactersPage = () => (
  <BaseTemplatePage>
    <Container>
      <App />
    </Container>
  </BaseTemplatePage>
);
