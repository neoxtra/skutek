import Hero from './components/home/Hero';
import LogoScroller from './components/home/LogoScroller';
import HighlightsSpace from './components/home/HighlightsSpace';
import DAQChain from './components/home/DAQChain';
import LatestNews from './components/home/LatestNews';

export default function Home() {
  return (
    <main>
      <Hero />
      <LogoScroller />
      <HighlightsSpace />
      <DAQChain />
      <LatestNews />
    </main>
  );
}
