<script>
import { Button } from "sveltestrap";
export let nombre = "cargando...";

let clazz;
export { clazz as class };

</script>

<Button color="danger" class={`btn-block btn-lg ${clazz}`} on:click>{nombre}</Button>