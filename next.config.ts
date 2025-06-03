import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  output: 'export', // Habilita la exportación estática
  // La configuración i18n integrada de Next.js se elimina porque no es compatible con 'output: export'.
  // La internacionalización se manejará a través de la estructura de carpetas [locale] y getStaticPaths/Props.
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
