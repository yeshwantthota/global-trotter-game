import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const db = {
  // User operations
  createUser: async (username: string) => {
    return prisma.user.create({
      data: { username }
    });
  },

  getUser: async (username: string) => {
    return prisma.user.findUnique({
      where: { username }
    });
  },

  updateUserScore: async (username: string, score: number) => {
    return prisma.user.update({
      where: { username },
      data: { score }
    });
  },

  // City operations
  getCities: async () => {
    return prisma.city.findMany();
  },

  getRandomCity: async () => {
    // Get all cities
    const allCities = await prisma.city.findMany();
    
    if (allCities.length < 4) {
      throw new Error('Not enough cities in the database. Please seed the database with more cities.');
    }

    // Randomly select one city
    const randomIndex = Math.floor(Math.random() * allCities.length);
    return allCities[randomIndex];
  },

  // Challenge operations
  createChallenge: async (username: string, score: number) => {
    const user = await prisma.user.findUnique({
      where: { username }
    });

    if (!user) {
      throw new Error('User not found');
    }

    return prisma.challenge.create({
      data: {
        challengerId: user.id,
        score
      }
    });
  },

  getChallenge: async (challengeId: string) => {
    const challenge = await prisma.challenge.findUnique({
      where: { id: challengeId },
      include: {
        challenger: true
      }
    });

    if (!challenge) {
      throw new Error('Challenge not found');
    }

    return {
      id: challenge.id,
      username: challenge.challenger.username,
      score: challenge.score
    };
  }
}; 