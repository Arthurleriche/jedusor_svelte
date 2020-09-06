 <script>
    
    export let todo = {}
    import { createEventDispatcher } from 'svelte'

     const dispatch = createEventDispatcher();



    function onCheck() {
        dispatch('change', {completed: !todo.completed})
    }

    function onInput (e){
        dispatch ('input', {name: e.target.value})
    }

    function onDelete (e) {
        dispatch ('delete')
    }




 </script>

 
 <li class=" flex justify-around p-4 shadow-md " ><input class="h-4 mr-2 mt-1 float-left" type="checkbox" checked={todo.completed} on:change={onCheck} > 

 <input placeholder="Add new todo" class=" border-none bg-transparent" type="text" value={todo.name} on:input={onInput}>

 <button class="bg-red-700 text-white text-xs rounded-full w-4" on:click|preventDefault={onDelete} >X</button>
</li> 
 


 
