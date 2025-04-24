import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <div className="bg-blue-50 flex flex-col justify-start items-start px-4 sm:px-8 md:px-20 lg:px-40 py-10 sm:py-16 md:py-20">
        <h1 className="mt-10 sm:mt-16 md:mt-20 text-4xl sm:text-5xl md:text-7xl font-semibold leading-tight">
          PRIVACY
        </h1>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold">POLICY</h1>
      </div>
      <div className="flex flex-col justify-start items-start px-4 sm:px-8 md:px-20 lg:px-40 py-10 sm:py-16 md:py-20 w-full max-w-6xl mx-auto">
        <section>
          <h2 className="text-2xl font-semibold mb-4 mt-10">Introduction</h2>
          <p>This Privacy Policy outlines how Stoxii Consultancy Services (hereinafter referred to as “Stoxii,” “we,” “our,” or “us”) collects, uses, stores, and discloses your personal information when you access our website (https://stoxii.com/) or use any services provided through the platform (collectively referred to as “Platform”). By using our Platform, you agree to the terms of this Privacy Policy, the Terms of Use, and applicable laws in India. If you do not agree with this policy, please do not use the Platform.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4 mt-10">Information We Collect</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Personally Identifiable Information (PII):</strong> Name, date of birth, address, phone number, email ID. Financial details such as bank account information, credit/debit card details, or other payment methods. Identity verification data, including government-issued identification documents (as required).</li>
            <li><strong>Sensitive Personal Data (with your consent):</strong> Biometric information (if required for certain features).</li>
            <li><strong>Behavioral and Usage Data:</strong> Data related to your preferences, usage patterns, and interactions on the Platform.</li>
            <li><strong>Device and Location Information:</strong> IP address, device type, operating system, and geolocation data (if permissions are granted).</li>
            <li><strong>Cookies and Analytics Data:</strong> Data collected through cookies and other tracking technologies to improve user experience. Cookies may collect information such as session details, time spent, and pages visited.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4 mt-10">How We Use Your Information</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Provide, personalize, and enhance the services offered on the Platform.</li>
            <li>Process transactions and manage payments securely.</li>
            <li>Communicate with you regarding updates, promotions, or changes in policies.</li>
            <li>Prevent fraud, unauthorized access, and other illegal activities.</li>
            <li>Comply with legal and regulatory requirements.</li>
            <li>Analyze usage patterns and improve Platform performance.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4 mt-10">Sharing Your Information</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Internal Entities:</strong> Within our group entities and affiliates to facilitate seamless service delivery.</li>
            <li><strong>Third-Party Service Providers:</strong> Logistics partners, payment processors, or marketing agencies assisting us in providing services.</li>
            <li><strong>Legal Authorities:</strong> When required by law or in response to valid legal requests.</li>
            <li><strong>Business Partners:</strong> For transaction fulfillment or in cases where services are availed through third-party platforms.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4 mt-10">Your Rights</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Access and Rectification:</strong> Request access to or correction of your data.</li>
            <li><strong>Data Erasure:</strong> Request deletion of your data, subject to legal and regulatory obligations.</li>
            <li><strong>Data Portability:</strong> Receive a copy of your data in a portable format.</li>
            <li><strong>Restrict or Object to Processing:</strong> Limit or stop the processing of your data under certain conditions.</li>
            <li><strong>Withdraw Consent:</strong> Withdraw previously given consent at any time.</li>
          </ul>
          <p className="mt-2">To exercise your rights, contact us at <a href="mailto:support@stoxii.com" className="text-blue-600 underline">support@stoxii.com</a>.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4 mt-10">Cookies and Tracking</h2>
          <p>We use cookies to enhance user experience and analyze traffic on our Platform. You can manage your cookie preferences through browser settings. Note that disabling cookies may limit certain functionalities of the Platform.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4 mt-10">Data Security</h2>
          <p>We employ industry-standard security measures to safeguard your personal data against unauthorized access, disclosure, or loss. While we strive to protect your data, no method of electronic transmission or storage is 100% secure, and we cannot guarantee absolute security.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4 mt-10">Data Retention</h2>
          <p>Your data will be retained only for as long as necessary to fulfill the purposes outlined in this Privacy Policy or as required by law.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4 mt-10">Third-Party Links</h2>
          <p>The Platform may contain links to third-party websites or services. Stoxii is not responsible for the privacy practices or content of such third-party websites. We encourage you to review their privacy policies.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4 mt-10">Modifications to the Policy</h2>
          <p>This Privacy Policy may be updated periodically to reflect changes in our practices or legal requirements. The latest version will always be available on our Platform. Your continued use of the Platform signifies your acceptance of the updated policy.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4 mt-10">Contact Us</h2>
          <p>If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
          <ul className="list-disc ml-6 mt-2">
            <li>Stoxii Consultancy Services</li>
            <li>Email: <a href="mailto:support@stoxii.com" className="text-blue-600 underline">support@stoxii.com</a></li>
            <li>Our Office Address: KH Infantry Road, 36, Bangalore, KA 560001 India</li>
          </ul>
        </section>
        <section>
          <p className="font-medium mt-10 sm:mt-16 md:mt-20">
            By using our Platform, you acknowledge and agree to the terms of this Privacy Policy.
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
}
