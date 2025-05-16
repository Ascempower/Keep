import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function QuotePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-brand-dark-green">Get a Quote</h1>
      
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-brand-dark-green">Request a Free Insurance Quote</h2>
        
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium mb-2">First Name</label>
              <input 
                type="text" 
                id="firstName" 
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-medium-green"
                placeholder="Your first name"
              />
            </div>
            
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium mb-2">Last Name</label>
              <input 
                type="text" 
                id="lastName" 
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-medium-green"
                placeholder="Your last name"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
            <input 
              type="email" 
              id="email" 
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-medium-green"
              placeholder="your.email@example.com"
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number</label>
            <input 
              type="tel" 
              id="phone" 
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-medium-green"
              placeholder="(123) 456-7890"
            />
          </div>
          
          <div>
            <label htmlFor="insuranceType" className="block text-sm font-medium mb-2">Insurance Type</label>
            <select 
              id="insuranceType" 
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-medium-green"
            >
              <option value="">Select Insurance Type</option>
              <option value="medicare">Medicare Supplement</option>
              <option value="life">Life Insurance</option>
              <option value="health">Health Insurance</option>
              <option value="hospital">Hospital Indemnity</option>
              <option value="cancer">Cancer & Illness Plans</option>
              <option value="annuities">Annuities</option>
              <option value="final">Final Expense</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">Additional Information</label>
            <textarea 
              id="message" 
              rows={4} 
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-medium-green"
              placeholder="Please provide any specific details about your insurance needs..."
            ></textarea>
          </div>
          
          <div>
            <Button type="submit" className="w-full bg-brand-tan text-brand-black hover:bg-opacity-80">
              Request Quote
            </Button>
          </div>
        </form>
        
        <div className="mt-8 pt-6 border-t text-center">
          <p className="mb-4">Prefer to speak with an agent directly?</p>
          <Link href="/contact">
            <Button variant="outline" className="border-brand-dark-green text-brand-dark-green hover:bg-brand-light-green">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
