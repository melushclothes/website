# Melush Landing Page

[![Built with Astro](https://astro.badg.es/v1/built-with-astro.svg)](https://astro.build)

> An Astro + Tailwind CSS example/template for landing pages.

## Features

- 💨 Tailwind CSS for styling
- 🎨 Themeable
  - CSS variables are defined in `src/styles/theme.css` and mapped to Tailwind classes (`tailwind.config.cjs`)
- 🌙 Dark mode
- 📱 Responsive (layout, images, typography)
- ♿ Accessible (as measured by https://web.dev/measure/)
- 🔎 SEO-enabled (as measured by https://web.dev/measure/)
- 🔗 Open Graph tags for social media sharing
- 💅 [Prettier](https://prettier.io/) setup for both [Astro](https://github.com/withastro/prettier-plugin-astro) and [Tailwind](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)

## Commands

| Command                | Action                                            |
| :--------------------- | :------------------------------------------------ |
| `npm install`          | Install dependencies                              |
| `npm run dev`          | Start local dev server at `localhost:4321`        |
| `npm run build`        | Build your production site to `./dist/`           |
| `npm run preview`      | Preview your build locally, before deploying      |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check`  |
| `npm run astro --help` | Get help using the Astro CLI                      |
| `npm run format`       | Format code with [Prettier](https://prettier.io/) |
| `npm run clean`        | Remove `node_modules` and build output            |

## Todo

- Add detail screen
- Add animations to detail screen like [here](https://spotify-astro-transitions.vercel.app/) and [here](https://astro-records.pages.dev/)
- Change appearance of cards when hover and click on them
- Add video player on [splash screen](https://645e81ce9873bb1e1ada2033--wonderful-cucurucho-12c589.netlify.app/#)
- See options to deploy on Cloudfare pages
- Add payments
- Add control of stock and products using a backend
- Categories filter
- make button on card as well as buttons on slider to appear only on hover on card.
- add dots counter on slider
- remove button "contact" on catalog screen. Its redundant. All card should be touchable. Like [here](https://www.airbnb.com.pe/)
- In detail screen mobile mantain price and action button stick to bottom. Like [here](https://www.airbnb.com.pe/rooms/757857853968620040?adults=1&category_tag=Tag%3A8101&children=0&enable_m3_private_room=true&infants=0&pets=0&photo_id=1642198802&search_mode=flex_destinations_search&check_in=2024-04-07&check_out=2024-04-12&source_impression_id=p3_1712506853_RjAQpekcKEavhyX%2F&previous_page_section_name=1000&federated_search_id=bb5e7cee-b2db-4741-9b20-61c0e8b6d407)
- Make images load faster (CDN?)
- Project for setting content on backend
- Make image resize to something around 480x480px