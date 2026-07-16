import React from 'react';

export default function AboutSEOContent() {
  return (
    <section className="container mx-auto px-6 py-12">
      <article className="prose dark:prose-invert max-w-none">
        <h2 className="text-3xl font-bold mb-6">Expert Mobile Phone & Apple Device Repair in Sholinganallur, Chennai</h2>
        <p className="mb-4">
          Welcome to Sumithra Cell City, the most trusted name for mobile phone repair and Apple product servicing in Sholinganallur, Chennai. 
          Situated on the bustling Old Mahabalipuram Road (OMR), our service center has been the go-to destination for tech-savvy professionals 
          and local residents alike since our inception in 2005. Over the years, we have built a reputation based on trust, transparency, and 
          unmatched technical expertise.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Our Journey as an Apple Service Centre</h3>
        <p className="mb-4">
          Our journey began with a simple mission: to provide high-quality mobile repair services at fair prices. As technology evolved, 
          so did we. Recognizing the growing demand for specialized Apple device repair in Chennai, we invested heavily in advanced diagnostic 
          tools and comprehensive training for our technicians. Today, our Apple Service Centre is fully equipped to handle everything from 
          routine iPhone screen replacement and battery replacement to intricate motherboard repair and water damage recovery for all Apple 
          devices.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Why We Are the Preferred Mobile Repair Service on OMR</h3>
        <p className="mb-4">
          What sets Sumithra Cell City apart from other mobile repair shops in Chennai is our unwavering commitment to quality. We understand 
          that your smartphone is an essential part of your daily life. Whether you need a quick display replacement or a complex software 
          troubleshooting session, our express repair services ensure minimal downtime. We proudly maintain a 4.9 Google Rating, a testament 
          to our dedication to using genuine spare parts and providing a reliable warranty on repairs.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Comprehensive Mobile Repair Services</h3>
        <p className="mb-4">
          While we are renowned for our Apple expertise, our skilled technicians are equally proficient in servicing all major mobile brands 
          including Samsung, OnePlus, Google Pixel, Vivo, Oppo, and Xiaomi. Our comprehensive services include:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Display Replacement:</strong> Restoring cracked or unresponsive screens with OEM-grade parts.</li>
          <li><strong>Battery Replacement:</strong> Addressing rapid battery drain and unexpected shutdowns.</li>
          <li><strong>Water Damage Repair:</strong> Advanced ultrasonic cleaning and component-level recovery.</li>
          <li><strong>Motherboard Repair:</strong> Expert micro-soldering for logic board issues.</li>
          <li><strong>Charging Port Repair:</strong> Fixing loose connections and charging failures.</li>
        </ul>

        <p className="mt-8 mb-4">
          At Sumithra Cell City, we believe in honest diagnosis and clear communication. When you bring your device to our Sholinganallur 
          store, our technicians will explain the issue in plain terms and provide an upfront quote before any work begins. 
          <a href="/contact" aria-label="Contact Sumithra Cell City" className="text-primary hover:underline ml-1">Contact us today</a> to 
          experience the best mobile repair service in Chennai.
        </p>
      </article>

      {/* SEO FAQs */}
      <div className="mt-16" itemScope itemType="https://schema.org/FAQPage">
        <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions About Our Services</h2>
        
        <div className="space-y-6">
          <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
            <h3 className="text-xl font-semibold" itemProp="name">How long has Sumithra Cell City been in business?</h3>
            <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
              <p className="mt-2 text-gray-600 dark:text-gray-400" itemProp="text">We have been proudly serving customers in Sholinganallur, Chennai since 2005, bringing over 18 years of experience to every repair.</p>
            </div>
          </div>

          <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
            <h3 className="text-xl font-semibold" itemProp="name">Are your technicians certified for Apple device repair?</h3>
            <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
              <p className="mt-2 text-gray-600 dark:text-gray-400" itemProp="text">Yes, our technicians undergo rigorous training and have extensive experience specifically in Apple product servicing and repair.</p>
            </div>
          </div>

          <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
            <h3 className="text-xl font-semibold" itemProp="name">Do you use original parts for repairs?</h3>
            <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
              <p className="mt-2 text-gray-600 dark:text-gray-400" itemProp="text">We use genuine OEM parts whenever possible, and always use the highest quality aftermarket parts when OEM is unavailable, to ensure optimal performance.</p>
            </div>
          </div>

          <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
            <h3 className="text-xl font-semibold" itemProp="name">What is your warranty policy?</h3>
            <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
              <p className="mt-2 text-gray-600 dark:text-gray-400" itemProp="text">We offer a reliable warranty on our repair services and parts, giving you peace of mind after your device is serviced.</p>
            </div>
          </div>

          <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
            <h3 className="text-xl font-semibold" itemProp="name">Can I wait while my phone is being repaired?</h3>
            <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
              <p className="mt-2 text-gray-600 dark:text-gray-400" itemProp="text">Yes! Many common repairs like battery replacement and screen replacement can be completed while you wait in our comfortable OMR store.</p>
            </div>
          </div>

          <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
            <h3 className="text-xl font-semibold" itemProp="name">Do you offer diagnostic services?</h3>
            <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
              <p className="mt-2 text-gray-600 dark:text-gray-400" itemProp="text">Absolutely. We provide comprehensive diagnostic services to identify the exact issue with your mobile device before recommending a repair.</p>
            </div>
          </div>

          <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
            <h3 className="text-xl font-semibold" itemProp="name">Is my data safe during repair?</h3>
            <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
              <p className="mt-2 text-gray-600 dark:text-gray-400" itemProp="text">We take your privacy seriously. Your data remains strictly confidential, and we only access what is necessary to verify the repair.</p>
            </div>
          </div>

          <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
            <h3 className="text-xl font-semibold" itemProp="name">Do you repair Android phones as well?</h3>
            <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
              <p className="mt-2 text-gray-600 dark:text-gray-400" itemProp="text">Yes, we are experts in repairing all major Android brands, including Samsung, OnePlus, Vivo, Oppo, and Xiaomi.</p>
            </div>
          </div>

          <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
            <h3 className="text-xl font-semibold" itemProp="name">What forms of payment do you accept?</h3>
            <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
              <p className="mt-2 text-gray-600 dark:text-gray-400" itemProp="text">We accept all major credit/debit cards, UPI payments, and cash at our Sholinganallur service centre.</p>
            </div>
          </div>

          <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
            <h3 className="text-xl font-semibold" itemProp="name">How do I get a quote for a repair?</h3>
            <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
              <p className="mt-2 text-gray-600 dark:text-gray-400" itemProp="text">You can call us, send a message on WhatsApp, or visit our store in person for a quick and transparent repair quote.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
