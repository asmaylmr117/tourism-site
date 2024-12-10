import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
const ContactUs = () => (
  <div className="">
    <br />
    <br />
    <h1 className="text-6xl  text-center   font-bold">Get in Touch</h1>
    <br />
    <p className="mt-4 text-center text-lg md:text-xl w-full md:w-2/3 mx-auto line-clamp-5 md:line-clamp-3">We would love to hear from you! If you have any comments or suggestions about our website or our tours, please don't hesitate to get in touch. We are always looking for ways to improve and make your travel experience even better.</p>
    <br />
    <div className="p-6 dark:bg-gray-800 md:p-10 lg:p-16 bg-gray-100 rounded-lg shadow-md max-w-4xl mx-auto border-1 border:bg-gray dark:border:bg-gray-900  ">
      <div >
        <h2 className="text-2xl dark:text-white    text-center lg:text-4xl font-bold mb-6 text-gray-800">Contact us</h2>
      </div>
      <form className="space-y-6">
        {/* Name Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block dark:text-white  text-gray-600 font-medium mb-1">First Name</label>
            <input
              type="text"
              placeholder="Input your First Name in Here"
              className="w-full border-2 border-gray-400 rounded-lg px-4 py-2 text-gray-800"
            />
          </div>
          <div>
            <label className="block dark:text-white   text-gray-600 font-medium mb-1">Last Name</label>
            <input
              type="text"
              placeholder="Input your Last Name in Here"
              className="w-full border-2 border-gray-400 rounded-lg px-4 py-2 text-gray-800"
            />
          </div>
        </div>
        {/* Email Field */}
        <div>
          <label className="block dark:text-white   text-gray-600 font-medium mb-1">Email Address</label>
          <input
            type="email"
            placeholder="Input your Email Address in Here"
            className="w-full border-2 border-gray-400 rounded-lg px-4 py-2 text-gray-800"
          />
        </div>
        {/* Phone Number */}
        <div>
          <label className="block dark:text-white  text-gray-600 font-medium mb-1">Phone Number</label>
          <div className="flex">
            <select className="border-2 border-gray-400 rounded-l-lg px-4 py-2 bg-gray-100 text-gray-800">
              <option>+250</option>
              <option>+20</option>
              <option>+96</option>
            </select>
            <input
              type="tel"
              placeholder="Input your Phone Number in Here"
              className="flex-1 border-2 border-b border-r border-gray-400 rounded-r-lg px-4 py-2 text-gray-800"
            />
          </div>
        </div>
        {/* Message Field */}
        <div>
          <label className="block dark:text-white  text-gray-600 font-medium mb-1">Message</label>
          <textarea
            placeholder="Write a message"
            className="w-full border-2 border-gray-400 rounded-lg px-4 py-2 text-gray-800"
            rows="4"
          ></textarea>
        </div>
        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="bg-yellow-600 hover:bg-yellow-700 text-white font-medium py-2 px-6 rounded-lg"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
    <br />
    <br />
    {/* media */}
    <section class="grid sm:grid-cols-1 lg:grid-cols-3 gap-2 p-4 bg-white-100 justify-center items-center">

  <div class="bg-white dark:bg-gray-800  shadow-md rounded-lg p-8 border hover:bg-green-300 max-w-[300px] mx-20">
    <h2 class="text-xl font-bold mb-4 text-gray-800 dark:text-white ">Social media</h2>
    <div class="flex justify-center gap-2 ">
      <div class="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full text-gray-600 hover:bg-white cursor-pointer">
        <FaFacebookF />
      </div>
      <div class="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full text-gray-600 hover:bg-white cursor-pointer">
        <FaTwitter />
      </div>
      <div class="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full text-gray-600 hover:bg-white cursor-pointer">
        <FaLinkedinIn />
      </div>
      <div class="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full text-gray-600 hover:bg-white cursor-pointer">
        <FaInstagram />
      </div>
    </div>
  </div>

  <div class="bg-white dark:bg-gray-800   shadow-md rounded-lg p-6 border hover:bg-green-300 max-w-[300px] mx-20">
    <h2 class="text-xl dark:text-white   font-bold mb-4 text-gray-800">Email & phone</h2>
    <p class="flex items-center gap-2 mb-2">
      <span class="text-green-600 text-lg">📞</span> +250 784 688 641
    </p>
    <p class="flex items-center gap-2">
      <span class="text-blue-600 text-lg">📧</span> bbontemma@gmail.com
    </p>
  </div>

  <div class="bg-white dark:bg-gray-800  shadow-md rounded-lg p-8 border hover:bg-green-300 max-w-[300px] mx-20">
    <h2 class="text-xl dark:text-white font-bold mb-4 text-gray-800">Address</h2>
    <p class="text-gray-700 dark:text-white">kk 600 st</p>
    <p class="text-gray-700 dark:text-white">Kigali, Rwanda</p>
  </div>

</section>


<br />
<br />

  </div>
);

export default ContactUs;
