import { defineConfig } from 'astro/config';

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  integrations: [vue()],
  // I don't want to define the base here and use the env variables instead
  // base: '/dev'
});