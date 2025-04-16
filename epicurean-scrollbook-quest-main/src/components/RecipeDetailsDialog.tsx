
import { 
  Dialog,
  DialogContent, 
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Clock, ChefHat, Globe, Award, X } from "lucide-react";

interface Recipe {
  id: number;
  title: string;
  origin: string;
  difficulty: string;
  prepTime: string;
  cookTime: string;
  imageUrl: string;
}

interface RecipeDetailsDialogProps {
  recipe: Recipe | null;
  isOpen: boolean;
  onClose: () => void;
}

const RecipeDetailsDialog = ({ recipe, isOpen, onClose }: RecipeDetailsDialogProps) => {
  if (!recipe) return null;

  const ingredients = [
    "2 cups all-purpose flour",
    "1 cup sugar",
    "3 large eggs",
    "1/2 cup milk",
    "1/4 cup butter, melted",
    "1 tablespoon vanilla extract",
    "2 teaspoons baking powder",
    "1/2 teaspoon salt",
    "Special ingredients based on recipe theme"
  ];

  const instructions = [
    "Preheat oven to 350°F (175°C)",
    "In a large bowl, mix the dry ingredients",
    "In another bowl, whisk together wet ingredients",
    "Combine wet and dry ingredients until just mixed",
    "Pour batter into prepared pan",
    "Bake for specified time until golden and a toothpick comes out clean",
    "Let cool before serving",
    "Garnish according to recipe specifications"
  ];

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="sr-only">{recipe.title}</DialogTitle>
          <DialogDescription className="sr-only">
            Detailed recipe information for {recipe.title}
          </DialogDescription>
        </DialogHeader>
        
        <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none">
          <X className="h-5 w-5" />
          <span className="sr-only">Close</span>
        </DialogClose>
        
        <div className="flex flex-col space-y-4">
          {/* Recipe Header with Image */}
          <div className="relative w-full h-64 overflow-hidden rounded-lg">
            <img 
              src={recipe.imageUrl} 
              alt={recipe.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <span className="inline-block px-3 py-1 bg-burgundy/80 text-white text-sm rounded-full mb-2">
                {recipe.origin} Cuisine
              </span>
              <h2 className="text-3xl font-serif font-bold text-white">
                {recipe.title}
              </h2>
            </div>
          </div>
          
          {/* Recipe Details */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4">
            <div className="flex flex-col items-center p-3 bg-white/90 rounded-lg shadow-sm">
              <Clock className="h-5 w-5 text-burgundy mb-1" />
              <span className="text-xs text-foreground/60">Prep Time</span>
              <span className="font-medium">{recipe.prepTime}</span>
            </div>
            <div className="flex flex-col items-center p-3 bg-white/90 rounded-lg shadow-sm">
              <Clock className="h-5 w-5 text-burgundy mb-1" />
              <span className="text-xs text-foreground/60">Cook Time</span>
              <span className="font-medium">{recipe.cookTime}</span>
            </div>
            <div className="flex flex-col items-center p-3 bg-white/90 rounded-lg shadow-sm">
              <Award className="h-5 w-5 text-burgundy mb-1" />
              <span className="text-xs text-foreground/60">Difficulty</span>
              <span className="font-medium">{recipe.difficulty}</span>
            </div>
            <div className="flex flex-col items-center p-3 bg-white/90 rounded-lg shadow-sm">
              <Globe className="h-5 w-5 text-burgundy mb-1" />
              <span className="text-xs text-foreground/60">Origin</span>
              <span className="font-medium">{recipe.origin}</span>
            </div>
          </div>
          
          {/* Recipe Description */}
          <div className="py-2">
            <p className="text-foreground/90">
              This {recipe.title} is a legendary recipe passed down through generations, 
              bringing together exotic flavors in perfect harmony. The {recipe.origin} influences 
              create a unique taste experience that will transport you to distant lands.
            </p>
          </div>
          
          {/* Ingredients & Instructions */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-serif font-bold text-burgundy mb-3 flex items-center">
                <ChefHat className="h-5 w-5 mr-2" /> Ingredients
              </h3>
              <ul className="space-y-2">
                {ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block h-2 w-2 rounded-full bg-burgundy mt-1.5 mr-2"></span>
                    <span>{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-serif font-bold text-burgundy mb-3">Instructions</h3>
              <ol className="space-y-3">
                {instructions.map((instruction, index) => (
                  <li key={index} className="flex">
                    <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-burgundy/10 text-burgundy text-sm font-medium mr-3">
                      {index + 1}
                    </span>
                    <span>{instruction}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RecipeDetailsDialog;
