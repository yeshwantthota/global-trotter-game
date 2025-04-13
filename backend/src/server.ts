import express from 'express';
import cors from 'cors';
import { db } from './services/database';
import { cities } from './data/cities';

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Cities endpoints
app.get('/api/cities', async (req, res) => {
  try {
    const cities = await db.getCities();
    res.json(cities);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch cities' });
  }
});

app.get('/api/cities/random', async (req, res) => {
  try {
    const city = await db.getRandomCity();
    res.json(city);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch random city' });
  }
});

// User endpoints
app.post('/api/users/register', async (req, res) => {
  const { username } = req.body;
  
  if (!username) {
    return res.status(400).json({ error: 'Username is required' });
  }

  try {
    const existingUser = await db.getUser(username);
    if (existingUser) {
      return res.status(400).json({ error: 'Username already exists' });
    }

    const user = await db.createUser(username);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Failed to register user' });
  }
});

app.get('/api/users/:username/score', async (req, res) => {
  const { username } = req.params;

  try {
    const user = await db.getUser(username);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({ score: user.score });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch user score' });
  }
});

app.put('/api/users/:username/score', async (req, res) => {
  const { username } = req.params;
  const { score } = req.body;

  try {
    const user = await db.getUser(username);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const updatedUser = await db.updateUserScore(username, score);
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update user score' });
  }
});

// Challenge endpoints
app.post('/api/challenges', async (req, res) => {
  const { username } = req.body;

  try {
    const user = await db.getUser(username);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const challenge = await db.createChallenge(username, user.score);
    res.json({
      challengeId: challenge.id,
      username,
      score: user.score,
      link: `http://localhost:3000/challenge?challengeId=${challenge.id}`
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create challenge' });
  }
});

app.get('/api/challenges/:challengeId', async (req, res) => {
  const { challengeId } = req.params;

  try {
    const challenge = await db.getChallenge(challengeId);
    res.json(challenge);
  } catch (error) {
    res.status(404).json({ error: 'Challenge not found' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
}); 