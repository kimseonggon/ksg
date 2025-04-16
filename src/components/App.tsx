import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './templates/header/index';
import { routes } from './routes';

function App() {
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
