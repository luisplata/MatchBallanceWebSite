import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  output: 'export', // Habilita la exportación estática
  i18n: { 
    locales: ['es', 'en'],
    defaultLocale: 'es',
  },
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
  // Se elimina la configuración experimental de serverActions ya que los flujos de Genkit se accederán vía API routes
};

export default nextConfig;
