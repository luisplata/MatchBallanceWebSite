// use server'
'use server';
/**
 * @fileOverview Generates descriptions of the 'Match Ballance' game for marketing purposes.
 *
 * - generateGameDescription - A function that generates the game description.
 * - GenerateGameDescriptionInput - The input type for the generateGameDescription function.
 * - GenerateGameDescriptionOutput - The return type for the generateGameDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateGameDescriptionInputSchema = z.object({
  aspect: z
    .string()
    .describe(
      'The specific aspect of the game to focus on in the description (e.g., gameplay, features, target audience).' ),
  tone: z
    .string()
    .describe(
      'The tone of the description (e.g., jovial, serious, exciting).  The comunicados always maintain a jovial style.'
    ),
  wordLimit: z
    .number()
    .describe('The maximum number of words for the generated description.'),
});
export type GenerateGameDescriptionInput = z.infer<typeof GenerateGameDescriptionInputSchema>;

const GenerateGameDescriptionOutputSchema = z.object({
  description: z.string().describe('The generated description of the game.'),
});
export type GenerateGameDescriptionOutput = z.infer<typeof GenerateGameDescriptionOutputSchema>;

export async function generateGameDescription(
  input: GenerateGameDescriptionInput
): Promise<GenerateGameDescriptionOutput> {
  return generateGameDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateGameDescriptionPrompt',
  input: {schema: GenerateGameDescriptionInputSchema},
  output: {schema: GenerateGameDescriptionOutputSchema},
  prompt: `You are a marketing expert specializing in writing descriptions for mobile games.

You will generate a description for the game 'Match Ballance'.  The game involves balancing balls.

The description should focus on the following aspect: {{{aspect}}}.

The tone of the description should be: {{{tone}}}. The comunicados always maintain a jovial style.

The description should be no more than {{wordLimit}} words.

Description:`, // Changed from triple curly braces to double
});

const generateGameDescriptionFlow = ai.defineFlow(
  {
    name: 'generateGameDescriptionFlow',
    inputSchema: GenerateGameDescriptionInputSchema,
    outputSchema: GenerateGameDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
