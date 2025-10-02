"use client"
import { useState } from "react"
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import PropertyCard from '../components/PropertyCard'
import Footer from '../components/Footer'

export default function Home() {
  // Suites data
  const initialProperties = [
    {title:'Royal Suite', price:'Starting AED 30,000/night', image:'/images/suite1.avif', features:['Sea View','3 Bedrooms','Private Butler']},
    {title:'Ocean Suite', price:'Starting AED 18,000/night', image:'/images/suite2.avif', features:['Panoramic View','2 Bedrooms']},
    {title:'Deluxe Room', price:'Starting AED 6,000/night', image:'/images/suite3.avif', features:['King Bed','Balcony']}
  ]
  const moreProperties = [
    {title:'Executive Suite', price:'Starting AED 12,000/night', image:'/images/suite4.avif', features:['City View','2 Bedrooms','Living Room']},
    {title:'Presidential Suite', price:'Starting AED 40,000/night', image:'/images/suite5.avif', features:['Panoramic Sea View','4 Bedrooms','Private Pool']},
    {title:'Luxury Villa', price:'Starting AED 50,000/night', image:'/images/suite6.avif', features:['Private Beach','5 Bedrooms','Jacuzzi']},
    {title:'Penthouse', price:'Starting AED 35,000/night', image:'/images/suite7.avif', features:['Skyline View','3 Bedrooms','Private Elevator']},
    {title:'Garden Suite', price:'Starting AED 15,000/night', image:'/images/suite8.avif', features:['Garden View','2 Bedrooms','Terrace']}
  ]
  const [showMoreSuites, setShowMoreSuites] = useState(false)
  const properties = showMoreSuites ? [...initialProperties, ...moreProperties] : initialProperties

  // Gallery data
  const initialGallery = [
    "/images/gallery1.jpg","/images/gallery2.png","/images/gallery3.avif","/images/gallery4.avif",
    "/images/gallery5.avif","/images/gallery6.jpg","/images/gallery7.avif","/images/gallery8.avif"
  ]
  const moreGallery = [
    "/images/gallery9.jpg","/images/gallery10.webp","/images/gallery11.jpg","/images/gallery12.jpg",
    "/images/gallery13.avif","/images/gallery14.avif","/images/gallery15.avif","/images/gallery16.avif",
    "/images/gallery17.avif","/images/gallery18.avif"
  ]
  const [showMoreGallery, setShowMoreGallery] = useState(false)
  const gallery = showMoreGallery ? [...initialGallery, ...moreGallery] : initialGallery

  // Policies
  const policies = [
    {title:"Check-in", detail:"From 16:00."},
    {title:"Check-out", detail:"Until 12:00."},
    {title:"Cancellation/repayment", detail:"Please refer to the terms & conditions of the required rate."},
    {title:"Guests with special needs", detail:"Support services available. Contact Concierge for details."},
    {title:"Children and extra beds", detail:"Children below 11 stay free. Extra beds at additional charge."},
    {title:"Pool Access", detail:"Saltwater infinity pool adults-only. Children may use freshwater pool."},
    {title:"Smoking", detail:"Fee if smoking in non-smoking areas: AED 5,500 to 10,000 depending on suite."},
    {title:"Cash Payments", detail:"Limit AED 100,000 per stay (individual), AED 200,000 per stay (groups)."},
    {title:"Waterpark", detail:"Complimentary access to Wild Wadi Waterpark™."},
    {title:"Parking Facilities", detail:"Parking depends on suite. Extra cars AED 350/day."},
    {title:"Porte Cochere Parking", detail:"Charge of AED 490 per vehicle."},
    {title:"Parking for Non-residents", detail:"After 5:00 PM AED 500. Without ticket AED 250."},
    {title:"Pets", detail:"Not permitted."},
  ]
  const [showPolicies, setShowPolicies] = useState(false)

  // FAQs
  const faqs = [
    {q:"Why is Jumeirah Burj Al Arab so famous?", a:"Like a sail across the Arabian Gulf, it represents luxury and iconic design."},
    {q:"Where is Jumeirah Burj Al Arab located?", a:"On its own island 280m off Dubai’s shores, connected via bridge."},
    {q:"What dining options are available?", a:"Nine restaurants including SAL, Al Muntaha, Bab Al Yam, Gilt, Skyview Lounge, etc."},
    {q:"Is there a swimming pool?", a:"Yes, Terrace Pool with luxury cabanas + Talise Spa indoor pool."},
    {q:"Is there a spa?", a:"Yes, Talise Spa with world-class treatments."},
    {q:"What are the check-in/check-out times?", a:"Check-in 16:00, Check-out 12:00."},
    {q:"How can I enhance my stay?", a:"Exclusive offers, spa, yacht charters, Inside Burj Al Arab tour, turtle sanctuary."},
    {q:"Do all suites have ocean views?", a:"Yes, every suite overlooks the Arabian Gulf."},
    {q:"How many suites are there?", a:"198 exclusive suites with 24-hour butler service."},
    {q:"Can I check in online?", a:"Yes, via the Jumeirah App."},
    {q:"What accommodation options are available?", a:"One Bedroom Suite, Panoramic Suite, Club Suite, Two Bedroom Suite, Diplomatic Three Bedroom Suite, etc."}
  ]
  const [showFaqs, setShowFaqs] = useState(false)

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />

        {/* Suites Section */}
        <section id="properties" className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold">Featured Suites</h2>
          <p className="text-gray-600 mt-2">Hand-picked luxury suites with exclusive amenities.</p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((p,i)=>(<PropertyCard key={i} {...p}/>))}
          </div>
          <div className="mt-10 flex justify-center">
            <button 
              onClick={()=>setShowMoreSuites(!showMoreSuites)}
              className="px-6 py-3 bg-black text-white rounded-lg shadow hover:bg-gray-800 transition"
            >
              {showMoreSuites ? "Show Less Suites" : "More Suites"}
            </button>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold">Gallery</h2>
            <p className="text-gray-600 mt-2">A glimpse of the interiors and views.</p>
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
              {gallery.map((src, i) => (
                <div key={i} className="h-40 rounded-md overflow-hidden">
                  <img src={src} alt={`Gallery ${i+1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                </div>
              ))}
            </div>
            <div className="mt-10 flex justify-center">
              <button 
                onClick={()=>setShowMoreGallery(!showMoreGallery)}
                className="px-6 py-3 bg-black text-white rounded-lg shadow hover:bg-gray-800 transition"
              >
                {showMoreGallery ? "Show Less Gallery" : "More Gallery"}
              </button>
            </div>
          </div>
        </section>

        {/* Hotel Policies */}
<section id="policies" className="max-w-7xl mx-auto px-6 py-16">
  <h2 className="text-3xl font-bold text-center">Hotel Policies & Information</h2>
  {showPolicies && (
    <ul className="mt-6 space-y-4 text-gray-700">
      {policies.map((p,i)=>(<li key={i}><strong>{p.title}:</strong> {p.detail}</li>))}
    </ul>
  )}
  <div className="mt-10 flex justify-center">
    <button 
      onClick={()=>setShowPolicies(!showPolicies)}
      className="px-6 py-3 bg-black text-white rounded-lg shadow hover:bg-gray-800 transition"
    >
      {showPolicies ? "Hide Policies" : "See More"}
    </button>
  </div>
</section>

{/* FAQs */}
<section id="faqs" className="bg-gray-50 py-16">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-3xl font-bold text-center">FAQs</h2>
    {showFaqs && (
      <div className="mt-6 space-y-6">
        {faqs.map((f,i)=>(
          <div key={i}>
            <h4 className="font-semibold">{f.q}</h4>
            <p className="text-gray-600">{f.a}</p>
          </div>
        ))}
      </div>
    )}
    <div className="mt-10 flex justify-center">
      <button 
        onClick={()=>setShowFaqs(!showFaqs)}
        className="px-6 py-3 bg-black text-white rounded-lg shadow hover:bg-gray-800 transition"
      >
        {showFaqs ? "Hide FAQs" : "See FAQ"}
      </button>
    </div>
  </div>
</section>


        
 {/* Contact Section */}
<section id="contact" className="bg-gray-50 py-16">
  <div className="max-w-3xl mx-auto text-center px-6">
    <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
    
    <div className="space-y-6 text-gray-700 text-lg">
      <div>
        <h4 className="font-semibold">Address</h4>
        <p>Jumeirah Burj Al Arab, Jumeirah Street, PO Box 74147, Dubai, UAE</p>
      </div>

      <div>
        <h4 className="font-semibold">Email</h4>
        <p>
          <a href="mailto:baainfo@jumeirah.com" className="hover:underline">
            baainfo@jumeirah.com
          </a>
        </p>
      </div>

      <div>
        <h4 className="font-semibold">Telephone</h4>
        <p>
          <a href="tel:+97143017777" className="hover:underline">
            +971 4 301 7777
          </a>
        </p>
      </div>
    </div>
  </div>
</section>

      </main>
      <Footer />
    </div>
  )
}
