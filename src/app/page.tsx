import Navbar    from '@/components/layout/Navbar';
import Footer    from '@/components/layout/Footer';
import Hero      from '@/components/home/Hero';
import StatsBar  from '@/components/home/StatsBar';
import Benefits  from '@/components/home/Benefits';
import HowItWorks from '@/components/home/HowItWorks';
import UseCases  from '@/components/home/UseCases';
import Analytics from '@/components/home/Analytics';
import CtaBanner from '@/components/home/CtaBanner';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <StatsBar />
        <Benefits />
        <HowItWorks />
        <UseCases />
        <Analytics />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
