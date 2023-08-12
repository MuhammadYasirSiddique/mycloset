import React from "react";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="flex justify-center items-center mb-10 mx-10 lg:mx-20 h-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <div className="mb-6 md:mb-0 col-span-2 lg:col-span-2">
          <h1 className="font-serif text-2xl">
            My <strong>Closet</strong>
          </h1>
          <br />
          <div className="">
            Small, artisan label that offers a thoughtfully curated collection
            of high-quality everyday essentials made.
          </div>
          <br />
          <div className="flex gap-x-4 justify-center md:justify-start">
            <Link href="/">
              <div className="bg-slate-200 p-4 rounded-lg">
                <FaTwitter />
              </div>
            </Link>
            <Link href="/">
              <div className="bg-slate-200 p-4 rounded-lg">
                <FaFacebookF />
              </div>
            </Link>
            <Link href="/">
              <div className="bg-slate-200 p-4 rounded-lg">
                <FaLinkedinIn />
              </div>
            </Link>
          </div>
        </div>
        <div className="mb-6 md:mb-0">
          <h1 className="font-serif text-2xl">Company</h1>
          <br />
          <p>About</p>
          <p>Terms of Use</p>
          <p>Privacy Policy</p>
          <p>How it Works</p>
          <p>Contact Us</p>
        </div>
        <div className="mb-6 md:mb-0">
          <h1 className="font-serif text-2xl">Support</h1>
          <br />
          <p>Support Center</p>
          <p>24h Service</p>
          <p>Quick Chat</p>
        </div>
        <div>
          <h1 className="font-serif text-2xl">Contact</h1>
          <br />
          <p>WhatsApp</p>
          <p>Support</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
