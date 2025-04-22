
import { Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const upcomingEvents = [
  {
    id: 1,
    title: 'Full Moon Yoga Retreat',
    date: 'June 15-20, 2025',
    description: 'A 5-day immersive yoga experience with daily beach sessions at sunrise and sunset, meditation, and community meals.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    category: 'Wellness'
  },
  {
    id: 2,
    title: 'Desert Music Night',
    date: 'July 5, 2025',
    description: 'An evening of traditional Bedouin music and storytelling around the bonfire under the stars.',
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027',
    category: 'Culture'
  },
  {
    id: 3,
    title: 'Sustainable Living Workshop',
    date: 'July 12-14, 2025',
    description: 'Learn practical skills for eco-friendly living including solar cooking, water conservation, and natural building techniques.',
    image: 'https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151',
    category: 'Education'
  }
];

const EventsSection = () => {
  return (
    <section id="experiences" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="handwritten text-4xl text-lala-blue mb-3">Upcoming Experiences</h2>
          <p className="text-xl max-w-2xl mx-auto">
            Join our special events and retreats for a deeper Lala Land connection
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {upcomingEvents.map((event) => (
            <div 
              key={event.id} 
              className="bg-white rounded-xl shadow-md overflow-hidden hover-float"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <span className="px-3 py-1 bg-lala-sand text-lala-blue rounded-full text-sm font-medium">
                    {event.category}
                  </span>
                  <div className="flex items-center text-lala-orange">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-4">{event.description}</p>
                
                <Button 
                  className="w-full bg-lala-blue hover:bg-lala-blueDark text-white"
                >
                  Join Event <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Button 
            variant="outline" 
            className="border-lala-blue text-lala-blue hover:bg-lala-blue hover:text-white"
          >
            View All Events
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
