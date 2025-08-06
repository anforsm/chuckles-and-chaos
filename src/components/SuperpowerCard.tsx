import { Card } from "@/components/ui/card";
import confusedHero from "@/assets/confused-hero.png";

interface SuperpowerCardProps {
  power: string;
  isGenerating: boolean;
}

export const SuperpowerCard = ({ power, isGenerating }: SuperpowerCardProps) => {
  return (
    <Card className="p-8 max-w-2xl mx-auto comic-shadow border-4 border-foreground bg-card">
      <div className="text-center space-y-6">
        <div className="relative">
          <img 
            src={confusedHero} 
            alt="Confused superhero" 
            className={`w-32 h-32 mx-auto rounded-full border-4 border-accent ${
              isGenerating ? 'animate-wiggle' : ''
            }`}
          />
          {isGenerating && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="animate-spin rounded-full h-40 w-40 border-b-4 border-primary"></div>
            </div>
          )}
        </div>
        
        <div className="bg-muted p-6 rounded-lg border-3 border-foreground comic-shadow">
          <h3 className="text-xl font-bold text-accent mb-3 text-comic">Your Useless Superpower:</h3>
          <p className="text-2xl font-bold text-foreground min-h-[60px] flex items-center justify-center">
            {isGenerating ? "Generating your terrible power..." : power}
          </p>
        </div>
        
        <div className="text-sm text-muted-foreground italic">
          "With great power comes... well, this isn't really that great." 🦸‍♂️
        </div>
      </div>
    </Card>
  );
};