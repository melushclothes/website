import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";
import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  site: "https://melushstore.com",
  integrations: [tailwind(), icon(), svelte()]
});
