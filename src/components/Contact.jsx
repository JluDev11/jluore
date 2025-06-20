import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-12 px-4 bg-white text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
      <p className="text-gray-600 mb-8">Interested in working with us? Send us a message!</p>
      <form className="max-w-xl mx-auto space-y-4 text-left">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-2 border rounded-md"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-2 border rounded-md"
        />
        <textarea
          placeholder="Your Message"
          className="w-full px-4 py-2 border rounded-md"
          rows="5"
        ></textarea>
        <button
          type="submit"
          className="bg-green-700 text-white px-6 py-2 rounded-md hover:bg-green-800"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
