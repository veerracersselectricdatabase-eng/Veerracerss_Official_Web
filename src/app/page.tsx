import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Timeline } from '../components/Timeline';
import { Schedule } from '../components/Schedule';
import { Partners } from '../components/Partners';
import { Connect } from '../components/Connect';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Schedule />
      <Timeline />
      <Partners />
      <Connect />
    </>
  );
}
