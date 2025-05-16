import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram } from "lucide-react"; // Assuming lucide-react for icons

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark-green text-brand-light-green py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo and About */}
          <div>
            <Link href="/" className="mb-4 inline-block">
              <Image src="/assets/images/logo.png" alt="Choice Insurance Agency Logo" width={200} height={44} />
            </Link>
            <p className="text-sm mb-4">
              Your trusted partner for health, life, and Medicare insurance solutions. Helping you make informed choices for a secure future.
            </p>
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <Link href="#" target="_blank" rel="noopener noreferrer" className="text-brand-light-green hover:text-brand-white">
                <Facebook size={24} />
              </Link>
              <Link href="#" target="_blank" rel="noopener noreferrer" className="text-brand-light-green hover:text-brand-white">
                <Instagram size={24} />
              </Link>
              {/* Add other social media links as needed */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-brand-white mb-4 font-adonis">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-brand-white">Home</Link></li>
              <li><Link href="/about" className="hover:text-brand-white">About Us</Link></li>
              <li><Link href="/services" className="hover:text-brand-white">Services</Link></li>
              <li><Link href="/faq" className="hover:text-brand-white">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-brand-white">Contact Us</Link></li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-lg font-semibold text-brand-white mb-4 font-adonis">Our Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services/medicare-supplement" className="hover:text-brand-white">Medicare Supplement</Link></li>
              <li><Link href="/services/life-insurance" className="hover:text-brand-white">Life Insurance</Link></li>
              <li><Link href="/services/health-insurance" className="hover:text-brand-white">Health Insurance</Link></li>
              <li><Link href="/services/final-expense" className="hover:text-brand-white">Final Expense</Link></li>
              <li><Link href="/services/annuities" className="hover:text-brand-white">Annuities</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-brand-white mb-4 font-adonis">Contact Information</h3>
            <address className="not-italic space-y-2 text-sm">
              <p>Choice Insurance Agency</p>
              <p>123 Insurance Lane, Suite 100<br />Anytown, IL 62000</p>
              <p>Phone: <a href="tel:8772049648" className="hover:text-brand-white">(877) 204-9648</a></p>
              <p>Email: <a href="mailto:a.campbell@insureyourchoices.com" className="hover:text-brand-white">a.campbell@insureyourchoices.com</a></p>
            </address>
          </div>
        </div>

        {/* Copyright and Legal Links */}
        <div className="border-t border-brand-medium-green pt-8 text-center md:flex md:justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">
            &copy; {currentYear} Choice Insurance Agency. All rights reserved.
          </p>
          <div className="space-x-4 text-sm">
            <Link href="/privacy-policy" className="hover:text-brand-white">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-brand-white">Terms of Service</Link>
            <Link href="/accessibility-statement" className="hover:text-brand-white">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

