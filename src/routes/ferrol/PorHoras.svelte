<script>
	export let TiempoHoras;
</script>

<div class="caixa_horas">
	{#each TiempoHoras as item}
		<div class="horas_venideiras">
			<div>
				<p><strong>{item.time}h</strong></p>
			</div>
			<div class="weather-icon center">
				<img src="./iconsTempo/{item.icon}.gif" alt="icono" />
			</div>
			<div>
				<h4>{Math.round(item.temperature)}°</h4>
			</div>
		</div>
	{/each}
</div>

<style>
	/* Previsión horaria */
	.caixa_horas {
		overflow: auto;
		white-space: nowrap;
		background: #0d1b2a;
		padding-top: 5px;
		padding-bottom: 10px;
		/* Hide scrollbar for IE, Edge and Firefox */
		-ms-overflow-style: none;
		/* IE and Edge */
		scrollbar-width: none;
		/* Firefox */
	}

	/* Hide scrollbar for Chrome, Safari and Opera */
	.caixa_horas::-webkit-scrollbar {
		display: none;
	}

	.horas_venideiras {
		text-align: center;
		display: inline-block;
		width: 80px;
		background: #1b263b;
		border: 1px solid #415a77;
		border-radius: 12px;
        margin-left: 5px;
        margin-right: 5px;
        margin-top: 20px;
	}

	.horas_venideiras::-webkit-scrollbar {
		display: none;
	}

	p {
		font-family: SFProText-Medium;
		font-size: 12px;
		color: #e0e1dd;
		letter-spacing: 1px;
		text-align: center;
        margin: 0px;
        padding-top: 10px;
	}

	h4 {
		font-family: SFProText-Medium;
		font-size: 18px;
		color: #ffffff;
		letter-spacing: 1px;
		text-align: center;
        margin-top: 10px;
	}

	img {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 60%;
		margin: 0 auto;
	}
</style>
