
import './App.css';
import Dis from './Dis';
import Dis1 from './Dis1';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div>
      <Router>
        <Routes>

          <Route index element={<Dis />}></Route>

          <Route path="movie/:imdbID" element={<Dis1 />}></Route>
          <Route path="/*" element={<h1>Error</h1>}></Route>

        </Routes>

      </Router>
    </div>
  );
}

export default App;
