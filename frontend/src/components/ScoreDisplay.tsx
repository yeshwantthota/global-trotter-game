'use client';

import React from 'react';

interface ScoreDisplayProps {
  score: number;
  correctAnswers: number;
  incorrectAnswers: number;
}

const ScoreDisplay: React.FC<ScoreDisplayProps> = ({
  score,
  correctAnswers,
  incorrectAnswers
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 mb-6">
      <div className="grid grid-cols-3 gap-4 text-center">
        <div>
          <div className="text-2xl font-bold text-blue-600">{score}</div>
          <div className="text-sm text-gray-600">Total Score</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-green-600">{correctAnswers}</div>
          <div className="text-sm text-gray-600">Correct</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-red-600">{incorrectAnswers}</div>
          <div className="text-sm text-gray-600">Incorrect</div>
        </div>
      </div>
    </div>
  );
};

export default ScoreDisplay; 