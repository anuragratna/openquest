import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Industries from './components/Industries';
import KnowledgeBase from './components/KnowledgeBase';
import Articles from './components/Articles';
import CaseStudies from './components/CaseStudies';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Services />
        <Industries />
        <KnowledgeBase />
        <Articles />
        <CaseStudies />
      </main>
      <Footer />
    </div>
  );
}

export default App;
