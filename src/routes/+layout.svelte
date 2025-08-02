<script lang="ts">
	import "the-new-css-reset/css/reset.css";
	import "$lib/style/layout.css";
	const { children } = $props();
</script>

{@render children()}

<svelte:head>
	<link href="https://fonts.googleapis.com/css?family=Cormorant+Garamond" rel="stylesheet" />
	<link href="https://fonts.googleapis.com/css?family=Josefin Sans" rel="stylesheet" />
	<link href="https://fonts.googleapis.com/css?family=Paytone One" rel="stylesheet" />
	<link href="https://fonts.googleapis.com/css?family=Libre+Caslon+Text" rel="stylesheet" />
	<link href="https://db.onlinewebfonts.com/c/ab61b01a11b91d82d5bc31986c3a3e7c?family=Caslon+3" rel="stylesheet" />
	<link href="https://db.onlinewebfonts.com/c/3c1a4128f95e2109303b045eda4bfe8a?family=Etna" rel="stylesheet" />
</svelte:head>
