import Hero from './components/home/Hero';
import LogoScroller from './components/home/LogoScroller';
import Highlights from './components/home/Highlights';
import SpaceSection from './components/home/SpaceSection';

export default function Home() {
  return (
    <main>
      <Hero />
      <LogoScroller />
      <Highlights />
      <SpaceSection />
    </main>
  );
}
