import Link from "next/link"
import { GraduationCap, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* School Info */}
          <div className="space-y-4 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start space-x-2">
              <GraduationCap className="h-6 w-6 sm:h-8 sm:w-8 text-blue-400" />
              <span className="text-lg sm:text-xl font-bold">Brightwood Elementary</span>
            </div>
            <p className="text-gray-300 text-sm sm:text-base">
              Nurturing young minds and building bright futures through innovative education and community engagement.
            </p>
            <div className="flex justify-center sm:justify-start space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/admissions"
                  className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base"
                >
                  Admissions
                </Link>
              </li>
              <li>
                <Link
                  href="/academics"
                  className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base"
                >
                  Academics
                </Link>
              </li>
              <li>
                <Link href="/staff" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">
                  Staff Directory
                </Link>
              </li>
              <li>
                <Link
                  href="/policies"
                  className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base"
                >
                  Policies
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/events" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">
                  School Calendar
                </Link>
              </li>
              <li>
                <Link
                  href="/lunch-menu"
                  className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base"
                >
                  Lunch Menu
                </Link>
              </li>
              <li>
                <Link
                  href="/transportation"
                  className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base"
                >
                  Transportation
                </Link>
              </li>
              <li>
                <Link
                  href="/parent-portal"
                  className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base"
                >
                  Parent Portal
                </Link>
              </li>
              <li>
                <Link href="/library" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">
                  Library
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start justify-center sm:justify-start space-x-2">
                <MapPin className="h-4 w-4 text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  123 Education Lane
                  <br />
                  Brightwood, ST 12345
                </span>
              </div>
              <div className="flex items-center justify-center sm:justify-start space-x-2">
                <Phone className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">(555) 123-4567</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start space-x-2">
                <Mail className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">info@brightwood.edu</span>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-xs sm:text-sm text-gray-400">
                Office Hours:
                <br />
                Monday - Friday: 8:00 AM - 4:00 PM
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-gray-400 text-xs sm:text-sm">
            © {new Date().getFullYear()} Brightwood Elementary School. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
