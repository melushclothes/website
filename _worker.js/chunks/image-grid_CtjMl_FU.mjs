globalThis.process ??= {}; globalThis.process.env ??= {};
/* empty css                         */
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from './astro/server_CdBmRXS2.mjs';

const $$Astro = createAstro("https://melushstore.com");
const $$ImageGrid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ImageGrid;
  const { images } = Astro2.props;
  const sliceImage = images == void 0 ? [] : images.slice(1, 5);
  return renderTemplate`${maybeRenderHead()}<section${addAttribute("ImageGrid", "id")}> <div class="grid grid-rows-1 lg:grid-cols-4 lg:grid-rows-2 lg:gap-4"> <div class="grid-rows-subgrid grid lg:col-span-2 lg:row-span-2"> ${images && renderTemplate`<img${addAttribute(images[0].url, "src")}${addAttribute(`Image ${images[0].order}`, "alt")} class="aspect-square h-auto w-full object-cover lg:rounded-lg">`} </div> ${sliceImage.map((image, index) => renderTemplate`<img${addAttribute(image.url, "src")}${addAttribute(`Image ${image.order}`, "alt")} class="aspect-square h-auto w-full object-cover lg:rounded-lg">`)} </div> </section>`;
}, "/home/runner/work/website/website/src/pages/item/image-grid.astro", void 0);

const $$file = "/home/runner/work/website/website/src/pages/item/image-grid.astro";
const $$url = "/item/image-grid";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$ImageGrid,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$ImageGrid as $, _page as _ };
