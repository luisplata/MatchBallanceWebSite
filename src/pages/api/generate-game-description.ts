import type { NextApiRequest, NextApiResponse } from 'next';
import { generateGameDescription, type GenerateGameDescriptionInput, type GenerateGameDescriptionOutput } from '@/ai/flows/generate-game-description';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<GenerateGameDescriptionOutput | { error: string }>
) {
  if (req.method === 'POST') {
    try {
      const input = req.body as GenerateGameDescriptionInput;
      // Aquí podrías añadir validación del input si es necesario con Zod, por ejemplo
      const result = await generateGameDescription(input);
      res.status(200).json(result);
    } catch (error) {
      console.error("Error in API route generate-game-description:", error);
      res.status(500).json({ error: 'Failed to generate game description' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
