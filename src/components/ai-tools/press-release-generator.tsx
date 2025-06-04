
'use client';

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
// Comentado: import { generatePressRelease, type GeneratePressReleaseInput, type GeneratePressReleaseOutput } from '@/ai/flows/generate-press-release';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from 'lucide-react';

const formSchema = z.object({
  updateDetails: z.string().min(10, { message: "Los detalles de la actualización deben tener al menos 10 caracteres." }),
});

type PressReleaseFormValues = z.infer<typeof formSchema>;

// Si estas definiciones de tipo causan problemas por no encontrar el flujo,
// se pueden definir localmente de forma simplificada si solo se usan para el estado.
// interface GeneratePressReleaseInput {
//   gameName: string;
//   updateDetails: string;
// }
// interface GeneratePressReleaseOutput {
//   pressRelease: string;
// }


export default function PressReleaseGenerator() {
  const [generatedPressRelease, setGeneratedPressRelease] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<PressReleaseFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      updateDetails: '',
    },
  });

  const onSubmit: SubmitHandler<PressReleaseFormValues> = async (data) => {
    setIsLoading(true);
    setGeneratedPressRelease(null);

    // Simular carga y mostrar mensaje de funcionalidad no disponible
    // ya que las llamadas directas a flujos Genkit no son viables en 'output: export' sin un backend.
    setTimeout(() => {
      toast({
        title: "Funcionalidad no disponible",
        description: "La generación de comunicados mediante IA no está disponible en el modo de exportación estática.",
        variant: "destructive",
      });
      setIsLoading(false);
    }, 1000);
    
    // La llamada real a Genkit se omite para compatibilidad con 'output: export'
    /*
    try {
      // const input: GeneratePressReleaseInput = {
      //   gameName: 'Match Ballance', 
      //   updateDetails: data.updateDetails,
      // };
      // const result: GeneratePressReleaseOutput = await generatePressRelease(input);
      // setGeneratedPressRelease(result.pressRelease);
      // toast({
      //   title: "¡Comunicado Generado!",
      //   description: "El comunicado de prensa se ha generado exitosamente.",
      // });
      throw new Error("La generación de comunicados mediante IA no está disponible en el modo de exportación estática.");
    } catch (error) {
      console.error("Error generating press release:", error);
      toast({
        title: "Error",
        description: `No se pudo generar el comunicado de prensa. ${error instanceof Error ? error.message : 'Error desconocido.'}`,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
    */
  };

  return (
    <Card className="w-full shadow-xl">
      <CardHeader>
        <CardTitle className="font-headline text-2xl text-primary">Generador de Comunicados de Prensa</CardTitle>
        <CardDescription>Crea comunicados de prensa joviales para 'Match Ballance' sobre las últimas novedades y actualizaciones. (Funcionalidad IA desactivada en modo estático)</CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-6">
            <FormField
              control={form.control}
              name="updateDetails"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Detalles de la Actualización o Noticia</FormLabel>
                  <FormControl>
                    <Textarea rows={5} placeholder="Describe las novedades, nuevas funciones, eventos, etc." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormItem>
                <FormLabel>Nombre del Juego</FormLabel>
                <FormControl>
                    <Input value="Match Ballance" readOnly disabled className="bg-muted/30" />
                </FormControl>
             </FormItem>
          </CardContent>
          <CardFooter className="flex justify-end">
             <Button type="submit" disabled={isLoading} className="bg-primary hover:bg-primary/90">
              {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
              {isLoading ? 'Procesando...' : 'Generar Comunicado'}
            </Button>
          </CardFooter>
        </form>
      </Form>
      {generatedPressRelease && (
        <CardContent>
          <h3 className="font-headline text-lg font-semibold mt-6 mb-2 text-primary">Comunicado de Prensa Generado:</h3>
          <Textarea value={generatedPressRelease} readOnly rows={10} className="bg-muted/50" />
        </CardContent>
      )}
    </Card>
  );
}
