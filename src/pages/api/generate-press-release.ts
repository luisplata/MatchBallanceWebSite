import type { NextApiRequest, NextApiResponse } from 'next';
import { generatePressRelease, type GeneratePressReleaseInput, type GeneratePressReleaseOutput } from '@/ai/flows/generate-press-release';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<GeneratePressReleaseOutput | { error: string }>
) {
  if (req.method === 'POST') {
    try {
      const input = req.body as GeneratePressReleaseInput;
      // Aquí podrías añadir validación del input si es necesario
      const result = await generatePressRelease(input);
      res.status(200).json(result);
    } catch (error) {
      console.error("Error in API route generate-press-release:", error);
      res.status(500).json({ error: 'Failed to generate press release' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
