import { PrismaClient } from '@prisma/client';
import { cities } from '../data/cities';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');

  // Clear existing data
  await prisma.city.deleteMany();
  console.log('Cleared existing cities');

  // Insert cities
  for (const city of cities) {
    await prisma.city.create({
      data: {
        name: city.city,
        country: city.country,
        clues: city.clues,
        funFacts: city.fun_fact,
        trivia: city.trivia
      }
    });
  }

  console.log('Seeding completed');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 