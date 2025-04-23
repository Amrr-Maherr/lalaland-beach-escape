
import { useState } from 'react';
import { TreePalm, Utensils, Waves, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';

const galleryItems = {
  rooms: [
    {
      id: 1,
      title: 'Beach Hut',
      description: 'Cozy beachfront hut with amazing views',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7'
    },
    {
      id: 2,
      title: 'Shared Spaces',
      description: 'Comfortable communal areas for relaxation',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027'
    },
    {
      id: 3,
      title: 'Outdoor Chill Zone',
      description: 'Perfect spot for evening gatherings',
      image: 'https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151'
    },
    {
      id: 4,
      title: 'Comfortable Beds',
      description: 'Sleep soundly with the sound of waves',
      image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21'
    }
  ],
  food: [
    {
      id: 1,
      title: 'Fresh Breakfast',
      description: 'Start your day with local delights',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb'
    },
    {
      id: 2,
      title: 'Sunset Dinners',
      description: 'Dining with stunning Red Sea views',
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07'
    },
    {
      id: 3,
      title: 'Traditional Tea',
      description: 'Experience authentic Bedouin tea rituals',
      image: 'https://images.unsplash.com/photo-1469041797191-50ace28483c3'
    },
    {
      id: 4,
      title: 'Local Cuisine',
      description: 'Fresh seafood and Sinai specialties',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158'
    }
  ],
  nature: [
    {
      id: 1,
      title: 'Red Sea Beach',
      description: 'Crystal clear waters and vibrant coral reefs',
      image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21'
    },
    {
      id: 2,
      title: 'Desert Landscape',
      description: 'Dramatic mountains frame the horizon',
      image: 'https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151'
    },
    {
      id: 3,
      title: 'Sunset Views',
      description: 'Breathtaking golden hour moments',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb'
    },
    {
      id: 4,
      title: 'Evening Bonfires',
      description: 'Gather under the stars for stories and music',
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07'
    }
  ],
  activities: [
    {
      id: 1,
      title: 'Beach Yoga',
      description: 'Sunrise and sunset yoga sessions',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb'
    },
    {
      id: 2,
      title: 'Community Gatherings',
      description: 'Connect with fellow travelers over music and stories',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158'
    },
    {
      id: 3,
      title: 'Desert Hiking',
      description: 'Guided explorations of the surrounding mountains',
      image: 'https://images.unsplash.com/photo-1469041797191-50ace28483c3'
    },
    {
      id: 4,
      title: 'Snorkeling Adventures',
      description: 'Discover the underwater world of the Red Sea',
      image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21'
    }
  ]
};

const GallerySection = () => {
  const [activeTab, setActiveTab] = useState('rooms');
  
  return (
    <section id="gallery" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="handwritten text-4xl text-lala-blue mb-3">Photo Gallery</h2>
          <p className="text-xl max-w-2xl mx-auto">Discover the beauty and charm of Lala Land through our visual journey</p>
        </div>
        
        <Tabs defaultValue="rooms" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList className="bg-lala-sand/30">
              <TabsTrigger value="rooms" className="flex items-center gap-2 data-[state=active]:bg-lala-sand">
                <TreePalm className="h-4 w-4" />
                <span className="hidden sm:inline">Rooms & Spaces</span>
              </TabsTrigger>
              <TabsTrigger value="food" className="flex items-center gap-2 data-[state=active]:bg-lala-sand">
                <Utensils className="h-4 w-4" />
                <span className="hidden sm:inline">Food & Dining</span>
              </TabsTrigger>
              <TabsTrigger value="nature" className="flex items-center gap-2 data-[state=active]:bg-lala-sand">
                <Waves className="h-4 w-4" />
                <span className="hidden sm:inline">Nature & Surroundings</span>
              </TabsTrigger>
              <TabsTrigger value="activities" className="flex items-center gap-2 data-[state=active]:bg-lala-sand">
                <Users className="h-4 w-4" />
                <span className="hidden sm:inline">Activities & Moments</span>
              </TabsTrigger>
            </TabsList>
          </div>

          {Object.keys(galleryItems).map((category) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {galleryItems[category as keyof typeof galleryItems].map((item) => (
                  <div 
                    key={item.id} 
                    className="relative overflow-hidden rounded-xl shadow-md hover-float image-zoom group h-64 md:h-80"
                  >
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-4 flex flex-col justify-end opacity-90 group-hover:opacity-100 transition-opacity">
                      <h3 className="text-white text-xl font-semibold">{item.title}</h3>
                      <p className="text-white/80 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="text-center mt-10">
          <Link to="/gallery">
            <Button 
              variant="outline" 
              className="border-lala-blue text-lala-blue hover:bg-lala-blue hover:text-white"
            >
              View Full Gallery
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
