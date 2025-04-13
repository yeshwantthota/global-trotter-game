import axios from 'axios';
import { City, User, ChallengeLink } from '../types';

const API_URL = 'http://localhost:3001/api';

export const api = {
  getRandomCity: async (): Promise<City> => {
    const response = await axios.get(`${API_URL}/cities/random`);
    return response.data;
  },

  getCities: async (): Promise<City[]> => {
    const response = await axios.get(`${API_URL}/cities`);
    return response.data;
  },

  registerUser: async (username: string): Promise<User> => {
    const response = await axios.post(`${API_URL}/users/register`, { username });
    return response.data;
  },

  getUserScore: async (username: string): Promise<number> => {
    const response = await axios.get(`${API_URL}/users/${username}/score`);
    return response.data.score;
  },

  updateUserScore: async (username: string, score: number): Promise<void> => {
    await axios.put(`${API_URL}/users/${username}/score`, { score });
  },

  updateScore: async (username: string, score: number, isCorrect: boolean): Promise<User> => {
    const response = await axios.put(`${API_URL}/users/score`, {
      username,
      score,
      isCorrect
    });
    return response.data;
  },

  createChallenge: async (username: string): Promise<ChallengeLink> => {
    const response = await axios.post(`${API_URL}/challenges`, { username });
    return response.data;
  },

  getChallenge: async (challengeId: string): Promise<ChallengeLink> => {
    const response = await axios.get(`${API_URL}/challenges/${challengeId}`);
    return response.data;
  }
}; 