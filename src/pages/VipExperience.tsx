import React, { useState } from 'react';
import BookingForm from '@/components/BookingForm';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';

const VipExperience = () => {
  const [selectedExperience, setSelectedExperience] = useState<'meet-greet' | 'studio-session' | 'appearance'>('meet-greet');
  
  const experiences = [
    {
      id: 'meet-greet',
      title: 'Meet & Greet',
      description: 'Meet Trey Songz in person, take photos, and chat with him.',
      details: 'Our exclusive meet and greet experience gives you one-on-one time with Trey. You\'ll have the opportunity to take photos, get autographs, and have a brief conversation with the artist himself.',
      image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2070&auto=format&fit=crop',
      price: 'Starting at $500',
      features: [
        'Photo opportunity with Trey',
        'Autographed merchandise',
        '5-10 minutes of personal interaction',
        'Available in select cities during tour dates'
      ]
    },
    {
      id: 'studio-session',
      title: 'Private Studio Session',
      description: 'Spend time in the studio watching Trey work on new music.',
      details: 'Experience the creative process firsthand as Trey works on new music in the studio. This intimate session gives you a behind-the-scenes look at how hits are made.',
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop',
      price: 'Starting at $2,000',
      features: [
        'Private session in a professional recording studio',
        'Watch Trey\'s creative process',
        '2-3 hour experience',
        'May include listening to unreleased music',
        'Limited availability based on Trey\'s schedule'
      ]
    },
    {
      id: 'appearance',
      title: 'Event Appearance',
      description: 'Book Trey for a special appearance at your private event.',
      details: 'Make your special event unforgettable by booking Trey for an appearance or performance. Available for select private events, corporate functions, and exclusive gatherings.',
      image: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=2070&auto=format&fit=crop',
      price: 'Starting at $25,000',
      features: [
        'Personal appearance by Trey',
        'Option for performance (additional cost)',
        'Photo opportunities for event guests',
        'Requires advance booking (3+ months)',
        'Subject to availability and location'
      ]
    }
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen pb-16">
      <div className="container pt-24 px-4">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <motion.h1 variants={itemVariants} className="text-3xl md:text-5xl font-bold mb-4">
            VIP Experience
          </motion.h1>
          <motion.p variants={itemVariants} className="text-lg text-muted-foreground">
            Exclusive opportunities to connect with Trey Songz through personalized experiences
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto mb-16">
          <div>
            <Tabs defaultValue="meet-greet" value={selectedExperience} onValueChange={(v) => setSelectedExperience(v as any)}>
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="meet-greet">Meet & Greet</TabsTrigger>
                <TabsTrigger value="studio-session">Studio Session</TabsTrigger>
                <TabsTrigger value="appearance">Event Booking</TabsTrigger>
              </TabsList>
              
              {experiences.map((exp) => (
                <TabsContent key={exp.id} value={exp.id}>
                  <div className="rounded-xl overflow-hidden mb-6">
                    <img 
                      src={exp.image} 
                      alt={exp.title} 
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  
                  <div>
                    <h2 className="text-2xl font-semibold mb-2">{exp.title}</h2>
                    <p className="text-muted-foreground mb-4">{exp.details}</p>
                    
                    <div className="bg-muted/30 rounded-lg p-4 mb-6">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-lg font-medium">Pricing</span>
                        <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-medium">
                          {exp.price}
                        </span>
                      </div>
                      
                      <h4 className="font-medium mb-2">What's Included:</h4>
                      <ul className="space-y-2">
                        {exp.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
          
          <div className="bg-card rounded-xl p-6 md:p-8 shadow-lg self-start">
            <h3 className="text-2xl font-semibold mb-6">Request Booking</h3>
            <BookingForm eventType={selectedExperience} />
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto bg-muted/20 rounded-xl p-6 md:p-8">
          <h3 className="text-xl font-medium mb-4">Important Information</h3>
          <div className="space-y-4 text-sm">
            <p>• All VIP experiences are subject to availability and approval.</p>
            <p>• Pricing varies based on location, duration, and specific requirements.</p>
            <p>• A team member will contact you with exact pricing after reviewing your request.</p>
            <p>• Payment is required in advance to secure bookings.</p>
            <p>• Cancellation policies apply and will be provided with your booking confirmation.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VipExperience;
