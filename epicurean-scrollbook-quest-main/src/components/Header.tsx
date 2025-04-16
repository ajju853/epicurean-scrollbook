
import { useState, useEffect } from 'react';
import { Bell, Search, Menu, X, BookOpen, Utensils, Map, BookMarked } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('recipes');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSectionClick = (section: string) => {
    setActiveSection(section);
    if (menuOpen) setMenuOpen(false);
    
    // Scroll to section
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-pink-100/90 backdrop-blur-md shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl md:text-3xl font-serif font-bold text-burgundy tracking-wide">
            Epicurean <span className="text-pink-500">Quest</span>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => handleSectionClick('recipes')} 
            className={`nav-link font-serif text-lg flex items-center gap-2 ${activeSection === 'recipes' ? 'text-pink-500' : ''}`}
          >
            <BookOpen className="h-5 w-5" /> Recipes
          </button>
          <button 
            onClick={() => handleSectionClick('ingredients')} 
            className={`nav-link font-serif text-lg flex items-center gap-2 ${activeSection === 'ingredients' ? 'text-pink-500' : ''}`}
          >
            <Utensils className="h-5 w-5" /> Ingredients
          </button>
          <button 
            onClick={() => handleSectionClick('techniques')} 
            className={`nav-link font-serif text-lg flex items-center gap-2 ${activeSection === 'techniques' ? 'text-pink-500' : ''}`}
          >
            <BookMarked className="h-5 w-5" /> Techniques
          </button>
          <button 
            onClick={() => handleSectionClick('origins')} 
            className={`nav-link font-serif text-lg flex items-center gap-2 ${activeSection === 'origins' ? 'text-pink-500' : ''}`}
          >
            <Map className="h-5 w-5" /> Origins
          </button>
          <Button 
            variant="outline" 
            size="icon"
            className="ml-2 bg-transparent border-pink-300 text-pink-500 hover:bg-pink-100 hover:text-pink-600"
          >
            <Search className="h-5 w-5" />
          </Button>
          <Button 
            variant="outline" 
            size="icon"
            className="bg-transparent border-pink-300 text-pink-500 hover:bg-pink-100 hover:text-pink-600"
          >
            <Bell className="h-5 w-5" />
          </Button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <Button 
            variant="outline" 
            size="icon"
            className="bg-transparent border-pink-300 text-pink-500 hover:bg-pink-100 hover:text-pink-600"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-pink-50/95 backdrop-blur-md shadow-md animate-fade-in">
          <div className="container mx-auto py-4 px-4 flex flex-col space-y-4">
            <button 
              onClick={() => handleSectionClick('recipes')} 
              className={`nav-link font-serif text-lg py-2 px-4 hover:bg-pink-100 rounded-md flex items-center gap-2 ${activeSection === 'recipes' ? 'text-pink-500 bg-pink-100' : ''}`}
            >
              <BookOpen className="h-5 w-5" /> Recipes
            </button>
            <button 
              onClick={() => handleSectionClick('ingredients')} 
              className={`nav-link font-serif text-lg py-2 px-4 hover:bg-pink-100 rounded-md flex items-center gap-2 ${activeSection === 'ingredients' ? 'text-pink-500 bg-pink-100' : ''}`}
            >
              <Utensils className="h-5 w-5" /> Ingredients
            </button>
            <button 
              onClick={() => handleSectionClick('techniques')} 
              className={`nav-link font-serif text-lg py-2 px-4 hover:bg-pink-100 rounded-md flex items-center gap-2 ${activeSection === 'techniques' ? 'text-pink-500 bg-pink-100' : ''}`}
            >
              <BookMarked className="h-5 w-5" /> Techniques
            </button>
            <button 
              onClick={() => handleSectionClick('origins')} 
              className={`nav-link font-serif text-lg py-2 px-4 hover:bg-pink-100 rounded-md flex items-center gap-2 ${activeSection === 'origins' ? 'text-pink-500 bg-pink-100' : ''}`}
            >
              <Map className="h-5 w-5" /> Origins
            </button>
            <div className="flex space-x-2">
              <Button 
                variant="outline" 
                className="flex-1 bg-transparent border-pink-300 text-pink-500 hover:bg-pink-100 hover:text-pink-600"
              >
                <Search className="h-5 w-5 mr-2" />
                Search
              </Button>
              <Button 
                variant="outline" 
                className="flex-1 bg-transparent border-pink-300 text-pink-500 hover:bg-pink-100 hover:text-pink-600"
              >
                <Bell className="h-5 w-5 mr-2" />
                Notifications
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
