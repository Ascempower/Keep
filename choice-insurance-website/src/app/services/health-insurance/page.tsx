"";
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: 'Health Insurance Plans - Choice Insurance Agency',
  description: 'Find the right individual or family health insurance plan with expert guidance from Choice Insurance Agency. Serving IL, GA, TX, and more.',
};

export default function HealthInsurancePage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-gray-600">
        <ol className="list-none p-0 inline-flex">
          <li className="flex items-center">
            <Link href="/" className="hover:text-blue-700">Home</Link>
            <span className="mx-2">/</span>
          </li>
          <li className="flex items-center">
            <Link href="/services" className="hover:text-blue-700">Services</Link>
            <span className="mx-2">/</span>
          </li>
          <li className="text-gray-500">Health Insurance</li>
        </ol>
      </nav>

      <h1 className="text-4xl font-bold text-center mb-10 text-blue-700">Individual & Family Health Insurance</h1>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">What is Health Insurance?</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Health insurance is a type of insurance coverage that pays for medical, surgical, prescription drug, and sometimes dental expenses incurred by the insured. Health insurance can reimburse the insured for expenses incurred from illness or injury, or pay the care provider directly. It is crucial for protecting yourself and your family from potentially high medical costs and ensuring access to necessary healthcare services.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Various types of health insurance plans are available, including Health Maintenance Organization (HMO) plans, Preferred Provider Organization (PPO) plans, Exclusive Provider Organization (EPO) plans, and Point of Service (POS) plans. Each has different structures for networks, costs, and coverage.
        </p>
      </section>

      <section className="mb-12 bg-gray-100 p-8 rounded-lg">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">Why is Health Insurance Important?</h2>
        <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2">
          <li><strong>Financial Protection:</strong> Shields you from high, unexpected medical costs that can lead to significant debt.</li>
          <li><strong>Access to Care:</strong> Ensures you can receive routine check-ups, preventive care, and treatment for illnesses or injuries.</li>
          <li><strong>Preventive Services:</strong> Most plans cover preventive services like vaccinations, screenings, and wellness visits at no additional cost.</li>
          <li><strong>Management of Chronic Conditions:</strong> Provides coverage for ongoing care and medications if you have a chronic health condition.</li>
          <li><strong>Peace of Mind:</strong> Knowing you have coverage can reduce stress and allow you to focus on your health and well-being.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">Choosing the Right Health Insurance Plan</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Selecting the right health insurance plan depends on various factors, including your health status, budget, preferred doctors and hospitals, and the level of coverage you need. Key considerations include:
        </p>
        <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2 mb-4">
          <li><strong>Premiums:</strong> The monthly amount you pay for coverage.</li>
          <li><strong>Deductibles:</strong> The amount you pay out-of-pocket before your insurance starts paying.</li>
          <li><strong>Copayments and Coinsurance:</strong> Your share of costs for covered services after meeting your deductible.</li>
          <li><strong>Out-of-Pocket Maximum:</strong> The most you’ll have to pay for covered services in a plan year.</li>
          <li><strong>Provider Network:</strong> The list of doctors, hospitals, and other healthcare providers covered by your plan.</li>
          <li><strong>Covered Services:</strong> Ensure the plan covers the services you anticipate needing, including prescription drugs.</li>
        </ul>
      </section>

      <section className="mb-12 bg-blue-50 p-8 rounded-lg">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">How Choice Insurance Agency Can Assist You</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Finding the right health insurance plan can be a daunting task. At Choice Insurance Agency, we are here to simplify the process and help you make an informed decision. Our licensed agents will:
        </p>
        <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2">
          <li>Assess your individual or family healthcare needs and budget.</li>
          <li>Explain the differences between various plan types (HMO, PPO, etc.) and their benefits.</li>
          <li>Help you compare plans from multiple insurance carriers, both on and off the Health Insurance Marketplace.</li>
          <li>Determine if you qualify for subsidies or tax credits to lower your premiums.</li>
          <li>Guide you through the enrollment process and answer all your questions.</li>
        </ul>
        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          We are committed to helping you find affordable, quality health coverage that provides the protection and peace of mind you deserve.
        </p>
      </section>

      <section className="text-center py-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-800">Find Your Ideal Health Plan Today</h2>
        <p className="text-lg text-gray-700 mb-6">Take the first step towards securing your health. Contact us for a personalized health insurance consultation and quote.</p>
        <Button size="lg" asChild className="bg-orange-500 hover:bg-orange-600 text-white">
          <Link href="/contact#book-a-call">Get a Free Health Insurance Quote</Link>
        </Button>
      </section>
    </div>
  );
}

