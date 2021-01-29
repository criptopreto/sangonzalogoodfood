<script>
    let saludo = "hola"
    import {categoria} from '../stores/stores'
    $categoria = [...$categoria, {nombre: "rosmer"}]
</script>

<div>
    {#each $categoria as cat}
        {cat.nombre}
    {/each}
    {saludo} Mundo!
</div>