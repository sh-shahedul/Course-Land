import React from 'react';
import { FaTwitter, FaYoutube, FaLinkedin, FaInstagram, FaFacebookF } from 'react-icons/fa';
import logo from '../../assets/logo.png'
const Footer = () => {
    return (
        <footer className='bg-gray-900 text-white pt-12'>
            <div className="max-w-screen-2xl mx-auto px-6 sm:px-10 lg:px-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                    {/* About + Resources */}
                    <div className='space-y-6'>
                        <img className='w-40' src={logo} alt="" />
                        <p className="text-gray-300">
                            CourseLand is your hub to explore, learn, and grow. Discover top courses, connect with instructors, and achieve your learning goals in a fun and interactive way.
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <h4 className="text-lg font-semibold mb-2">Resources</h4>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="hover:text-white cursor-pointer transition-colors">Help Center</li>
                                    <li className="hover:text-white cursor-pointer transition-colors">Privacy Policy</li>
                                    <li className="hover:text-white cursor-pointer transition-colors">Terms of Service</li>
                                    <li className="hover:text-white cursor-pointer transition-colors">Blog</li>
                                    <li className="hover:text-white cursor-pointer transition-colors">FAQs</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold mb-2">Company</h4>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="hover:text-white cursor-pointer transition-colors">About Us</li>
                                    <li className="hover:text-white cursor-pointer transition-colors">Contact</li>
                                    <li className="hover:text-white cursor-pointer transition-colors">Careers</li>
                                    <li className="hover:text-white cursor-pointer transition-colors">Press</li>
                                    <li className="hover:text-white cursor-pointer transition-colors">Partnerships</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Social Section */}
                    <div className='flex flex-col justify-between bg-gray-800 p-6 rounded-lg'>
                        <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                        <p className="text-gray-300 mb-4">Stay connected with us on social media for latest updates and courses.</p>
                        <div className="flex gap-5 text-white text-2xl mt-auto">
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#1DA1F2] transition-transform transform hover:scale-110">
                                <FaTwitter size={28} />
                            </a>
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-transform transform hover:scale-110">
                                <FaYoutube size={28} />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition-transform transform hover:scale-110">
                                <FaLinkedin size={28} />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-transform transform hover:scale-110">
                                <FaInstagram size={28} />
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-transform transform hover:scale-110">
                                <FaFacebookF size={28} />
                            </a>
                        </div>
                    </div>

                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 mt-10 pt-6 text-gray-400 text-sm text-center">
                    &copy; {new Date().getFullYear()} CourseLand. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;

