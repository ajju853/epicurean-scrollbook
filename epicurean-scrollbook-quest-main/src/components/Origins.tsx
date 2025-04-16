
import { useState } from 'react';
import { Map, MapPin, Globe, ArrowRight, History } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface Region {
  id: number;
  name: string;
  description: string;
  famousDish: string;
  imageUrl: string;
  position: { x: number; y: number };
}

const Origins = () => {
  const [selectedRegion, setSelectedRegion] = useState<number | null>(null);
  
  const regions: Region[] = [
    {
      id: 1,
      name: "Japan",
      description: "Japanese cuisine is known for its emphasis on seasonality, quality ingredients and presentation. Traditional Japanese cuisine, or washoku, is based on rice with miso soup and other dishes.",
      famousDish: "Sushi, Ramen, Tempura",
      imageUrl: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=500&auto=format&fit=crop",
      position: { x: 80, y: 30 }
    },
    {
      id: 2,
      name: "Italy",
      description: "Italian cuisine is characterized by its simplicity, with many dishes having only a few ingredients. Italian cooks rely chiefly on the quality of the ingredients rather than on elaborate preparation.",
      famousDish: "Pasta, Pizza, Risotto",
      imageUrl: "https://images.unsplash.com/photo-1498579150354-977475b7ea0b?q=80&w=500&auto=format&fit=crop",
      position: { x: 45, y: 40 }
    },
    {
      id: 3,
      name: "Mexico",
      description: "Mexican cuisine is a complex fusion of indigenous and European elements. Many of its ingredients and methods originate from traditional indigenous foods with European, especially Spanish influences.",
      famousDish: "Tacos, Enchiladas, Guacamole",
      imageUrl: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?q=80&w=500&auto=format&fit=crop",
      position: { x: 20, y: 45 }
    },
    {
      id: 4,
      name: "India",
      description: "Indian cuisine encompasses a wide variety of regional cuisines native to the Indian subcontinent. Given the range of diversity in soil type, climate, and culture, these cuisines vary significantly.",
      famousDish: "Curry, Biryani, Samosa",
      imageUrl: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?q=80&w=500&auto=format&fit=crop",
      position: { x: 65, y: 50 }
    }
  ];
  
  const handleRegionClick = (id: number) => {
    setSelectedRegion(id === selectedRegion ? null : id);
  };
  
  return (
    <section id="origins" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="manga-section-title">
            Culinary Origins
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Explore the diverse origins of our recipes, each with its unique history and cultural significance.
            Click on a region to discover its culinary heritage.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-xl border-2 border-pink-200 overflow-hidden">
          <div className="p-6 bg-pink-50 border-b-2 border-pink-200">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-serif font-semibold text-gray-800 flex items-center">
                <Globe className="mr-2 h-5 w-5 text-pink-500" />
                World Flavor Map
              </h3>
              <Button 
                variant="outline"
                size="sm"
                className="bg-white text-pink-500 border-pink-300 hover:bg-pink-50"
              >
                <History className="mr-2 h-4 w-4" />
                History
              </Button>
            </div>
          </div>
          
          <div className="p-6">
            <div className="relative w-full h-[400px] bg-blue-50 rounded-lg border border-blue-100 mb-6">
              {/* Simple map background */}
              <div className="absolute inset-0 bg-blue-50 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?q=80&w=1000&auto=format&fit=crop" 
                  alt="World Map" 
                  className="w-full h-full object-cover opacity-30"
                />
              </div>
              
              {/* Region pins */}
              {regions.map(region => (
                <button
                  key={region.id}
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                    selectedRegion === region.id 
                      ? 'scale-125 z-10' 
                      : 'hover:scale-110'
                  }`}
                  style={{ 
                    left: `${region.position.x}%`, 
                    top: `${region.position.y}%` 
                  }}
                  onClick={() => handleRegionClick(region.id)}
                >
                  <div className="flex flex-col items-center">
                    <MapPin 
                      className={`h-8 w-8 ${
                        selectedRegion === region.id 
                          ? 'text-pink-500 fill-pink-200' 
                          : 'text-pink-400 hover:text-pink-500'
                      }`} 
                    />
                    <span className={`text-xs font-medium mt-1 px-2 py-1 rounded-full whitespace-nowrap ${
                      selectedRegion === region.id 
                        ? 'bg-pink-100 text-pink-700' 
                        : 'bg-white/80 text-gray-700'
                    }`}>
                      {region.name}
                    </span>
                  </div>
                </button>
              ))}
            </div>
            
            {/* Region details */}
            {selectedRegion && (
              <div className="bg-pink-50 rounded-lg p-4 border-2 border-pink-200 animate-fade-in">
                {regions
                  .filter(region => region.id === selectedRegion)
                  .map(region => (
                    <div key={region.id} className="flex flex-col md:flex-row gap-4">
                      <div className="md:w-1/3">
                        <div className="h-40 rounded-lg overflow-hidden">
                          <img 
                            src={region.imageUrl} 
                            alt={region.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="md:w-2/3">
                        <h4 className="text-xl font-serif font-bold text-gray-800 mb-2">
                          {region.name} Cuisine
                        </h4>
                        <p className="text-gray-600 mb-3">
                          {region.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="manga-tag">
                            {region.famousDish}
                          </span>
                        </div>
                        <Button 
                          className="text-pink-500 hover:text-pink-600"
                          variant="link"
                        >
                          Explore {region.name} Recipes
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))
                }
              </div>
            )}
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Button className="manga-button">
            <Map className="mr-2 h-5 w-5" />
            Explore All Regions
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Origins;
