import React from 'react'
import Logo from './Logo'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    // <footer className='bg-slate-200'>
    //   <div className='container mx-auto p-4'>
    //    <p className='text-center font-bold' title="Youtube Channel">Dynamic Coding with Amit</p>
    //   </div>
    // </footer>
    <footer className="bg-slate-200 py-8">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap justify-between text-center md:text-left">
      <div className="w-full md:w-1/4 mb-6">
        <h4 className="text-lg font-semibold mb-4">About Us</h4>
        <p className="text-gray-700">At PlainShirts, we believe in simplicity and elegance. Our collection of plain shirts is designed to offer comfort and style for every occasion. Explore our range and find your perfect fit today.</p>
      </div>
      
      <div className="w-full md:w-1/4 mb-6">
        <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
        <ul className="space-y-2">
          <li><a href="/help" className="text-gray-700 hover:underline">Help & FAQs</a></li>
          <li><a href="/returns" className="text-gray-700 hover:underline">Returns & Exchanges</a></li>
          <li><a href="/shipping" className="text-gray-700 hover:underline">Shipping Information</a></li>
          <li><a href="/contact" className="text-gray-700 hover:underline">Contact Us</a></li>
        </ul>
      </div>
      
      <div className="w-full md:w-1/4 mb-6">
        <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
        <p className="text-gray-700 mb-4">Stay connected and follow us on our social media channels:</p>
        <div className="flex justify-center md:justify-start space-x-4">
          <a href="https://facebook.com/yourpage" className="text-gray-700 hover:text-gray-900">Facebook</a>
          <a href="https://instagram.com/yourpage" className="text-gray-700 hover:text-gray-900">Instagram</a>
          <a href="https://twitter.com/yourpage" className="text-gray-700 hover:text-gray-900">Twitter</a>
        </div>
      </div>
      
      <div className="w-full md:w-1/4 mb-6">
        <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
        <p className="text-gray-700 mb-4">Sign up for our newsletter to receive updates on new arrivals, special offers, and more.</p>
        <form action="/subscribe" method="post" className="flex flex-col space-y-2">
          <input type="email" name="email" placeholder="Your email address" className="p-2 border border-gray-300 rounded-md"/>
          <button type="submit" className="p-2 bg-gray-800 text-white rounded-md hover:bg-gray-700">Subscribe</button>
        </form>
      </div>
    </div>
    
    <div className="border-t border-gray-300 pt-4 mt-8 text-center">
      <p className="text-gray-700 font-bold" title="plainshirts">&copy; 2024 PlainShirts. All rights reserved.</p>
      <p className="text-gray-700">Designed by IONIC</p>
    </div>
  </div>
</footer>

  )
}

export default Footer
