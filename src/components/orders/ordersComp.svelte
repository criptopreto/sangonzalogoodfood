<script>
    import { Button, Col, Row } from 'sveltestrap';
    import './orders.css';
    import { faUser, faClock, faDesktop, faUserTag } from '@fortawesome/free-solid-svg-icons';
    import Icon from 'fa-svelte';
    import moment from 'moment';
    import 'moment/locale/es';
    import {categoria} from '../../stores/stores'
    
    import Categoria from '../catbtn/catbtnComp.svelte';

    let catActiva = 0;

    function setCategoria(id){
        catActiva = id;
        console.log(catActiva)
    }

    moment.locale("es");

    var fecha = moment().format("LLLL");;
    setInterval(()=>{
        fecha = moment().format("LLLL");
    }, 1000)



</script>
<Row class="h-100 m-1">
    <Col sm={12} class="orders-header bd-blue">
        <p><b><Icon icon={faUserTag}></Icon> Cliente: </b> Israel | <b><Icon icon={faUser}></Icon> Usuario: </b> Admin | <b> <Icon icon={faDesktop}></Icon> Terminal: </b> 072 | <b><Icon icon={faClock}></Icon> {fecha}</b> </p>
    </Col>
    <Col sm={3} class="orders-pedidos bd-blue">
        <div class="wrapper-pedidos m-1 p-2 row">
            <div class="col-12 mb-1">
                <div class="row m-0">
                    <div class="col-10">
                        <input type="text" class="form-control" name="" id="">
                    </div>
                    <div class="col-2">
                        <Button color="secondary" class="btn-block">...</Button>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <div class="row m-0">
                    <div class="col-10">
                        Tabla de Productos
                    </div>
                    <div class="col-2">
                        <Button color="secondary" class="btn-block">^</Button>
                        <Button color="secondary" class="btn-block">+</Button>
                        <Button color="secondary" class="btn-block">-</Button>
                        <Button color="secondary" class="btn-block">X</Button>
                        <Button color="secondary" class="btn-block">v</Button>
                    </div>
                </div>
            </div>
            <div class="col-12 p-2">
                <Button color="success" class="btn-block">TOTAL $0,00</Button>
            </div>
        </div>
    </Col>
    <Col sm={9} class="orders-items bd-blue">
        <div class="row m-0">
            <div class="col-10">
                <div class="row m-0">
                    <div class="col-12">
                        <fieldset>
                            <legend>Grupos</legend>
                            <p>caracas</p>
                        </fieldset>
                    </div>
                    <div class="col-12">
                        <fieldset>
                            <legend>Productos</legend>
                            <p>caracas</p>
                        </fieldset>
                    </div>
                </div>
            </div>
            <div class="col-2">
                <fieldset>
                    <legend>Categorias</legend>
                    {#each $categoria as cat}
                        <Categoria nombre={cat.nombre} class="{catActiva === cat.id ? "active": ''}" on:click={()=>setCategoria(cat.id)}/>
                    {/each}
                    {catActiva}
                </fieldset>
            </div>
        </div>
    </Col>
    <Col sm={12}>
        <Button color="primary">Cliente</Button>
        <Button color="primary">Cliente</Button>
        <Button color="primary">Cliente</Button>
        <Button color="primary">Cliente</Button>
        <Button color="primary">Cliente</Button>
    </Col>
</Row>