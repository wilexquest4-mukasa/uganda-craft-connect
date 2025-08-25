import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const MarketplaceNavigation = () => {
  return (
    <nav className="bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <div className="text-2xl font-bold text-primary">
              Uganda<span className="text-gold">Craft</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-foreground hover:text-primary transition-colors">Crafts</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">Artisans</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">Heritage</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">About</a>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Badge variant="secondary" className="hidden sm:inline-flex">
              Fair Trade Certified
            </Badge>
            <Button variant="outline" size="sm">Sign In</Button>
            <Button size="sm">Shop Now</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MarketplaceNavigation;