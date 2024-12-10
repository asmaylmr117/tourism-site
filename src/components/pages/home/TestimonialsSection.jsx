import React from "react";

const TestimonialsSection = ({ title, subtitle, testimonials }) => {
  return (
    <section className="text-center py-8">
  <h3 className="text-yellow-600 text-lg text-2xl font-semibold mb-2">{subtitle}</h3>
  <h2 className="text-2xl font-bold mb-6">{title}</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 max-w-6xl mx-auto ">
    {testimonials.map((testimonial, index) => (
      <div
        key={index}
        className="bg-white dark:bg-gray-700  shadow-lg rounded-lg p-6 flex flex-col items-center w-72 h-80 mx-auto md:mx-0 border-gray-200 border hover:bg-green-300 hover:scale-110 transform transform-origin-top-left transition-all duration-300  "
      >
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-24 h-24 rounded-full border-4 border-green-800 mb-8"
        />
        <h4 className="text-lg font-bold mb-2">{testimonial.name}</h4>
        <p className="text-sm text-gray-600 dark:text-gray-400 text-center">{testimonial.feedback}</p>
        {/* Span under each card */}
        <span className={`w-20 h-3 ${index === 0 ? 'bg-yellow-600' : 'bg-green-800'} rounded mt-4 `}></span>
      </div>
    ))}
  </div>
  
</section>

  
  );
};

export default TestimonialsSection;
