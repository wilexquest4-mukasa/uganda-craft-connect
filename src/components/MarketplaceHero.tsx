import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-crafts.jpg";
const MarketplaceHero = () => {
  return <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroImage})`
    }} />
      <div className="absolute inset-0 bg-gradient-to-r from-deep-blue/80 via-deep-blue/60 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-primary-foreground">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Discover Uganda's
          <span className="block text-gold">Rich craft and Heritage</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed opacity-95">
          A vibrant digital marketplace connecting authentic regional craft artistry, 
          cooperatives, and heritage brands directly with buyers worldwide.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hero" size="lg" className="text-lg px-8 py-4">
            Explore Crafts
          </Button>
          <Button variant="outline-heritage" size="lg" className="text-lg px-8 py-4">
            Meet Artisans
          </Button>
        </div>
        
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm opacity-90">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-gold rounded-full" />
            Fair Trade Certified
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-gold rounded-full" />
            Cultural Heritage Preserved
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-gold rounded-full" />
            Direct from Artisans
          </div>
        </div>
      </div>
    </section>;
};
export default MarketplaceHero;