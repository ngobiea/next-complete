import homeImg from '/public/performance.jpg';
import Hero from '@/components/hero';
export default function PerformancePage() {
  return (
    <Hero
      imaData={homeImg}
      imgAlt='Welding'
      title='We server high performance applications'
    />
  );
}
