import { Button } from "@/components/ui/button";

const MarketplaceFooter = () => {
  return (
    <footer className="bg-deep-blue text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6">
        <div className="py-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="text-3xl font-bold mb-4">
              Uganda<span className="text-gold">Craft</span>
            </div>
            <p className="text-lg opacity-90 mb-6 max-w-md">
              Connecting authentic Ugandan artistry with global buyers. 
              Every purchase supports local communities and preserves cultural heritage.
            </p>
            <div className="flex gap-4">
              <Button variant="outline-heritage" size="sm">Newsletter</Button>
              <Button variant="hero" size="sm">Partner With Us</Button>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gold">Explore</h3>
            <div className="space-y-2">
              <a href="#" className="block opacity-75 hover:opacity-100 transition-opacity">Craft Categories</a>
              <a href="#" className="block opacity-75 hover:opacity-100 transition-opacity">Featured Artisans</a>
              <a href="#" className="block opacity-75 hover:opacity-100 transition-opacity">New Arrivals</a>
              <a href="#" className="block opacity-75 hover:opacity-100 transition-opacity">Best Sellers</a>
              <a href="#" className="block opacity-75 hover:opacity-100 transition-opacity">Cultural Stories</a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gold">Support</h3>
            <div className="space-y-2">
              <a href="#" className="block opacity-75 hover:opacity-100 transition-opacity">Fair Trade Promise</a>
              <a href="#" className="block opacity-75 hover:opacity-100 transition-opacity">Artisan Support</a>
              <a href="#" className="block opacity-75 hover:opacity-100 transition-opacity">Shipping & Returns</a>
              <a href="#" className="block opacity-75 hover:opacity-100 transition-opacity">Customer Care</a>
              <a href="#" className="block opacity-75 hover:opacity-100 transition-opacity">Partnership Program</a>
            </div>
          </div>
        </div>
        
        <div className="py-8 border-t border-gold/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="opacity-75">
              © 2024 UgandaCraft. Preserving heritage, empowering communities.
            </p>
            <div className="flex items-center gap-6 mt-4 md:mt-0">
              <span className="opacity-75">Follow our journey:</span>
              <div className="flex gap-4">
                <a href="#" className="text-gold hover:text-ochre transition-colors">Instagram</a>
                <a href="#" className="text-gold hover:text-ochre transition-colors">Facebook</a>
                <a href="#" className="text-gold hover:text-ochre transition-colors">Twitter</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MarketplaceFooter;