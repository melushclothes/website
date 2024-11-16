globalThis.process ??= {}; globalThis.process.env ??= {};
/* empty css                                    */
import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_CdBmRXS2.mjs';
import { $ as $$ClotheSpecs } from '../../chunks/clothe-specs_DG5JMwKr.mjs';
import { $ as $$ActionCard } from '../../chunks/action-card_B2S9MDRL.mjs';
import { $ as $$ImageGrid } from '../../chunks/image-grid_CtjMl_FU.mjs';
import { $ as $$StickyAction } from '../../chunks/sticky-action_Dr7w-xEE.mjs';
import { $ as $$Layout } from '../../chunks/Layout_ezAuWzDd.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://melushstore.com");
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const item = await fetch("https://api.melushstore.com/store_public/by_id?id=" + id).then((res) => res.json()).then((data) => data);
  return renderTemplate` ${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section${addAttribute(id.toString(), "id")} class="mx-auto flex max-w-6xl scroll-mt-24 flex-col items-center gap-4 pb-32 lg:pt-8"> ${renderComponent($$result2, "ImageGrid", $$ImageGrid, { "images": item?.imagesUrl || [] })} <div id="fixedTitleAction" class="fixed bottom-0 h-auto w-full bg-default p-4"> ${renderComponent($$result2, "StickyAction", $$StickyAction, { "title": item.title, "price": item?.price || 0, "discount": item?.discount || 0, "customClass": "lg:hidden flex flex-row space-x-4 justify-between items-center" })} </div> <div id="clotheSpecs" class="top grid grid-cols-1 space-y-5 lg:relative lg:grid-cols-3 lg:gap-4"> <div class="grid-rows-subgrid grid lg:col-span-2 lg:row-span-1"> ${renderComponent($$result2, "ClotheSpecs", $$ClotheSpecs, { "title": item.title, "materials": item?.materials || [], "sizes": item?.sizes || "", "categories": item?.category || "", "colors": item?.colors || [] })} </div> ${renderComponent($$result2, "ActionCard", $$ActionCard, { "price": item?.price || 0, "discount": item?.discount || 0 })} <div class="grid-rows-subgrid grid pl-5 pr-5 lg:col-span-3 lg:row-span-1 lg:pl-0 lg:pr-0"> <!-- <SimilarItems id={id} /> --> </div> </div> </section> ` })}`;
}, "/home/runner/work/website/website/src/pages/item/[id].astro", void 0);

const $$file = "/home/runner/work/website/website/src/pages/item/[id].astro";
const $$url = "/item/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$id,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
