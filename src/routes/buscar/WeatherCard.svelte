<script>
    import { del, get, keys, set } from 'idb-keyval';

export let name;
export let temp;
export let description;
export let icon;

export let todos;


    todos = [];
    let ciudad = "";

    set(todos)
  .then(() => {
        todos = keys(ciudad=[name,temp,description,icon]);
        todos.map(ciudad => get(ciudad))
        console.log(todos)
  })
  .catch((err) => console.log('It failed!', err));

</script>

<div class="card_buscar">
    <div class="row">
        <div class="col s6 card_buscar-datos">
            <h3>{temp}°C</h3>
            <p>{description}</p>
            <h4>{name}</h4>
        </div>
        <div class="col s6 vertical-wrapper card_buscar-icono center-align">
            <img width="150px" src="./iconsTempo/{icon}.gif" alt="" />
        </div>
    </div>
</div>

<style>
    .card_buscar {
		border-bottom: 2px solid #415a77;
		background-color: #1b263b;
		padding: 10px;
		margin-top: 20px;
	}

  .card_buscar-datos{
    padding-left: 10px;
  }

  .card_buscar-icono{
    padding-right: 10px;
    justify-content: center;
    align-content: center;
  }

	h3 {
		font-family: SFProText-Medium;
		font-size: 48px;
		color: #e0e1dd;
		letter-spacing: 3.43px;
	}

	h4 {
		font-family: SFProText-Medium;
		font-size: 14px;
		color: #e0e1dd;
		letter-spacing: 1px;
	}

	p {
		font-family: SFProText-Regular;
		font-size: 11px;
		color: #e0e1dd;
		letter-spacing: 0.79px;
	}

</style>