
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Clock, ArrowRight, ArrowLeft, Maximize2, Volume2, VolumeX } from 'lucide-react';

interface Step {
  id: number;
  title: string;
  description: string;
  tip?: string;
  duration?: number;
}

const StepByStep = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  
  const steps: Step[] = [
    {
      id: 1,
      title: "Prepare the Batter",
      description: "In a large mixing bowl, combine the flour, baking powder, and salt. In another bowl, whisk together the eggs, honey, and melted butter until smooth.",
      tip: "Make sure all ingredients are at room temperature for a smoother batter.",
      duration: 10
    },
    {
      id: 2,
      title: "Bloom the Saffron",
      description: "In a small bowl, add the saffron threads to warm milk. Let it steep for at least 10 minutes to extract the color and flavor.",
      tip: "The longer you steep the saffron, the more intense the flavor and color will be.",
      duration: 15
    },
    {
      id: 3,
      title: "Mix Wet & Dry Ingredients",
      description: "Gently fold the wet ingredients into the dry ingredients. Add the saffron milk and rose water, mixing until just combined. Do not overmix.",
      tip: "A few lumps in the batter are fine - overmixing will make the cake tough.",
      duration: 5
    },
    {
      id: 4,
      title: "Prepare the Baking Pan",
      description: "Grease a 9-inch round cake pan with butter and line the bottom with parchment paper. Dust lightly with flour, tapping out any excess.",
      tip: "For an extra golden crust, you can sprinkle some crushed pistachios on the sides of the pan.",
      duration: 5
    },
    {
      id: 5,
      title: "Bake to Perfection",
      description: "Pour the batter into the prepared pan and smooth the top. Bake in a preheated oven at 350°F (175°C) for 35-40 minutes, or until a toothpick inserted comes out clean.",
      tip: "Rotate the pan halfway through baking for even browning.",
      duration: 40
    }
  ];
  
  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };
  
  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };
  
  const toggleMute = () => {
    setIsMuted(!isMuted);
  };
  
  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <section className={`py-16 ${isFullscreen ? 'fixed inset-0 z-50 bg-parchment/95 overflow-auto' : ''}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-burgundy mb-4">
            Step-by-Step Cooking Magic
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Follow along with our cinematic cooking instructions, designed to guide you
            through each step of the culinary journey.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Progress bar */}
          <div className="h-2 bg-parchment-dark rounded-full mb-8 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-gold to-burgundy rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          
          {/* Current step card */}
          <div className="step-card">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-burgundy">
                {steps[currentStep].title}
              </h3>
              <div className="flex items-center gap-2">
                <Button 
                  variant="outline" 
                  size="icon"
                  className="h-8 w-8 bg-transparent border-gold/30 text-gold hover:bg-gold/10"
                  onClick={toggleMute}
                >
                  {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                </Button>
                <Button 
                  variant="outline" 
                  size="icon"
                  className="h-8 w-8 bg-transparent border-gold/30 text-gold hover:bg-gold/10"
                  onClick={toggleFullscreen}
                >
                  <Maximize2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            {steps[currentStep].duration && (
              <div className="inline-flex items-center px-3 py-1 bg-burgundy/10 text-burgundy rounded-full mb-4">
                <Clock className="mr-1 h-4 w-4" />
                <span>{steps[currentStep].duration} minutes</span>
              </div>
            )}
            
            <p className="text-lg text-foreground leading-relaxed mb-6">
              {steps[currentStep].description}
            </p>
            
            {steps[currentStep].tip && (
              <div className="bg-gold/10 border-l-4 border-gold p-4 rounded-r-md mb-6">
                <p className="font-serif italic text-foreground/80">
                  <span className="font-bold text-gold-dark">Chef's Tip:</span> {steps[currentStep].tip}
                </p>
              </div>
            )}
            
            <div className="flex justify-between mt-8">
              <Button 
                variant="outline"
                className={`border-burgundy/50 text-burgundy hover:bg-burgundy/10 ${currentStep === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={prevStep}
                disabled={currentStep === 0}
              >
                <ArrowLeft className="mr-2 h-5 w-5" />
                Previous Step
              </Button>
              
              <Button 
                className={`bg-burgundy hover:bg-burgundy-light text-white ${currentStep === steps.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={nextStep}
                disabled={currentStep === steps.length - 1}
              >
                Next Step
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          
          {/* Step indicators */}
          <div className="flex justify-center mt-8">
            {steps.map((step, index) => (
              <button 
                key={step.id}
                className={`mx-1 w-8 h-2 rounded-full transition-all ${
                  currentStep === index 
                    ? 'bg-burgundy' 
                    : 'bg-burgundy/30 hover:bg-burgundy/50'
                }`}
                onClick={() => setCurrentStep(index)}
                aria-label={`Go to step ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepByStep;
