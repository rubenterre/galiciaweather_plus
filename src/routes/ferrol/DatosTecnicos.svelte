<script>
	const apiKey = import.meta.env.VITE_API_KEY;

	import axios from 'axios';

	import { onMount } from 'svelte';
	import DatosHoxe from './DatosHoxe.svelte';
	import PorHoras from './PorHoras.svelte';
	import PorDias from './PorDias.svelte';

	//Datos de la api

	let COORDS = '';

	let tempmax = '';
	let tempmin = '';
	let wind = '';
	let feel = '';
	let humidity = '';
	let pressure = '';
	let visibilidad = '';
	let uvi = '';
	let amancer = '';
	let solpor = '';

	let forecastData = [];
	let forecastDias = [];

	var datosGlobal = null;

	$: {
		onMount(async () => {
		//ferrol
		let latitude = 43.4842336;
		let longitude = -8.2358432;

			COORDS = `?lat=${latitude}&lon=${longitude}`;
			console.log(COORDS);

			axios
				.get(
					`https://api.openweathermap.org/data/2.5/onecall${COORDS}&exclude=minutely&appid=${apiKey}&units=metric&lang=gl`
				)

				.then((data) => {
					datosGlobal = data.data;
					console.log(data.data);

					tempmax = datosGlobal.daily[0].temp.max;
					tempmin = datosGlobal.daily[0].temp.min;
					wind = datosGlobal.daily[0].wind_speed;
					feel = datosGlobal.current.feels_like;
					humidity = datosGlobal.daily[0].humidity;
					pressure = datosGlobal.daily[0].pressure;
					visibilidad = datosGlobal.current.visibility;
					uvi = datosGlobal.current.uvi;

					forecastData = datosGlobal.hourly.slice(1, 17).map((item) => ({
						temperature: item.temp,
						icon: item.weather[0].icon,
						time: new Date(item.dt * 1000).getHours()
					}));
					console.log(forecastData);

					//Convertir fechas
					var days = ['Domingo', 'Luns', 'Martes', 'Mércores', 'Xoves', 'Venres', 'Sábado'];
					var meses = [
						'Xan.',
						'Feb.',
						'Mar.',
						'Abr.',
						'Mai.',
						'Xuñ.',
						'Xul.',
						'Ago.',
						'Set.',
						'Out.',
						'Nov.',
						'Dec.'
					];

					forecastDias = datosGlobal.daily.slice(1, 6).map((item) => ({
						tempmax: item.temp.max,
						tempmin: item.temp.min,
						icon: item.weather[0].icon,
						mes: meses[new Date(item.dt * 1000).getMonth()],
						dia: new Date(item.dt * 1000).getDay(),
						dianome: days[new Date(item.dt * 1000).getDay()],
						ano: new Date(item.dt * 1000).getFullYear()
					}));
					console.log(forecastDias);

					//Amencer e Solpor

					const dateAmancer = new Date(datosGlobal.current.sunrise * 1000);
					const hours = dateAmancer.getHours(); // Agrega un 0 delante si es menor a 10
					const minutes = dateAmancer.getMinutes();
					const seconds = dateAmancer.getSeconds();

					amancer = `${hours}:${minutes}:${seconds}`;

                    const dateSolpor = new Date(datosGlobal.current.sunset * 1000);
					const hoursSolpor = dateSolpor.getHours(); // Agrega un 0 delante si es menor a 10
					const minutesSolpor = dateSolpor.getMinutes();
					const secondsSolpor = dateSolpor.getSeconds();

					solpor = `${hoursSolpor}:${minutesSolpor}:${secondsSolpor}`;

				});
		});
	}
</script>

<DatosHoxe humidade={humidity} sensacion={feel} vento={wind} />
<div class="posicion">

	<PorHoras TiempoHoras={forecastData} />
	<PorDias TiempoDias={forecastDias} />
</div>

<div class="datosTecnicos">
	<div class="row">
		<div class="col s6 caixas">
			<img src="./iconos/temperMax.png" alt="" />
			<p>Temp. Max.</p>
			<h4>{tempmax}ºC</h4>
		</div>
		<div class="col s6 caixas">
			<img src="./iconos/temperMin.png" alt="" />
			<p>Temp. Min.</p>
			<h4>{tempmin}ºC</h4>
		</div>
		<div class="col s6 caixas">
			<img src="./iconos/wind.png" alt="" />
			<p>Vento</p>
			<h4>{wind} km/h</h4>
		</div>
		<div class="col s6 caixas">
			<img src="./iconos/feel_like.png" alt="" />
			<p>Sensación</p>
			<h4>{feel} ºC</h4>
		</div>
		<div class="col s6 caixas">
			<img src="./iconos/humidity.png" alt="" />
			<p>Humidade</p>
			<h4>{humidity} %</h4>
		</div>
		<div class="col s6 caixas">
			<img src="./iconos/pressure.png" alt="" />
			<p>Presión</p>
			<h4>{pressure} hPa</h4>
		</div>
		<div class="col s6 caixas">
			<img src="./iconos/uvi.png" alt="" />
			<p>Indice UV</p>
			<h4>{uvi}/10</h4>
		</div>
		<div class="col s6 caixas">
			<img src="./iconos/visibilidad.png" alt="" />
			<p>Visibilidade</p>
			<h4>{visibilidad} m</h4>
		</div>
		<div class="col s6 caixas">
			<img src="./iconos/sunrise.png" alt="" />
			<p>Amancer</p>
			<h4>{amancer}</h4>
		</div>
		<div class="col s6 caixas">
			<img src="./iconos/sunset.png" alt="" />
			<p>Solpor</p>
			<h4>{solpor}</h4>
		</div>
	</div>
</div>

<style>
		.posicion{
		position: relative;
		z-index: 10;
	}
	.datosTecnicos {
		background: #0d1b2a;
		padding-bottom: 80px;
	}
	.caixas {
		background: #1b263b;
		border: 1px solid #415a77;
		border-radius: 12px;
		text-align: center;
		margin: 20px;
	}

	img {
		width: 50px;
		padding-top: 20px;
	}

	p {
		font-family: SFProText-Medium;
		font-size: 12px;
		color: #e0e1dd;
		letter-spacing: 1px;
		text-align: center;
	}

	h4 {
		font-family: SFProText-Medium;
		font-size: 18px;
		color: #ffffff;
		letter-spacing: 1px;
		text-align: center;
	}
</style>
