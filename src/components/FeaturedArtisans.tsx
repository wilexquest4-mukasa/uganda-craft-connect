import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const artisans = [
  {
    name: "Sarah Nakato",
    location: "Kampala Cooperative",
    specialty: "Traditional Basket Weaving",
    experience: "25+ years",
    story: "Master weaver preserving ancestral techniques while empowering local women through craft cooperatives.",
    products: 45,
    rating: 4.9
  },
  {
    name: "James Okello",
    location: "Gulu Artisan Guild",
    specialty: "Wood Sculpture & Carving", 
    experience: "20+ years",
    story: "Renowned sculptor creating contemporary interpretations of traditional Ugandan spiritual art.",
    products: 32,
    rating: 4.8
  },
  {
    name: "Grace Mbabazi",
    location: "Mbarara Textile Collective",
    specialty: "Heritage Textiles",
    experience: "15+ years", 
    story: "Textile artist reviving ancient dyeing techniques using indigenous plants and natural materials.",
    products: 67,
    rating: 5.0
  }
];

const FeaturedArtisans = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Meet Our Artisans
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Behind every craft is a master artisan with decades of experience, 
            passion for their heritage, and commitment to preserving traditional techniques.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {artisans.map((artisan) => (
            <Card 
              key={artisan.name}
              className="group cursor-pointer transition-all duration-500 hover:shadow-[var(--shadow-heritage)] hover:-translate-y-2 border-0 bg-card/90 backdrop-blur-sm"
            >
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-ochre to-primary rounded-full mx-auto mb-6 flex items-center justify-center text-2xl font-bold text-primary-foreground">
                  {artisan.name.split(' ').map(n => n[0]).join('')}
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {artisan.name}
                </h3>
                
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  <Badge variant="secondary" className="text-xs">
                    {artisan.location}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {artisan.experience}
                  </Badge>
                </div>
                
                <p className="text-accent font-semibold mb-3">
                  {artisan.specialty}
                </p>
                
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {artisan.story}
                </p>
                
                <div className="flex justify-between items-center pt-4 border-t border-border">
                  <div className="text-center">
                    <div className="text-lg font-bold text-foreground">{artisan.products}</div>
                    <div className="text-xs text-muted-foreground">Products</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1">
                      <span className="text-lg font-bold text-foreground">{artisan.rating}</span>
                      <span className="text-gold">★</span>
                    </div>
                    <div className="text-xs text-muted-foreground">Rating</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedArtisans;