globalThis.process ??= {}; globalThis.process.env ??= {};
/* empty css                                    */
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent } from '../../chunks/astro/server_CdBmRXS2.mjs';
import { $ as $$PriceSection } from '../../chunks/price_section_o2ITpXWH.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://melushstore.com");
const $$SimilarItems = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SimilarItems;
  const { id } = Astro2.params;
  const clothesJson = await fetch("https://api.melushclothes.com/store_public").then((res) => res.json()).then((data) => data)[0];
  const clothes = clothesJson.items.filter(
    (item) => item.id.toString() != id?.toString()
  );
  return renderTemplate`${maybeRenderHead()}<section id="SimilarItems" class="space-y-8"> <h2 class="text text-start font-bold tracking-tight text-3xl"> ${"Articulos similares"} </h2> <ul class="grid grid-cols-3 gap-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-6"> ${clothes.map(({ id: id2, title, price, discount, images }) => renderTemplate`<li> <a${addAttribute(`/item/${id2}`, "href")} class="flex flex-col gap-1 rounded-lg border border-default bg-offset p-0 lg:items-start lg:gap-4 lg:p-2"> <img${addAttribute(`https://raw.githubusercontent.com/melushclothes/website/main/src/assets/clothes/${images[0]}.webp`, "src")}${addAttribute(title, "alt")} class="aspect-square h-auto w-full rounded-lg object-cover"> <div class="flex w-full flex-col gap-2"> <h3 class="hidden font-semibold text-lg lg:block "> ${title} </h3> ${renderComponent($$result, "PriceC", $$PriceSection, { "price": price, "discount": discount, "compress": true })} </div> </a> </li>`)} </ul> </section>`;
}, "/home/runner/work/website/website/src/pages/item/similar-items.astro", void 0);

const $$file = "/home/runner/work/website/website/src/pages/item/similar-items.astro";
const $$url = "/item/similar-items";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$SimilarItems,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
