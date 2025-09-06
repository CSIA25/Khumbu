import { Instagram } from "lucide-react";
import { Button } from "./ui/button";

const posts = [
  { id: 1, image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=400&fit=crop", caption: "Another successful team acclimatized and ready for the summit push. The mountains are calling.", likes: 1247, comments: 32 },
  { id: 2, image: "https://images.unsplash.com/photo-1483728642387-6c351bEC6ece?w=400&h=400&fit=crop", caption: "Morning views from base camp never get old. Honored to call this place our office.", likes: 2103, comments: 54 },
  { id: 3, image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&h=400&fit=crop", caption: "Our youth team practicing essential rope skills. The future of Sherpa guiding is bright!", likes: 980, comments: 21 },
  { id: 4, image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop", caption: "Respect for the mountain is the first lesson we teach. Preserving this beauty for generations to come.", likes: 1560, comments: 45 },
];

const SocialFeed = () => {
  return (
    <section id="social" className="py-24 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-6 mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-black text-stone-gray leading-tight max-w-4xl mx-auto">
            Dispatches from the Khumbu
          </h2>
          <p className="text-lg text-stone-gray-light max-w-3xl mx-auto leading-relaxed">
            Follow our journey and witness the day-to-day impact of our work on Instagram.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 animate-slide-up">
          {posts.map(post => (
            <a href="#" key={post.id} className="group relative block overflow-hidden rounded-xl">
              <img src={post.image} alt={post.caption} className="w-full h-full object-cover aspect-square group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                <p className="text-snow-white text-sm text-center line-clamp-4">{post.caption}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="accent" size="lg" asChild>
            <a href="#" className="group">
              <Instagram className="mr-2 h-5 w-5" />
              Follow on Instagram
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SocialFeed;