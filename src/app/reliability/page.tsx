import homeImg from '/public/reliability.jpg';
import Hero from '@/components/hero';
export default function ReliabilityPage() {
  return (
    <Hero
      imaData={homeImg}
      imgAlt="Welding"
      title="Super high reliability hosting"
    />
  );
}
