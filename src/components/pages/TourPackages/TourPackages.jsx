import React from "react";
import PackageCard from '../home/PackageCard.jsx';
import { motion } from "framer-motion"; // استيراد Framer Motion
const TourPackages = () => {
  const cardAnimation = {
    hidden: { opacity: 0, y: 50 }, // البداية (خفية)
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.4 } }, // عند العرض
  };
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
    },
    {
      id: 10,
      title: 'Camels-in-Sahara-desert',
      description: 'A trip to Lake Kivu is a truly unique and memorable experience, offering both cultural and recreational activities.',
      image: 'https://media.istockphoto.com/id/1416834065/photo/african-elephant-walking-with-tourist-car-stop-by-watching-during-sunset-at-masai-mara.jpg?s=612x612&w=0&k=20&c=OoRz5qTlXU4UTqhrXQ-c4bTO-avWBG-QE30iSOE_1Hg='
    },
    {
      id: 11,
      title: 'Camels-in-Sahara-desert',
      description: 'A trip to Lake Kivu is a truly unique and memorable experience, offering both cultural and recreational activities.',
      image: 'https://media.istockphoto.com/id/939160216/photo/tourists-on-safari-game-drive.jpg?s=612x612&w=0&k=20&c=JWjq4KqFlLSmfCcAo8LwgQUt1z8ofuMcHF_pDkqmooc='
    },
    {
      id: 12,
      title: 'Camels-in-Sahara-desert',
      description: 'A trip to Lake Kivu is a truly unique and memorable experience, offering both cultural and recreational activities.',
      image: 'https://media.istockphoto.com/id/1165603368/photo/couple-relax-in-armchairs-on-the-savannah.jpg?s=612x612&w=0&k=20&c=94nhPitqrmwDpEeQ0eL-auw7_tZzhwY4GJbJffNme1I='
    },
    {
      id: 13,
      title: 'Camels-in-Sahara-desert',
      description: 'A trip to Lake Kivu is a truly unique and memorable experience, offering both cultural and recreational activities.',
      image: 'https://media.istockphoto.com/id/1140829787/photo/sunset-at-savannah-plains.jpg?s=612x612&w=0&k=20&c=z1e1kvLk52k10-2hT-mdnO_EAmT8BmnAm3qWP9vZ4UQ='
    },
    {
      id: 14,
      title: 'Camels-in-Sahara-desert',
      description: 'A trip to Lake Kivu is a truly unique and memorable experience, offering both cultural and recreational activities.',
      image: 'https://media.istockphoto.com/id/958201790/photo/giraffe-landscape-in-south-africa.jpg?s=612x612&w=0&k=20&c=2VFTtkPYBjKkJwRD-y8towwH1Wcs7V5ySa-_TnZa3f0='
    },
    {
      id: 15,
      title: 'Camels-in-Sahara-desert',
      description: 'A trip to Lake Kivu is a truly unique and memorable experience, offering both cultural and recreational activities.',
      image: 'https://media.istockphoto.com/id/671323338/photo/clifton-beach-without-people-in-the-late-afternoon.jpg?s=612x612&w=0&k=20&c=Nh3uMGmTPXTGcbOHiwGC8Sti6XF3LmdaPFG--k1wtqM='
    }
  ];

  return (
    <>
      <div class="">
        <img
          src="./img/p15.jpg"
          className="w-full h-1/2 object-cover"
        />
      </div>
      <section className="py-16 px-4 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-yellow-500 mb-2">
              Choose your Package
            </h2>
            <h3 className="text-xl dark:text-white text-gray-600">
              Select your Best Package
              <br />
              for your Travel
            </h3>
          </div>

          <div className="grid dark:bg-gray-900   grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }} // يتحرك عند ظهور 20% من العنصر
                variants={cardAnimation}
              >
                <PackageCard
                  title={pkg.title}
                  description={pkg.description}
                  image={pkg.image}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TourPackages;
