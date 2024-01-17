import { defineConfig, squooshImageService } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import AstroBlog from "astro-blog";
import AstroIcon from 'astro-icon'

// https://astro.build/config
export default defineConfig({
  site: 'https://astro-blog-demo.futurethemes.io',
  integrations: [
    tailwind(),
    AstroIcon(),
    AstroBlog({
      title: 'Astro Blog Demo',
      logo: {
        dark: './src/assets/images/logo-dark.png',
        light: './src/assets/images/logo.png',
      },
      layoutComponent: './src/components/layouts/LayoutBlog.astro',
    }),
  ],
  image: {
    service: squooshImageService(),
  },
});