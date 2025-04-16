
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ChefHat, BookOpen, ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="min-h-screen pt-24 pb-16 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Floating elements */}
      <div className="absolute opacity-20 top-1/4 -left-10 w-32 h-32 bg-pink-400/20 rounded-full blur-2xl animate-float"></div>
      <div className="absolute opacity-20 bottom-1/4 -right-10 w-40 h-40 bg-purple-400/20 rounded-full blur-2xl animate-float" style={{ animationDelay: "2s" }}></div>
      
      <div className="container mx-auto px-4 text-center">
        <div className="relative mb-4">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-gray-800 relative z-10">
            Epicurean <span className="text-pink-500">Quest</span>
          </h1>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-yellow-100 rounded-full opacity-20 filter blur-3xl z-0"></div>
        </div>
        
        <p className="text-xl md:text-2xl font-serif max-w-2xl mx-auto mb-10 text-gray-600">
          Embark on a culinary journey through magical recipes, cooking techniques, and flavors 
          that tell stories from across the world.
        </p>
        
        <div 
          className="book-container mx-auto mb-12 w-[280px] sm:w-[350px] md:w-[480px] h-[350px] sm:h-[400px] md:h-[500px]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className={`book relative ${isHovered ? 'rotate-y-10' : ''} transition-transform duration-500`}>
            <div className="absolute inset-0 bg-pink-700 rounded-lg rounded-r-sm shadow-xl transform rotate-y-2 -translate-x-4 z-10"></div>
            <div className="absolute inset-0 bg-pink-500 rounded-lg rounded-r-sm shadow-xl transform rotate-y-1 -translate-x-2 z-20"></div>
            <div className="relative z-30 bg-white rounded-lg rounded-r-sm shadow-xl border-l-4 border-t border-r border-b border-pink-200 overflow-hidden">
              <div className="p-8 h-full flex flex-col justify-between relative overflow-hidden">
                {/* Manga-style decoration elements */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-100 rounded-full -translate-x-1/3 -translate-y-1/3"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-pink-100 rounded-full translate-x-1/3 translate-y-1/3"></div>
                
                <div className="flex justify-center relative z-10">
                  <ChefHat className="w-16 h-16 text-pink-500 opacity-90" />
                </div>
                <div className="text-center mt-6 relative z-10">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-4">The Magic Cookbook</h2>
                  <p className="text-sm sm:text-base md:text-lg font-serif text-gray-600 mb-8">Recipes, Techniques & Culinary Secrets</p>
                  <div className="w-40 h-1 bg-pink-300 mx-auto opacity-70"></div>
                </div>
                <div className="mt-auto opacity-70 relative z-10">
                  <p className="text-xs text-center font-serif italic">Hand-crafted recipes from around the world</p>
                </div>
                
                {/* Sparkle effect */}
                <div className={`absolute top-1/4 right-1/4 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                  <Sparkles className="h-6 w-6 text-yellow-400" />
                </div>
                <div className={`absolute bottom-1/4 left-1/3 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                  <Sparkles className="h-5 w-5 text-pink-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button 
            className="manga-button"
          >
            <BookOpen className="mr-2 h-5 w-5" />
            Start Cooking
          </Button>
          <Button 
            variant="outline"
            className="border-pink-300 text-pink-500 hover:bg-pink-50 hover:text-pink-600 font-serif text-lg px-8 py-6"
          >
            Explore Recipes
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
