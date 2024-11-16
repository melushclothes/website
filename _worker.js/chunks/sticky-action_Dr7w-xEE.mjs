globalThis.process ??= {}; globalThis.process.env ??= {};
/* empty css                         */
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent } from './astro/server_CdBmRXS2.mjs';
import { $ as $$PriceSection } from './price_section_o2ITpXWH.mjs';

const $$Astro = createAstro("https://melushstore.com");
const $$StickyAction = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$StickyAction;
  const { price, discount, title, customClass } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section id="StickyAction"${addAttribute(customClass, "class")}> <div class="flex-col"> <h1 class="text text-start font-bold tracking-tight text-2xl"> ${title} </h1> ${renderComponent($$result, "PriceC", $$PriceSection, { "price": price, "discount": discount })} </div> <button class="rounded-lg bg-accent py-2 pl-2 pr-2 font-bold text-accent hover:bg-blue-700" onclick="window.open('https://ig.me/m/melush_clothes', '_blank')" type="button" aria-label="Contact">
Contactar
</button> </section>`;
}, "/home/runner/work/website/website/src/pages/item/sticky-action.astro", void 0);

const $$file = "/home/runner/work/website/website/src/pages/item/sticky-action.astro";
const $$url = "/item/sticky-action";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$StickyAction,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$StickyAction as $, _page as _ };
