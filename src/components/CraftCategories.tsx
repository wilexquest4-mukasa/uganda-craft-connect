import { Card, CardContent } from "@/components/ui/card";
import basketImage from "@/assets/woven-basket.jpg";
import beadworkImage from "@/assets/beadwork-product.jpg";
import woodSculptureImage from "@/assets/wood-sculpture.jpg";
import textilesImage from "@/assets/traditional-textiles.jpg";
import banglesImage from "@/assets/traditional-bangles.jpg";

const categories = [
  {
    name: "Handwoven Baskets",
    description: "Traditional weaving techniques passed down generations",
    image: basketImage,
    itemCount: "150+ items"
  },
  {
    name: "Intricate Beadwork", 
    description: "Colorful jewelry and accessories with cultural significance",
    image: beadworkImage,
    itemCount: "200+ items"
  },
  {
    name: "Traditional Textiles",
    description: "Rich fabrics with authentic African patterns and designs",
    image: textilesImage,
    itemCount: "300+ items"
  },
  {
    name: "Wood Carvings",
    description: "Masterful sculptures and functional art pieces",
    image: woodSculptureImage,
    itemCount: "120+ items"
  },
  {
    name: "Indigenous Jewelry",
    description: "Handcrafted accessories celebrating Ugandan heritage",
    image: banglesImage,
    itemCount: "180+ items"
  }
];

const CraftCategories = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Craft Categories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every product tells a story of skill, tradition, and community. 
            Explore our diverse collection of authentic Ugandan crafts.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card 
              key={category.name} 
              className="group cursor-pointer transition-all duration-500 hover:shadow-[var(--shadow-craft)] hover:-translate-y-2 border-0 bg-card/80 backdrop-blur-sm"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 bg-gold/90 text-deep-blue px-3 py-1 rounded-full text-sm font-semibold">
                    {category.itemCount}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CraftCategories;