import Header from './Header';
import HeroSection from './HeroSection';
import ExpectationBreaker from './ExpectationBreaker';
import MartechSection from './MartechSection';
import CallToAction from './CallToAction';
import HowItWorks from './HowItWorks';
import Partners from './Partners';
import Footer from './Footer';

function Home() {
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

export default Home;