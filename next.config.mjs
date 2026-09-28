/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Adicionado para esconder o ícone flutuante do Next.js
  devIndicators: {
    appIsrStatus: false,
    buildActivity: false,
  },
}

export default nextConfig