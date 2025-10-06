import React from 'react';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import CodeExamples from './components/CodeExamples/CodeExamples';
import Footer from './components/Footer/Footer';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <Hero />
      <Features />
      <CodeExamples />
      <Footer />
    </div>
  );
};

export default App;
