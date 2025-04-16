
import { useState } from 'react';
import { Utensils, Info, Sparkles, Heart } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

interface Ingredient {
  id: number;
  name: string;
  amount: string;
  unit: string;
  category: string;
  funFact: string;
}

const IngredientSection = () => {
  const [hoveredIngredient, setHoveredIngredient] = useState<number | null>(null);
  
  const ingredients: Ingredient[] = [
    {
      id: 1,
      name: "Saffron",
      amount: "1",
      unit: "pinch",
      category: "spice",
      funFact: "Saffron is worth more than its weight in gold and requires 75,000 flowers to produce a single pound."
    },
    {
      id: 2,
      name: "Honey",
      amount: "1/3",
      unit: "cup",
      category: "sweetener",
      funFact: "Honey is the only food that includes all the substances necessary to sustain life, including enzymes, vitamins, minerals, and water."
    },
    {
      id: 3,
      name: "Flour",
      amount: "2",
      unit: "cups",
      category: "dry",
      funFact: "The word 'flour' is originally a variant of the word 'flower'. Both derive from the Old French fleur, which meant both 'flower' and 'flour'."
    },
    {
      id: 4,
      name: "Pistachios",
      amount: "1/2",
      unit: "cup",
      category: "nut",
      funFact: "Pistachios are one of the oldest flowering nut trees, with evidence suggesting humans were enjoying them as early as 7,000 BC."
    },
    {
      id: 5,
      name: "Rose Water",
      amount: "2",
      unit: "tbsp",
      category: "aromatic",
      funFact: "Rose water has been used for centuries in Persian cuisine, and was once considered more precious than gold for its medicinal properties."
    },
    {
      id: 6,
      name: "Cardamom",
      amount: "1/2",
      unit: "tsp",
      category: "spice",
      funFact: "Cardamom is the third most expensive spice in the world, behind only saffron and vanilla."
    }
  ];
  
  const categories = [...new Set(ingredients.map(item => item.category))];
  
  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'spice':
        return 'bg-red-100 text-red-600 border-red-200';
      case 'sweetener':
        return 'bg-yellow-100 text-yellow-600 border-yellow-200';
      case 'dry':
        return 'bg-orange-100 text-orange-600 border-orange-200';
      case 'nut':
        return 'bg-amber-100 text-amber-600 border-amber-200';
      case 'aromatic':
        return 'bg-purple-100 text-purple-600 border-purple-200';
      default:
        return 'bg-blue-100 text-blue-600 border-blue-200';
    }
  };
  
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="manga-section-title">
            Magical Ingredients
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Hover over each ingredient to reveal ancient secrets and fascinating facts
            about these culinary treasures.
          </p>
        </div>
        
        <div className="manga-card max-w-4xl mx-auto">
          <div className="manga-header flex items-center justify-between">
            <h3 className="text-2xl font-serif font-semibold text-gray-800 flex items-center">
              <Utensils className="mr-2 h-5 w-5 text-pink-500" />
              Recipe Ingredients
            </h3>
            <div className="flex flex-wrap justify-end gap-2">
              {categories.map(category => (
                <div key={category} className={`manga-tag ${getCategoryColor(category)}`}>
                  {category}
                </div>
              ))}
            </div>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {ingredients.map(ingredient => (
                <div 
                  key={ingredient.id} 
                  className="ingredient-item group relative"
                  onMouseEnter={() => setHoveredIngredient(ingredient.id)}
                  onMouseLeave={() => setHoveredIngredient(null)}
                >
                  <div className={`w-12 h-12 flex items-center justify-center rounded-full ${getCategoryColor(ingredient.category)}`}>
                    <span className="text-gray-700 font-serif font-bold">
                      {ingredient.name.charAt(0)}
                    </span>
                  </div>
                  
                  <div className="flex-grow">
                    <h4 className="font-serif font-medium text-lg text-gray-800">
                      {ingredient.name}
                    </h4>
                    <p className="text-gray-600">
                      {ingredient.amount} {ingredient.unit}
                    </p>
                  </div>
                  
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <Info className="h-5 w-5 text-pink-500" />
                  </div>
                  
                  {/* Sparkle effects */}
                  {hoveredIngredient === ingredient.id && (
                    <>
                      <div className="absolute -top-1 -right-1 animate-pulse">
                        <Sparkles className="h-4 w-4 text-yellow-400" />
                      </div>
                      <div className="absolute -bottom-1 -left-1 animate-pulse" style={{ animationDelay: "0.5s" }}>
                        <Sparkles className="h-3 w-3 text-pink-400" />
                      </div>
                    </>
                  )}
                  
                  {hoveredIngredient === ingredient.id && (
                    <div className="ingredient-tooltip manga-card-outline bg-white">
                      <div className="absolute -top-2 -right-2">
                        <Heart className="h-5 w-5 text-pink-500 fill-pink-200" />
                      </div>
                      <h5 className="font-serif font-semibold text-pink-500 mb-1">
                        Did you know?
                      </h5>
                      <p className="text-sm text-gray-700">
                        {ingredient.funFact}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <div className="p-4 bg-pink-50 border-t-2 border-pink-200 rounded-b-lg">
            <p className="text-center text-gray-600 italic font-serif">
              * All ingredients should be at room temperature for optimal results
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IngredientSection;
