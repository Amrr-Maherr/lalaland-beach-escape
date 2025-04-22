
import { Check, Sunset, Coffee, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const pricingPlans = [
  {
    id: 'basic',
    title: 'Basic Stay',
    icon: <Sunset className="h-10 w-10 text-lala-blue" />,
    price: '$35',
    period: 'per night',
    description: 'Perfect for solo travelers seeking a simple beach experience',
    features: [
      'Shared beach hut accommodation',
      'Access to all common areas',
      'Breakfast included',
      'Free WiFi in common areas',
      'Beach access'
    ],
    popular: false,
    color: 'bg-white'
  },
  {
    id: 'full-board',
    title: 'Full Board',
    icon: <Coffee className="h-10 w-10 text-lala-orange" />,
    price: '$60',
    period: 'per night',
    description: 'Complete package with all meals and comfortable accommodations',
    features: [
      'Private beach hut accommodation',
      'Three meals daily (local cuisine)',
      'Guided morning beach walk',
      'Sunset tea ceremony',
      'Free WiFi throughout camp',
      'Beach towels and amenities'
    ],
    popular: true,
    color: 'bg-lala-sand'
  },
  {
    id: 'group-retreat',
    title: 'Group Retreat',
    icon: <Users className="h-10 w-10 text-lala-green" />,
    price: '$45',
    period: 'per person/night',
    description: 'Special rates for groups of 8+ with custom activities',
    features: [
      'Multiple beach huts for your group',
      'All meals included',
      'Dedicated camp host',
      'Custom activity planning',
      'Private bonfire night',
      'Transportation arrangements'
    ],
    popular: false,
    color: 'bg-white'
  }
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-lala-sand/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="handwritten text-4xl text-lala-blue mb-3">Our Offers</h2>
          <p className="text-xl max-w-2xl mx-auto">
            Choose the perfect stay package for your Lala Land experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <div 
              key={plan.id}
              className={`rounded-2xl shadow-lg overflow-hidden ${plan.color} relative transition-transform duration-300 hover:-translate-y-2`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-lala-orange text-white px-4 py-1 rounded-bl-lg text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="p-6 pb-8">
                <div className="flex justify-center mb-4">
                  {plan.icon}
                </div>
                <h3 className="text-2xl font-semibold text-center mb-1">{plan.title}</h3>
                <div className="text-center mb-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-gray-600 ml-1">{plan.period}</span>
                </div>
                <p className="text-center text-gray-600 mb-6">{plan.description}</p>
                
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-lala-green mt-0.5 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-lala-orange hover:bg-lala-orangeLight text-white' 
                      : 'bg-white border border-lala-blue text-lala-blue hover:bg-lala-blue hover:text-white'
                  }`}
                >
                  Book {plan.title}
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="mb-4 italic text-gray-600">
            Looking for something different? Contact us for custom packages
          </p>
          <Button variant="link" className="text-lala-blue">
            View all package details
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
