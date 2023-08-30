<script>
	import WeatherSearch from './WeatherSearch.svelte';
	import WeatherCard from './WeatherCard.svelte';


	let weatherData = null;
	let weatherError = '';


  let todos = [];

	function handleWeatherData(event) {
		weatherData = event.detail;
		weatherError = '';
	}

	function handleWeatherError(event) {
		weatherError = event.detail;
		weatherData = null;
	}

	


</script>

<main>
	<WeatherSearch on:weatherData={handleWeatherData} on:weatherError={handleWeatherError} />

  <ul class:list={todos.length > 0}>
	{#if weatherData}
  <li>
	<WeatherCard name={weatherData.name} temp={Math.round(weatherData.main.temp)} description={weatherData.weather[0].description} icon={weatherData.weather[0].icon}/>
  </li>
	{:else if weatherError}
		<p>Error: {weatherError}</p>
	{/if} 
  </ul>
</main>

<style>
	main {
		background: #0d1b2a;
		height: 100vh;
		padding: 20px;
	}

	ul{
		padding: 0px;
	}
</style>
