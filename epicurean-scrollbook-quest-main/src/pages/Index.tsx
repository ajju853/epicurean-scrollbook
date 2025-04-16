
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import RecipeScrollbook from '@/components/RecipeScrollbook';
import IngredientSection from '@/components/IngredientSection';
import StepByStep from '@/components/StepByStep';
import Techniques from '@/components/Techniques';
import Origins from '@/components/Origins';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <Header />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Recipe Scrollbook */}
      <div id="recipes">
        <RecipeScrollbook />
      </div>
      
      {/* Ingredient Section */}
      <div id="ingredients">
        <IngredientSection />
      </div>
      
      {/* Techniques Section */}
      <div id="techniques">
        <Techniques />
      </div>
      
      {/* Origins Section */}
      <div id="origins">
        <Origins />
      </div>
      
      {/* Step by Step */}
      <StepByStep />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
