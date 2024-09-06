import {
  ChevronDown,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

const Footer = () => (
  <footer className="bg-gray-900 text-white py-8">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-between">
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <div className="flex items-center mb-4">
            <div className="bg-blue-500 rounded-full p-2 mr-2">
              <span className="text-xl font-bold">F</span>
            </div>
            <span className="text-xl font-bold">FurniFlex</span>
          </div>
        </div>
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-4">About US</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-300">
                Master Plan
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Jobs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Invest
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Pressroom
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-4">Explore EEVE</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-300">
                Unlock my Robot Power
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Starlight
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Robot Platform
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                EEVE Roadmap
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/4">
          <h3 className="text-lg font-semibold mb-4">Community & Support</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-300">
                Willow X Community
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Developer & Maker Access
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Special Cases
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-8 flex flex-wrap justify-between items-center">
        <div className="flex space-x-4 mb-4 md:mb-0">
          <Facebook size={20} />
          <Instagram size={20} />
          <Twitter size={20} />
          <Linkedin size={20} />
        </div>
        <div className="flex flex-wrap space-x-4">
          <a href="#" className="hover:text-gray-300">
            March22 Recap
          </a>
          <a href="#" className="hover:text-gray-300">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-gray-300">
            General Terms
          </a>
          <a href="#" className="hover:text-gray-300">
            Contact
          </a>
        </div>
        <div className="w-full md:w-auto mt-4 md:mt-0">
          <span className="flex items-center">
            <img
              src="/placeholder.svg?height=20&width=30"
              alt="US Flag"
              className="mr-2"
            />
            United States (English)
            <ChevronDown size={16} className="ml-1" />
          </span>
        </div>
      </div>
      <div className="text-center mt-8 text-sm text-gray-500">
        EEVE © 2024. All rights reserved
      </div>
    </div>
  </footer>
);
export default Footer;
