"";
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: 'Life Insurance Plans - Choice Insurance Agency',
  description: 'Protect your loved ones with tailored life insurance solutions including term life, whole life, and final expense plans from Choice Insurance Agency.',
};

export default function LifeInsurancePage() {
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
          <li className="text-gray-500">Life Insurance</li>
        </ol>
      </nav>

      <h1 className="text-4xl font-bold text-center mb-10 text-blue-700">Life Insurance Solutions</h1>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">What is Life Insurance?</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Life insurance is a contract between you and an insurer, where the insurer promises to pay a designated beneficiary a sum of money (the "death benefit") upon the death of the insured person. In return, you agree to pay premiums over a specified period. Life insurance provides financial security for your loved ones, helping them cover expenses like funeral costs, mortgage payments, daily living expenses, and future educational needs.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          There are various types of life insurance policies, primarily categorized into term life and permanent life (such as whole life or universal life). Choosing the right type depends on your individual financial goals, family needs, and budget.
        </p>
      </section>

      <section className="mb-12 bg-gray-100 p-8 rounded-lg">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">Types of Life Insurance We Offer</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold text-blue-600 mb-2">Term Life Insurance</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Term life insurance provides coverage for a specific period (the "term"), such as 10, 20, or 30 years. It is often the most affordable type of life insurance, designed to provide financial protection during critical years, like when you have young children or a mortgage. If you pass away during the term, your beneficiaries receive the death benefit. If the term expires and you are still living, the coverage ends unless you renew it (often at a higher premium) or convert it to a permanent policy.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-blue-600 mb-2">Whole Life Insurance</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Whole life insurance is a type of permanent life insurance that provides lifelong coverage as long as premiums are paid. It includes a death benefit and a cash value component that grows over time on a tax-deferred basis. You can borrow against the cash value or surrender the policy for its cash value. Premiums for whole life are typically higher than term life but remain level throughout the policy's life.
            </p>
          </div>
        </div>
        <div className="mt-8">
            <h3 className="text-2xl font-semibold text-blue-600 mb-2">Final Expense Insurance</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
             Final expense insurance, also known as burial insurance, is a type of whole life insurance with smaller death benefits, typically ranging from $5,000 to $25,000 or more. It's designed to cover end-of-life expenses such as funeral costs, medical bills, and other outstanding debts, so your loved ones aren't burdened with these costs. These policies often have simplified underwriting, making them easier to qualify for, especially for seniors.
            </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">Who Needs Life Insurance?</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Life insurance is a valuable tool for anyone whose death would cause financial hardship for others. This includes:
        </p>
        <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2 mb-4">
          <li>Parents with dependent children.</li>
          <li>Individuals with a spouse or partner who relies on their income.</li>
          <li>Business owners needing to cover business debts or fund buy-sell agreements.</li>
          <li>Individuals with significant personal debt, like a mortgage or student loans.</li>
          <li>Anyone wishing to leave a financial legacy or cover final expenses.</li>
        </ul>
        <p className="text-lg text-gray-700 leading-relaxed">
          The amount of life insurance you need depends on your financial obligations, income, and long-term goals. It's wise to regularly review your coverage as your life circumstances change.
        </p>
      </section>

      <section className="mb-12 bg-blue-50 p-8 rounded-lg">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">Your Life Insurance Partner: Choice Insurance Agency</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Choosing the right life insurance policy is a critical decision. At Choice Insurance Agency, we simplify the process and help you secure the protection your family deserves. We offer:
        </p>
        <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2">
          <li><strong>Personalized Needs Analysis:</strong> We help you determine the appropriate type and amount of coverage.</li>
          <li><strong>Access to Multiple Carriers:</strong> We compare plans and rates from various reputable insurers to find you the best value.</li>
          <li><strong>Clear Explanations:</strong> We break down complex policy details into easy-to-understand terms.</li>
          <li><strong>Ongoing Support:</strong> We are here for policy reviews and to assist with any changes or questions throughout the life of your policy.</li>
        </ul>
      </section>

      <section className="text-center py-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-800">Secure Your Family's Future Today</h2>
        <p className="text-lg text-gray-700 mb-6">Don't wait to protect the ones you love. Contact us for a complimentary life insurance consultation and quote.</p>
        <Button size="lg" asChild className="bg-orange-500 hover:bg-orange-600 text-white">
          <Link href="/contact#book-a-call">Request a Consultation</Link>
        </Button>
      </section>
    </div>
  );
}

