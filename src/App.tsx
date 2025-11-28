import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { Toaster } from 'sonner';

function App() {
  return (
    <Router>
      <Toaster />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
