import { c as create_ssr_component, d as each, e as escape, v as validate_component } from "../../../chunks/ssr.js";
const DatosHoxe_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".fechaLugar.svelte-zeh11o.svelte-zeh11o{text-align:center;margin-top:40px}.fechaLugar.svelte-zeh11o h4.svelte-zeh11o{font-family:SFProText-Bold;font-size:18px;color:#ffffff;letter-spacing:1.29px;text-align:center;text-shadow:0 2px 4px rgba(0, 0, 0, 0.5)}.fechaLugar.svelte-zeh11o p.svelte-zeh11o{font-family:SFProText-Bold;font-size:14px;color:#ffffff;letter-spacing:1.29px;text-align:center;text-shadow:0 2px 4px rgba(0, 0, 0, 0.5)}.temperaturaTiempo.svelte-zeh11o.svelte-zeh11o{margin-bottom:40px}.temperaturaTiempo.svelte-zeh11o h1.svelte-zeh11o{font-family:SFProText-Medium;font-size:74px;color:#ffffff;letter-spacing:1px;text-align:center;text-shadow:0 2px 4px rgba(0, 0, 0, 0.5);position:relative;z-index:4}.temperaturaTiempo.svelte-zeh11o p.svelte-zeh11o{font-family:SFProText-Medium;font-size:14px;color:#ffffff;letter-spacing:1.17px;text-align:center;text-shadow:0 2px 4px rgba(0, 0, 0, 0.5);position:relative;z-index:4}.datos.svelte-zeh11o.svelte-zeh11o{margin-bottom:20px}.datos_capsula.svelte-zeh11o.svelte-zeh11o{position:relative}.datos_capsula.svelte-zeh11o.svelte-zeh11o::before{content:'';position:absolute;top:0;left:0;width:100%;height:100%;background-image:url('./datos_capsula.svg');background-repeat:no-repeat;background-size:contain;z-index:2}.datos_pills.svelte-zeh11o.svelte-zeh11o{text-align:center;z-index:3}.datos_pills.svelte-zeh11o p.svelte-zeh11o{font-family:SFProText-Medium;font-size:12px;color:#e0e1dd;letter-spacing:1px;text-align:center}.datos_pills.svelte-zeh11o h4.svelte-zeh11o{font-family:SFProText-Medium;font-size:18px;color:#ffffff;letter-spacing:1px;text-align:center;margin-top:5px}.datos_pills.svelte-zeh11o p.svelte-zeh11o{color:#e0e1dd}.fondo.svelte-zeh11o.svelte-zeh11o{background-size:cover;background-repeat:no-repeat;z-index:-2}.cidades_img.svelte-zeh11o.svelte-zeh11o{position:absolute;top:30%;left:50%;transform:translate(-50%, -50%);z-index:1}.cidades_img.svelte-zeh11o img.svelte-zeh11o{width:fit-content}",
  map: null
};
function obtenerFechaFormateada() {
  const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
  ];
  const fechaActual = /* @__PURE__ */ new Date();
  const diaSemana = diasSemana[fechaActual.getDay()];
  const diaMes = fechaActual.getDate();
  const mes = meses[fechaActual.getMonth()];
  const año = fechaActual.getFullYear();
  return `${diaSemana}, ${diaMes} de ${mes} de ${año}`;
}
const DatosHoxe = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { humidade } = $$props;
  let { vento } = $$props;
  let { sensacion } = $$props;
  const fechaFormateada = obtenerFechaFormateada();
  console.log(fechaFormateada);
  if ($$props.humidade === void 0 && $$bindings.humidade && humidade !== void 0)
    $$bindings.humidade(humidade);
  if ($$props.vento === void 0 && $$bindings.vento && vento !== void 0)
    $$bindings.vento(vento);
  if ($$props.sensacion === void 0 && $$bindings.sensacion && sensacion !== void 0)
    $$bindings.sensacion(sensacion);
  $$result.css.add(css$3);
  return `${`<p data-svelte-h="svelte-1gr6ajs">No se pudieron cargar los datos.</p>`}`;
});
const PorHoras_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".caixa_horas.svelte-12dn4pd{overflow:auto;white-space:nowrap;background:#0d1b2a;padding-top:5px;padding-bottom:10px;-ms-overflow-style:none;scrollbar-width:none}.caixa_horas.svelte-12dn4pd::-webkit-scrollbar{display:none}.horas_venideiras.svelte-12dn4pd{text-align:center;display:inline-block;width:80px;background:#1b263b;border:1px solid #415a77;border-radius:12px;margin-left:5px;margin-right:5px;margin-top:20px}.horas_venideiras.svelte-12dn4pd::-webkit-scrollbar{display:none}p.svelte-12dn4pd{font-family:SFProText-Medium;font-size:12px;color:#e0e1dd;letter-spacing:1px;text-align:center;margin:0px;padding-top:10px}h4.svelte-12dn4pd{font-family:SFProText-Medium;font-size:18px;color:#ffffff;letter-spacing:1px;text-align:center;margin-top:10px}img.svelte-12dn4pd{display:flex;justify-content:center;align-items:center;width:60%;margin:0 auto}",
  map: null
};
const PorHoras = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { TiempoHoras } = $$props;
  if ($$props.TiempoHoras === void 0 && $$bindings.TiempoHoras && TiempoHoras !== void 0)
    $$bindings.TiempoHoras(TiempoHoras);
  $$result.css.add(css$2);
  return `<div class="caixa_horas svelte-12dn4pd">${each(TiempoHoras, (item) => {
    return `<div class="horas_venideiras svelte-12dn4pd"><div><p class="svelte-12dn4pd"><strong>${escape(item.time)}h</strong></p></div> <div class="weather-icon center"><img src="${"./iconsTempo/" + escape(item.icon, true) + ".gif"}" alt="icono" class="svelte-12dn4pd"></div> <div><h4 class="svelte-12dn4pd">${escape(Math.round(item.temperature))}°</h4></div> </div>`;
  })} </div>`;
});
const PorDias_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".caixas_dias.svelte-qktj3x{background:#0d1b2a;padding-top:10px;padding-bottom:20px}.dias_venideiros.svelte-qktj3x{background:#1b263b;border:1px solid #415a77;border-radius:12px;padding-left:10px;padding-right:10px;margin-left:10px;margin-right:10px;margin-top:10px;margin-bottom:10px}h4.svelte-qktj3x{font-family:SFProText-Medium;font-size:14px;color:#e0e1dd;letter-spacing:1px;margin-top:15px}p.svelte-qktj3x{font-family:SFProText-Regular;font-size:12px;color:#e0e1dd;letter-spacing:1px}h3.svelte-qktj3x{font-family:SFProText-Medium;font-size:18px;color:#ffffff;letter-spacing:1px;text-align:right}.iconos.svelte-qktj3x{display:flex;justify-content:center;align-items:center}img.svelte-qktj3x{display:flex;justify-content:center;align-items:center;width:50%;margin:0 auto}",
  map: null
};
const PorDias = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { TiempoDias } = $$props;
  if ($$props.TiempoDias === void 0 && $$bindings.TiempoDias && TiempoDias !== void 0)
    $$bindings.TiempoDias(TiempoDias);
  $$result.css.add(css$1);
  return ` <div class="caixas_dias svelte-qktj3x">${each(TiempoDias, (item) => {
    return `<div class="dias_venideiros svelte-qktj3x"><div class="row"><div class="col s4 valign-wrappe"><h4 class="svelte-qktj3x">${escape(item.dianome)}</h4> <p class="svelte-qktj3x">${escape(item.dia)} ${escape(item.mes)} ${escape(item.ano)}</p></div> <div class="col s4 iconos svelte-qktj3x"><img src="${"./iconsTempo/" + escape(item.icon, true) + ".gif"}" alt="icono" class="svelte-qktj3x"></div> <div class="col s2"><h3 class="svelte-qktj3x">${escape(Math.round(item.tempmax))}º</h3></div> <div class="col s2"><h3 class="svelte-qktj3x">${escape(Math.round(item.tempmin))}º</h3> </div></div> </div>`;
  })} </div>`;
});
const DatosTecnicos_svelte_svelte_type_style_lang = "";
const css = {
  code: ".posicion.svelte-1v7nbjt{position:relative;z-index:10}.datosTecnicos.svelte-1v7nbjt{background:#0d1b2a;padding-bottom:80px}.caixas.svelte-1v7nbjt{background:#1b263b;border:1px solid #415a77;border-radius:12px;text-align:center;margin:20px}img.svelte-1v7nbjt{width:50px;padding-top:20px}p.svelte-1v7nbjt{font-family:SFProText-Medium;font-size:12px;color:#e0e1dd;letter-spacing:1px;text-align:center}h4.svelte-1v7nbjt{font-family:SFProText-Medium;font-size:18px;color:#ffffff;letter-spacing:1px;text-align:center}",
  map: null
};
const DatosTecnicos = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let tempmax = "";
  let tempmin = "";
  let wind = "";
  let feel = "";
  let humidity = "";
  let pressure = "";
  let visibilidad = "";
  let uvi = "";
  let amancer = "";
  let solpor = "";
  let forecastData = [];
  let forecastDias = [];
  $$result.css.add(css);
  return `${validate_component(DatosHoxe, "DatosHoxe").$$render(
    $$result,
    {
      humidade: humidity,
      sensacion: feel,
      vento: wind
    },
    {},
    {}
  )} <div class="posicion svelte-1v7nbjt">${validate_component(PorHoras, "PorHoras").$$render($$result, { TiempoHoras: forecastData }, {}, {})} ${validate_component(PorDias, "PorDias").$$render($$result, { TiempoDias: forecastDias }, {}, {})}</div> <div class="datosTecnicos svelte-1v7nbjt"><div class="row"><div class="col s6 caixas svelte-1v7nbjt"><img src="./iconos/temperMax.png" alt="" class="svelte-1v7nbjt"> <p class="svelte-1v7nbjt" data-svelte-h="svelte-m2md8">Temp. Max.</p> <h4 class="svelte-1v7nbjt">${escape(tempmax)}ºC</h4></div> <div class="col s6 caixas svelte-1v7nbjt"><img src="./iconos/temperMin.png" alt="" class="svelte-1v7nbjt"> <p class="svelte-1v7nbjt" data-svelte-h="svelte-4a7uba">Temp. Min.</p> <h4 class="svelte-1v7nbjt">${escape(tempmin)}ºC</h4></div> <div class="col s6 caixas svelte-1v7nbjt"><img src="./iconos/wind.png" alt="" class="svelte-1v7nbjt"> <p class="svelte-1v7nbjt" data-svelte-h="svelte-1xiwqsg">Vento</p> <h4 class="svelte-1v7nbjt">${escape(wind)} km/h</h4></div> <div class="col s6 caixas svelte-1v7nbjt"><img src="./iconos/feel_like.png" alt="" class="svelte-1v7nbjt"> <p class="svelte-1v7nbjt" data-svelte-h="svelte-1b66wfj">Sensación</p> <h4 class="svelte-1v7nbjt">${escape(feel)} ºC</h4></div> <div class="col s6 caixas svelte-1v7nbjt"><img src="./iconos/humidity.png" alt="" class="svelte-1v7nbjt"> <p class="svelte-1v7nbjt" data-svelte-h="svelte-tsib6v">Humidade</p> <h4 class="svelte-1v7nbjt">${escape(humidity)} %</h4></div> <div class="col s6 caixas svelte-1v7nbjt"><img src="./iconos/pressure.png" alt="" class="svelte-1v7nbjt"> <p class="svelte-1v7nbjt" data-svelte-h="svelte-4v31ok">Presión</p> <h4 class="svelte-1v7nbjt">${escape(pressure)} hPa</h4></div> <div class="col s6 caixas svelte-1v7nbjt"><img src="./iconos/uvi.png" alt="" class="svelte-1v7nbjt"> <p class="svelte-1v7nbjt" data-svelte-h="svelte-1nk0d9r">Indice UV</p> <h4 class="svelte-1v7nbjt">${escape(uvi)}/10</h4></div> <div class="col s6 caixas svelte-1v7nbjt"><img src="./iconos/visibilidad.png" alt="" class="svelte-1v7nbjt"> <p class="svelte-1v7nbjt" data-svelte-h="svelte-18vrm1t">Visibilidade</p> <h4 class="svelte-1v7nbjt">${escape(visibilidad)} m</h4></div> <div class="col s6 caixas svelte-1v7nbjt"><img src="./iconos/sunrise.png" alt="" class="svelte-1v7nbjt"> <p class="svelte-1v7nbjt" data-svelte-h="svelte-llqjzt">Amancer</p> <h4 class="svelte-1v7nbjt">${escape(amancer)}</h4></div> <div class="col s6 caixas svelte-1v7nbjt"><img src="./iconos/sunset.png" alt="" class="svelte-1v7nbjt"> <p class="svelte-1v7nbjt" data-svelte-h="svelte-1lz7hxp">Solpor</p> <h4 class="svelte-1v7nbjt">${escape(solpor)}</h4></div></div> </div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(DatosTecnicos, "DatosTecnicos").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
