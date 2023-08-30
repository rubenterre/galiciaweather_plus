import { c as create_ssr_component } from "../../../chunks/ssr.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-19187it.svelte-19187it{background-color:#0d1b2a;margin:0px;padding-top:50px;padding-bottom:80px;height:100%;width:100vw}.logo_RT.svelte-19187it.svelte-19187it{padding-top:20px;padding-bottom:20px}.icon_contact.svelte-19187it.svelte-19187it{margin-top:40px;margin-bottom:40px}.botonesLegal.svelte-19187it.svelte-19187it{margin:20px 20px}.botonesLegal-btn.svelte-19187it.svelte-19187it{background-color:#1b263b;border-radius:12px;border:1px solid #415a77;margin-left:10px;margin-right:10px;margin-top:10px;margin-bottom:10px}.botonesLegal-btn.svelte-19187it h4.svelte-19187it{font-family:SFProText-Medium;font-size:14px;color:#e0e1dd;letter-spacing:1px;margin-top:15px}.about-tit.svelte-19187it.svelte-19187it{color:white;font-family:SFProText-Medium;font-size:18px;font-weight:600;text-align:center}.about-version.svelte-19187it.svelte-19187it{color:white;font-family:SFProText-Regular;font-size:12px;font-weight:300;text-align:center}.about-txt.svelte-19187it.svelte-19187it{color:white;font-family:SFProText-Regular;font-size:14px;font-weight:300;text-align:center;padding-top:20px}.licencia-txt.svelte-19187it.svelte-19187it{color:white;font-family:SFProText-Regular;font-size:11px;font-weight:300;text-align:justify;padding-top:20px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<section class="svelte-19187it" data-svelte-h="svelte-1g0eci9"><div class="container"><div class="row"><div class="col s12 center-align"><div class="logo"><img src="GaliciaWeather.gif" alt="" width="40%"></div> <h4 class="about-tit svelte-19187it">GaliciaWeather Plus</h4> <p class="about-version svelte-19187it">Versión 3.2.1.</p> <p class="about-txt svelte-19187it">Esta aplicación está susentada pola base de datos de Openweathermaps.</p> <div class="botonesLegal svelte-19187it"><a href="/privacidade"><div class="botonesLegal-btn svelte-19187it"><h4 class="svelte-19187it">POLÍTICA DE PRIVACIDADE</h4></div></a></div> <p class="about-txt svelte-19187it">Desenvolto por Rubén Terré.</p> <img class="center logo_RT svelte-19187it" src="Ruben_Terre_Logo_blanco_131119.svg" alt="logo Rubén Terré" width="40%"> <p class="about-txt svelte-19187it">Para máis información sobre os meus traballos visita a miña web en <a href="https://www.rubenterre.com">www.rubenterre.com</a> ou a través dos seguintes
                    canais:</p> <div class="col s12 icon_contact svelte-19187it"><a href="https://www.behance.net/rubenterre"><img src="behance-square-brands_white.svg" width="15%" alt="Benhance link"></a> <a href="https://github.com/rubenterre"><img src="github-square-brands_white.svg" width="15%" alt="Github link"></a> <a href="https://www.linkedin.com/in/rubenterrelameiro"><img src="linkedin-brands_white.svg" width="15%" alt="Linkedin link"></a></div> <h4 class="about-tit svelte-19187it">MIT License</h4> <p class="about-version svelte-19187it">Copyright (c) 2020 Rubén Terré - Diseño &amp; Desarrollo web</p> <p class="licencia-txt svelte-19187it">Permission is hereby granted, free of charge, to any person obtaining a copy
                    of this software and associated documentation files (the &quot;Software&quot;), to deal
                    in the Software without restriction, including without limitation the rights
                    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                    copies of the Software, and to permit persons to whom the Software is
                    furnished to do so, subject to the following conditions:</p> <p class="licencia-txt svelte-19187it">The above copyright notice and this permission notice shall be included in
                    all
                    copies or substantial portions of the Software.</p> <p class="licencia-txt svelte-19187it">THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                    SOFTWARE.</p></div></div></div> </section>`;
});
export {
  Page as default
};
