'use client';

import React from 'react';

interface ClueDisplayProps {
  clues: string[];
  isAnswered: boolean;
  funFact: string;
}

const ClueDisplay: React.FC<ClueDisplayProps> = ({ clues, isAnswered, funFact }) => {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <h2 className="text-xl font-bold text-blue-500 opacity-80">Clues:</h2>
        {clues.map((clue, index) => (
          <p key={index} className="text-shadow-white opacity-80">
            {clue}
          </p>
        ))}
      </div>
      
      {isAnswered && (
        <div className="mt-4 p-4 bg-blue-50 rounded-lg">
          <h3 className="text-lg font-semibold text-blue-800">Fun Fact:</h3>
          <p className="text-blue-600">{funFact}</p>
        </div>
      )}
    </div>
  );
};

export default ClueDisplay;