import { Hero } from '../components/Hero';
import { StatsStrip } from '../components/StatsStrip';
import { About } from '../components/About';
import { News } from '../components/News';
import { Cars } from '../components/Cars';
import { Partners } from '../components/Partners';
import { CallToAction } from '../components/CallToAction';

export default function Home() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <About />
      <News />
      <Cars />
      <Partners />
      <CallToAction />
    </>
  );
}
