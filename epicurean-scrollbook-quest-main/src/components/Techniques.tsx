
import { useState } from 'react';
import { BookMarked, ChevronRight, Star, RotateCw } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import RecipeDetailsDialog from './RecipeDetailsDialog';

interface Technique {
  id: number;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  benefits: string[];
  imageUrl: string;
  relatedRecipeId?: number;
}

interface Recipe {
  id: number;
  title: string;
  origin: string;
  difficulty: string;
  prepTime: string;
  cookTime: string;
  imageUrl: string;
}

const Techniques = () => {
  const [activeTechnique, setActiveTechnique] = useState<number>(1);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  
  // Sample recipes data that matches technique's relatedRecipeId
  const recipes: Recipe[] = [
    {
      id: 101,
      title: "Perfect Sushi Rolls",
      origin: "Japanese",
      difficulty: "Intermediate",
      prepTime: "30 min",
      cookTime: "15 min",
      imageUrl: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=500&auto=format&fit=crop"
    },
    {
      id: 102,
      title: "Chef's Premium Steak",
      origin: "American",
      difficulty: "Advanced",
      prepTime: "20 min",
      cookTime: "25 min",
      imageUrl: "https://images.unsplash.com/photo-1593185221372-a9c2f7e2a5d9?q=80&w=500&auto=format&fit=crop"
    },
    {
      id: 103,
      title: "Perfect Stir Fry",
      origin: "Chinese",
      difficulty: "Beginner",
      prepTime: "15 min",
      cookTime: "10 min",
      imageUrl: "https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=500&auto=format&fit=crop"
    }
  ];
  
  const techniques: Technique[] = [
    {
      id: 1,
      title: "Perfect Rice Folding",
      description: "The art of folding rice is essential for creating the perfect sushi roll. This technique requires patience and precision, ensuring each grain is perfectly positioned.",
      difficulty: "intermediate",
      benefits: ["Even rice distribution", "Prevents roll from falling apart", "Creates professional appearance"],
      imageUrl: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=500&auto=format&fit=crop",
      relatedRecipeId: 101
    },
    {
      id: 2,
      title: "Knife Sharpening",
      description: "A sharp knife is the cornerstone of efficient cooking. This technique shows you how to maintain your blade's edge using traditional Japanese whetstone methods.",
      difficulty: "advanced",
      benefits: ["Safer cutting", "Cleaner cuts", "Extended knife lifespan"],
      imageUrl: "https://images.unsplash.com/photo-1593185221372-a9c2f7e2a5d9?q=80&w=500&auto=format&fit=crop",
      relatedRecipeId: 102
    },
    {
      id: 3,
      title: "Flame Control",
      description: "Mastering heat is fundamental to cooking perfection. Learn how to adjust and control flame intensity for different cooking techniques.",
      difficulty: "beginner",
      benefits: ["Prevents burning", "Ensures even cooking", "Enhances flavors"],
      imageUrl: "https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=500&auto=format&fit=crop",
      relatedRecipeId: 103
    }
  ];
  
  const getDifficultyColor = (difficulty: string) => {
    switch(difficulty) {
      case 'beginner':
        return 'bg-green-100 text-green-700 border-green-300';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-700 border-yellow-300';
      case 'advanced':
        return 'bg-red-100 text-red-700 border-red-300';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-300';
    }
  };
  
  const getDifficultyStars = (difficulty: string) => {
    switch(difficulty) {
      case 'beginner':
        return 1;
      case 'intermediate':
        return 2;
      case 'advanced':
        return 3;
      default:
        return 0;
    }
  };

  const openRecipeDetails = (techniqueId: number) => {
    const technique = techniques.find(t => t.id === techniqueId);
    if (technique?.relatedRecipeId) {
      const recipe = recipes.find(r => r.id === technique.relatedRecipeId);
      if (recipe) {
        setSelectedRecipe(recipe);
        setDialogOpen(true);
      }
    }
  };

  const closeRecipeDetails = () => {
    setDialogOpen(false);
  };
  
  return (
    <section id="techniques" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="manga-section-title">
            Cooking Techniques
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Master these essential techniques to elevate your cooking skills from novice to expert.
            Each technique comes with detailed instructions and visual guides.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {techniques.map(technique => (
            <div 
              key={technique.id}
              className={`manga-card overflow-hidden cursor-pointer transform transition-all duration-300 ${
                activeTechnique === technique.id 
                  ? 'ring-4 ring-pink-400 scale-105' 
                  : 'hover:scale-102'
              }`}
              onClick={() => setActiveTechnique(technique.id)}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={technique.imageUrl} 
                  alt={technique.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-serif font-bold text-gray-800">
                    {technique.title}
                  </h3>
                  <div className={`manga-tag ${getDifficultyColor(technique.difficulty)}`}>
                    {technique.difficulty}
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(getDifficultyStars(technique.difficulty))].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  ))}
                  {[...Array(3 - getDifficultyStars(technique.difficulty))].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-gray-300" />
                  ))}
                </div>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {technique.description}
                </p>
                
                <div className="flex justify-between items-center mt-4">
                  <div className="text-sm text-pink-500 font-medium flex items-center">
                    <RotateCw className="mr-1 h-4 w-4" /> Practice Level {getDifficultyStars(technique.difficulty)}
                  </div>
                  <Button 
                    variant="outline"
                    size="sm"
                    className="text-pink-500 border-pink-200 hover:bg-pink-50"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent triggering parent onClick
                      openRecipeDetails(technique.id);
                    }}
                  >
                    Learn
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="manga-button">
            <BookMarked className="mr-2 h-5 w-5" />
            Browse All Techniques
          </Button>
        </div>
      </div>

      {/* Recipe Details Dialog */}
      <RecipeDetailsDialog
        recipe={selectedRecipe}
        isOpen={dialogOpen}
        onClose={closeRecipeDetails}
      />
    </section>
  );
};

export default Techniques;
