<script>
	const apiKey = import.meta.env.VITE_API_KEY;

	export let humidade;
	export let vento;
	export let sensacion;

	import axios from 'axios';

	import { onMount } from 'svelte';

	//Fecha hoy
	function obtenerFechaFormateada() {
		const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
		const meses = [
			'Enero',
			'Febrero',
			'Marzo',
			'Abril',
			'Mayo',
			'Junio',
			'Julio',
			'Agosto',
			'Septiembre',
			'Octubre',
			'Noviembre',
			'Diciembre'
		];

		const fechaActual = new Date();
		const diaSemana = diasSemana[fechaActual.getDay()];
		const diaMes = fechaActual.getDate();
		const mes = meses[fechaActual.getMonth()];
		const año = fechaActual.getFullYear();

		return `${diaSemana}, ${diaMes} de ${mes} de ${año}`;
	}

	const fechaFormateada = obtenerFechaFormateada();
	console.log(fechaFormateada);

	//Datos de la api

	let COORDS = '';
	let city = '';
	let temperature = '';
	let descripcion = '';
	var datosPrincipal = null;

	let fondo = '';

	onMount(async () => {
		//pontevedra
		let latitude = 42.431;
		let longitude = -8.6444;
		console.log(latitude);

		COORDS = `lat=${latitude}&lon=${longitude}`;
		console.log(COORDS);

		axios
			.get(
				`https://api.openweathermap.org/data/2.5/weather?${COORDS}&appid=${apiKey}&units=metric&lang=gl`
			)

			.then((data) => {
				datosPrincipal = data.data;
				console.log(data.data);

				city = datosPrincipal.name;
				temperature = datosPrincipal.main.temp;
				descripcion = datosPrincipal.weather[0].description;

				// Cambiar a noche o día el fondo de pantalla

				switch (datosPrincipal.weather[0].icon) {
					case '01d':
						fondo = cambiarSoleado();
						break;

					case '01n':
						fondo = cambiarNoiteClara();
						break;

					case '02d':
						fondo = cambiarSoleadoPoucasNubes();
						break;

					case '02n':
						fondo = cambiarNoitePoucasNubes();
						break;

					case '03d':
						fondo = cambiarDiaNublado();
						break;

					case '03n':
						fondo = cambiarNoiteNublada();
						break;

					case '04d':
						fondo = cambiarNublado();
						break;

					case '04n':
						fondo = cambiarNublado();
						break;

					case '09d':
						fondo = cambiarMoitaChoiva();
						break;

					case '09n':
						fondo = cambiarMoitaChoiva();
						break;

					case '10d':
						fondo = cambiarPoucaChoiva();
						break;

					case '10n':
						fondo = cambiarPoucaChoiva();
						break;

					case '11d':
						fondo = cambiarTormenta();
						break;

					case '11n':
						fondo = cambiarTormenta();
						break;

					case '13d':
						fondo = cambiarNeve();
						break;

					case '13n':
						fondo = cambiarNeve();
						break;

					case '50d':
						fondo = cambiarNeboa();
						break;

					case '50n':
						fondo = cambiarNeboa();
						break;

					case 'unknown':
						fondo = cambiarColorDia();
						break;
				}

				function cambiarSoleado() {
					return './fondos/fondo_soleado.png';
				}

				function cambiarNoiteClara() {
					return './fondos/fondo_noite_clara.png';
				}

				function cambiarSoleadoPoucasNubes() {
					return './fondos/fondo_soleado_poucas_nubes.png';
				}

				function cambiarNoitePoucasNubes() {
					return './fondos/fondo_noite_poucas_nubes.png';
				}

				function cambiarDiaNublado() {
					return './fondos/fondo_nublado.png';
				}

				function cambiarNoiteNublada() {
					return './fondos/fondo_noite_nublado.png';
				}

				function cambiarNublado() {
					return './fondos/fondo_nublado.png';
				}

				function cambiarMoitaChoiva() {
					return './fondos/fondo_moita_choiva.png';
				}

				function cambiarPoucaChoiva() {
					return './fondos/fondo_pouca_choiva.png';
				}

				function cambiarTormenta() {
					return './fondos/fondo_tormenta.png';
				}

				function cambiarNeve() {
					return './fondos/fondo_neve.png';
				}

				function cambiarNeboa() {
					return './fondos/fondo_neboa.png';
				}

				function cambiarColorDia() {
					return './fondos/unknown.png';
				}
			});
	});
</script>

{#if datosPrincipal !== null}
	
	<div class="fondo" style="background-image: url({fondo})">
		<div class="container">
			<div class="row">
				<div class="col s12">
						<div class="fechaLugar">
							<h4>Pontevedra</h4>
							<p>{fechaFormateada}</p>
						</div>
						<div class="temperaturaTiempo">
							<h1>{Math.round(temperature)}º</h1>
							<p>{descripcion}</p>
						</div>
					<div class="datos">
						<div class="datos_capsula">
							<div class="row">
								<div class="col s4 datos_pills">
									<p>Humidade</p>
									<h4>{humidade}%</h4>
								</div>
								<div class="col s4 datos_pills raya">
									<p>Sensación</p>
									<h4>{Math.round(sensacion)}º</h4>
								</div>
								<div class="col s4 datos_pills">
									<p>Vento</p>
									<h4>{vento} km/h</h4>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="cidades_img">
					<img src="/cidades/pontevedra.png" alt="" />
				</div>
			</div>
		</div>
	</div>
{:else}
	<p>No se pudieron cargar los datos.</p>
{/if}

<style>

	/* Fecha e lugar */

	.fechaLugar {
		text-align: center;
		margin-top: 40px;
	}
	.fechaLugar h4 {
		font-family: SFProText-Bold;
		font-size: 18px;
		color: #ffffff;
		letter-spacing: 1.29px;
		text-align: center;
		text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
	}

	.fechaLugar p {
		font-family: SFProText-Bold;
		font-size: 14px;
		color: #ffffff;
		letter-spacing: 1.29px;
		text-align: center;
		text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
	}

	/* Temperatura principal */

	.temperaturaTiempo {
		margin-bottom: 40px;
	}

	.temperaturaTiempo h1 {
		font-family: SFProText-Medium;
		font-size: 74px;
		color: #ffffff;
		letter-spacing: 1px;
		text-align: center;
		text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
		position: relative;
		z-index: 4;
	}

	.temperaturaTiempo p {
		font-family: SFProText-Medium;
		font-size: 14px;
		color: #ffffff;
		letter-spacing: 1.17px;
		text-align: center;
		text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
		position: relative;
		z-index: 4;
	}

	/* Cápsula de datos de humidade, sensación térmica e vento */

	.datos {
		margin-bottom: 20px;
	}

	.datos_capsula {
		position: relative;
	}

	.datos_capsula::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: url('./datos_capsula.svg');
		background-repeat: no-repeat;
		background-size: contain;
		z-index: 2;
	}

	.datos_pills {
		text-align: center;
		z-index: 3;
	}

	.datos_pills p {
		font-family: SFProText-Medium;
		font-size: 12px;
		color: #e0e1dd;
		letter-spacing: 1px;
		text-align: center;
	}

	.datos_pills h4 {
		font-family: SFProText-Medium;
		font-size: 18px;
		color: #ffffff;
		letter-spacing: 1px;
		text-align: center;
		margin-top: 5px;
	}

	.datos_pills p {
		color: #e0e1dd;
	}

	/* Fondo */

	.fondo {
		background-size: cover;
		background-repeat: no-repeat;
		z-index: -2;
	}

	.ornamento {
		border-radius: 30px 30px 0 0;
		background: #0d1b2a;
		margin: 0px;
		padding: 0px;
		width: 100%;
		height: 30px;
	}

	.cidades_img {
		position: absolute;
		top: 30%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 1;
	}

	.cidades_img img {
		width: fit-content;
	}
</style>
