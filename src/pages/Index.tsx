import MarketplaceHero from "@/components/MarketplaceHero";
import CraftCategories from "@/components/CraftCategories";
import FeaturedArtisans from "@/components/FeaturedArtisans";
import MarketplaceFooter from "@/components/MarketplaceFooter";

const Index = () => {
  return (
    <main className="min-h-screen">
      <MarketplaceHero />
      <CraftCategories />
      <FeaturedArtisans />
      
      {/* Heritage & Impact Section */}
      <section className="py-20 bg-gradient-to-r from-deep-blue to-forest-green text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Preserve Heritage. Empower Communities.
          </h2>
          <p className="text-xl mb-12 max-w-4xl mx-auto opacity-95">
            Every purchase directly supports local artisans, preserves traditional crafting techniques, 
            and ensures fair compensation for skilled craftspeople across Uganda's diverse regions.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-gold mb-2">2,500+</div>
              <div className="text-lg opacity-90">Artisans Supported</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gold mb-2">150+</div>
              <div className="text-lg opacity-90">Cooperatives Partnered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gold mb-2">95%</div>
              <div className="text-lg opacity-90">Revenue to Artisans</div>
            </div>
          </div>
        </div>
      </section>
      
      <MarketplaceFooter />
    </main>
  );
};

export default Index;
