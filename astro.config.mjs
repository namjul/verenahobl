import { defineConfig, passthroughImageService } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'static',
  adapter: vercel(),
  integrations: [react(), keystatic()],
  image: { service: passthroughImageService() },
  vite: {
    plugins: [tailwindcss()],
  },
});
