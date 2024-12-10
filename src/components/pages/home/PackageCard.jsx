
export default function PackageCard({ title, description, image }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-green-300 hover:scale-110 transform transform-origin-top-left transition-all duration-300 dark:hover:bg-gray-700 ">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6 dark:bg-gray-700  ">
        <h3 className="text-xl font-semibold dark:text-white text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 dark:text-gray-400  ">{description}</p>
        <button className="bg-yellow-600  text-white px-6 py-2 rounded-md hover:bg-yellow-500 transition-colors duration-300 font-medium ">
          Learn More
        </button>
      </div>
    </div>
  );
}