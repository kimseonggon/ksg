import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './templates/header/index';
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
