'use client';

import React, { useState, useEffect } from 'react';
import { api } from '../services/api';
import { City, GameState } from '../types';
import ClueDisplay from './ClueDisplay';
import AnswerOptions from './AnswerOptions';
import ScoreDisplay from './ScoreDisplay';
import CityBackground from './CityBackground';

interface ChallengeFriendProps {
  challengerUsername?: string;
  challengerScore?: number;
}

const ChallengeFriend: React.FC<ChallengeFriendProps> = ({ 
  challengerUsername
}) => {
  const [challengerInfo, setChallengerInfo] = useState<{ username: string; score: number } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [gameState, setGameState] = useState<GameState>({
    currentCity: null,
    selectedAnswer: null,
    isAnswered: false,
    isCorrect: false,
    score: 0,
    correctAnswers: 0,
    incorrectAnswers: 0
  });
  const [cities, setCities] = useState<City[]>([]);
  const [answerOptions, setAnswerOptions] = useState<City[]>([]);

  useEffect(() => {
    const fetchChallengerScore = async () => {
      try {
        if (challengerUsername) {
          const score = await api.getUserScore(challengerUsername);
          setChallengerInfo({ username: challengerUsername, score });
        }
      } catch (err) {
        setError('Failed to load challenge information');
        console.error('Error fetching challenge info:', err);
      } finally {
        setLoading(false);
      }
    };

    const fetchCities = async () => {
      try {
        const citiesData = await api.getCities();
        setCities(citiesData);
        const randomCity = await api.getRandomCity();
        setGameState(prev => ({ ...prev, currentCity: randomCity }));
        generateAnswerOptions(citiesData, randomCity);
      } catch (err) {
        setError('Failed to load game data');
        console.error('Error fetching cities:', err);
      }
    };

    if (challengerUsername) {
      fetchChallengerScore();
      fetchCities();
    } else {
      setLoading(false);
    }
  }, [challengerUsername]);

  const generateAnswerOptions = (allCities: City[], correctCity: City) => {
    const otherCities = allCities.filter(city => city.name !== correctCity.name);
    const shuffled = [...otherCities].sort(() => 0.5 - Math.random());
    const randomCities = shuffled.slice(0, 3);
    const options = [...randomCities, correctCity].sort(() => 0.5 - Math.random());
    setAnswerOptions(options);
  };

  const handleAnswer = (selectedCity: string) => {
    if (gameState.isAnswered) return;

    const isCorrect = selectedCity === gameState.currentCity?.name;
    const newScore = isCorrect ? gameState.score + 10 : gameState.score - 5;

    setGameState(prev => ({
      ...prev,
      selectedAnswer: selectedCity,
      isAnswered: true,
      isCorrect,
      score: newScore,
      correctAnswers: isCorrect ? prev.correctAnswers + 1 : prev.correctAnswers,
      incorrectAnswers: !isCorrect ? prev.incorrectAnswers + 1 : prev.incorrectAnswers
    }));
  };

  const handleNextQuestion = async () => {
    try {
      const randomCity = await api.getRandomCity();
      setGameState(prev => ({
        ...prev,
        currentCity: randomCity,
        selectedAnswer: null,
        isAnswered: false,
        isCorrect: false
      }));
      generateAnswerOptions(cities, randomCity);
    } catch (error) {
      console.error('Error fetching next city:', error);
    }
  };

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-red-500">{error}</div>
      </div>
    );
  }

  if (!gameState.currentCity) {
    return <div className="flex items-center justify-center min-h-screen">Loading game...</div>;
  }

  return (
    <div className="min-h-screen relative">
      <CityBackground />
      <div className="relative z-10 p-4 md:p-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Challenge Info and Stats */}
          <div className="lg:col-span-1 space-y-6">
            {challengerInfo && (
              <div className="bg-black/60 backdrop-blur-xl rounded-2xl shadow-xl p-6 border border-white/20">
                <h2 className="text-2xl font-bold mb-2 text-blue-500">Challenge from {challengerInfo.username}</h2>
                <p className="text-gray-300 font-medium">Their Score: {challengerInfo.score}</p>
              </div>
            )}
            
            <div className="bg-black/60 backdrop-blur-xl rounded-2xl shadow-xl p-6 border border-white/20">
              <div className="text-white font-medium">
                <ScoreDisplay
                  score={gameState.score}
                  correctAnswers={gameState.correctAnswers}
                  incorrectAnswers={gameState.incorrectAnswers}
                />
              </div>
            </div>
          </div>

          {/* Middle Column - Clues and Answers */}
          <div className="lg:col-span-2">
            <div className="bg-black/60 backdrop-blur-xl rounded-2xl shadow-xl p-6 border border-white/20 mb-6">
              <div className="text-white font-bold text-lg">
                <ClueDisplay
                  clues={gameState.currentCity.clues}
                  isAnswered={gameState.isAnswered}
                  funFact={gameState.currentCity.funFacts[0]}
                />
              </div>
            </div>

            <div className="bg-black/60 backdrop-blur-xl rounded-2xl shadow-xl p-6 mb-6">
              <div className="text-gray-800 font-medium">
                <AnswerOptions
                  cities={answerOptions}
                  selectedAnswer={gameState.selectedAnswer}
                  correctAnswer={gameState.currentCity.name}
                  isAnswered={gameState.isAnswered}
                  onAnswer={handleAnswer}
                />
              </div>
            </div>

            <button
              onClick={handleNextQuestion}
              className="w-full mt-6 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              Next Question
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengeFriend;