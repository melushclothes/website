globalThis.process ??= {}; globalThis.process.env ??= {};
import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CWRNX9Gr.mjs';
import { manifest } from './manifest_CYwPPAm7.mjs';
import './_astro-internal_middleware.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/item/action-card.astro.mjs');
const _page2 = () => import('./pages/item/clothe-specs.astro.mjs');
const _page3 = () => import('./pages/item/image-grid.astro.mjs');
const _page4 = () => import('./pages/item/similar-items.astro.mjs');
const _page5 = () => import('./pages/item/sticky-action.astro.mjs');
const _page6 = () => import('./pages/item/_id_.astro.mjs');
const _page7 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/@astrojs/cloudflare/dist/entrypoints/image-endpoint.js", _page0],
    ["src/pages/item/action-card.astro", _page1],
    ["src/pages/item/clothe-specs.astro", _page2],
    ["src/pages/item/image-grid.astro", _page3],
    ["src/pages/item/similar-items.astro", _page4],
    ["src/pages/item/sticky-action.astro", _page5],
    ["src/pages/item/[id].astro", _page6],
    ["src/pages/index.astro", _page7]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = undefined;
const _exports = createExports(_manifest);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
