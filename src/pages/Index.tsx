
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 lg:pt-32 lg:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-trey-darkPurple via-black to-black opacity-90 z-0"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-40"></div>
        
        <div className="container relative z-10 px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-gradient">
              Welcome to Trey's World
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Join the official fan community for Trey Songz. 
              Connect with other fans, get exclusive access to VIP experiences, and support charitable causes.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/signup">Join the Fanclub</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/vip-experience">Explore VIP Experiences</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-muted/10">
        <div className="container px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Experience The Fan Club</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-card p-8 rounded-xl flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Exclusive Content</h3>
              <p className="text-muted-foreground mb-6">Get access to exclusive photos, videos, and behind-the-scenes content from Trey Songz.</p>
              <Button asChild variant="ghost" className="mt-auto">
                <Link to="/signup">Sign Up Now</Link>
              </Button>
            </div>
            
            <div className="bg-card p-8 rounded-xl flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">VIP Experiences</h3>
              <p className="text-muted-foreground mb-6">Book exclusive one-on-one experiences with Trey including studio sessions and meet & greets.</p>
              <Button asChild variant="ghost" className="mt-auto">
                <Link to="/vip-experience">Explore VIP</Link>
              </Button>
            </div>
            
            <div className="bg-card p-8 rounded-xl flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a4 4 0 00-4-4H5a4 4 0 00-4 4v12h12V6a4 4 0 00-4-4h-3a4 4 0 00-4 4v12h12V6a4 4 0 00-4-4h-3a4 4 0 00-4 4v12h12V6a4 4 0 00-4-4h-3a4 4 0 00-4 4v12h12V8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Support Charity</h3>
              <p className="text-muted-foreground mb-6">Make a difference by supporting the causes Trey cares about through charitable donations.</p>
              <Button asChild variant="ghost" className="mt-auto">
                <Link to="/charity">Donate Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-purple-gradient text-white">
        <div className="container px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to join Trey's World?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-10">
            Sign up today to become a part of our fanclub and get exclusive access to content, 
            experiences and more.
          </p>
          <Button asChild size="lg" variant="secondary" className="font-medium">
            <Link to="/signup">Join the Fanclub</Link>
          </Button>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 bg-black text-center text-sm text-muted-foreground">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Trey's World Fan Club. All rights reserved.</p>
          <p className="mt-2">This is a fan-made website and is not officially affiliated with Trey Songz.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
