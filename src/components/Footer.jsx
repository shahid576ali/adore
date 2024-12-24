import { RiFacebookFill, RiInstagramLine, RiMailFill, RiMapPin2Fill, RiPhoneFill, RiTwitterFill, RiYoutubeFill } from '@remixicon/react';
import logo from '../assets/images/ADORE.png';

export default function Footer() {
  return (
    <footer className="bg-gray-800 bg-cover text-gray-300 p-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4 flex flex-col justify-between">
            <div className="flex items-center space-x-2">
              <img
                src={logo}
                alt="BoostFund"
                className="w-28"
              />
            </div>
            <p className="text-sm opacity-75">
              Come, join hands with us in fulfilling our social responsibility and spreading smiles.
            </p>
            <div className="flex space-x-4 items-center">
              <a href="#" className="hover:text-[#00ffdd] transition-colors" aria-label="Facebook">
                <RiFacebookFill />
              </a>
              <a href="#" className="hover:text-[#00ffdd] transition-colors" aria-label="Instagram">
                <RiInstagramLine />
              </a>
              <a href="#" className="hover:text-[#00ffdd] transition-colors" aria-label="Twitter">
                <RiTwitterFill />
              </a>
              <a href="#" className="hover:text-[#00ffdd] transition-colors" aria-label="YouTube">
                <RiYoutubeFill />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-white text-xl font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-[#00ffdd] transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#00ffdd] transition-colors">
                  Ask A Question
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#00ffdd] transition-colors">
                  Project Story
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#00ffdd] transition-colors">Mission</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#00ffdd] transition-colors">
                  Certificates
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#00ffdd] transition-colors">
                  Terms And Condition
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-xl font-semibold mb-6">Blog Posts</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-[#00ffdd] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#00ffdd] transition-colors">
                  Volunteer
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#00ffdd] transition-colors">
                  Happy Clients
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#00ffdd] transition-colors">
                  Project
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#00ffdd] transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#00ffdd] transition-colors">
                  Faq
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-xl font-semibold mb-6">Get in Touch with Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <RiMapPin2Fill className="text-[#ffffff] mt-1 flex-shrink-0" size={20} />
                <span>832 Thompson Drive, San Francisco CA 94107, United States</span>
              </li>
              <li className="flex items-center space-x-3">
                <RiPhoneFill className="text-[#ffffff] flex-shrink-0" size={20} />
                <span>+91 79804 60134</span>
              </li>
              <li className="flex items-center space-x-3">
                <RiMailFill className="text-[#ffffff] flex-shrink-0" size={20} />
                <span>info@adoreglobal.org</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-sm opacity-75 flex gap-6 items-center justify-center ">
          <p>Powered By Simtrak Solutions</p>
          <p>©Copyright adoreglobal.org</p>
        </div>
      </div>
    </footer>
  );
}
