<script lang="ts">
	import "the-new-css-reset/css/reset.css";
	import "$lib/style/layout.css";
	const { children } = $props();
</script>

{@render children()}
