
import { ReactElement } from 'react';
import HomeComponent from './pages/home';
import MeComponent from './pages/me';
import UIComponent from './pages/ui';
import ProjectComponent from './pages/project';

interface RouteItem {
  path: string;
  element: ReactElement;
}

export const routes: RouteItem[] = [
  { path: '/', element: <HomeComponent /> },
  { path: '/me', element: <MeComponent /> },
  { path: '/ui', element: <UIComponent /> },
  { path: '/project', element: <ProjectComponent /> },
];