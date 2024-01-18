import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';

function App() {
  return (
    <>
      <BrowserRouter basename='/marvel-api-client'>
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
