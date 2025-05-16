"";
import type { Metadata } from 'next';
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, CalendarDays } from 'lucide-react';
import ContactForm from "@/components/ContactForm"; // Import the new client component

export const metadata: Metadata = {
  title: 'Contact Us - Choice Insurance Agency',
  description: 'Get in touch with Choice Insurance Agency for expert advice on Medicare, life, and health insurance. Book a consultation or request a quote today.',
};

export default function ContactPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-10 text-blue-700">Contact Choice Insurance Agency</h1>
      <p className="text-lg text-center text-gray-700 mb-12 max-w-3xl mx-auto">
        We are here to help you navigate your insurance options and find the best coverage for your needs. Reach out to us through any of the methods below, or use the form to send us a message directly.
      </p>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        {/* Contact Information Section */}
        <div className="bg-gray-50 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Get in Touch Directly</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <MapPin size={24} className="text-blue-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-700">Our Office (By Appointment)</h3>
                <p className="text-gray-600">123 Insurance Lane, Suite 100<br />Anytown, IL 62000</p>
                <p className="text-sm text-gray-500 mt-1">(Please call to schedule an appointment)</p>
              </div>
            </div>
            <div className="flex items-center">
              <Phone size={24} className="text-blue-600 mr-3 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-700">Phone</h3>
                <p className="text-gray-600">Toll-Free: <a href="tel:8772049648" className="hover:text-blue-700">(877) 204-9648</a></p>
                <p className="text-gray-600">Local: <a href="tel:6182785927" className="hover:text-blue-700">(618) 278-5927</a></p>
              </div>
            </div>
            <div className="flex items-center">
              <Mail size={24} className="text-blue-600 mr-3 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-700">Email</h3>
                <p className="text-gray-600"><a href="mailto:a.campbell@insureyourchoices.com" className="hover:text-blue-700">a.campbell@insureyourchoices.com</a></p>
              </div>
            </div>
            <div className="flex items-center">
              <CalendarDays size={24} className="text-blue-600 mr-3 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-700">Business Hours</h3>
                <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM (CST)</p>
                <p className="text-gray-600">Evenings & Weekends: By Appointment</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Section - Now using the client component */}
        <div className="bg-gray-50 p-8 rounded-lg shadow-md" id="get-a-quote">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send Us a Message</h2>
          <ContactForm />
        </div>
      </div>

      {/* Book a Call Section */}
      <section id="book-a-call" className="text-center py-12 bg-blue-50 rounded-lg">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">Ready for a Personalized Consultation?</h2>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
          Schedule a free, no-obligation consultation with one of our expert insurance advisors at your convenience. We can discuss your needs and help you find the perfect plan.
        </p>
        <Button size="lg" asChild className="bg-orange-500 hover:bg-orange-600 text-white">
          <a href="https://calendly.com/" target="_blank" rel="noopener noreferrer">Book Your Free Consultation Now</a>
        </Button>
        <p className="text-sm text-gray-500 mt-4">(You will be redirected to our scheduling partner)</p>
      </section>
    </div>
  );
}

