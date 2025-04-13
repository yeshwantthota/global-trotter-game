'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { api } from '../services/api';
import { City, GameState } from '../types';
import ClueDisplay from './ClueDisplay';
import AnswerOptions from './AnswerOptions';
import ScoreDisplay from './ScoreDisplay';

const ChallengeFriend: React.FC = () => {
  const searchParams = useSearchParams();
  const challengeId = searchParams.get('challengeId');
  const challengerUsername = searchParams.get('challengerUsername');
  const currentUser = searchParams.get('username');
  const [challengerInfo, setChallengerInfo] = useState<{ username: string; score: number } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showSharePopup, setShowSharePopup] = useState(!challengeId);
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

  const handleShare = () => {
    const shareUrl = `${window.location.origin}/challenge?challengerUsername=${currentUser}`;
    
    // For WhatsApp sharing
    const whatsappUrl = `https://wa.me/?text=Challenge me to Globe Trotter! ${shareUrl}`;
    window.open(whatsappUrl, '_blank');
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

  if (currentUser && !challengerUsername) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 p-8">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Challenge Your Friends!</h2>
            <div className="mb-4">
              <button
                onClick={handleShare}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-full"
              >
                Share on WhatsApp
              </button>
            </div>
            {/* <button
              onClick={() => setShowSharePopup(false)}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full"
            >
              Start Playing
            </button> */}
          </div>
        </div>
      </div>
    );
  }

  if (!gameState.currentCity) {
    return <div className="flex items-center justify-center min-h-screen">Loading game...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 p-8">
      <div className="max-w-4xl mx-auto">
        {challengerInfo && (
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <h2 className="text-xl font-bold mb-2">Challenge from {challengerInfo.username}</h2>
            <p className="text-gray-600">Their Score: {challengerInfo.score}</p>
            {/* <button
              onClick={() => setShowSharePopup(true)}
              className="mt-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
            >
              Share Challenge
            </button> */}
          </div>
        )}

        {/* {showSharePopup && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg p-6 max-w-md w-full">
              <h2 className="text-2xl font-bold mb-4">Share Challenge</h2>
              <div className="mb-4">
                <button
                  onClick={handleShare}
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-full"
                >
                  Share on WhatsApp
                </button>
              </div>
              <button
                onClick={() => setShowSharePopup(false)}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full"
              >
                Close
              </button>
            </div>
          </div>
        )} */}

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

        <button
          onClick={handleNextQuestion}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full"
        >
          Next Question
        </button>
      </div>
    </div>
  );
};

export default ChallengeFriend;