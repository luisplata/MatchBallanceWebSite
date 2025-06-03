'use client';

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { generateGameDescription, type GenerateGameDescriptionInput } from '@/ai/flows/generate-game-description';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from 'lucide-react';

const formSchema = z.object({
  aspect: z.string().min(5, { message: "El aspecto debe tener al menos 5 caracteres." }),
  tone: z.string().min(3, { message: "El tono debe tener al menos 3 caracteres." }),
  wordLimit: z.coerce.number().int().positive({ message: "El límite de palabras debe ser un número positivo." }).max(500, { message: "El límite de palabras no puede exceder 500." }),
});

type GameDescriptionFormValues = z.infer<typeof formSchema>;

export default function GameDescriptionGenerator() {
  const [generatedDescription, setGeneratedDescription] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<GameDescriptionFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      aspect: '',
      tone: 'jovial',
      wordLimit: 100,
    },
  });

  const onSubmit: SubmitHandler<GameDescriptionFormValues> = async (data) => {
    setIsLoading(true);
    setGeneratedDescription(null);
    try {
      const result = await generateGameDescription(data as GenerateGameDescriptionInput);
      setGeneratedDescription(result.description);
      toast({
        title: "¡Descripción Generada!",
        description: "La descripción del juego se ha generado exitosamente.",
      });
    } catch (error) {
      console.error("Error generating game description:", error);
      toast({
        title: "Error",
        description: "No se pudo generar la descripción del juego. Inténtalo de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full shadow-xl">
      <CardHeader>
        <CardTitle className="font-headline text-2xl text-primary">Generador de Descripción del Juego</CardTitle>
        <CardDescription>Crea descripciones atractivas para 'Match Ballance' especificando el aspecto, tono y límite de palabras.</CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-6">
            <FormField
              control={form.control}
              name="aspect"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Aspecto a Enfocar</FormLabel>
                  <FormControl>
                    <Input placeholder="Ej: jugabilidad, características, público objetivo" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="tone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tono de la Descripción</FormLabel>
                  <FormControl>
                    <Input placeholder="Ej: jovial, serio, emocionante" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="wordLimit"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Límite de Palabras</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Ej: 100" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button type="submit" disabled={isLoading} className="bg-primary hover:bg-primary/90">
              {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
              {isLoading ? 'Generando...' : 'Generar Descripción'}
            </Button>
          </CardFooter>
        </form>
      </Form>
      {generatedDescription && (
        <CardContent>
          <h3 className="font-headline text-lg font-semibold mt-6 mb-2 text-primary">Descripción Generada:</h3>
          <Textarea value={generatedDescription} readOnly rows={6} className="bg-muted/50" />
        </CardContent>
      )}
    </Card>
  );
}
