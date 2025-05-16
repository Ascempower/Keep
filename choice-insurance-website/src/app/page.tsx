""; // Add this line to make it a module, if not already
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Users, ShieldCheck, MessageSquare } from "lucide-react";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-brand-dark-green to-brand-medium-green text-brand-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-adonis">
            Your Trusted Partner for Health, Life & Medicare Insurance
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto text-brand-light-green">
            Personalized plans and expert guidance for residents of Illinois, Alabama, Georgia, Ohio, Kentucky, Mississippi, South Carolina, and Texas.
          </p>
          <Button size="lg" asChild className="bg-brand-tan hover:bg-opacity-80 text-brand-black font-semibold">
            <Link href="/contact#book-a-call">Book a Free Consultation</Link>
          </Button>
        </div>
      </section>

      {/* About Us Snippet */}
      <section className="py-16 md:py-24 bg-brand-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-brand-dark-green font-adonis">About Choice Insurance Agency</h2>
          <p className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto">
            Choice Insurance is an independent insurance agency specializing in Medicare Benefits, Individual Health Insurance, Employee Benefits, and Life Insurance plans. We partner with major insurance carriers to provide clients with a wide range of coverage options. Our plans are designed with a focus on affordability and tailored benefits, combined with personalized guidance to help clients make well-informed decisions.
          </p>
          <Button variant="outline" asChild className="border-brand-dark-green text-brand-dark-green hover:bg-brand-light-green hover:text-brand-dark-green">
            <Link href="/about">Learn More About Us</Link>
          </Button>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-brand-light-green">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-brand-dark-green font-adonis">Our Insurance Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[ 
              { title: "Medicare Solutions", description: "Navigate Medicare with confidence. We offer Supplement, Advantage, and Part D plans.", href: "/services/medicare-supplement" },
              { title: "Life Insurance", description: "Protect your loved ones with term, whole, and final expense life insurance.", href: "/services/life-insurance" },
              { title: "Health Coverage", description: "Find the right individual or family health insurance plan to meet your needs.", href: "/services/health-insurance" },
              { title: "Hospital Indemnity", description: "Get extra financial protection for hospital stays and related expenses.", href: "/services/hospital-indemnity" },
              { title: "Cancer & Illness Plans", description: "Specialized plans to help manage costs associated with critical illnesses.", href: "/services/cancer-illness" },
              { title: "Annuities", description: "Secure your retirement with reliable income streams through annuities.", href: "/services/annuities" },
            ].map((service) => (
              <Card key={service.title} className="bg-brand-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-brand-dark-green font-adonis text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{service.description}</p>
                  <Button variant="link" asChild className="text-brand-dark-green hover:text-brand-medium-green px-0">
                    <Link href={service.href}>Learn More &rarr;</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild className="bg-brand-dark-green hover:bg-brand-medium-green text-brand-white">
              <Link href="/services">Explore All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-brand-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-brand-dark-green font-adonis">Why Choose Choice Insurance?</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <CheckCircle size={48} className="mx-auto mb-4 text-brand-dark-green" />
              <h3 className="text-xl font-semibold mb-2 text-brand-dark-green font-adonis">Personalized Service</h3>
              <p className="text-gray-700">We take the time to understand your unique needs and find the perfect plan for you.</p>
            </div>
            <div className="p-6">
              <Users size={48} className="mx-auto mb-4 text-brand-dark-green" />
              <h3 className="text-xl font-semibold mb-2 text-brand-dark-green font-adonis">Independent Agency</h3>
              <p className="text-gray-700">As an independent agency, we offer a wide range of options from multiple top carriers.</p>
            </div>
            <div className="p-6">
              <ShieldCheck size={48} className="mx-auto mb-4 text-brand-dark-green" />
              <h3 className="text-xl font-semibold mb-2 text-brand-dark-green font-adonis">Expert Guidance</h3>
              <p className="text-gray-700">Our experienced agents provide clear, unbiased advice to help you make informed decisions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Snippet */}
      <section className="py-16 md:py-24 bg-brand-light-green">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-brand-dark-green font-adonis">What Our Clients Say</h2>
          <div className="max-w-2xl mx-auto bg-brand-white p-8 rounded-lg shadow-lg">
            <MessageSquare size={32} className="text-brand-medium-green mb-4" />
            <blockquote className="text-lg italic text-gray-700 mb-6">
              "Choice Insurance made finding the right Medicare plan so easy! Their agent was knowledgeable and patient, answering all my questions. Highly recommend!"
            </blockquote>
            <p className="text-right font-semibold text-brand-dark-green">- Jane D., Illinois</p>
          </div>
          <div className="text-center mt-10">
            <Button variant="outline" asChild className="border-brand-dark-green text-brand-dark-green hover:bg-brand-white hover:text-brand-dark-green">
              <Link href="/testimonials">Read More Testimonials</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-32 bg-brand-dark-green text-brand-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 font-adonis">Ready to Find Your Perfect Plan?</h2>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-brand-light-green">
            Let us help you navigate the complexities of insurance. Contact us today for a free, no-obligation consultation.
          </p>
          <Button size="lg" asChild className="bg-brand-tan hover:bg-opacity-80 text-brand-black font-semibold">
            <Link href="/contact">Get a Free Quote Today</Link>
          </Button>
        </div>
      </section>
    </>
  );
}

