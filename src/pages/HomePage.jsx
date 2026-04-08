import Hero from '../components/Home/Hero';
import EditorsPick from '../components/Home/EditorsPick';
import Bestseller from '../components/Home/Bestseller';
import ClassicSection from '../components/Home/ClassicSection';
import NeuralUniverse from '../components/Home/NeuralUniverse';
import BlogSection from '../components/Home/BlogSection';


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