import './App.css';
import BeforeAfterSection from './components/BeforeAfterSection';
import MainSection from './components/MainSection';
import NavSection from './components/NavSection';
import ProductResultList from './components/product_result_list';
import ProductComparisonCard from './components/ProductComparisonCard';
import DoctorLogin from './pages/DoctorLogin';

const CaptionNote = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      height: '36px',
      alignItems: 'center',
      backgroundColor: 'rgb(216, 236, 255)',
      fontSize: '14px',
    }}
  >
    This is a Portfolio/Demo web page developed by{' '}
    <a
      target="_blank"
      href="https://dribbble.com/shots/26147082-Weight-Loss-Website-Design"
      style={{ paddingInline: '6px' }}
    >
      Yashas.
    </a>{' '}
    Not an actual product.
  </div>
);

function App() {
  return (
    <>
      <CaptionNote />
      <NavSection />
      <MainSection />
      <ProductResultList />
      <ProductComparisonCard
        heading="Traditional Diets"
        subheading="Why They Fall Short"
        features={[
          'Can lead to unhealthy fixation on food and rules',
          'Obsession with food and restriction',
          'One size fits all approach',
          'Loss of Muscle Mass',
        ]}
        imageSrc={'./natural-diet.jpg'}
      />
      <ProductComparisonCard
        heading="Yoga-Guided Transformation"
        subheading=" The Modern Approach"
        features={[
          'Personalized guidance from experienced yoga instructors',
          'Mindful movement and stress reduction for healthy, sustainable results',
          'Holistic programs that evolve with your needs',
          'Gentle accountability and supportive community',
        ]}
        imageSrc="./yoga.png"
      />
      <BeforeAfterSection />
      <CaptionNote />
    </>
  );
}

export default App;
