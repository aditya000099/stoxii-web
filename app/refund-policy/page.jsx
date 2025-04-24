import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

export default function RefundPolicy() {
  return (
    <>
    <Navbar />
    <div className="bg-blue-50 flex flex-col justify-start items-start px-4 sm:px-8 md:px-20 lg:px-40 py-10 sm:py-16 md:py-20">
      <h1 className="mt-10 sm:mt-16 md:mt-20 text-4xl sm:text-5xl md:text-7xl font-semibold leading-tight">
        REFUND AND
      </h1>
      <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold leading-tight">
        CANCELLATION
      </h1>
      <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold leading-tight">
        POLICY
      </h1>
    </div>
    <div className="flex flex-col justify-start items-start px-4 sm:px-8 md:px-20 lg:px-40 py-10 sm:py-16 md:py-20 w-full max-w-6xl mx-auto">
      
      <section>
        <p>
          Welcome to Stoxii’s Refund and Cancellation Policy. At Stoxii, we are committed to offering a transparent and straightforward process regarding refunds and cancellations. Please take a moment to review the following terms:
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 mt-10">Course Enrollment</h2>
        <ul>
          <li><strong>Non-Refundable Fees:</strong> All course fees are non-refundable. Once a client has successfully enrolled and made a payment for a course, the enrollment is considered final and cannot be canceled or refunded.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 mt-10">Service Subscriptions</h2>
        <ul>
          <li><strong>Non-Refundable Subscription Fees:</strong> Subscription fees for premium services, advisory, or other subscription-based offerings are non-refundable. We encourage clients to assess the service during any available trial periods before committing to a full subscription.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 mt-10">Discontinuation of Services</h2>
        <ul>
          <li>Stoxii.com reserves the right to discontinue certain services or courses. In such cases, clients may be eligible for a pro-rata refund for the remaining duration of the service or course.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 mt-10">Disclaimer</h2>
        <ul>
          <li><strong>No Guarantee of Results:</strong> Investing in stocks carries significant risk, including the potential loss of your principal. Past performance is not indicative of future results, and we do not guarantee any returns.</li>
          <li><strong>Informational Purposes Only:</strong> All content provided by Stoxii is for informational and educational purposes only and should not be considered financial advice or recommendations tailored to your specific circumstances.</li>
          <li><strong>Investment Risks:</strong> All investments carry inherent risks. You should evaluate your risk tolerance and financial goals before making any investment decisions.</li>
          <li><strong>Accuracy Not Guaranteed:</strong> While we strive for accuracy, Stoxii makes no warranties regarding the completeness, reliability, or timeliness of the information provided. Clients are encouraged to verify any information independently.</li>
          <li><strong>No Liability:</strong> Stoxii is not liable for any losses, damages, or other consequences arising from reliance on the services or information offered. You assume full responsibility for your investment decisions.</li>
          <li><strong>Regulatory Compliance:</strong> Clients are responsible for ensuring compliance with all applicable laws and regulations related to their investment activities.</li>
          <li><strong>Third-Party Links:</strong> Stoxii may contain links to third-party websites. We do not endorse or assume responsibility for the content or practices of external sites.</li>
          <li><strong>Market Conditions:</strong> Financial markets are volatile and can change rapidly. The information provided may not reflect current market conditions and should be interpreted with caution.</li>
        </ul>
      </section>

      <section>
        <p className="font-medium mt-10 sm:mt-16 md:mt-20">
          By continuing with your purchase or subscription, you acknowledge and agree to the terms outlined above.
        </p>
      </section>
    </div>
    <Footer />
    </>
  );
}
