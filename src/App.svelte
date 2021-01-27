<script>
import { Col, Container, Row, Button, Modal, ModalBody, ModalHeader, ModalFooter, Form, FormGroup, Input } from 'sveltestrap';
import './app.css';
import SidebarSG from './components/sidebar/sidebarComp.svelte';
import PrincipalSG from './components/principal/principalComp.svelte';
import HeaderSG from './components/header/headerComp.svelte';
import {categoria} from './stores/stores';

	const {remote} = require('electron');
	const app = remote.require("./app");
	app.getUsers().then(cats=>{
		cats.map(cate=>{
			console.log(cate);
			$categoria = [...$categoria, cate]
		})
	}).catch(err=>{
		console.error(err);
	});
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
<div class="app-main">
	<HeaderSG/>
	<SidebarSG/>
	<PrincipalSG/>
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