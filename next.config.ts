import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  output: 'export', // Habilita la exportación estática
  /* i18n: { // Esta configuración no es compatible con output: 'export'
    locales: ['es', 'en'],
    defaultLocale: 'es',
  }, */
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
