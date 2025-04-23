
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah K.',
    location: 'Berlin, Germany',
    image: '/public/WhatsApp Image 2025-04-23 at 23.21.40_5f46b05e.jpg',
    text: 'Lala Land is a true hidden gem. The simplicity of beach life combined with the warmth of the staff made this a transformative experience. I came for 3 days and stayed for 2 weeks!',
    rating: 5
  },
  {
    id: 2,
    name: 'Ahmed M.',
    location: 'Cairo, Egypt',
    image: '/public/WhatsApp Image 2025-04-23 at 23.19.21_8bf2e5b0.jpg',
    text: 'As an Egyptian, I\'ve visited many coastal camps, but Lala Land stands out for its authentic atmosphere and respect for nature. The food was incredible, and watching the stars at night was unforgettable.',
    rating: 5
  },
  {
    id: 3,
    name: 'Maria C.',
    location: 'Barcelona, Spain',
    image: '/public/WhatsApp Image 2025-04-23 at 23.21.40_ece80230.jpg',
    text: 'My digital detox at Lala Land was exactly what I needed. I disconnected from technology and reconnected with myself. The beach huts are simple but perfect, and falling asleep to the sound of waves is magical.',
    rating: 5
  },
  {
    id: 4,
    name: 'David L.',
    location: 'London, UK',
    image: 'https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151',
    text: 'The best part of Lala Land is the community feeling. The communal dinners led to beautiful conversations with fellow travelers from around the world. I left with new friends and a lighter heart.',
    rating: 4
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleTestimonials = 3;
  const maxIndex = testimonials.length - visibleTestimonials;
  
  const next = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // Loop back to start
    }
  };
  
  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(maxIndex); // Loop to end
    }
  };
  
  return (
    <section id="stories" className="py-20 bg-lala-blue/5 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-lala-sand/30 opacity-40"></div>
      <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-lala-blue/10 opacity-40"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="handwritten text-4xl text-lala-blue mb-3">Guest Stories</h2>
          <p className="text-xl max-w-2xl mx-auto">
            Memories and experiences shared by those who've found their escape at Lala Land
          </p>
        </div>
        
        <div className="relative">
          {/* Testimonial Carousel */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / visibleTestimonials)}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="min-w-full md:min-w-[33.333%] px-4"
                >
                  <div className="glass-effect rounded-xl p-6 h-full flex flex-col">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">{testimonial.location}</p>
                      </div>
                    </div>
                    
                    <div className="flex text-lala-orange mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className="w-4 h-4" 
                          fill={i < testimonial.rating ? 'currentColor' : 'none'} 
                        />
                      ))}
                    </div>
                    
                    <blockquote className="text-gray-700 italic flex-grow">
                      "{testimonial.text}"
                    </blockquote>
                    
                    <div className="mt-4 handwritten text-lala-blue text-lg">
                      Lala Land Memories
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <button 
            onClick={prev} 
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full shadow-md p-2 z-10 hover:bg-lala-sand/50 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-lala-blue" />
          </button>
          
          <button 
            onClick={next} 
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full shadow-md p-2 z-10 hover:bg-lala-sand/50 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-lala-blue" />
          </button>
        </div>
        
        {/* Instagram-like Memory Gallery */}
        <div className="mt-16">
          <h3 className="text-2xl text-center mb-8">Polaroid Memories</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="aspect-square bg-white p-2 shadow-md rotate-1 hover-float hover:rotate-0 transition-all duration-300"
              >
                <div className="h-full overflow-hidden">
                  <img 
                    src={testimonial.image} 
                    alt="Guest Memory" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="handwritten text-center mt-1 text-sm">{testimonial.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
