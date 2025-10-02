import { Facebook, Instagram, Youtube, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-8">
          {/* Left Side Links (3 links left, 3 links right on mobile) */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="grid grid-cols-2 gap-2 text-gray-300 text-sm md:block">
              <li><a href="#home" className="hover:text-white">Home</a></li>
              <li><a href="#properties" className="hover:text-white">Properties</a></li>
              <li><a href="#gallery" className="hover:text-white">Gallery</a></li>
              <li><a href="#policies" className="hover:text-white">Policies</a></li>
              <li><a href="#faqs" className="hover:text-white">FAQs</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Newsletter + Social */}
          <div className="text-left md:text-right">
            <h4 className="font-bold mb-4">Let's stay in touch</h4>
            <p className="text-gray-300 text-sm mb-4">Sign up for our newsletter</p>
            <form className="flex gap-2 justify-start md:justify-end">
              {/* Add newsletter input here */}
            </form>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6 justify-start md:justify-end">
              <a href="https://www.facebook.com/jumeirahburjalarab" target="_blank" className="hover:text-primary">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/jumeirahburjalarab" target="_blank" className="hover:text-primary">
                <Instagram size={20} />
              </a>
              <a href="https://www.youtube.com/user/Jumeirah" target="_blank" className="hover:text-primary">
                <Youtube size={20} />
              </a>
              <a href="https://x.com/jumeirahgroup" target="_blank" className="hover:text-primary">
                <Twitter size={20} />
              </a>
              <a href="https://www.linkedin.com/company/jumeirah/" target="_blank" className="hover:text-primary">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom CopyRight */}
        <div className="text-center text-gray-400 text-sm mt-8">
          © {new Date().getFullYear()} Burj Al Arab Demo. All rights reserved. <br />
          Designed by <span className="text-white font-semibold">Avrx Tech.</span>
        </div>
      </div>
    </footer>
  )
}
