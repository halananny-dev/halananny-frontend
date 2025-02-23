import { Navbar } from '@/components/sections/Navbar';
import { Hero } from '@/components/sections/Hero';
import { Steps } from '@/components/sections/Steps';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { Nannies } from '@/components/sections/Nannies';
import { Pricing } from '@/components/sections/Pricing';
import { Testimonials } from '@/components/sections/Testimonials';
import { Preferences } from '@/components/sections/Preferences';
import { FAQ } from '@/components/sections/FAQ';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Steps />
        <WhyChooseUs />
        <Nannies />
        <Pricing />
        <Testimonials />
        <Preferences />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
