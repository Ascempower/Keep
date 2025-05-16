import React from "react";

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-brand-dark-green">Blog</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Blog post 1 */}
        <div className="border rounded-lg overflow-hidden shadow-md">
          <div className="h-48 bg-brand-medium-green"></div>
          <div className="p-6">
            <h2 className="text-xl font-bold mb-2 text-brand-dark-green">Understanding Medicare Supplement Plans</h2>
            <p className="text-gray-600 mb-4">May 10, 2025</p>
            <p className="mb-4">Learn about the different Medicare Supplement plans and how they can help cover costs that Original Medicare doesn't cover.</p>
            <a href="#" className="text-brand-dark-green font-medium hover:underline">Read More →</a>
          </div>
        </div>
        
        {/* Blog post 2 */}
        <div className="border rounded-lg overflow-hidden shadow-md">
          <div className="h-48 bg-brand-medium-green"></div>
          <div className="p-6">
            <h2 className="text-xl font-bold mb-2 text-brand-dark-green">Life Insurance: Protecting Your Family's Future</h2>
            <p className="text-gray-600 mb-4">April 28, 2025</p>
            <p className="mb-4">Discover why life insurance is an essential part of financial planning and how it can provide security for your loved ones.</p>
            <a href="#" className="text-brand-dark-green font-medium hover:underline">Read More →</a>
          </div>
        </div>
        
        {/* Blog post 3 */}
        <div className="border rounded-lg overflow-hidden shadow-md">
          <div className="h-48 bg-brand-medium-green"></div>
          <div className="p-6">
            <h2 className="text-xl font-bold mb-2 text-brand-dark-green">Navigating Health Insurance Options</h2>
            <p className="text-gray-600 mb-4">April 15, 2025</p>
            <p className="mb-4">A comprehensive guide to understanding different health insurance plans and choosing the right coverage for your needs.</p>
            <a href="#" className="text-brand-dark-green font-medium hover:underline">Read More →</a>
          </div>
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-lg mb-6">Stay informed with the latest insurance news and tips from our experts.</p>
        <button className="bg-brand-tan text-brand-black px-6 py-3 rounded-md font-medium hover:bg-opacity-80">
          Subscribe to Our Newsletter
        </button>
      </div>
    </div>
  );
}
