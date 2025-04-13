'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ReactConfetti from 'react-confetti';
import { api } from '../services/api';
import { City, GameState } from '../types';
import ClueDisplay from './ClueDisplay';
import AnswerOptions from './AnswerOptions';
import ScoreDisplay from './ScoreDisplay';

const Game: React.FC = () => {
  const router = useRouter();
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
  const [showConfetti, setShowConfetti] = useState(false);
  const [answerOptions, setAnswerOptions] = useState<City[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [username, setUsername] = useState<string | null>(null);

  // Load username from localStorage on component mount
  useEffect(() => {
    const savedUsername = localStorage.getItem('username');
    if (savedUsername) {
      setUsername(savedUsername);
    }
  }, []);

  // Save score when component unmounts
  useEffect(() => {
    return () => {
      if (username && gameState.score > 0) {
        saveScore();
      }
    };
  }, [username, gameState.score]);

  const saveScore = async () => {
    try {
      await api.updateUserScore(username!, gameState.score);
      console.log('Score saved successfully');
    } catch (error) {
      console.error('Failed to save score:', error);
    }
  };

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const citiesData = await api.getCities();
        if (citiesData.length < 4) {
          setError('Not enough cities in the database. Please try again later.');
          return;
        }
        setCities(citiesData);
        const randomCity = await api.getRandomCity();
        setGameState(prev => ({ ...prev, currentCity: randomCity }));
        generateAnswerOptions(citiesData, randomCity);
      } catch (error) {
        console.error('Error fetching cities:', error);
        setError('Failed to load cities. Please try again later.');
      }
    };

    fetchCities();
  }, []);

  const generateAnswerOptions = (allCities: City[], correctCity: City) => {
    try {
      // Filter out the correct city from the options
      const otherCities = allCities.filter(city => city.name !== correctCity.name);
      
      if (otherCities.length < 3) {
        throw new Error('Not enough cities to generate options');
      }
      
      // Shuffle the array and take exactly 3 random cities
      const shuffled = [...otherCities].sort(() => 0.5 - Math.random());
      const randomCities = shuffled.slice(0, 3);
      
      // Combine with correct answer and shuffle again
      const options = [...randomCities, correctCity].sort(() => 0.5 - Math.random());
      
      // Ensure we have exactly 4 options
      if (options.length !== 4) {
        throw new Error('Failed to generate 4 options');
      }
      
      setAnswerOptions(options);
    } catch (error) {
      console.error('Error generating answer options:', error);
      setError('Failed to generate game options. Please try again later.');
    }
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

    if (isCorrect) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
    }
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
      setError('Failed to load next question. Please try again later.');
    }
  };

  const handleChallengeFriend = async () => {
    if (username) {
      try {
        await saveScore(); // Save current score before challenging
        router.push(`/challenge?username=${username}`);
      } catch (error) {
        console.error('Failed to save score before challenge:', error);
      }
    } else {
      router.push('/challenge');
    }
  };

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold text-red-600 mb-4">Error</h2>
          <p className="text-gray-700">{error}</p>
        </div>
      </div>
    );
  }

  if (!gameState.currentCity) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 p-8">
      {showConfetti && <ReactConfetti />}
      
      <div className="max-w-4xl mx-auto">
        <ScoreDisplay
          score={gameState.score}
          correctAnswers={gameState.correctAnswers}
          incorrectAnswers={gameState.incorrectAnswers}
        />

        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <ClueDisplay
            clues={gameState.currentCity.clues}
            isAnswered={gameState.isAnswered}
            funFact={gameState.currentCity.funFacts[0]}
          />
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <AnswerOptions
            cities={answerOptions}
            selectedAnswer={gameState.selectedAnswer}
            correctAnswer={gameState.currentCity.name}
            isAnswered={gameState.isAnswered}
            onAnswer={handleAnswer}
          />
        </div>

        <div className="flex justify-between">
          <button
            onClick={handleNextQuestion}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Next Question
          </button>
          <button
            onClick={handleChallengeFriend}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
          >
            Challenge a Friend
          </button>
        </div>
      </div>
    </div>
  );
};

export default Game; 