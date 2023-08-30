<script>
	export let data;

	import Layout from './+layout.svelte';

</script>

<Layout>
	<div class="row">
		<div class="col s12">
			<div class="fondo_inicio">
				<img src="BannerInicio.png" width="100%" alt="" />
				<div class="ornamento" />
			</div>
		</div>
		<div />
		<div class="col s12 seleccion">
			<div class="seleccion-titulo">
				<h2 class="center-align">Selecciona a túa cidade principal</h2>
				<p class="center-align">GaliciaWeather Plus</p> 
				<!-- <p class="center-align">Quedará gardada en memoria</p> -->
				<div class="botones">
					{#each data.botones as item}
						<a href={item.ruta} on:click={() => handleLinkClick(item.ruta)}>
							<div class="boton">
								<div class="row">
									<div class="col s8 boton-titulo valign-wrapper">
										<h4>{item.titulo}</h4>
									</div>
									<div class="col s3 efecto" />
									<div class="col s1 flecha valign-wrapper">
										<img src="flecha_der.png" alt="" />
									</div>
								</div>
							</div>
						</a>
					{/each}
				</div>
			</div>
		</div>
	</div>
</Layout>

<style>
	.fondo_inicio {
		background: url(./fondos/fondo_noite_clara.png);
		background-size: cover;
		background-repeat: no-repeat;
	}

	.fondo_inicio img {
		margin-top: 50px;
	}

	.ornamento {
		border-radius: 30px 30px 0 0;
		background: #0d1b2a;
		margin: 0px;
		padding: 0px;
		width: 100%;
		height: 30px;
	}

	.seleccion {
		background: #0d1b2a;
		padding-bottom: 80px;
	}

	.seleccion-titulo h2 {
		font-family: SFProText-Medium;
		font-size: 16px;
		color: #e0e1dd;
		letter-spacing: 1px;
		padding-left: 20px;
		padding-right: 20px;
		margin: 0px;
	}

	p {
		font-family: SFProText-Regular;
		font-size: 12px;
		color: #e0e1dd;
	}

	/* Botones de selección */

	.botones {
		background: #0d1b2a;
		padding-top: 10px;
		padding-bottom: 20px;
	}

	.boton {
		background: #415a77;
		border: 1px solid #415a77;
		border-radius: 12px;
		margin-left: 10px;
		margin-right: 10px;
		margin-top: 10px;
		margin-bottom: 10px;
	}

	.boton-titulo {
		background: #1b263b;
		border-top-right-radius: 0px;
		border-bottom-right-radius: 0px;
		border-top-left-radius: 12px;
		border-bottom-left-radius: 12px;
		padding-left: 10px;
	}

	h4 {
		font-family: SFProText-Medium;
		font-size: 14px;
		color: #e0e1dd;
		letter-spacing: 1px;
		margin-top: 15px;
	}

	.efecto {
		background: #1b263b;
		border-right: 1px solid #415a77;
		border-top-right-radius: 12px;
		border-bottom-right-radius: 12px;
		border-top-left-radius: 0px;
		border-bottom-left-radius: 0px;
	}

	.flecha {
		justify-content: center;
		background: #415a77;
		border-radius: 12px;
	}
</style>
