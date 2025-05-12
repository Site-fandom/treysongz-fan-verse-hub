
import React, { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email.",
  }),
  amount: z.string()
    .refine(value => {
      const num = parseFloat(value);
      return !isNaN(num) && num >= 50;
    }, {
      message: "Donation amount must be at least $50.",
    }),
  cause: z.string({
    required_error: "Please select a cause to donate to.",
  }),
  message: z.string().optional(),
});

export default function DonationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  // Initialize form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      amount: "50",
      cause: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    // Here you would typically redirect to BTCPay checkout
    // This is a simulation
    console.log("Donation form values:", values);
    
    setTimeout(() => {
      setIsSubmitting(false);
      
      toast({
        title: "Processing Donation",
        description: "Redirecting to BTCPay for secure payment processing...",
      });
      
      // Simulate redirect
      setTimeout(() => {
        window.alert("This would redirect to a BTCPay gateway in a real implementation");
      }, 2000);
    }, 1000);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your full name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="your@email.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Donation Amount (USD)</FormLabel>
                <FormControl>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500 sm:text-sm">$</span>
                    </div>
                    <Input 
                      type="number" 
                      min="50"
                      className="pl-7" 
                      {...field} 
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="cause"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Select Cause</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a cause to support" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="education">Education Programs</SelectItem>
                    <SelectItem value="health">Health Initiatives</SelectItem>
                    <SelectItem value="community">Community Development</SelectItem>
                    <SelectItem value="music">Music Education</SelectItem>
                    <SelectItem value="emergency">Emergency Relief</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Personal Message (Optional)</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Add a personal message with your donation"
                    className="resize-none h-24"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <Button 
          type="submit" 
          className="w-full bg-gold-gradient hover:opacity-90 transition-opacity"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Processing..." : "Donate with BTCPay"}
        </Button>
        
        <div className="text-xs text-muted-foreground text-center mt-4">
          <p>Your donation will be processed securely through BTCPay.</p>
          <p className="mt-1">All donations are tax-deductible to the extent allowed by law.</p>
        </div>
      </form>
    </Form>
  );
}
