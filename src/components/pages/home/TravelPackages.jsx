import PackageCard from './PackageCard';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const packages = [
  {
    id: 1,
    title: 'Alagera National Park',
    description: 'Visit the Alagera National Park and take part in a range of activities including game drives, bird watching and nature walks.',
    image: 'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 2,
    title: 'Binoke Hike',
    description: 'The Binoke Hike is a popular mountain trail in Rwanda\'s scenic landscape. It\'s a great place to experience hiking and take amazing photos.',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 3,
    title: 'Lake Kivu trip',
    description: 'A trip to Lake Kivu is a truly unique and memorable experience, offering both cultural and recreational activities.',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 4,
    title: 'Lake Kivu trip',
    description: 'A trip to Lake Kivu is a truly unique and memorable experience, offering both cultural and recreational activities.',
    image: 'https://whc.unesco.org/uploads/thumbs/activity_725-2148-704-20220308132126.jpg'
  },
  {
    id: 5,
    title: 'Victoria-Falls-and-Victoria-Falls-Bridge',
    description: 'A trip to Lake Kivu is a truly unique and memorable experience, offering both cultural and recreational activities.',
    image: 'https://www.pandotrip.com/wp-content/uploads/2023/07/Aerial-view-of-Victoria-Falls-and-Victoria-Falls-Bridge.jpg'
  },
  {
    id: 6,
    title: 'Lake Kivu trip',
    description: 'A trip to Lake Kivu is a truly unique and memorable experience, offering both cultural and recreational activities.',
    image: 'https://www.pandotrip.com/wp-content/uploads/2023/07/Close-view-of-Victoria-Falls.jpg'
  },
  {
    id: 7,
    title: 'Elephants-with-Mount-Klimanjaro',
    description: 'A trip to Lake Kivu is a truly unique and memorable experience, offering both cultural and recreational activities.',
    image: 'https://www.pandotrip.com/wp-content/uploads/2023/07/Herd-of-Elephants-with-Mount-Klimanjaro-in-the-backround.jpg'
  },
  {
    id: 8,
    title: 'savanna-with-Mount-Klimanjaro',
    description: 'A trip to Lake Kivu is a truly unique and memorable experience, offering both cultural and recreational activities.',
    image: 'https://www.pandotrip.com/wp-content/uploads/2023/07/Giraffes-in-a-savanna-with-Mount-Klimanjaro-in-the-background.jpg'
  },
  {
    id: 9,
    title: 'Camels-in-Sahara-desert',
    description: 'A trip to Lake Kivu is a truly unique and memorable experience, offering both cultural and recreational activities.',
    image: 'https://www.pandotrip.com/wp-content/uploads/2023/07/Camels-in-Sahara-desert.jpg'
  }
];
export default function TravelPackages() {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 }, // الحالة الابتدائية (مخفية)
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.4 } }, // الحركة عند الظهور
  };

  return (
    <section className="py-16 px-4 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-yellow-500 mb-2">Choose your Package</h2>
          <h3 className="text-xl dark:text-white text-gray-600">
            Select your Best Package<br />
            for your Travel
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <PackageItem key={pkg.id} pkg={pkg} variants={itemVariants} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PackageItem({ pkg, variants }) {
  const ref = useRef(null); // مرجع العنصر
  const isInView = useInView(ref, { once: true, margin: "-50px" }); // يراقب العنصر

  return (
    <motion.div
      ref={ref} // ربط العنصر بالمُرَاقِب
      initial="hidden"
      animate={isInView ? "visible" : "hidden"} // الحركة تعتمد على حالة العرض
      variants={variants}
    >
      <PackageCard
        title={pkg.title}
        description={pkg.description}
        image={pkg.image}
      />
    </motion.div>
  );
}