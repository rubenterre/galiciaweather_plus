import { c as create_ssr_component, h as createEventDispatcher, f as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
const WeatherSearch_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "button.svelte-2ae48c.svelte-2ae48c.svelte-2ae48c{padding:0px}.input-field.svelte-2ae48c input.svelte-2ae48c.svelte-2ae48c{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 16px;padding-top:20px;background-color:#1B263B;border:none;border-radius:4px;border-bottom:1px solid #415A77;border-bottom-left-radius:0;border-bottom-right-radius:0}input.svelte-2ae48c.svelte-2ae48c.svelte-2ae48c:not([type]):not(.browser-default),input[type=text].svelte-2ae48c.svelte-2ae48c.svelte-2ae48c:not(.browser-default){outline:none;color:#E0E1DD;width:100%;font-size:16px;height:56px}.input-field.svelte-2ae48c>label.svelte-2ae48c.svelte-2ae48c{color:#E0E1DD;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-size:16px;position:absolute;left:16px;top:16px;cursor:text;-webkit-transform-origin:top left;transform-origin:top left;-webkit-transition:left 0.2s ease-out, top 0.2s ease-out, -webkit-transform 0.2s ease-out;transition:left 0.2s ease-out, top 0.2s ease-out, -webkit-transform 0.2s ease-out;transition:left 0.2s ease-out, top 0.2s ease-out, transform 0.2s ease-out;transition:left 0.2s ease-out, top 0.2s ease-out, transform 0.2s ease-out, -webkit-transform 0.2s ease-out}.input-field.svelte-2ae48c input[type=text].svelte-2ae48c:focus+label.svelte-2ae48c{color:#E0E1DD}.flecha.svelte-2ae48c.svelte-2ae48c.svelte-2ae48c{justify-content:center;background:#415a77;border-radius:100px;width:100%;height:56px}",
  map: null
};
const WeatherSearch = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let cityName = "";
  $$result.css.add(css$1);
  return `<div class="row"><div class="col s10"><div class="buscador"><form><div class="input-field svelte-2ae48c" style="margin: 0 4px;"><input id="search" type="text" class="validate svelte-2ae48c" placeholder=" "${add_attribute("value", cityName, 0)}> <label class="active svelte-2ae48c" for="search" data-svelte-h="svelte-ro67oj">Busca aquí unha cidade</label></div></form></div></div> <div class="col s2"><button class="flecha valign-wrapper svelte-2ae48c" data-svelte-h="svelte-1ts7mm3"><img src="buscar_icon.png" alt=""></button></div> </div>`;
});
const WeatherCard_svelte_svelte_type_style_lang = "";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-1qqm5s4{background:#0d1b2a;height:100vh;padding:20px}ul.svelte-1qqm5s4{padding:0px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let todos = [];
  $$result.css.add(css);
  return `<main class="svelte-1qqm5s4">${validate_component(WeatherSearch, "WeatherSearch").$$render($$result, {}, {}, {})} <ul class="${["svelte-1qqm5s4", todos.length > 0 ? "list" : ""].join(" ").trim()}">${`${``}`}</ul> </main>`;
});
export {
  Page as default
};
