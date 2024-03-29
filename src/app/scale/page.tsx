import homeImg from '/public/scale.jpg';
import Hero from '@/components/hero';
export default function ScalePage() {
  return (
    <Hero
      imaData={homeImg}
      imgAlt="Steel Factory"
      title="Scale your app to infinity"
    />
  );
}
