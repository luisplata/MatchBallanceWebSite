import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  output: 'export', // Habilita la exportación estática
  // La configuración i18n integrada de Next.js se elimina porque no es compatible con 'output: export'
  // cuando no se usa la estructura de carpetas [locale] de la forma en que estaba antes o si causa conflictos.
  // La internacionalización (si se reintroduce) se manejaría de otra manera o se eliminaría por completo
  // como es el caso ahora.
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true, // Necesario para 'output: export' si no se usa un loader personalizado
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
