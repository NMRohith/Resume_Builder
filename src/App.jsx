import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ResumeFormPage from './pages/ResumeFormPage';
import ResumePreviewPage from './pages/ResumePreviewPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ResumeFormPage />} />
        <Route path="/preview" element={<ResumePreviewPage />} />
      </Routes>
    </Router>
  );
}

export default App;
