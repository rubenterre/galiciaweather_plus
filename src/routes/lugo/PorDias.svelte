<script>
export let TiempoDias;
</script>

<!--
    <div class="caixa_dias">
	{#each TiempoHoras as item}
		<div class="dias_venideiros">
			<div>
				<p><strong>{item.time}h</strong></p>
			</div>
			<div class="weather-icon-mas_una center">
				<img src="./iconsTempo/{item.icon}.gif" alt="icono" />
			</div>
			<div>
				<h4>{Math.round(item.temperature)}°</h4>
			</div>
		</div>
	{/each}
</div>

-->
<div class="caixas_dias">
    {#each TiempoDias as item}
	<div class="dias_venideiros">
		<div class="row">
			<div class="col s4 valign-wrappe">
				<h4>{item.dianome}</h4>
				<p>{item.dia} {item.mes} {item.ano}</p>
			</div>
			<div class="col s4 iconos">
				<img src="./iconsTempo/{item.icon}.gif" alt="icono" />
			</div>
			<div class="col s2">
				<h3>{Math.round(item.tempmax)}º</h3>
			</div>
            <div class="col s2">
				<h3>{Math.round(item.tempmin)}º</h3>
			</div>
		</div>
	</div>
    {/each}
</div>


<style>
	.caixas_dias {
		background: #0d1b2a;
        padding-top: 10px;
        padding-bottom: 20px;

	}

	.dias_venideiros {
		background: #1b263b;
		border: 1px solid #415a77;
		border-radius: 12px;
        padding-left: 10px;
        padding-right: 10px;
        margin-left: 10px;
        margin-right: 10px;
        margin-top: 10px;
        margin-bottom: 10px;
	}

	h4 {
		font-family: SFProText-Medium;
		font-size: 14px;
		color: #e0e1dd;
		letter-spacing: 1px;
        margin-top: 15px;
	}

	p {
		font-family: SFProText-Regular;
		font-size: 12px;
		color: #e0e1dd;
		letter-spacing: 1px;
	}

	h3 {
		font-family: SFProText-Medium;
		font-size: 18px;
		color: #ffffff;
		letter-spacing: 1px;
		text-align: right;
	}

    .iconos{
        display: flex;
         justify-content: center;
         align-items: center; 
    }

	img {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 50%;
		margin: 0 auto;
	}
</style>
