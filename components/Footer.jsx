"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { SiInstagram, SiThreads, SiYoutube, SiFacebook } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

const socialLinks = [
  { name: "Facebook", href: "#", Icon: SiFacebook },
  { name: "X-twitter", href: "#", Icon: FaXTwitter },
  { name: "Youtube", href: "#", Icon: SiYoutube },
  { name: "Instagram", href: "#", Icon: SiInstagram },
  { name: "Threads", href: "#", Icon: SiThreads },
];

export default function Footer() {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="block">
              <Image
                src="/images/stoxii.png"
                alt="Stoxii"
                width={120}
                height={40}
              />
            </Link>
            <div className="flex items-center gap-4">
              {socialLinks.map(({ name, href, Icon }) => (
                <Link
                  key={name}
                  href={href}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-white hover:bg-blue-50 hover:text-blue-600 transition-colors text-gray-600"
                >
                  <Icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span>Made with</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-red-500"
              >
                ❤️
              </motion.span>
              <span>in India</span>
            </div>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="font-semibold mb-4">Important Links</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <Link href="/refund-policy" className="hover:text-blue-600">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-blue-600">
                  Terms & Condition
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-blue-600">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <Link href="/why-stoxii" className="hover:text-blue-600">
                  Why Stoxii
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-blue-600">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-600">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-blue-600">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm text-gray-600">
              <p className="flex items-start gap-2">
                <span>📱</span>
                <span>Customer Support: +917892699097</span>
              </p>
              <p className="flex items-start gap-2">
                <span>✉️</span>
                <a
                  href="mailto:Support@stoxii.com"
                  className="hover:text-blue-600"
                >
                  Support@stoxii.com
                </a>
              </p>
              <p className="flex items-start gap-2">
                <span>🏢</span>
                <span>KH Infantry Road, 36, Bangalore, KA 560001 India</span>
              </p>
            </div>
          </div>
        </div>

        {/* Disclaimers */}
        <div className="border-t border-gray-200 pt-8 space-y-4 text-xs text-gray-500">
          <p>
            Disclaimer: Stoxii is a leading platform with SEBI-registered
            analysts. Investments in the securities market involve risks. Please
            read all related documents carefully before investing. While Stoxii
            strives to provide valuable updates, we do not guarantee the
            performance of our services or assure any returns for investors.
          </p>
          <p>
            Disclaimer and Authorization: By submitting your details, you
            authorize Stoxii to contact you via phone and email, even if your
            number is registered under the Do Not Disturb (DND) list.
          </p>
          <p>
            Investments in securities market are subject to market risk, read
            all the related documents carefully before investing | Registration
            granted by SEBI and certification from NISM in no way guarantee
            performance of the intermediary or provide any assurance of returns
            to investors
          </p>
        </div>
      </div>
    </footer>
  );
}
