<script lang="ts">
	import Page1 from "./pages/Page1.svelte";
	import Page2 from "./pages/Page2.svelte";
	import Page3 from "./pages/Page3.svelte";
	import Page4 from "./pages/Page4.svelte";
	import Page5 from "./pages/Page5.svelte";
	import Page6 from "./pages/Page6.svelte";
	import Page7 from "./pages/Page7.svelte";
	import Page8 from "./pages/Page8.svelte";
	import Page9 from "./pages/Page9.svelte";
	import Page10 from "./pages/Page10.svelte";
	import Page11 from "./pages/Page11.svelte";
	import Page12 from "./pages/Page12.svelte";
	import Page13 from "./pages/Page13.svelte";
	import Page14 from "./pages/Page14.svelte";
	import Page15 from "./pages/Page15.svelte";
	import Page16 from "./pages/Page16.svelte";
	import Page17 from "./pages/Page17.svelte";
	import Page18 from "./pages/Page18.svelte";
	import Page19 from "./pages/Page19.svelte";
	import Page20 from "./pages/Page20.svelte";
	import Page21 from "./pages/Page21.svelte";
	import Page22 from "./pages/Page22.svelte";
	import Page23 from "./pages/Page23.svelte";
	import Page24 from "./pages/Page24.svelte";
	import Page25 from "./pages/Page25.svelte";
	import Page26 from "./pages/Page26.svelte";

	import { onMount } from "svelte";
	import language_preference, { display_text } from "$lib/components/language/config";

	let scrollY = 0;
	let windowHeight = 0;

	const components = [
		Page1,
		Page2,
		Page3,
		Page4,
		Page5,
		Page6,
		Page7,
		Page8,
		Page9,
		Page10,
		Page11,
		Page12,
		Page13,
		Page14,
		Page15,
		Page16,
		Page17,
		Page18,
		Page19,
		Page20,
		Page21,
		Page22,
		Page23,
		Page24,
		Page25,
		Page26,
	];

	let componentStyles = Array.from({ length: components.length }, (_, index) => getTransform(index));

	$: if (windowHeight !== 0 || scrollY) {
		componentStyles = componentStyles.map((_, index) => getTransform(index));
	}

	function getTransform(index: number) {
		const componentStart = index * windowHeight;
		const componentEnd = (index + 1) * windowHeight;
		const progress = (scrollY - componentStart) / windowHeight;

		if (scrollY < componentStart) {
			// Section hasn't been reached yet
			return {
				scale: 1,
				opacity: 0,
				zIndex: components.length - index,
			};
		} else if (scrollY >= componentStart && scrollY < componentEnd) {
			// Current section being scrolled
			const scale = 1 + progress * 0.5; // Scale up to 1.5x
			const opacity = 1 - progress; // Fade out
			return {
				scale,
				opacity,
				zIndex: components.length - index + 10, // Bring to front
			};
		} else {
			// Section has been passed
			return {
				scale: 1.5,
				opacity: 0,
				zIndex: components.length - index,
			};
		}
	}

	onMount(() => {
		windowHeight = window.innerHeight;

		const handleResize = () => {
			windowHeight = window.innerHeight;
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	});
</script>

<svelte:window bind:scrollY />

<!-- <section>
	<div class="wrapper">
		<label for="book-on"></label>
		<div class="content-wrapper" style="height: {components.length * 100}vh;">
			{#each components as component, i}
				{@const transform = getTransform(i)}
				<div
					class="slide"
					style="
						transform: scale({transform.scale});
						opacity: {transform.opacity};
						z-index: {transform.zIndex};
					"
				>
					<svelte:component this={component} />
				</div>
			{/each}
		</div>
		<input type="checkbox" name="" id="book-on" autocomplete="off" />
		<div class="book-container">
			<div class="floating-particles"></div>
			<div class="book">
				<div class="book-spine"></div>
				<div class="book-cover">
					<div class="book-title">STORIES</div>
				</div>
				<div class="book-pages">
					<div class="page-content">
						<h3>Chapter 1</h3>
						<p>
							Once upon a time, in a world where books came alive with the touch of a cursor, there lived stories
							waiting to be discovered...
						</p>
						<br />
						<p>Every page turned revealed new adventures, and every word sparkled with possibility.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section> -->

<div class="container" style="height: {components.length * 100}vh;">
	{#each components as component, i}
		<!-- {@const transform = getTransform(i)} -->
		{@const transform = componentStyles[i]!}
		<div
			class="slide"
			style="
				transform: scale({transform.scale});
				opacity: {transform.opacity};
				z-index: {transform.zIndex};
      		"
		>
			<svelte:component this={component} />
		</div>
	{/each}
</div>

<style>
	.container {
		position: relative;
		width: 100%;
		height: 100vh;
		/* overflow-x: hidden; */
	}

	.slide {
		pointer-events: none;
		position: fixed;
		top: 17%;
		left: 0;
		width: 100%;
		height: 83vh;
		display: flex;
		/* align-items: center;
		justify-content: center; */
		transition:
			transform 0.1s ease-out,
			opacity 0.1s ease-out;
		will-change: transform, opacity;
		transition-timing-function: var(--timing-function);
		transition-duration: 1s;
	}

	.wrapper {
		perspective: 1200px;
		display: flex;
		justify-content: center;
		align-items: center;

		> label {
			position: absolute;
			height: 100%;
			width: 200%;
			left: 50%;
			transform: translateX(-50%);
			z-index: 2;
			cursor: pointer;
		}
	}

	.content-wrapper {
		position: absolute;
		height: 100vh;
		width: 100vw;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%) scale(0.6);
		z-index: 1;
		visibility: hidden;
		transition: 0.8s ease;
	}

	#book-on {
		display: none;
	}

	#book-on:checked ~ .book-container {
		transform: rotateX(0deg) rotateY(-15deg) translateX(50%) scale(3);
	}

	.content-wrapper:has(~ #book-on:checked) {
		background-color: white;
		transform: translate(-50%, -50%);
		visibility: visible;
		z-index: 2;
	}

	.book-container {
		position: relative;
		width: 300px;
		height: 400px;
		transform-style: preserve-3d;
		transform: rotateX(75deg) rotateY(10deg);
		transition: transform 0.8s ease;
	}

	.wrapper:hover > .book-container {
		transform: rotateX(0deg) rotateY(-15deg) translateX(50%);
	}

	.book {
		position: relative;
		width: 100%;
		height: 100%;
		transform-style: preserve-3d;
		transition: all 0.8s cubic-bezier(0.645, 0.045, 0.355, 1);
	}

	.book-spine {
		position: absolute;
		left: 0;
		top: 0;
		width: 20px;
		height: 100%;
		background: linear-gradient(to bottom, #8b4513, #654321);
		transform: rotateY(-90deg);
		transform-origin: left;
		border-radius: 0 3px 3px 0;
	}

	.book-cover {
		position: absolute;
		width: 100%;
		height: 100%;
		background: linear-gradient(145deg, #2c3e50, #34495e);
		border-radius: 8px;
		transform-origin: left;
		transition: transform 0.8s cubic-bezier(0.645, 0.045, 0.355, 1);
		/* cursor: pointer; */
		box-shadow:
			0 10px 30px rgba(0, 0, 0, 0.3),
			inset 0 1px 0 rgba(255, 255, 255, 0.1);
	}

	.book-cover::before {
		content: "";
		position: absolute;
		top: 20px;
		left: 20px;
		right: 20px;
		bottom: 20px;
		border: 2px solid #ecf0f1;
		border-radius: 4px;
	}

	.book-title {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: #ecf0f1;
		font-size: 24px;
		font-weight: bold;
		text-align: center;
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
		letter-spacing: 2px;
	}

	.book-pages {
		position: absolute;
		top: 5px;
		left: 5px;
		right: 5px;
		bottom: 5px;
		background: #f8f9fa;
		border-radius: 5px;
		transform: translateZ(-2px);
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
	}

	.book-pages::before {
		content: "";
		position: absolute;
		top: 30px;
		left: 30px;
		right: 30px;
		height: 2px;
		background: #bdc3c7;
		border-radius: 1px;
		box-shadow:
			0 20px 0 #bdc3c7,
			0 40px 0 #bdc3c7,
			0 60px 0 #bdc3c7,
			0 80px 0 #bdc3c7;
	}

	.wrapper:hover > .book-container .book-cover {
		transform: rotateY(-140deg);
	}

	.wrapper:hover > .book-container .book {
		transform: translateX(20px);
	}

	.page-content {
		position: absolute;
		top: 30px;
		left: 30px;
		right: 30px;
		color: #2c3e50;
		font-size: 14px;
		line-height: 1.6;
		opacity: 0;
		transition: opacity 0.5s ease 0.6s;
		pointer-events: none;
	}

	.book-container:hover .page-content {
		opacity: 1;
	}
</style>
