<script>
   import { createEventDispatcher } from 'svelte';


  const apiKey = import.meta.env.VITE_API_KEY;
  const dispatch = createEventDispatcher();

  let cityName = '';


  async function searchWeather() {
    if (!cityName) return;

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric&lang=gl`
      );


      if (!response.ok) {
        throw new Error('City not found');
      }


      const data = await response.json();
      dispatch('weatherData', data);

    } catch (error) {
      console.error('Error fetching weather data:', error);
      dispatch('weatherError', error.message);
    }
  }


</script>

  <div class="row">
    <div class="col s10">
      <div class="buscador">
        <form on:submit={searchWeather}>
          <div class="input-field" style="margin: 0 4px;">
            <input id="search" type="text" class="validate" bind:value={cityName} placeholder=" ">
            <label class="active" for="search">Busca aquí unha cidade</label>
          </div>
        </form>
      </div>
    </div>
    <div class="col s2">
      <button class="flecha valign-wrapper" on:click={searchWeather}><img src="buscar_icon.png" alt="" /></button>
    </div>
  </div>

<style>

button{
  padding: 0px;
}
/* 
.input-field.outlined input {
    padding-top: 0;
    background-color: #1B263B;
    border: 1px solid #415A77;
    border-top-left-radius: 12px;
    border-radius: 12px;
    border-bottom-left-radius: 12px;
  } */
  
.input-field input {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0 16px;
    padding-top: 20px;
    background-color: #1B263B;
    border: none;
    border-radius: 4px;
    border-bottom: 1px solid #415A77;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
}

input:not([type]):not(.browser-default), input[type=text]:not(.browser-default), input[type=password]:not(.browser-default), input[type=email]:not(.browser-default), input[type=url]:not(.browser-default), input[type=time]:not(.browser-default), input[type=date]:not(.browser-default), input[type=datetime]:not(.browser-default), input[type=datetime-local]:not(.browser-default), input[type=month]:not(.browser-default), input[type=tel]:not(.browser-default), input[type=number]:not(.browser-default), input[type=search]:not(.browser-default), textarea.materialize-textarea {
    outline: none;
    color: #E0E1DD;
    width: 100%;
    font-size: 16px;
    height: 56px;
}

.input-field > label {
    color: #E0E1DD;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    font-size: 16px;
    position: absolute;
    left: 16px;
    top: 16px;
    cursor: text;
    -webkit-transform-origin: top left;
    transform-origin: top left;
    -webkit-transition: left 0.2s ease-out, top 0.2s ease-out, -webkit-transform 0.2s ease-out;
    transition: left 0.2s ease-out, top 0.2s ease-out, -webkit-transform 0.2s ease-out;
    transition: left 0.2s ease-out, top 0.2s ease-out, transform 0.2s ease-out;
    transition: left 0.2s ease-out, top 0.2s ease-out, transform 0.2s ease-out, -webkit-transform 0.2s ease-out;
}

.input-field input[type=text]:focus + label {
     color: #E0E1DD;
   }

.flecha {
		justify-content: center;
		background: #415a77;
    /* border-top-right-radius: 12px;
    border-bottom-right-radius: 12px; */
    border-radius: 100px;
    width: 100%;
    height: 56px;
	}
</style>
