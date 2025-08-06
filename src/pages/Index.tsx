import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SuperpowerCard } from "@/components/SuperpowerCard";
import { getRandomSuperpower } from "@/data/superpowers";
import powEffect from "@/assets/pow-effect.png";

const Index = () => {
  const [currentPower, setCurrentPower] = useState("Click the button to discover your hilariously useless superpower!");
  const [isGenerating, setIsGenerating] = useState(false);

  const generateNewPower = async () => {
    setIsGenerating(true);
    
    // Add some suspense with a delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const newPower = getRandomSuperpower();
    setCurrentPower(newPower);
    setIsGenerating(false);
  };

  return (
    <div className="min-h-screen bg-background p-4">
      {/* Hero Section */}
      <div className="text-center py-12 space-y-6">
        <div className="relative inline-block">
          <h1 className="text-6xl font-bold text-primary text-comic mb-4 animate-bounce-custom">
            USELESS SUPERPOWER
          </h1>
          <h2 className="text-4xl font-bold text-secondary text-comic">
            GENERATOR! 
          </h2>
          <img 
            src={powEffect} 
            alt="Pow effect" 
            className="absolute -top-4 -right-8 w-16 h-16 animate-wiggle"
          />
        </div>
        
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Ever wondered what your superpower would be if the universe had a terrible sense of humor? 
          Wonder no more! Get ready for the most hilariously disappointing powers ever conceived! 🦸‍♂️💩
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto space-y-8">
        <SuperpowerCard power={currentPower} isGenerating={isGenerating} />
        
        <div className="text-center">
          <Button 
            onClick={generateNewPower}
            disabled={isGenerating}
            variant="hero"
            size="lg"
            className="text-2xl px-12 py-6 h-auto"
          >
            {isGenerating ? "Generating..." : "🎲 Generate New Power!"}
          </Button>
        </div>
        
        <div className="text-center space-y-4">
          <div className="bg-card p-6 rounded-lg border-2 border-accent comic-shadow max-w-2xl mx-auto">
            <h3 className="text-lg font-bold text-accent mb-2">Fun Fact:</h3>
            <p className="text-muted-foreground">
              Scientists estimate that 73.6% of all superpowers would actually be completely useless in real life. 
              The other 26.4% would just make your daily commute slightly more awkward. 📊
            </p>
          </div>
          
          <p className="text-sm text-muted-foreground italic">
            Disclaimer: No actual superpowers were harmed in the making of this generator. 
            Side effects may include uncontrollable laughter and existential questions about comic book logic.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
