export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","BannerInicio.png","GaliciaWeather.gif","IconBuscar.svg","IconCidades.svg","IconConfig.svg","IconHome.png","IconHome.svg","Ruben_Terre_Logo_blanco_131119.svg","behance-square-brands_white.svg","buscar_icon.png","cidades/.DS_Store","cidades/coruna.png","cidades/ferrol.png","cidades/lugo.png","cidades/monforte.png","cidades/ourense.png","cidades/pontevedra.png","cidades/santiago.png","cidades/sanxenxo.png","cidades/vigo.png","cidades/vilagarcia.png","css/materialize.css","datos_capsula.svg","favicon.png","flecha_der.png","flecha_izq.png","fondo_welcome.png","fondos/.DS_Store","fondos/fondo_moita_choiva.png","fondos/fondo_neboa.png","fondos/fondo_neve.png","fondos/fondo_noite_clara.png","fondos/fondo_noite_moitas_nubes.png","fondos/fondo_noite_nublada.png","fondos/fondo_noite_poucas_nubes.png","fondos/fondo_nublado.png","fondos/fondo_pouca_choiva.png","fondos/fondo_soleado.png","fondos/fondo_soleado_moitas_nubes.png","fondos/fondo_soleado_poucas_nubes.png","fondos/fondo_tormenta.png","fondos/unknown.png","fonts/SF-Pro-Text-Bold.otf","fonts/SF-Pro-Text-Medium.otf","fonts/SF-Pro-Text-Regular.otf","github-square-brands_white.svg","iconos/feel_like.png","iconos/humidity.png","iconos/pressure.png","iconos/sunrise.png","iconos/sunset.png","iconos/temperMax.png","iconos/temperMin.png","iconos/temperature.png","iconos/uvi.png","iconos/visibilidad.png","iconos/wind.png","iconsTempo/01d.gif","iconsTempo/01n.gif","iconsTempo/02d.gif","iconsTempo/02n.gif","iconsTempo/03d.gif","iconsTempo/03n.gif","iconsTempo/04d.gif","iconsTempo/04n.gif","iconsTempo/09d.gif","iconsTempo/09n.gif","iconsTempo/10d.gif","iconsTempo/10n.gif","iconsTempo/11d.gif","iconsTempo/11n.gif","iconsTempo/13d.gif","iconsTempo/13n.gif","iconsTempo/50d.gif","iconsTempo/50n.gif","iconsTempo/unknown.gif","iconsTempo/unknown.svg","linkedin-brands_white.svg","logo_central_GaliciaWeatherPlus.svg","santiago/.DS_Store","santiago/fondo_moita_choiva.png","santiago/fondo_neboa.png","santiago/fondo_neve.png","santiago/fondo_noite_clara.png","santiago/fondo_noite_moitas_nubes.png","santiago/fondo_noite_nublada.png","santiago/fondo_noite_poucas_nubes.png","santiago/fondo_nublado.png","santiago/fondo_pouca_choiva.png","santiago/fondo_soleado.png","santiago/fondo_soleado_moitas_nubes.png","santiago/fondo_soleado_poucas_nubes.png","santiago/fondo_tormenta.png","santiago/unknown.png"]),
	mimeTypes: {".png":"image/png",".gif":"image/gif",".svg":"image/svg+xml",".css":"text/css",".otf":"font/otf"},
	_: {
		client: {"start":"_app/immutable/entry/start.e2db39da.js","app":"_app/immutable/entry/app.52bd273b.js","imports":["_app/immutable/entry/start.e2db39da.js","_app/immutable/chunks/scheduler.4c84dceb.js","_app/immutable/chunks/singletons.881df2cd.js","_app/immutable/entry/app.52bd273b.js","_app/immutable/chunks/scheduler.4c84dceb.js","_app/immutable/chunks/index.11ec2f83.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js')),
			__memo(() => import('./nodes/12.js')),
			__memo(() => import('./nodes/13.js')),
			__memo(() => import('./nodes/14.js')),
			__memo(() => import('./nodes/15.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/buscar",
				pattern: /^\/buscar\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/configuracion",
				pattern: /^\/configuracion\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/coruna",
				pattern: /^\/coruna\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/ferrol",
				pattern: /^\/ferrol\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/lugo",
				pattern: /^\/lugo\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/monforte",
				pattern: /^\/monforte\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/ourense",
				pattern: /^\/ourense\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/pontevedra",
				pattern: /^\/pontevedra\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/privacidade",
				pattern: /^\/privacidade\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/santiago",
				pattern: /^\/santiago\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/sanxenxo",
				pattern: /^\/sanxenxo\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/vigo",
				pattern: /^\/vigo\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/vilagarcia",
				pattern: /^\/vilagarcia\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 15 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
