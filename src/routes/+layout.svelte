<script>
	// @ts-nocheck

	export let data;

	import { onMount } from 'svelte';

	let sidenavInstance;


	onMount(() => {
		sidenavInstance = M.Sidenav.init(document.querySelector('.sidenav'));
	});

	function openSidenav() {
		if (sidenavInstance) {
			sidenavInstance.open();
		}
	}


</script>

<div class="navbar-fixed">
	<nav>
		<div class="nav-wrapper">
			<ul>
				<li><a href="/"> <img src="./IconHome.svg" /> </a></li>
				<li><a on:click={openSidenav}> <img src="./IconCidades.svg" /> </a></li>
				<li><a href="/buscar"> <img src="./IconBuscar.svg" /> </a></li>
				<li><a href="/configuracion"> <img src="./IconConfig.svg" /> </a></li>
			</ul>
		</div>
	</nav>
</div>

<ul id="slide-out" class="sidenav">
	<div>
		<li><div class="user-view center">
	
			<a href="#user"><img src="GaliciaWeather.gif" width="70%"> </a>
			<p class="white-text nome">GaliciaWeather Plus</p>
			<p class="white-text lema">O tempo de Galicia</p>
		  </div></li>
		  <li class="titular">Escolle unha cidade galega:</li>
		  <li><a class="cidades white-text" href="/santiago"><img src="flecha_der.png" alt="flecha"> Santiago de Compostela</a></li>
		  <li><a class="cidades white-text" href="/coruna"><img src="flecha_der.png" alt="flecha">A Coruña</a></li>
		  <li><a class="cidades white-text" href="/ferrol"><img src="flecha_der.png" alt="flecha">Ferrol</a></li>
		  <li><a class="cidades white-text" href="/vigo"><img src="flecha_der.png" alt="flecha">Vigo</a></li>
		  <li><a class="cidades white-text" href="/lugo"><img src="flecha_der.png" alt="flecha">Lugo</a></li>
		  <li><a class="cidades white-text" href="/vilagarcia"><img src="flecha_der.png" alt="flecha">Vilagarcía de Arousa</a></li>
		  <li><a class="cidades white-text" href="/ourense"><img src="flecha_der.png" alt="flecha">Ourense</a></li>
		  <li><a class="cidades white-text" href="/pontevedra"><img src="flecha_der.png" alt="flecha">Pontevedra</a></li>
		  <li><a class="cidades white-text" href="/sanxenxo"><img src="flecha_der.png" alt="flecha">Sanxenxo</a></li>
		  <li><a class="cidades white-text" href="/monforte"><img src="flecha_der.png" alt="flecha">Monforte</a></li>
		  <li><div class="divider"></div></li>
		  <li><a class="cidades white-text" href="/configuracion">Créditos</a></li>
		  <li><a class="cidades white-text" href="/privacidade">Política de privacidade</a></li>
	</div>
</ul>


<slot></slot>

<style>


@font-face {
    font-family: 'SF-Pro-Text-Bold';
    src: url('/static/fonts/SF-Pro-Text-Bold.otf');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'SF-Pro-Text-Medium';
    src: url('/static/fonts/SF-Pro-Text-Medium.otf');
    font-weight: medium;
    font-style: normal;
  }

  @font-face {
    font-family: 'SF-Pro-Text-Regular';
    src: url('/static/fonts/SF-Pro-Text-Regular.otf');
    font-weight: normal;
    font-style: normal;
  }

	.navbar-fixed {
		height: 0px;
	}

	nav {
		background-color: #1b263b;
		bottom: 0px;
	}
	ul {
		display: flex;
		justify-content: space-around;
		padding-left: 0px;
	}

	body {
		background-color: #1b263b;
	}

	nav ul:not(.dropdown-content) a:hover:not(.active) {
		background-color: #0d1b2a;
	}

  .sidenav{
    background: #0d1b2a;
  }

  img{
	padding-right: 10px;
  }

/* Sidenav */

	.nome{
		font-family: SFProText-Medium;
		font-size: 18px;
		color: #ffffff;
		letter-spacing: 1px;
	}
	
	.lema{
		font-family: SFProText-Regular;
		font-size: 14px;
		color: #e0e1dd;
		letter-spacing: 1px;
	}
	
	.titular{
		background-color: #e0e1dd;
		font-family: SFProText-Medium;
		font-size: 14px;
		color: #0D1B2A;
		letter-spacing: 1px;
		padding-left: 10px;
		padding-top: 20px;
		padding-bottom: 20px;
		margin-top: 40px;
	}
	
	.cidades{
		font-family: SFProText-Regular;
		font-size: 14px;
		letter-spacing: 1px;
	}
	</style>