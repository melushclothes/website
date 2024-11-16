globalThis.process ??= {}; globalThis.process.env ??= {};
/* empty css                         */
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent, F as Fragment } from './astro/server_CdBmRXS2.mjs';
import { $ as $$Icon, a as $$Colors } from './Icon_Bm4M-HLU.mjs';

const $$Astro = createAstro("https://melushstore.com");
const $$ClotheSpecs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ClotheSpecs;
  const { title, materials, sizes, categories, colors } = Astro2.props;
  const labels = ["Materiales", "Tallas", "Categor\xEDas"];
  const values = [materials, sizes, categories];
  return renderTemplate`${maybeRenderHead()}<section id="ClotheSpecs" class="flex flex-col gap-4 space-y-2 pl-5 pr-5 lg:pl-0 lg:pr-4"> <div class="flex max-w-full flex-row items-center justify-center space-x-3 rounded-lg bg-accent p-2 text-accent lg:hidden"> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:arrow-up-thin-circle-outline", "class": "size-12" })} <h3 class="text-md font-semibold tracking-tight text-accent"> ${"Galer\xEDa"} </h3> </div> <h1 class="text hidden text-start font-bold tracking-tight text-4xl lg:flex"> ${title} </h1> ${renderComponent($$result, "Colors", $$Colors, { "colors": colors })} <div class="grid grid-cols-1 gap-2 lg:grid-cols-3"> ${labels.map((label, index) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <p class="text text-start text-lg">${`${label} :`}</p> <div class="grid-rows-subgrid col-span-1 grid lg:col-span-2"> <p class="truncate font-semibold text-offset text-lg"> ${Array.isArray(values[index]) ? values[index].map((item) => item.name).join(", ") : ""} </p> </div> ` })}`)} </div> </section>`;
}, "/home/runner/work/website/website/src/pages/item/clothe-specs.astro", void 0);

const $$file = "/home/runner/work/website/website/src/pages/item/clothe-specs.astro";
const $$url = "/item/clothe-specs";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$ClotheSpecs,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$ClotheSpecs as $, _page as _ };
