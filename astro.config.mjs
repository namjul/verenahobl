import { defineConfig, passthroughImageService } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import keystatic from '@keystatic/astro';
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'static',
  adapter: vercel(),
  integrations: [keystatic()],
  image: { service: passthroughImageService() },
  vite: {
    plugins: [tailwindcss()],
  },
});
