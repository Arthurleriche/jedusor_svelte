<script>
import Todo from './Todo.svelte';
import { createEventDispatcher } from 'svelte';

export function changeTodo (todo, detail){
		todos = todos.map(t => {
				if (t === todo){
					return {...todo, ...detail}
				} return t; 
			}
		)
    }




// export let category
// export let giphy 
// export let showCompleted
export let todos 





const dispatch = createEventDispatcher();

$: array = todos.filter(t => t.category == catetgory)

// let gif = giphy 

</script>








<div class="bg-red-300 rounded-lg  w-1/3  text-white m-1 shadow-md">
    <!-- BROUILLON !!!!!!!  -->

    {#each array as todo}
      <Todo {todo} on:change={(e) => changeTodo(todo, e.detail)} on:input={(e) => changeTodo(todo, e.detail)}   /> 
    {/each}




    <!-- <div class="bg-red-400 rounded-t-lg text-3xl p-4 font-bold shadow-md"> {category} -->

         <!-- <img {src} class="h-24 m-auto" alt=""/>  -->

        <!-- <label><input type="checkbox" bind:checked={showCompleted}> <span class="text-sm">Afficher les tâches complétées.</span></label> -->

    <!-- </div>

    <div class="categorie m-auto mb-12" style="background-image:url({gif})">      
    </div> -->

  <!-- <ul>
      {#each array as todo}
      <Todo {todo} on:change={(e) => changeTodo(todo, e.detail)} on:input={(e) => changeTodo(todo, e.detail)} on:message = {handleMessage}  /> 
      {/each}
  </ul> -->

  <!-- <input class="mt-2 ml-6 text-black" type="text" bind:value={newTodo}><button on:click|preventDefault={addTodo} class="bg-blue-400 text-white px-2">+</button> -->
  
</div>



