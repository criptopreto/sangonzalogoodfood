import App from './App.svelte';
import 'bootstrap/dist/css/bootstrap.min.css';

const app = new App({
	target: document.body,
});

window.ServerURL = "";

export default app;