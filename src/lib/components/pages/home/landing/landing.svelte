<script>
	import LandingImage from "$lib/assets/images/landing/menu.svg";
</script>

<img src={LandingImage} alt="Landing" />

<style>
	img {
		/* display: block;
		margin-right: auto;
        margin-top: 2em; */
		float: right;
		margin-right: 10%;
		width: 35%;

		/* Apply animation */
		animation-name: bounce;
		animation-duration: 1.5s;
		animation-iteration-count: infinite;
		animation-timing-function: ease-in-out;
	}

	@keyframes bounce {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(10px); /* Adjust for desired bounce distance */
		}
	}
</style>
