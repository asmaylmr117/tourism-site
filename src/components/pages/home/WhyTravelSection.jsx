import React from "react";

const WhyTravelSection = ({ title, subtitle, features }) => {
  return (
    <section className="text-center py-8">
      <h3 className="text-yellow-600 text-2xl font-semibold mb-2">{subtitle}</h3>
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 ">

        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-green-900 text-white p-8 rounded-lg flex flex-col items-center "
          >
            <div className="text-4xl mb-2">{feature.icon}</div>
            <p className="text-sm font-medium">{feature.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyTravelSection;
