<script>
    import ctrl from './clientsCtrl';
    import {setClient} from '../../stores/stores';
    import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'sveltestrap';
    export let open = false;
    const toggle = () => (open = !open);
</script>

<Modal isOpen={open} data-backdrop="static" class="modal-dialog-centered">
    <ModalHeader>Seleccione el Cliente</ModalHeader>
    <ModalBody>
        <p>Clientes</p>
    </ModalBody>
    <ModalFooter>
    <Button color="primary" on:click={()=>{toggle();setClient.set(true)}}>Aceptar</Button>
    </ModalFooter>
</Modal>