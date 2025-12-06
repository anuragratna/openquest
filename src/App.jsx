import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Industries from './components/Industries';
import KnowledgeBase from './components/KnowledgeBase';
import Articles from './components/Articles';
import CaseStudies from './components/CaseStudies';
import Footer from './components/Footer';
import Contact from './components/Contact';
import ArticleDetail from './components/ArticleDetail';
import KnowledgeBaseDetail from './components/KnowledgeBaseDetail';

const HomePage = () => (
  <main>
    <Hero />
    <Services />
    <Industries />
    <KnowledgeBase />
    <Articles />
    <CaseStudies />
    <Contact />
  </main>
);

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/article/:id" element={<ArticleDetail />} />
          <Route path="/resource/:id" element={<KnowledgeBaseDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
