'use client';

import React from 'react';
import { City } from '../types';
import SadFace from './SadFace';

interface AnswerOptionsProps {
  cities: City[];
  selectedAnswer: string | null;
  correctAnswer: string;
  isAnswered: boolean;
  onAnswer: (city: string) => void;
}

const AnswerOptions: React.FC<AnswerOptionsProps> = ({
  cities,
  selectedAnswer,
  correctAnswer,
  isAnswered,
  onAnswer
}) => {
  const getButtonClass = (city: string) => {
    if (!isAnswered) return 'bg-white hover:bg-gray-100';
    if (city === correctAnswer) return 'bg-green-500 text-white';
    if (city === selectedAnswer && city !== correctAnswer) return 'bg-red-500 text-white';
    return 'bg-gray-200 text-gray-600';
  };

  const showSadFace = isAnswered && selectedAnswer && selectedAnswer !== correctAnswer;

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-blue-500 opacity-80">Select the correct city:</h2>
      {showSadFace && <SadFace />}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {cities.map((city) => (
          <button
            key={city.name}
            onClick={() => onAnswer(city.name)}
            className={`p-4 rounded-lg shadow-md transition-colors duration-200 ${getButtonClass(city.name)}`}
            disabled={isAnswered}
          >
            <div className="font-semibold text-shadow-white opacity-80">{city.name}</div>
            <div className="text-sm text-shadow-white opacity-80">{city.country}</div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default AnswerOptions;