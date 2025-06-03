import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { i18n } from '@/i18n-config'; // Tu configuración de i18n con defaultLocale

// Esta página solo sirve para redirigir de la raíz "/" a la raíz del idioma por defecto (ej: "/es")
// Es necesaria para la exportación estática cuando no se usa la config i18n de Next.js
export default function RootIndexPage() {
  const router = useRouter();

  useEffect(() => {
    // Construye la ruta base del idioma por defecto.
    // Si el asPath original era solo "/", redirige a /<defaultLocale>.
    // Si era /?query=algo, redirige a /<defaultLocale>?query=algo
    const targetPath = router.asPath === '/' ? '' : router.asPath;
    router.replace(`/${i18n.defaultLocale}${targetPath}`);
  }, [router]);

  // Puedes mostrar un spinner o null mientras se redirige
  return null; 
}
