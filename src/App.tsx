import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home';
import FeaturesPage from './pages/FeaturesPage';
import ExamplesPage from './pages/ExamplesPage';
import Camera3DPage from './pages/Camera3DPage';
import ContactPage from './pages/ContactPage';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Navigation />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/caracteristicas" element={<FeaturesPage />} />
          <Route path="/ejemplos" element={<ExamplesPage />} />
          <Route path="/camara-3d" element={<Camera3DPage />} />
          <Route path="/contacto" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
