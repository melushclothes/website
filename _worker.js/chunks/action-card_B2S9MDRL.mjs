globalThis.process ??= {}; globalThis.process.env ??= {};
/* empty css                         */
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent } from './astro/server_CdBmRXS2.mjs';
import { $ as $$PriceSection } from './price_section_o2ITpXWH.mjs';

const $$Astro = createAstro("https://melushstore.com");
const $$ActionCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ActionCard;
  const { price, discount } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section id="ActionCard" class="hidden h-min flex-col items-center gap-4 rounded-lg border border-default bg-offset p-10 shadow-md lg:flex"> ${renderComponent($$result, "PriceC", $$PriceSection, { "price": price, "discount": discount, "customClass": "grid justify-items-center" })} <button class="w-full rounded-full bg-accent px-4 py-2 pl-20 pr-20 font-bold text-accent hover:bg-blue-700" onclick="window.open('https://ig.me/m/melush_clothes', '_blank')" type="button" aria-label="Contact">
Contactar
</button> </section>`;
}, "/home/runner/work/website/website/src/pages/item/action-card.astro", void 0);

const $$file = "/home/runner/work/website/website/src/pages/item/action-card.astro";
const $$url = "/item/action-card";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$ActionCard,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$ActionCard as $, _page as _ };
