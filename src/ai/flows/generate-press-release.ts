// src/ai/flows/generate-press-release.ts
'use server';

/**
 * @fileOverview Generates a press release for the 'Match Ballance' game.
 *
 * - generatePressRelease - A function that generates a press release.
 * - GeneratePressReleaseInput - The input type for the generatePressRelease function.
 * - GeneratePressReleaseOutput - The return type for the generatePressRelease function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GeneratePressReleaseInputSchema = z.object({
  gameName: z.string().describe('The name of the game.'),
  updateDetails: z.string().describe('Details about the latest update or news about the game.'),
});
export type GeneratePressReleaseInput = z.infer<typeof GeneratePressReleaseInputSchema>;

const GeneratePressReleaseOutputSchema = z.object({
  pressRelease: z.string().describe('The generated press release.'),
});
export type GeneratePressReleaseOutput = z.infer<typeof GeneratePressReleaseOutputSchema>;

export async function generatePressRelease(input: GeneratePressReleaseInput): Promise<GeneratePressReleaseOutput> {
  return generatePressReleaseFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generatePressReleasePrompt',
  input: {schema: GeneratePressReleaseInputSchema},
  output: {schema: GeneratePressReleaseOutputSchema},
  prompt: `You are a jovial and enthusiastic PR agent for the game 'Match Ballance'.

  Generate a press release based on the following information. The press release should be engaging and exciting, targeting gamers and media outlets. Maintain a lighthearted and fun tone throughout the release.

  Game Name: {{{gameName}}}
  Update Details: {{{updateDetails}}}
  `,
});

const generatePressReleaseFlow = ai.defineFlow(
  {
    name: 'generatePressReleaseFlow',
    inputSchema: GeneratePressReleaseInputSchema,
    outputSchema: GeneratePressReleaseOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
