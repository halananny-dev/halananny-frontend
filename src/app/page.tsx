import FAQ from '@/components/sections/FAQ';
import Footer from '@/components/sections/Footer';
import Hero from '@/components/sections/Hero';
import Img from '@/components/sections/Img';
import Nannies from '@/components/sections/Nannies';
import Navbar from '@/components/sections/Navbar';
import Preferences from '@/components/sections/Preferences';
import Pricing from '@/components/sections/Pricing';
import Steps from '@/components/sections/Steps';
import Testimonials from '@/components/sections/Testimonials';
import WhyChooseUs from '@/components/sections/WhyChooseUs';

export default function Home() {
  return (
    <>
      <div
        className="md:bg-hero md:bg-cover md:bg-center md:bg-no-repeat">
        <Navbar />
        <Hero />
      </div>
      <Steps />
      <WhyChooseUs />
      <Nannies />
      <Pricing />
      <Testimonials />
      <Preferences />
      <FAQ />
      <Footer />
    </>
  );
}
