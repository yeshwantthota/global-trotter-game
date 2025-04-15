"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
exports.db = {
    // User operations
    createUser: (username) => __awaiter(void 0, void 0, void 0, function* () {
        return prisma.user.create({
            data: { username }
        });
    }),
    getUser: (username) => __awaiter(void 0, void 0, void 0, function* () {
        return prisma.user.findUnique({
            where: { username }
        });
    }),
    updateUserScore: (username, score) => __awaiter(void 0, void 0, void 0, function* () {
        return prisma.user.update({
            where: { username },
            data: { score }
        });
    }),
    // City operations
    getCities: () => __awaiter(void 0, void 0, void 0, function* () {
        return prisma.city.findMany();
    }),
    getRandomCity: () => __awaiter(void 0, void 0, void 0, function* () {
        // Get all cities
        const allCities = yield prisma.city.findMany();
        if (allCities.length < 4) {
            throw new Error('Not enough cities in the database. Please seed the database with more cities.');
        }
        // Randomly select one city
        const randomIndex = Math.floor(Math.random() * allCities.length);
        return allCities[randomIndex];
    }),
    // Challenge operations
    createChallenge: (username, score) => __awaiter(void 0, void 0, void 0, function* () {
        const user = yield prisma.user.findUnique({
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
    }),
    getChallenge: (challengeId) => __awaiter(void 0, void 0, void 0, function* () {
        const challenge = yield prisma.challenge.findUnique({
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
    })
};
