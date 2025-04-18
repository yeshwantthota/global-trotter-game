'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ReactConfetti from 'react-confetti';
import { api } from '../services/api';
import { City, GameState } from '../types';
import ClueDisplay from './ClueDisplay';
import AnswerOptions from './AnswerOptions';
import ScoreDisplay from './ScoreDisplay';
import CityBackground from './CityBackground';

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
      const otherCities = allCities.filter(city => city.name !== correctCity.name);
      
      if (otherCities.length < 3) {
        throw new Error('Not enough cities to generate options');
      }
      
      const shuffled = [...otherCities].sort(() => 0.5 - Math.random());
      const randomCities = shuffled.slice(0, 3);
      
      const options = [...randomCities, correctCity].sort(() => 0.5 - Math.random());
      
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
        await saveScore();
        const challenge = await api.createChallenge(username);
        console.log(challenge);
        const shareLink = `${window.location.origin}/challenge?challengeId=${challenge.challengeId}`;
        const message = `I challenge you to beat my score in Globe Trotter! Click here to play: ${shareLink}`;
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
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
    <div className="min-h-screen relative">
      <CityBackground />
      <div className="relative z-10 p-4 md:p-8">
        {showConfetti && <ReactConfetti />}
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Score and Stats */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-black/60 backdrop-blur-xl rounded-2xl shadow-xl p-6 border border-white/20">
              <div className="text-white font-medium">
                <ScoreDisplay
                  score={gameState.score}
                  correctAnswers={gameState.correctAnswers}
                  incorrectAnswers={gameState.incorrectAnswers}
                />
              </div>
            </div>

            <div className="bg-black/60 backdrop-blur-xl rounded-2xl shadow-xl p-6 border border-white/20">
              <button
                onClick={handleChallengeFriend}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                Challenge a Friend
              </button>
            </div>
          </div>

          {/* Middle Column - Clues */}
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

export default Game; 