"";
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: 'Our Insurance Services - Choice Insurance Agency',
  description: 'Explore comprehensive insurance solutions including Medicare, life insurance, health coverage, and more from Choice Insurance Agency.',
};

const services = [
  {
    title: "Medicare Supplement Plans (Medigap)",
    slug: "medicare-supplement",
    excerpt: "Complement your Original Medicare with Medigap to cover out-of-pocket costs like deductibles, copayments, and coinsurance.",
    detailsLink: "/services/medicare-supplement"
  },
  {
    title: "Hospital Indemnity Plans",
    slug: "hospital-indemnity",
    excerpt: "Gain extra financial protection for hospital stays, covering costs not handled by your primary health insurance or Medicare.",
    detailsLink: "/services/hospital-indemnity"
  },
  {
    title: "Cancer and Catastrophic Illness Insurance",
    slug: "cancer-illness",
    excerpt: "Receive a lump-sum cash benefit upon diagnosis of cancer or other serious illnesses to cover treatment and other expenses.",
    detailsLink: "/services/cancer-illness"
  },
  {
    title: "Medicare Advantage Plans (Part C)",
    slug: "medicare-advantage",
    excerpt: "All-in-one alternatives to Original Medicare, often including prescription drug, dental, and vision coverage.",
    detailsLink: "/services/medicare-advantage"
  },
  {
    title: "Life Insurance",
    slug: "life-insurance",
    excerpt: "Protect your family’s financial future with term life, whole life, or final expense insurance plans tailored to your needs.",
    detailsLink: "/services/life-insurance"
  },
  {
    title: "Final Expense Plans",
    slug: "final-expense",
    excerpt: "Affordable life insurance policies designed to cover end-of-life costs, such as funeral services and medical bills.",
    detailsLink: "/services/final-expense"
  },
  {
    title: "Annuities",
    slug: "annuities",
    excerpt: "Secure a reliable income stream for your retirement with fixed and indexed annuity options.",
    detailsLink: "/services/annuities"
  },
  {
    title: "Individual Health Insurance",
    slug: "health-insurance",
    excerpt: "Find the right health insurance plan for you and your family, ensuring access to quality healthcare.",
    detailsLink: "/services/health-insurance"
  }
  // Add Employee Benefits if it's a continued focus
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-10 text-blue-700">Our Insurance Services</h1>
      <p className="text-lg text-center text-gray-700 mb-12 max-w-3xl mx-auto">
        At Choice Insurance Agency, we offer a comprehensive suite of insurance products designed to protect you, your family, and your future. Explore our services below to find the coverage that best meets your needs. Our experienced agents are here to guide you every step of the way.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div key={service.slug} className="bg-white p-6 rounded-lg shadow-lg flex flex-col">
            <h2 className="text-2xl font-semibold mb-3 text-blue-600">{service.title}</h2>
            <p className="text-gray-700 mb-4 flex-grow">{service.excerpt}</p>
            <Button asChild className="mt-auto bg-orange-500 hover:bg-orange-600 text-white">
              <Link href={service.detailsLink}>Learn More</Link>
            </Button>
          </div>
        ))}
      </div>

      <section className="text-center py-16 mt-12 bg-gray-100 rounded-lg">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">Not Sure Where to Start?</h2>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
          Choosing the right insurance can be complex. Let our experts help you navigate your options and find the perfect plan tailored to your unique situation and budget.
        </p>
        <Button size="lg" asChild className="bg-green-500 hover:bg-green-600 text-white">
          <Link href="/contact#book-a-call">Book a Free Consultation</Link>
        </Button>
      </section>
    </div>
  );
}

