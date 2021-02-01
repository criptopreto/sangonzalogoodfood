<script>
	import {onMount, beforeUpdate} from 'svelte';
	import { Col, Container, Row, Button, Modal, ModalBody, ModalHeader, ModalFooter, Form, FormGroup, Input } from 'sveltestrap';
	import './app.css';
	import SidebarSG from './components/sidebar/sidebarComp.svelte';
	import PrincipalSG from './components/principal/principalComp.svelte';
	import HeaderSG from './components/header/headerComp.svelte';
	import {categoria} from './stores/stores';
	import Splash from './components/splash/splashComp.svelte';

	const {remote} = require('electron');
	const app = remote.require("./app");
	let newCategoria = {
		nombre: 'Fast Food',
		bebida: false,
		visible: true,
		sort: 1,
	}

	function tamVentana() {
		var tam = 0;
		if (typeof window.innerWidth != 'undefined')
		{
			tam = window.innerWidth;
		}
		else if (typeof document.documentElement != 'undefined'
			&& typeof document.documentElement.clientWidth !=
			'undefined' && document.documentElement.clientWidth != 0)
		{
			tam = [
				document.documentElement.clientWidth
			];
		}
		else   {
			tam = [
				document.getElementsByTagName('body')[0].clientWidth
			];
		}
		return tam;
	}

	setTimeout(()=>{
		app.setFullScreen();
	}, 10000)

	window.onresize = ()=>{
		if(tamVentana() > 900){
			splash = false;
		}
	}


	let idCatG = 1;
	let splash = true;

	app.createCategoria(newCategoria).then(newCat=>{
		app.getCategorias().then(categorias=>{
			categorias.map(cats=>{
				console.log(cats);
				$categoria = [...$categoria, cats];
			})
		})
	}).catch(err=>{
		console.error(err);
	});
	function crearGrupo(idCat){
		let newGrupo = {
			nombre: 'Hamburguesa',
			visible: true,
			bebida: false,
			sort: 1,
			categoriumId: idCat
		}
		app.createGrupo(newGrupo).then(newGrp=>{
			console.log(newGrp);
		})
	}

	function getCatAndGrp(){
		app.getCategoriasAndGrupos().then(data=>{
			console.log(data);
		})
	}

	/*
	app.getUsers().then(cats=>{
		cats.map(cate=>{
			console.log(cate);
			$categoria = [...$categoria, cate]
		})
	}).catch(err=>{
		console.error(err);
	});
	*/
	let open = false;
	let isLocked = false;
	let passtxt = "";
	const toggle = () => (open = !open);
	const writepass = n=> {
		passtxt += n;
		document.getElementById("wpass").focus();
	};
	const borrarpass = ()=> {passtxt="";document.getElementById("wpass").focus();};
</script>
{#if splash}
	<Splash/>
{:else}
	<div class="app-main">
		<HeaderSG/>
		<SidebarSG/>
		<PrincipalSG/>
		<input bind:value={idCatG}/>
		<button on:click={()=>crearGrupo(idCatG)}>Crear Grupo</button>
		<button on:click={getCatAndGrp}>Get Grupo</button>
		<Modal isOpen={open || isLocked} data-backdrop="static" class="modal-dialog-centered">
		<ModalHeader {toggle}>Introduzca la Contraseña</ModalHeader>
		<ModalBody>
			<Form>
				<Row>
					<Col sm={12}>
						<FormGroup>
						<Input type="password" name="wpass" id="wpass" placeholder="Contraseña" bind:value={passtxt}/>
						</FormGroup>
					</Col>
					<Col sm={12}>
						<div class="wrapper-teclas d-grid gap-2">
							<div class="btn-group" role="group" aria-label="...">
								<button type="button" class="btn btn-primary" on:click={()=>writepass(7)}>7</button>
								<button type="button" class="btn btn-primary" on:click={()=>writepass(8)}>8</button>
								<button type="button" class="btn btn-primary" on:click={()=>writepass(9)}>9</button>
							</div>
							<div class="btn-group" role="group" aria-label="...">
								<button type="button" class="btn btn-primary" on:click={()=>writepass(4)}>4</button>
								<button type="button" class="btn btn-primary" on:click={()=>writepass(5)}>5</button>
								<button type="button" class="btn btn-primary" on:click={()=>writepass(6)}>6</button>
							</div>
							<div class="btn-group" role="group" aria-label="...">
								<button type="button" class="btn btn-primary" on:click={()=>writepass(1)}>1</button>
								<button type="button" class="btn btn-primary" on:click={()=>writepass(2)}>2</button>
								<button type="button" class="btn btn-primary" on:click={()=>writepass(3)}>3</button>
							</div>
							<div class="btn-group" role="group" aria-label="...">
								<button type="button" class="btn btn-primary" on:click={()=>writepass(0)}>0</button>
								<button type="button" class="btn btn-primary" on:click={borrarpass}>Limpiar</button>
								<button type="button" class="btn btn-danger" on:click={borrarpass}>Limpiar Todo</button>
							</div>
						</div>
					</Col>
				</Row>
			</Form>
		</ModalBody>
		<ModalFooter>
			<Button color="secondary" on:click={()=>{toggle();borrarpass()}}>Cancelar</Button>
			<Button color="primary" on:click={toggle}>Aceptar</Button>
		</ModalFooter>
		</Modal>
	</div>
{/if}

	

<style>
	.wrapper-teclas{
		height: 400px;
	}

	.d-grid {
		display: grid !important;
	}

	.gap-2 {
		gap: .5rem !important;
	}
</style>