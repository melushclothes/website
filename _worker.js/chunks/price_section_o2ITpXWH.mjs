globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent, F as Fragment } from './astro/server_CdBmRXS2.mjs';

const $$Astro = createAstro("https://melushstore.com");
const $$PriceSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PriceSection;
  const { price, discount, customClass, compress } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(customClass || "flex w-full space-x-1", "class")}> ${compress == void 0 || !compress ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <p${addAttribute(`${discount ? "line-through" : ""} font-bold text-currency text-base`, "class")}>
S/ ${Number(price).toFixed(2)} </p> <p class="font-bold text-currencyDiscount text-base"> ${discount > 0 ? " - " + (price - price * discount / 100).toFixed(2) : ""} </p> ` })}` : renderTemplate`<p${addAttribute(`text-center font-bold ${discount ? "text-currencyDiscount" : "text-currency"}`, "class")}>
S/${" "} ${discount ? (price - price * discount / 100).toFixed(2) : price.toFixed(2)} </p>`} </section>`;
}, "/home/runner/work/website/website/src/components/price_section.astro", void 0);

export { $$PriceSection as $ };
