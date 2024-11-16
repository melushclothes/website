globalThis.process ??= {}; globalThis.process.env ??= {};
import { a as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent, b as addAttribute, c as createAstro, e as renderSlot, f as renderHead } from './astro/server_CdBmRXS2.mjs';
import { $ as $$Icon } from './Icon_Bm4M-HLU.mjs';
/* empty css                         */

const $$ThemeSwitcher = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!--
  negative margin is sum of button width (6) and gap size of flex parent (6)
  TODO don't hardcode these values
-->${maybeRenderHead()}<button id="theme-switcher" type="button" class="ml-0 origin-[right_center] scale-100 transition-all duration-500"> <div id="icon-theme-light"> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:white-balance-sunny", "class": "size-6" })} <span class="sr-only">Use light theme</span> </div> <div id="icon-theme-dark" class="hidden"> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:weather-night", "class": "size-6" })} <span class="sr-only">Use dark theme</span> </div> </button> `;
}, "/home/runner/work/website/website/src/components/theme-switcher.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const navItems = [
    { title: "Cat\xE1logo", url: "/#catalogue" },
    { title: "Contacto", url: "/#contact" }
  ];
  return renderTemplate`${maybeRenderHead()}<header id="page-header" class="text-defaul sticky bottom-auto top-0 z-30 flex w-full items-center justify-between border-b border-default bg-default px-8 py-4" data-astro-cid-hpnw4vwy> <a class="flex items-center gap-3 hover:!text-default" href="#" data-astro-cid-hpnw4vwy> <h1 class="sr-only" data-astro-cid-hpnw4vwy>Melush | Pillamas y lenceria</h1> </a> <article class="flex items-center gap-6" data-astro-cid-hpnw4vwy> <nav class="hidden sm:block" data-astro-cid-hpnw4vwy> <ul class="flex items-center gap-6" data-astro-cid-hpnw4vwy> ${navItems.map(({ title, url }) => renderTemplate`<li data-astro-cid-hpnw4vwy> <a class="text-sm"${addAttribute(url, "href")} data-astro-cid-hpnw4vwy> ${title} </a> </li>`)} </ul> </nav> <button id="open-nav-button" type="button" class="btn sm:hidden" aria-label="Navigation" data-astro-cid-hpnw4vwy> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:menu", "class": "size-8", "data-astro-cid-hpnw4vwy": true })} </button> ${renderComponent($$result, "ThemeSwitcher", $$ThemeSwitcher, { "data-astro-cid-hpnw4vwy": true })} </article> <article id="menu-modal" class="modal fixed inset-0 hidden bg-default px-8 py-4 text-default" aria-hidden="true" data-astro-cid-hpnw4vwy> <div class="space-y-4" role="dialog" aria-modal="true" data-astro-cid-hpnw4vwy> <header class="text-right" data-astro-cid-hpnw4vwy> <button id="close-nav-button" type="button" class="btn" aria-label="Close navigation" data-astro-cid-hpnw4vwy> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:close", "class": "size-8", "data-astro-cid-hpnw4vwy": true })} </button> </header> <aside class="flex justify-center" data-astro-cid-hpnw4vwy> <h1 class="font-bold text-2xl" data-astro-cid-hpnw4vwy>MELUSH</h1> </aside> <nav data-astro-cid-hpnw4vwy> <ul class="flex flex-col" data-astro-cid-hpnw4vwy> ${navItems.map(({ title, url }) => renderTemplate`<li data-astro-cid-hpnw4vwy> <a class="block py-4 text-center text-xl"${addAttribute(url, "href")} data-astro-cid-hpnw4vwy> ${title} </a> </li>`)} </ul> </nav> </div> </article> </header>  <noscript> <style>
    #open-nav-button {
      display: none;
    }
  </style> </noscript> `;
}, "/home/runner/work/website/website/src/components/header.astro", void 0);

const $$Astro$1 = createAstro("https://melushstore.com");
const $$SocialMedia = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SocialMedia;
  const { items } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article> <ul class="flex justify-center space-x-8 px-6 pb-4 pt-8"> ${items.map((item) => renderTemplate`<li> <a class="flex-col items-center gap-2" target="_blank"${addAttribute(item.url, "href")}> ${renderComponent($$result, "Icon", $$Icon, { "class": "h-8 w-full", "name": item.icon })} <span class="pt-3 font-mono text-xl">${item.title}</span> </a> </li>`)} </ul> </article>`;
}, "/home/runner/work/website/website/src/components/social-media.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const contactPlatforms = [
    {
      title: "tiktok",
      icon: "frameworks/tiktok",
      url: "https://www.tiktok.com/@melush.31"
    },
    {
      title: "instagram",
      icon: "mdi:instagram",
      url: "https://www.instagram.com/melush_clothes/"
    },
    {
      title: "facebook",
      icon: "mdi:facebook",
      url: "https://www.facebook.com/profile.php?id=100094661941047"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<footer class="relative flex h-64 items-center justify-center bg-offset"> <section> <h2 class="mb-4 text-center font-bold text-4xl">
Síguenos en nuestras redes
</h2> ${renderComponent($$result, "SocialMedia", $$SocialMedia, { "items": contactPlatforms })} </section> </footer>`;
}, "/home/runner/work/website/website/src/components/footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://melushstore.com");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { generator, site } = Astro2;
  const image = new URL("social.png", site);
  const description = "MELUSH es una marca de ropa enfocada en producir prendas de calidad. Lenceria, Pijamas, Vestidos y m\xE1s. \xA1Revela tu lado seductor!";
  return renderTemplate(_a || (_a = __template(['<html lang="en" class="h-full motion-safe:scroll-smooth" data-theme="dark"> <head><meta charset="utf-8"><!-- Codification: Necessary for emojis and spanish --><meta name="viewport" content="width=device-width"><!-- Make width the same as the screen | necessary for mobile --><meta name="robots" content="index, follow"><!-- Robots: Index this page and follow the links --><link rel="icon" href="/favicon.svg" type="image/svg+xml"><meta name="generator"', '><title>MELUSH | \xA1Revela tu lado seductor!</title><meta name="description"', '><!-- Make available once english is ready --><!-- <link rel="alternate" href="https://www.melushstore.com/en" hreflang="en-us" /> --><link rel="canonical" href="http://www.melushstore.com/"><!-- social media --><meta property="og:title" content="MELUSH | \xA1Revela tu lado seductor!"><meta property="og:description"', '><meta property="og:type" content="website"><meta property="og:image"', '><meta property="og:image:alt" content="MELUSH logo"><meta property="og:url"', `><meta name="twitter:card" content="summary_large_image"><!-- initialize theme --><script>
            const themeSaved = localStorage.getItem('theme');

            if (themeSaved) {
                document.documentElement.dataset.theme = themeSaved;
            } else {
                const prefersDark = window.matchMedia(
                    '(prefers-color-scheme: dark)',
                ).matches;
                document.documentElement.dataset.theme = prefersDark
                    ? 'dark'
                    : 'light';
            }

            window
                .matchMedia('(prefers-color-scheme: light)')
                .addEventListener('change', (event) => {
                    if (!localStorage.getItem('theme')) {
                        document.documentElement.dataset.theme = event.matches
                            ? 'dark'
                            : 'light';
                    }
                });
        <\/script><script async defer src="https://scripts.simpleanalyticscdn.com/latest.js"><\/script>`, '</head> <body class="h-full overflow-x-hidden bg-default text-default text-base\n    selection:bg-secondary selection:text-white"> <div class="wrapper flex h-screen flex-col"> ', ' <div class="main-content flex-1 overflow-auto"> ', " ", " </div> </div> </body></html>"])), addAttribute(generator, "content"), addAttribute(description, "content"), addAttribute(description, "content"), addAttribute(image, "content"), addAttribute(site, "content"), renderHead(), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "/home/runner/work/website/website/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
