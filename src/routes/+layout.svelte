<script lang="ts">
	import "the-new-css-reset/css/reset.css";
	import "$lib/style/layout.css";
	const { children } = $props();
</script>

{@render children()}

<svelte:head>
	<link href="https://fonts.googleapis.com/css?family=Cormorant+Garamond" rel="stylesheet" />
	<link href="https://fonts.googleapis.com/css?family=Josefin Sans" rel="stylesheet" />
</svelte:head>
