import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Star, ChevronLeft, ChevronRight, BadgeCheck, ArrowRight } from 'lucide-react';

const reviews = [
  { name: "Sobhita Vidiyala", date: "2 years ago", text: "I gave my broken Samsung Phone very old and online model for repair and they replaced it in half and gave. He even told the pros and cons of using which screen. He is not money minded by saying that original is only needed he will assess...", rating: 5 },
  { name: "Arvind R", date: "7 years ago", text: "One of the few trustworthy service centres around the IT corridor. A small shop but with highly trained technician who handles your gadget with utmost care. Responds transparently with what is going to be done and the costs involved before...", rating: 5 },
  { name: "Vibin Alex", date: "6 years ago", text: "I bought an iPhone 7 from Mr.Venkatesh. It was an amazing mobile and it was a second hand used mobile. And I have also serviced my mobile from his shop he gives...", rating: 5 },
  { name: "Akash Guru", date: "7 years ago", text: "I assure you that he is one of the best and genuine phone mechanic especially in the case of iPhone . Very gentle person to deal with customers and moreover very cost effective when compared to other shop. And main thing is he can collect and deliver your phone at your doorstep.", rating: 5 },
  { name: "Kalai Selvam", date: "a year ago", text: "Got my iphone back glass fixed here. Excellent service. Very friendly staff. Would recommend for all phone needs.", rating: 5 },
  { name: "Sairam Gurunathan", date: "7 years ago", text: "100% Trusted and worthy mobile service center. They take care of your gadgets with own risks and solve the issue ASAP with Pickup and Delivery the gadgets around the chennai city. I have never seen such a service center anywhere in chennai.", rating: 5 },
  { name: "Ranit Chakraborty", date: "5 years ago", text: "My phone screen broke, and this, being the middle of the pandemic, proved to be a difficult time to go and get the phone repaired. ...", rating: 5 },
  { name: "NEGI MANALI", date: "6 years ago", text: "I gave apple I phone for service to Mr.venkatesh( Sumithra cell city). He got the mobile from Manali and serviced the phone in Chennai.", rating: 5 },
  { name: "gowtham sarvesh", date: "5 years ago", text: "Customer friendly and supportive service. The device repair was done as promised. Highly ethical person who runs the shop with focus on customer experience,all UPI payment options available.", rating: 5 },
  { name: "Sachin Narendran", date: "7 years ago", text: "Trust worthy and Correct pricing. Phone was serviced fast. They tell you what exactly the issue is with phone with utmost transparency. Highly satisfied with their service", rating: 5 },
  { name: "Akash Perumal", date: "2 years ago", text: "Good skilled work. And promising time keeper I have moto g6 give that shop morning he's gave by evening with faster", rating: 5 },
  { name: "RAJ KAMAL", date: "2 years ago", text: "Genuine Mobile technician, very transparent on spares replace and bill it for what he serviced.Impressed with his service and will be his regular customer from now on", rating: 5 },
  { name: "Eldred Johnstone", date: "7 years ago", text: "Excellent apple phone service.. have not had any issues with my phones.. prompt delivery.. warranty guaranteed.. customer friendly..", rating: 5 },
  { name: "Divya Shanmugam", date: "7 years ago", text: "Extremely trustworthy place with great customer care . Value for money and great place for iPhone service . Speedy service is the best part of the place .", rating: 5 },
  { name: "Balaji Iyer", date: "4 years ago", text: "Good place to get your mobile repaired/serviced. Knowledgeable and courteous people!", rating: 5 },
  { name: "Nithin G", date: "4 years ago", text: "One of the best service in Sholinganllur ....almost all phones are serviced here ...im happy with their quick service", rating: 5 },
  { name: "Nithya Sundar", date: "7 years ago", text: "Place where u can service ur mobile.. quick service n transperancy n quality is their added advantage.. Cost effective too..", rating: 5 },
  { name: "Hari Prasad", date: "7 years ago", text: "guarantee service .... Best price have changed many display for me and my friends no issue with anything..", rating: 5 },
  { name: "Vivek Nagarajan", date: "7 years ago", text: "Great service by Venkatesan brother !! Replaced screen display in half an hour 🙏", rating: 5 },
  { name: "Ranjith kumar", date: "5 years ago", text: "Excellent Person in support and service. Very reasonable service charges.", rating: 5 },
  { name: "David Francis", date: "6 years ago", text: "Excellent and quick service. Will recommend to my friends.", rating: 5 },
  { name: "A R A V I N D J A Y A P R A K A S H", date: "5 years ago", text: "Good Service. Super fast delivery", rating: 5 },
  { name: "Kiran Karthik", date: "2 years ago", text: "Best Shop For Apple Products", rating: 5 }
];

export default function Reviews() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="reviews" className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-secondary dark:text-white">
            Trusted by Customers
          </h2>
          <div className="flex items-center gap-4">
            <div className="flex text-yellow-500">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
            </div>
            <p className="text-gray-600 dark:text-gray-400 font-medium">
              4.9 Rating based on 75+ Google Reviews
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <button
            onClick={scrollPrev}
            className="w-12 h-12 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-white/5 transition-colors text-secondary dark:text-white"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={scrollNext}
            className="w-12 h-12 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-white/5 transition-colors text-secondary dark:text-white"
            aria-label="Next review"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-4 md:-ml-6">
          {reviews.map((review, index) => (
            <div key={index} className="flex-[0_0_85%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] min-w-0 pl-4 md:pl-6">
              <div className="glass bg-white/80 dark:bg-[#111]/80 rounded-3xl p-8 border border-gray-100 dark:border-white/5 h-full flex flex-col hover:-translate-y-2 transition-transform duration-300">
                <div className="flex text-yellow-500 mb-6">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-8 flex-grow leading-relaxed italic">
                  "{review.text}"
                </p>

                <div className="flex items-center gap-4 pt-4 border-t border-gray-100 dark:border-white/10">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-cyan-500 flex items-center justify-center text-white font-bold text-lg">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary dark:text-white flex items-center gap-1">
                      {review.name}
                      <BadgeCheck className="w-4 h-4 text-primary dark:text-cyan-400" />
                    </h4>
                    <span className="text-xs text-gray-500">{review.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 text-center">
        <button className="px-6 py-3 rounded-full border border-gray-200 dark:border-white/20 font-medium hover:bg-gray-50 dark:hover:bg-white/5 transition-colors text-secondary dark:text-white text-sm inline-flex items-center gap-2">
          View All Google Reviews <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
