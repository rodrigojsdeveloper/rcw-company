import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ExpectationBreaker from './components/ExpectationBreaker';
import MartechSection from './components/MartechSection';
import CallToAction from './components/CallToAction';
import HowItWorks from './components/HowItWorks';
import Partners from './components/Partners';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#111111] text-white min-h-screen font-sans">
      <Header />
      <main>
        <HeroSection />
        <ExpectationBreaker />
        <MartechSection />
        <CallToAction />
        <HowItWorks />
        <Partners />
      </main>
      <Footer />
    </div>
  );
}

export default App;