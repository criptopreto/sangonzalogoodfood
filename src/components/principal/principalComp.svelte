<script>
    import {setClient} from '../../stores/stores';
    import './principal.css';
    import ctrl from './principalCtrl';
    import {menu} from '../../stores/stores';
    import OrdersSG from '../orders/ordersComp.svelte';
    import ClientsSG from '../clients/clientsComp.svelte';
</script>

<main>
    {#if $menu === 1}
        {#if !$setClient}
            <ClientsSG open={true}/>
        {:else}
            <OrdersSG/>
        {/if}
        
    {:else}
        <p>Principal {$menu}</p>
    {/if}
</main>