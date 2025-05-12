import React from 'react';
import DonationForm from '@/components/DonationForm';
import { Separator } from '@/components/ui/separator';
import { motion } from 'framer-motion';

const Charity = () => {
  const causes = [
    {
      name: 'Education Programs',
      description: 'Supporting education initiatives in underserved communities, providing scholarships and educational resources.',
      impact: 'Helped over 500 students access quality education through scholarships and school supplies.'
    },
    {
      name: 'Health Initiatives',
      description: 'Funding health programs focused on awareness, prevention, and treatment in communities with limited healthcare access.',
      impact: 'Provided medical services to over 1,000 individuals and funded critical healthcare infrastructure.'
    },
    {
      name: 'Community Development',
      description: 'Investing in neighborhood improvement projects, community centers, and youth programs in urban areas.',
      impact: 'Revitalized 5 community centers and created safe spaces for youth development activities.'
    },
    {
      name: 'Music Education',
      description: 'Supporting music programs in schools and providing instruments, lessons, and mentorship to young musicians.',
      impact: 'Donated instruments to 20 schools and provided music education to over 300 children.'
    },
    {
      name: 'Emergency Relief',
      description: 'Providing immediate assistance to communities affected by natural disasters and unforeseen emergencies.',
      impact: 'Delivered aid packages to families affected by recent natural disasters and funded rebuilding efforts.'
    }
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Support Our Causes</h1>
          <p className="text-lg text-muted-foreground">
            Join Trey Songz in making a positive impact on communities through charitable donations
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-3">
            <div className="relative rounded-xl overflow-hidden mb-8">
              <img 
                src="https://images.unsplash.com/photo-1509099652299-30938b0aeb63?q=80&w=2071&auto=format&fit=crop"
                alt="Trey Songz Charity" 
                className="w-full aspect-video object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                <div className="text-white">
                  <h2 className="text-xl font-bold">Making a Difference Together</h2>
                  <p className="opacity-90">Your support enables meaningful change in communities nationwide</p>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold mb-6">Our Impact Areas</h2>
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              {causes.map((cause, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  className="bg-card rounded-lg p-5"
                >
                  <h3 className="text-lg font-medium mb-2">{cause.name}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{cause.description}</p>
                  <div className="bg-muted/30 p-3 rounded-md text-sm">
                    <strong>Impact:</strong> {cause.impact}
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            <div className="mt-8 p-6 bg-card rounded-xl">
              <h3 className="text-xl font-medium mb-4">How Your Donation Helps</h3>
              <div className="space-y-3 text-sm">
                <p>• $50 provides school supplies for a student for an entire academic year</p>
                <p>• $100 funds music lessons for a young aspiring artist for a month</p>
                <p>• $250 helps provide medical care for families in underserved communities</p>
                <p>• $500 contributes to community center renovations in urban neighborhoods</p>
                <p>• $1000+ makes you a major donor with special recognition opportunities</p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="sticky top-24 bg-card rounded-xl p-6 md:p-8 shadow-lg">
              <h2 className="text-2xl font-semibold mb-2">Make a Donation</h2>
              <p className="text-sm text-muted-foreground mb-6">
                Your contribution supports communities and causes Trey cares deeply about.
              </p>
              
              <Separator className="mb-6" />
              
              <DonationForm />
            </div>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto mt-16">
          <div className="bg-muted/20 rounded-xl p-6">
            <h3 className="font-semibold mb-4">Transparency Statement</h3>
            <p className="text-sm">
              We are committed to transparency and accountability. All donations are processed securely through BTCPay Server,
              and 100% of your contribution goes directly to the causes you choose to support. For questions about our charitable
              initiatives or to request detailed information about fund allocation, please contact our team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charity;
