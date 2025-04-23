import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { CalendarIcon, Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react';

const ContactSection = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  
  return (
    <section id="contact" className="py-20 bg-lala-sand/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="handwritten text-4xl text-lala-blue mb-3">Contact & Booking</h2>
          <p className="text-xl max-w-2xl mx-auto">
            Ready to escape to Lala Land? Reach out to us to book your stay
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
            <h3 className="text-2xl font-semibold mb-6">Book Your Escape</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Your Name
                  </label>
                  <Input 
                    id="name" 
                    placeholder="Enter your full name"
                    className="border-lala-sand/50 focus:border-lala-blue focus:ring-lala-blue/20"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </label>
                  <Input 
                    id="email" 
                    type="email"
                    placeholder="your@email.com"
                    className="border-lala-sand/50 focus:border-lala-blue focus:ring-lala-blue/20"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Arrival Date
                  </label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal border-lala-sand/50"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, 'PPP') : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="guests" className="text-sm font-medium">
                    Number of Guests
                  </label>
                  <Input 
                    id="guests" 
                    type="number"
                    min={1}
                    placeholder="How many people?"
                    className="border-lala-sand/50 focus:border-lala-blue focus:ring-lala-blue/20"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Your Message
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your trip, questions, or special requests..."
                  className="min-h-[120px] border-lala-sand/50 focus:border-lala-blue focus:ring-lala-blue/20"
                />
              </div>
              
              <Button type="submit" className="w-full bg-lala-orange hover:bg-lala-orangeLight text-white">
                Send Booking Request
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col space-y-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-lala-orange mt-1 mr-3" />
                  <div>
                    <h4 className="font-medium">Phone & WhatsApp</h4>
                    <p className="text-gray-600">+20 123 456 7890</p>
                    <p className="text-sm text-gray-500">We're available 9am - 7pm (Egypt time)</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-lala-blue mt-1 mr-3" />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-gray-600">info@lalalandcamp.com</p>
                    <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-lala-green mt-1 mr-3" />
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-gray-600">Nuweiba Village, South Sinai, Egypt</p>
                    <p className="text-sm text-gray-500">15km south of Nuweiba town</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media & Newsletter */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-2xl font-semibold mb-4">Stay Connected</h3>
              
              <div className="space-y-4">
                <p className="text-gray-600">
                  Follow our journey and see more of Lala Land on social media
                </p>
                
                <div className="flex space-x-3">
                  <a href="https://facebook.com/lalalandcamp" target="_blank" rel="noopener noreferrer" className="bg-lala-sand/30 rounded-full p-3 hover:bg-lala-sand transition-colors">
                    <Facebook className="h-5 w-5 text-lala-blue" />
                  </a>
                  <a href="https://instagram.com/lalalandcamp" target="_blank" rel="noopener noreferrer" className="bg-lala-sand/30 rounded-full p-3 hover:bg-lala-sand transition-colors">
                    <Instagram className="h-5 w-5 text-lala-orange" />
                  </a>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-100">
                <h4 className="font-medium mb-3">Subscribe to Our Newsletter</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Stay updated with future events, special offers, and desert inspirations
                </p>
                
                <div className="flex space-x-2">
                  <Input 
                    placeholder="Your email address" 
                    className="border-lala-sand/50 focus:border-lala-blue focus:ring-lala-blue/20"
                  />
                  <Button className="bg-lala-blue hover:bg-lala-blueDark text-white whitespace-nowrap">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;