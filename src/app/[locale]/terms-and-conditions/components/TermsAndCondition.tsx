/* eslint-disable react/no-unescaped-entities */

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";


export function TermsAndConditions() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-full md:w-1/4 lg:w-1/5 px-4 py-6 md:py-8 sticky top-0 md:mt-32 bg-white md:bg-transparent md:border-transparent md:ml-20 border-gray-200 shadow-md md:shadow-none">
        <nav className="space-y-4 text-gray-700">
          <a href="#terms" className="block hover:text-blue-600">Terms & Conditions</a>
          <a href="#services" className="block hover:text-blue-600">1. Use of Services</a>
          <a href="#disclaimer" className="block hover:text-blue-600">2. Medical Disclaimer</a>
          <a href="#responsibilities" className="block hover:text-blue-600">3. User Responsibilities</a>
          <a href="#booking" className="block hover:text-blue-600">4. Booking and Payments</a>
          <a href="#privacy" className="block hover:text-blue-600">5. Confidentiality and Privacy</a>
          <a href="#limitation" className="block hover:text-blue-600">6. Limitation of Liability</a>
          <a href="#property" className="block hover:text-blue-600">7. Intellectual Property</a>
          <a href="#termination" className="block hover:text-blue-600">8. Termination of Services</a>
          <a href="#amendments" className="block hover:text-blue-600">9. Amendments</a>
          <a href="#law" className="block hover:text-blue-600">10. Governing Law and Dispute Resolution</a>
          <a href="#contact information" className="block hover:text-blue-600">11. Contact Information</a>
        </nav>
      </aside>

      <div>
      {/* Main Content */}
      <div className="flex-1 mt-28 px-4 py-6 md:py-8" id="terms">
              <Card  className="max-w-full md:max-w-2xl lg:max-w-3xl mx-auto shadow-lg">
                <CardHeader>
                  <CardTitle className="text-3xl">Terms and Conditions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-500">
                <p>
                  Welcome to CareMedico Medtech Private Limited ("CareMedico," "we," "us," or "our"). By using our services, including visiting our website at https://caremedico.com or engaging with us in any way, you agree to these Terms and Conditions ("Terms"). Please read these Terms carefully, as they govern your use of our services and your relationship with CareMedico. If you do not agree with any part of these Terms, you should not use our services.
                </p>                  

                </CardContent>
              </Card>
            </div>

            <div className="flex-1 mt-10 px-4 py-6 md:py-8" id="services">
              <Card className="max-w-full md:max-w-2xl lg:max-w-3xl mx-auto shadow-lg">
                <CardHeader>
                  <CardTitle className="text-3xl">1. Use of Services</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-500">
                  <p>1.1 <strong>Scope of Services:</strong> CareMedico is a medical tourism company that provides a range of services to facilitate access to medical and healthcare services internationally. Our services may include medical consultations, booking hospital services, arranging travel and accommodations, and other related services.</p>
                  <p>1.2 <strong>Eligibility:</strong>By using our services, you confirm that you are at least 18 years old and have the legal capacity to agree to these Terms. If you are using our services on behalf of another person, you represent and warrant that you have the authority to do so.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="flex-1 mt-10 px-4 py-6 md:py-8" id="disclaimer">
              <Card className="max-w-full md:max-w-2xl lg:max-w-3xl mx-auto shadow-lg">
                <CardHeader>
                  <CardTitle className="text-3xl">2. Medical Disclaimer</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-500">
                <p>2.1 <strong>Non-Medical Advice:</strong> CareMedico is not a healthcare provider and does not offer medical advice, diagnosis, or treatment. The information provided on our website and through our services is for general informational purposes only. All decisions about medical treatment must be made solely by you and the healthcare providers.
                </p>
                <p>2.2 <strong>Medical Tourism Risks:</strong> By using our services, you acknowledge the risks associated with medical tourism, which may include different medical standards, travel-related risks, and variations in healthcare regulations by country.
                </p>
                </CardContent>
              </Card>
            </div>
            <div className="flex-1 mt-10 px-4 py-6 md:py-8" id="responsibilities">
              <Card className="max-w-full md:max-w-2xl lg:max-w-3xl mx-auto shadow-lg">
                <CardHeader>
                  <CardTitle className="text-3xl">3. User Responsibilities</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-500">
                <p>3.1 <strong>Accuracy of Information:</strong> You agree to provide accurate, complete, and current information when using our services. CareMedico is not responsible for any issues arising from incorrect or incomplete information provided by you.
                </p>
                <p>3.2 <strong>Compliance with Local Laws:</strong> You are responsible for complying with the laws of the country where you receive medical services and any travel regulations. You understand that medical treatments and healthcare practices may vary by location.
                </p>
                </CardContent>
              </Card>
            </div>
            <div className="flex-1 mt-10 px-4 py-6 md:py-8" id="booking">
              <Card className="max-w-full md:max-w-2xl lg:max-w-3xl mx-auto shadow-lg">
                <CardHeader>
                  <CardTitle className="text-3xl">4. Booking and Payments</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-500">
                <p>4.1 <strong>Service Costs:</strong> Service fees will be communicated to you in advance. CareMedico may require payment in advance or may issue invoices based on the services provided. 
                </p>
                <p>4.2 <strong>Refund Policy:</strong> Refunds may be issued in cases of booking cancellations due to unforeseen circumstances or changes in treatment availability. However, specific refund conditions depend on our agreements with healthcare providers, and travel or accommodation partners. 
                </p>
                <p>4.3 <strong>Third-Party Providers:</strong> CareMedico works with third-party providers, including hospitals, healthcare providers, travel agencies, and accommodation providers. Each third party has its own policies and terms, which you must agree to separately when using their services. CareMedico does not guarantee the services of third-party providers.
                </p>
                </CardContent>
              </Card>
            </div>
            <div className="flex-1 mt-10 px-4 py-6 md:py-8" id="privacy">
              <Card className="max-w-full md:max-w-2xl lg:max-w-3xl mx-auto shadow-lg">
                <CardHeader>
                  <CardTitle className="text-3xl">5. Confidentiality and Privacy</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-500">
                <p>5.1 <strong>Privacy Policy:</strong> Our Privacy Policy governs how we collect, process, store, and protect your personal information. By using our services, you agree to the terms outlined in our Privacy Policy, which can be reviewed on our website.
                  </p>
                  <p>5.2 <strong>Data Security:</strong> CareMedico employs security measures to protect your personal information, but we cannot guarantee absolute security. You agree that CareMedico is not responsible for any unauthorized access to your data arising from your own actions or third-party misconduct.
                  </p>
                </CardContent>                 
              </Card>
            </div>
            <div className="flex-1 mt-10 px-4 py-6 md:py-8" id="limitation">
              <Card className="max-w-full md:max-w-2xl lg:max-w-3xl mx-auto shadow-lg">
                <CardHeader>
                  <CardTitle className="text-3xl">6. Limitation of Liability</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-500">
                <p>6.1 <strong>Disclaimer of Warranties:</strong> CareMedico provides services on an "as-is" and "as-available" basis. We make no warranties or representations regarding the quality or suitability of healthcare or related services provided by third-party healthcare providers.
                  </p>
                  <p>6.2 <strong>No Liability for Third-Party Services:</strong> CareMedico is not liable for any act, omission, or negligence of third-party providers. We do not guarantee any outcomes related to healthcare services or procedures arranged through our services.
                  </p>
                  <p>6.3 <strong>Limitation of Damages:</strong> To the maximum extent permitted by applicable law, CareMedico and its affiliates, officers, employees, or agents will not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of revenue, profits, or data, arising from or related to your use of our services.
                  </p>
                </CardContent>                 
              </Card>
            </div>
            <div className="flex-1 mt-10 px-4 py-6 md:py-8" id="property">
              <Card className="max-w-full md:max-w-2xl lg:max-w-3xl mx-auto shadow-lg">
                <CardHeader>
                  <CardTitle className="text-3xl">7. Intellectual Property</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-500">
                <p>7.1 <strong>Ownership:</strong> All intellectual property rights in the CareMedico brand, logo, website, and content (excluding third-party materials) are owned by CareMedico or its licensors. You agree not to use, modify, or reproduce our intellectual property without our prior written consent.
                  </p>
                  <p>7.2 <strong>User Content:</strong> By submitting content, feedback, or suggestions to us, you grant CareMedico a worldwide, non-exclusive, royalty-free license to use, reproduce, and display such content for promotional, operational, and development purposes.
                  </p>
                </CardContent>                 
              </Card>
            </div>
            <div className="flex-1 mt-10 px-4 py-6 md:py-8" id="termination">
              <Card className="max-w-full md:max-w-2xl lg:max-w-3xl mx-auto shadow-lg">
                <CardHeader>
                  <CardTitle className="text-3xl">8. Termination of Services</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-500">
                <p>8.1 <strong>Termination by User:</strong> You may discontinue your use of CareMedico’s services at any time. If you wish to terminate any agreements with third-party providers, you must directly contact those providers.
                </p>
                <p>8.2 <strong>Termination by CareMedico:</strong> CareMedico reserves the right to suspend or terminate your access to our services at our discretion if you breach these Terms or engage in unlawful activities.
                </p>
                </CardContent>                 
              </Card>
            </div>
            <div className="flex-1 mt-10 px-4 py-6 md:py-8" id="amendments">
              <Card className="max-w-full md:max-w-2xl lg:max-w-3xl mx-auto shadow-lg">
                <CardHeader>
                  <CardTitle className="text-3xl">9. Amendments</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-500">
                <p>9.1 <strong>Changes to Terms:</strong> CareMedico reserves the right to amend these Terms from time to time. Any changes will be effective upon posting on our website, with the “Last Updated” date reflecting the date of such updates. We encourage you to review these Terms periodically.
                </p>
                </CardContent>                 
              </Card>
            </div>
            <div className="flex-1 mt-10 px-4 py-6 md:py-8" id="law">
              <Card className="max-w-full md:max-w-2xl lg:max-w-3xl mx-auto shadow-lg">
                <CardHeader>
                  <CardTitle className="text-3xl">10. Governing Law and Dispute Resolution</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-500">
                <p>10.1 <strong>Governing Law:</strong> These Terms are governed by and construed in accordance with the laws of India, without regard to its conflict of laws principles.
                </p>
                <p>10.2 <strong>Dispute Resolution:</strong> Any disputes arising from or related to these Terms or your use of our services will be resolved through binding arbitration conducted in Noida, Uttar Pradesh, India, in accordance with the arbitration rules of the Indian Arbitration and Conciliation Act. 
                </p>
                </CardContent>                 
              </Card>
            </div>
            <div className="flex-1 mt-10 px-4 py-6 md:py-8" id="contact information">
              <Card className="max-w-full md:max-w-2xl lg:max-w-3xl mx-auto shadow-lg">
                <CardHeader>
                  <CardTitle className="text-3xl">11. Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-500">
                <p>For questions or concerns about these Terms, please contact us at:</p>
                <p><strong>CareMedico Medtech Private Limited</strong>  <br />
                B7 1st Floor,<br />  
                   Sector II, Gautam Buddha Nagar  <br />
                   Noida, Uttar Pradesh 201301  <br />
                   India  <br />
                   Email: admin@caremedico.com</p>
                </CardContent>                 
              </Card>
            </div>
      </div>

      
    </div>
    
  );
}
