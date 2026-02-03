import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Products from './components/Products';
import Industries from './components/Industries';
import KnowledgeBase from './components/KnowledgeBase';
import Articles from './components/Articles';
import CaseStudies from './components/CaseStudies';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import ArticleDetail from './components/ArticleDetail';
import CaseStudyDetail from './components/CaseStudyDetail';
import KnowledgeBaseDetail from './components/KnowledgeBaseDetail';
import DemoSignup from './components/DemoSignup';
import UCPReady from './components/UCPReady';
import './App.css';

// ScrollToTop component to reset scroll on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const HomePage = () => (
  <main>
    <Hero />
    <Services />
    <Products />
    <UCPReady />
    <Industries />
    <KnowledgeBase />
    <Articles />
    <CaseStudies />
    <AboutUs />
    <Contact />
  </main>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <div className="app-background">
          <div className="mesh-gradient-1"></div>
          <div className="mesh-gradient-2"></div>
          <div className="mesh-grid"></div>
        </div>

        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/article/:id" element={<ArticleDetail />} />
          <Route path="/case-study/:id" element={<CaseStudyDetail />} />
          <Route path="/resource/:id" element={<KnowledgeBaseDetail />} />
          <Route path="/demo-signup" element={<DemoSignup />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
