
import React, { ReactElement } from 'react';
import HomeConponent from './pages/home';
import MeConponent from './pages/me';
import UIConponent from './pages/ui';

interface RouteItem {
    path: string;
    element: ReactElement;
}

export const routes: RouteItem[] = [
  { path: '/', element: <HomeConponent /> },
  { path: '/me', element: <MeConponent /> },
  { path: '/ui', element: <UIConponent /> },
];