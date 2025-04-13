import React from 'react';
import { Routes, Route } from 'react-router-dom';
import logo from '../logo.svg';
import './App.css';
import Header from './templates/header/index';
import UIComponent from './pages/ui/index';
import HomeComponent from './pages/home/index';
import MeComponent from './pages/me/index';
import { routes } from './routes';

type Props = {
  title?: string
  children?: React.ReactNode
}
function App(props: Props) {
  const { children } = props
  return (
    <div className="App">
      <Header />

      <Routes>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
