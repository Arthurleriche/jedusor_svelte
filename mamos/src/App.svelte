<script>

	import Tailwindcss from './Tailwindcss.svelte';
	import Todo from './components/Todo.svelte';
	import Navbar from './components/Navbar.svelte';


	export let todos 
	export let categoryName 
	export let color1 
	export let color2 
	export let src 
	

	const date = new Date();
	var months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre"];
	const m = months[date.getMonth()];	
	const j = date.getDate();
	const a = date.getFullYear();
	const ladate = `${j} ${m}`;
	const lannee = `${a}`;


	let newTodo = '';
	let showCompleted = true

	function addTodo() {
		todos = [...todos, {
			name: newTodo,
			completed: false
		}]
		newTodo = ''
	}

	$: filteredTodos = todos.filter(t =>  showCompleted === true ? true : t.completed === false ) 

	function changeTodo (todo, detail){
		todos = todos.map(t => {
				if (t === todo){
					return {...todo, ...detail}
				} return t; 
			}
		)
	}


	function deleteTodo(todo) {
		todos = todos.filter(t => t !== todo)
	}

</script>

<Tailwindcss />

<main>
	
	<!-- {JSON.stringify(todos)} -->
	<h1 class="font-bold text-4xl">TODO </h1>
	<div class="text-red-600 "> {ladate} {lannee}  </div>    


	<script>
		var affichageSeconds = function() {

			var sexDiv = document.querySelector(".sex");
			var tahri = new Date() ; 			
			var s ; 
			var mi ;
			var he = tahri.getHours();
							
			deuxChiffres = function(element){
				if (element < 10){
					return "0" + element ;
				}
				else {
					return element;
				}
			}
			
			s = deuxChiffres(tahri.getSeconds());
			mi = deuxChiffres(tahri.getMinutes());
			he = deuxChiffres(tahri.getHours());
			
			sexDiv.textContent = he + ":" + mi + ":" + s ; 
			sexDiv.style.backgroundColor = "#68d391"; 
			setTimeout(affichageSeconds, 1000); 
		}
	
		affichageSeconds(); 
	</script>
	

	<div class="flex justify-around h-auto w-full space-x-8 ">

		<!-- -------------------- LISTE ------------>
		<div style="background-color: {color1}" class="rounded-lg  h-full  text-white m-1 shadow-md">

			<div style="background-color: {color2}"  class="rounded-t-lg pb-8 text-3xl p-4 shadow-md">	
				{categoryName} 	
				<img {src} class="h-24 m-auto" alt=""/>
				<label class="">
					<input class="float-left" type="checkbox" bind:checked={showCompleted}> 
					<span class="text-xs float-left">Afficher les tâches complétées.</span>
				</label>
			</div>

			<ul>
				{#each filteredTodos as todo}
				<div style="border-color: {color1}">
				<Todo 
				todo= {todo} 
				on:change={(e) => changeTodo(todo, e.detail)} 
				on:input={(e) => changeTodo(todo, e.detail)}
				on:delete={() => deleteTodo(todo)}  />
				</div>
				{/each}
			</ul>

			<div class="pb-4">
				<input placeholder="Add new todo" class="mt-2 ml-3 text-black" style="text-color: {color2}" type="text" bind:value={newTodo}>
				<button on:click|preventDefault={addTodo} class="bg-blue-400 text-white px-2">+</button>
			</div>
		</div>
		<!-- -------------------- LISTE --------------->
	</div>
</main>



<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

</style>

