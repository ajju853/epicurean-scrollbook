import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Book } from 'lucide-react';
import RecipeDetailsDialog from './RecipeDetailsDialog';

interface Recipe {
  id: number;
  title: string;
  origin: string;
  difficulty: string;
  prepTime: string;
  cookTime: string;
  imageUrl: string;
}

const RecipeScrollbook = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  
  const recipes: Recipe[] = [
    {
      id: 1,
      title: "Royal Honey & Saffron Cake",
      origin: "Persian",
      difficulty: "Moderate",
      prepTime: "30 min",
      cookTime: "45 min",
      imageUrl: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=500&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Dragon's Breath Spicy Noodles",
      origin: "Szechuan",
      difficulty: "Hard",
      prepTime: "25 min",
      cookTime: "15 min",
      imageUrl: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=500&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Moonlight Risotto",
      origin: "Italian",
      difficulty: "Moderate",
      prepTime: "20 min",
      cookTime: "30 min",
      imageUrl: "https://images.unsplash.com/photo-1633964913295-ceb43826a07b?q=80&w=500&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "Forest Mushroom Stew",
      origin: "French",
      difficulty: "Easy",
      prepTime: "15 min",
      cookTime: "40 min",
      imageUrl: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?q=80&w=500&auto=format&fit=crop"
    },
    {
      id: 5,
      title: "Cherry Blossom Mochi",
      origin: "Japanese",
      difficulty: "Moderate",
      prepTime: "40 min",
      cookTime: "20 min",
      imageUrl: "https://images.unsplash.com/photo-1561702856-b4ec96854ed8?q=80&w=500&auto=format&fit=crop"
    },
    {
      id: 6,
      title: "Magical Bubble Tea",
      origin: "Taiwanese",
      difficulty: "Easy",
      prepTime: "15 min",
      cookTime: "10 min",
      imageUrl: "https://images.unsplash.com/photo-1558857563-c0c3aa058808?q=80&w=500&auto=format&fit=crop"
    },
    {
      id: 7,
      title: "Starlight Strawberry Shortcake",
      origin: "American",
      difficulty: "Easy",
      prepTime: "25 min",
      cookTime: "30 min",
      imageUrl: "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=500&auto=format&fit=crop"
    },
    {
      id: 8,
      title: "Kawaii Bento Box",
      origin: "Japanese",
      difficulty: "Hard",
      prepTime: "60 min",
      cookTime: "30 min",
      imageUrl: "https://images.unsplash.com/photo-1530648672449-81f6c723e2f1?q=80&w=500&auto=format&fit=crop"
    },
    {
      id: 9,
      title: "Galaxy Glazed Donuts",
      origin: "Fantasy",
      difficulty: "Moderate",
      prepTime: "35 min",
      cookTime: "15 min",
      imageUrl: "https://images.unsplash.com/photo-1556913396-7a3c459ef68e?q=80&w=500&auto=format&fit=crop"
    },
    {
      id: 10,
      title: "Rainbow Ramen Bowl",
      origin: "Japanese Fusion",
      difficulty: "Hard",
      prepTime: "45 min",
      cookTime: "30 min",
      imageUrl: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?q=80&w=500&auto=format&fit=crop"
    },
    {
      id: 11,
      title: "Enchanted Forest Salad",
      origin: "Nordic",
      difficulty: "Easy",
      prepTime: "20 min",
      cookTime: "0 min",
      imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=500&auto=format&fit=crop"
    },
    {
      id: 12,
      title: "Celestial Macarons",
      origin: "French",
      difficulty: "Expert",
      prepTime: "40 min",
      cookTime: "15 min",
      imageUrl: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?q=80&w=500&auto=format&fit=crop"
    }
  ];
  
  const nextPage = () => {
    if (currentPage < recipes.length - 1) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(currentPage + 1);
        setIsFlipping(false);
      }, 500);
    }
  };
  
  const prevPage = () => {
    if (currentPage > 0) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(currentPage - 1);
        setIsFlipping(false);
      }, 500);
    }
  };

  const openRecipeDetails = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
    setDialogOpen(true);
  };

  const closeRecipeDetails = () => {
    setDialogOpen(false);
  };

  return (
    <section className="py-16 bg-parchment-dark/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-burgundy mb-4">
            The Grand Recipe Collection
          </h2>
          <p className="text-lg text-foreground/80">
            Flip through our ancient scrollbook of recipes from around the world.
            Each page holds a treasure of flavors waiting to be discovered.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Controls */}
          <div className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 z-40">
            <Button 
              variant="outline" 
              size="icon" 
              className={`rounded-full bg-white/80 backdrop-blur-sm text-burgundy hover:bg-burgundy hover:text-white ${currentPage === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
              onClick={prevPage}
              disabled={currentPage === 0 || isFlipping}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
          </div>
          
          <div className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 z-40">
            <Button 
              variant="outline" 
              size="icon" 
              className={`rounded-full bg-white/80 backdrop-blur-sm text-burgundy hover:bg-burgundy hover:text-white ${currentPage === recipes.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
              onClick={nextPage}
              disabled={currentPage === recipes.length - 1 || isFlipping}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
          
          {/* Book Pages */}
          <div className="book-container overflow-hidden">
            <div className={`book transition-transform duration-500 ${isFlipping ? 'scale-95' : ''}`}>
              <div className="page relative">
                <div className="page-content flex flex-col md:flex-row">
                  {/* Recipe Image - Improved visibility */}
                  <div className="md:w-1/2 h-80 md:h-auto overflow-hidden rounded-t-lg md:rounded-l-lg md:rounded-tr-none shadow-md">
                    <img 
                      src={recipes[currentPage].imageUrl} 
                      alt={recipes[currentPage].title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="eager"
                    />
                  </div>
                  
                  {/* Recipe Details */}
                  <div className="md:w-1/2 p-6 md:p-8 flex flex-col bg-white/90 backdrop-blur-sm rounded-b-lg md:rounded-r-lg md:rounded-bl-none shadow-md">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <span className="inline-block px-3 py-1 bg-burgundy/10 text-burgundy text-sm rounded-full mb-3">
                          {recipes[currentPage].origin} Cuisine
                        </span>
                        <h3 className="text-2xl md:text-3xl font-serif font-bold text-burgundy">
                          {recipes[currentPage].title}
                        </h3>
                      </div>
                      <div className="flex flex-col items-center">
                        <span className="text-sm text-foreground/60">Recipe</span>
                        <span className="text-xl font-serif font-bold text-gold-dark">{currentPage + 1}/{recipes.length}</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center p-2 bg-white/50 rounded-md border border-gold-light/20">
                        <span className="block text-sm text-foreground/60">Difficulty</span>
                        <span className="font-medium text-foreground">{recipes[currentPage].difficulty}</span>
                      </div>
                      <div className="text-center p-2 bg-white/50 rounded-md border border-gold-light/20">
                        <span className="block text-sm text-foreground/60">Prep Time</span>
                        <span className="font-medium text-foreground">{recipes[currentPage].prepTime}</span>
                      </div>
                      <div className="text-center p-2 bg-white/50 rounded-md border border-gold-light/20">
                        <span className="block text-sm text-foreground/60">Cook Time</span>
                        <span className="font-medium text-foreground">{recipes[currentPage].cookTime}</span>
                      </div>
                      <div className="text-center p-2 bg-white/50 rounded-md border border-gold-light/20">
                        <span className="block text-sm text-foreground/60">Servings</span>
                        <span className="font-medium text-foreground">4-6</span>
                      </div>
                    </div>
                    
                    <p className="text-foreground/70 mb-6">
                      A legendary recipe passed down through generations, 
                      bringing together exotic flavors in perfect harmony.
                    </p>
                    
                    <div className="mt-auto">
                      <Button 
                        className="w-full bg-burgundy hover:bg-burgundy-light text-white"
                        onClick={() => openRecipeDetails(recipes[currentPage])}
                      >
                        <Book className="mr-2 h-5 w-5" />
                        Open Full Recipe
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Page Indicators */}
          <div className="flex justify-center mt-8 flex-wrap gap-1">
            {recipes.map((_, index) => (
              <button 
                key={index}
                className={`mx-1 w-3 h-3 rounded-full transition-all ${
                  currentPage === index 
                    ? 'bg-burgundy scale-110' 
                    : 'bg-burgundy/30 hover:bg-burgundy/50'
                }`}
                onClick={() => {
                  if (!isFlipping) {
                    setIsFlipping(true);
                    setTimeout(() => {
                      setCurrentPage(index);
                      setIsFlipping(false);
                    }, 500);
                  }
                }}
                disabled={isFlipping}
                aria-label={`Go to recipe ${index + 1}`}
              />
            ))}
          </div>
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

export default RecipeScrollbook;
