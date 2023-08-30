import { c as create_ssr_component, v as validate_component, d as each, f as add_attribute, e as escape } from "../../chunks/ssr.js";
import Layout from "./_layout.svelte.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".fondo_inicio.svelte-199izmm.svelte-199izmm{background:url(./fondos/fondo_noite_clara.png);background-size:cover;background-repeat:no-repeat}.fondo_inicio.svelte-199izmm img.svelte-199izmm{margin-top:50px}.ornamento.svelte-199izmm.svelte-199izmm{border-radius:30px 30px 0 0;background:#0d1b2a;margin:0px;padding:0px;width:100%;height:30px}.seleccion.svelte-199izmm.svelte-199izmm{background:#0d1b2a;padding-bottom:80px}.seleccion-titulo.svelte-199izmm h2.svelte-199izmm{font-family:SFProText-Medium;font-size:16px;color:#e0e1dd;letter-spacing:1px;padding-left:20px;padding-right:20px;margin:0px}p.svelte-199izmm.svelte-199izmm{font-family:SFProText-Regular;font-size:12px;color:#e0e1dd}.botones.svelte-199izmm.svelte-199izmm{background:#0d1b2a;padding-top:10px;padding-bottom:20px}.boton.svelte-199izmm.svelte-199izmm{background:#415a77;border:1px solid #415a77;border-radius:12px;margin-left:10px;margin-right:10px;margin-top:10px;margin-bottom:10px}.boton-titulo.svelte-199izmm.svelte-199izmm{background:#1b263b;border-top-right-radius:0px;border-bottom-right-radius:0px;border-top-left-radius:12px;border-bottom-left-radius:12px;padding-left:10px}h4.svelte-199izmm.svelte-199izmm{font-family:SFProText-Medium;font-size:14px;color:#e0e1dd;letter-spacing:1px;margin-top:15px}.efecto.svelte-199izmm.svelte-199izmm{background:#1b263b;border-right:1px solid #415a77;border-top-right-radius:12px;border-bottom-right-radius:12px;border-top-left-radius:0px;border-bottom-left-radius:0px}.flecha.svelte-199izmm.svelte-199izmm{justify-content:center;background:#415a77;border-radius:12px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${validate_component(Layout, "Layout").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="row"><div class="col s12" data-svelte-h="svelte-1sllrh"><div class="fondo_inicio svelte-199izmm"><img src="BannerInicio.png" width="100%" alt="" class="svelte-199izmm"> <div class="ornamento svelte-199izmm"></div></div></div> <div></div> <div class="col s12 seleccion svelte-199izmm"><div class="seleccion-titulo svelte-199izmm"><h2 class="center-align svelte-199izmm" data-svelte-h="svelte-r0kmga">Selecciona a túa cidade principal</h2> <p class="center-align svelte-199izmm" data-svelte-h="svelte-h5m27q">GaliciaWeather Plus</p>  <div class="botones svelte-199izmm">${each(data.botones, (item) => {
        return `<a${add_attribute("href", item.ruta, 0)}><div class="boton svelte-199izmm"><div class="row"><div class="col s8 boton-titulo valign-wrapper svelte-199izmm"><h4 class="svelte-199izmm">${escape(item.titulo)}</h4></div> <div class="col s3 efecto svelte-199izmm"></div> <div class="col s1 flecha valign-wrapper svelte-199izmm" data-svelte-h="svelte-1sv63d5"><img src="flecha_der.png" alt=""></div> </div></div> </a>`;
      })}</div></div></div></div>`;
    }
  })}`;
});
export {
  Page as default
};
