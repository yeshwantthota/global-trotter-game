import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const cities = [
  { 
    name: 'Paris', 
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1920&h=1080' 
  },
  { 
    name: 'Tokyo', 
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1920&h=1080' 
  },
  { 
    name: 'New York', 
    image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1920&h=1080' 
  },
  { 
    name: 'London', 
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1920&h=1080' 
  },
  { 
    name: 'Sydney', 
    image: 'https://images.unsplash.com/photo-1523428096881-5bd79d043006?auto=format&fit=crop&w=1920&h=1080' 
  }
];

const CityBackground: React.FC = () => {
  const [currentCityIndex, setCurrentCityIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCityIndex((prevIndex) => (prevIndex + 1) % cities.length);
    }, 5000); // Change city every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-black/50" /> {/* Overlay for better text visibility */}
      <Image
        src={cities[currentCityIndex].image}
        alt={cities[currentCityIndex].name}
        fill
        className="object-cover transition-opacity duration-1000"
        priority
      />
    </div>
  );
};

export default CityBackground; 