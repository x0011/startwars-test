import App from '../../components/app/App';
import { CharactersPage } from '../../pages/characters';
import { HomePage } from '../../pages/home';

export const routes = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/characters',
    element: <CharactersPage />,
  },
];
