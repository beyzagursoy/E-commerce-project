import Hero from '../components/Hero';
import EditorsPick from '../components/EditorsPick';
import Bestseller from '../components/Bestseller';
import ClassicSection from '../components/ClassicSection';
import NeuralUniverse from '../components/NeuralUniverse';
import BlogSection from '../components/BlogSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <EditorsPick />
      <Bestseller />
      <ClassicSection />
      <NeuralUniverse />
      <BlogSection />
    </>
  );
}