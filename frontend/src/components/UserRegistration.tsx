'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { api } from '../services/api';
import CityBackground from './CityBackground';

const UserRegistration: React.FC = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      await api.registerUser(username);
      
      localStorage.setItem('username', username);
      
      router.push('/game');
    } catch (error) {
      setError('Failed to register. Please try again.');
      console.error('Registration error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <CityBackground/>
      <div className="bg-black/60 backdrop-blur-xl rounded-lg shadow-lg p-8 max-w-md w-full">
        <h1 className="text-2xl text-blue-500 font-bold text-center mb-6">Globe Trotter</h1>
        <p className="text-gray-300 font-bold text-center mb-6">
          Enter your username to start playing
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm  font-bold text-gray-300 mb-1">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your username"
              required
            />
          </div>

          {error && (
            <div className="text-red-500 text-sm text-center">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
          >
            {isLoading ? 'Registering...' : 'Start Playing'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserRegistration; 