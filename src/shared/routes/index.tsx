import App from '../../components/app/App';
import { ErrorPage } from '../../components/error-page';
import { CharactersPage } from '../../pages/characters';
import { HomePage } from '../../pages/home';

export const routes = [
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/characters',
    element: <CharactersPage />,
  },
];
