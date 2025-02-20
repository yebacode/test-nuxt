import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { u as useHead } from './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import '@iconify/utils';
import 'consola/core';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@vueuse/core';
import '@iconify/vue';
import 'reka-ui';
import '@iconify/utils/lib/css/icon';
import 'tailwind-variants';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Test de déploiement avec Nuxt"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-dvh px-3 pt-4" }, _attrs))}><p class="text-xs w-1/2 md:w-64"><span class="text-gray-600">ABOUT__</span> I am a frontend developer based in Paris, FR. Always using technology to create the bests interactive experiences on the web and </p><div class="flex flex-col md:flex-row"><h1 class="font-bebas leading-none text-[9rem] md:text-[25rem]">This</h1><h1 class="font-bebas leading-32 md:leading-none text-[9rem] md:text-[25rem]"> __ Is My </h1></div><div><h1 class="font-bebas leading-none break-words text-[9rem] md:text-[25rem] md:text-center"> Portfolio </h1><div><p class="text-xs text-right"><span class="text-gray-600">-YÉBA__</span> [verb in lingala]<br><span class="italic">Knowledge.</span></p></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DsumNCNT.mjs.map
