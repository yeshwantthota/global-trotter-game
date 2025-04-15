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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const database_1 = require("./services/database");
const app = (0, express_1.default)();
const port = process.env.PORT || 3001;
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Cities endpoints
app.get('/api/cities', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cities = yield database_1.db.getCities();
        res.json(cities);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch cities' });
    }
}));
app.get('/api/cities/random', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const city = yield database_1.db.getRandomCity();
        res.json(city);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch random city' });
    }
}));
// User endpoints
app.post('/api/users/register', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username } = req.body;
    if (!username) {
        return res.status(400).json({ error: 'Username is required' });
    }
    try {
        const existingUser = yield database_1.db.getUser(username);
        if (existingUser) {
            return res.status(400).json({ error: 'Username already exists' });
        }
        const user = yield database_1.db.createUser(username);
        res.json(user);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to register user' });
    }
}));
app.get('/api/users/:username/score', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username } = req.params;
    try {
        const user = yield database_1.db.getUser(username);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json({ score: user.score });
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch user score' });
    }
}));
app.put('/api/users/:username/score', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username } = req.params;
    const { score } = req.body;
    try {
        const user = yield database_1.db.getUser(username);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        const updatedUser = yield database_1.db.updateUserScore(username, score);
        res.json(updatedUser);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to update user score' });
    }
}));
// Challenge endpoints
app.post('/api/challenges', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username } = req.body;
    try {
        const user = yield database_1.db.getUser(username);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        const challenge = yield database_1.db.createChallenge(username, user.score);
        res.json({
            challengeId: challenge.id,
            username,
            score: user.score,
            link: `http://localhost:3000/challenge?challengeId=${challenge.id}`
        });
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to create challenge' });
    }
}));
app.get('/api/challenges/:challengeId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { challengeId } = req.params;
    try {
        const challenge = yield database_1.db.getChallenge(challengeId);
        res.json(challenge);
    }
    catch (error) {
        res.status(404).json({ error: 'Challenge not found' });
    }
}));
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
