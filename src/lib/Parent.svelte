<script>
import Child from './Child.svelte';
export let msg;
export let child = null; 
export let dynamicallyLoaded = true;
if (child == null){
  child = Child;
  dynamicallyLoaded = false;
}

</script>

<h1>Parent Component</h1>

<svelte:component this={child} {dynamicallyLoaded} />

Msg: {msg}
