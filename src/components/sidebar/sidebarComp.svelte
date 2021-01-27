<script>
    import { Button } from 'sveltestrap';
    import {menu} from '../../stores/stores';
    import './sidebar.css';
    import Icon from 'fa-svelte'
    import ctrl from './sidebarCtrl';
    import { faFileInvoice, faChair, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
    const handleMenu = idMenu=>{
        menu.set(idMenu);
    }
</script>

<nav class="sidebar-sg p-2">
    <Button block color="primary" class="btn-sg btn-lateral" on:click={()=>{handleMenu(1)}}><Icon icon={faFileInvoice}></Icon>  Pedidos</Button>
    <Button block color="secondary" class="btn-sg btn-lateral" on:click={()=>{handleMenu(2)}}><Icon icon={faChair}></Icon>  Mesas</Button>
    <Button block color="danger" class="btn-sg btn-lateral" on:click={()=>{handleMenu(3)}}><Icon icon={faShoppingBag}></Icon>  Delivery</Button>
</nav>