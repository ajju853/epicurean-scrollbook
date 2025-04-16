
import { Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-burgundy text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-3xl font-serif font-bold mb-4 text-gold">Epicurean Quest</h3>
            <p className="mb-6 text-white/80">
              Embark on a culinary journey through ancient recipes, mystical techniques, and 
              flavors that tell stories from across the world.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/80 hover:text-gold transition-colors">
                <Facebook />
              </a>
              <a href="#" className="text-white/80 hover:text-gold transition-colors">
                <Twitter />
              </a>
              <a href="#" className="text-white/80 hover:text-gold transition-colors">
                <Instagram />
              </a>
              <a href="#" className="text-white/80 hover:text-gold transition-colors">
                <Youtube />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-serif font-semibold mb-4 text-gold">Explore</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-gold transition-colors">Recipes</a></li>
              <li><a href="#" className="text-white/80 hover:text-gold transition-colors">Ingredients</a></li>
              <li><a href="#" className="text-white/80 hover:text-gold transition-colors">Techniques</a></li>
              <li><a href="#" className="text-white/80 hover:text-gold transition-colors">Origins</a></li>
              <li><a href="#" className="text-white/80 hover:text-gold transition-colors">About Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-serif font-semibold mb-4 text-gold">Join The Quest</h4>
            <p className="mb-4 text-white/80">
              Subscribe to our newsletter and receive the latest recipes and culinary secrets.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 rounded-l-md bg-white/10 border-0 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <Button className="rounded-l-none bg-gold hover:bg-gold-dark text-burgundy">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-white/10 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} Epicurean Quest. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
