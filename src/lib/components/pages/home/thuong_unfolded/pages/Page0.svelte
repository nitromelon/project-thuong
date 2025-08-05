<script>
	import language_preference, { display_text } from "$lib/components/language/config";

	import { onMount } from "svelte";

	onMount(() => {
		document.body.style.overflow = "hidden";
		const checkbox = document.getElementById("book-on");
		if (checkbox) {
			checkbox.addEventListener("change", function () {
				if (this.checked) {
					this.disabled = true;
					document.body.style.overflow = "auto";
				}
			});
		}
	});
</script>

<section>
	<div class="wrapper">
		<label for="book-on"></label>
		<input type="checkbox" name="" id="book-on" autocomplete="off" />
		<div class="book-container">
			<div class="book">
				<div class="book-spine"></div>
				<div class="book-cover"></div>
				<div class="book-pages">
					<div class="page-content">
						<h1>
							{@html display_text($language_preference, "Chạm <span>vào</span> chữ", "'Thương' <span>unfolded</span>")}
						</h1>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
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
		height: 100%;
		width: 100%;
		/* top: 50%;
		left: 50%;
		transform: translate(-50%, -50%) scale(0.6); */
		z-index: 1;
		visibility: hidden;
		transition: 0.8s ease;
	}

	#book-on {
		display: none;
	}

	#book-on:checked ~ .book-container {
		/* transform: rotateX(0deg) rotateY(-15deg) translateX(50%) scale(3); */
		transform: rotateX(10deg) rotateY(-15deg) translateX(50%);
	}

	#book-on:checked ~ .book-container .book-cover {
		transform: rotateY(-140deg);
	}

	#book-on:checked ~ .book-container .book {
		transform: translateX(20px);
	}

	.content-wrapper:has(~ #book-on:checked) {
		background-color: var(--background-color);
		transform: translate(-50%, -50%);
		visibility: visible;
		z-index: 2;
	}

	.book-container {
		position: relative;
		width: 300px;
		height: 400px;
		transform-style: preserve-3d;
		transform: rotateX(75deg) rotateY(10deg) translateX(0);

		transition: transform 0.8s ease;
	}

	.wrapper:hover > .book-container {
		/* transform: rotateX(75deg) rotateY(10deg) translateX(0) */
	}

	.book {
		position: relative;
		width: 100%;
		height: 100%;
		transform-style: preserve-3d;
		transition: all 0.8s cubic-bezier(0.645, 0.045, 0.355, 1);
		transform: translateX(0);
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
		transform: rotateY(0deg) translateZ(20px);
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

	.page-content {
		position: absolute;
		top: 30px;
		left: 30px;
		right: 30px;
		color: var(--primary-blue);
		line-height: 1.6;
		opacity: 1;
		transition: opacity 0.5s ease 0.6s;
		font-size: 1.5em;
		text-align: center;
	}

	h1 :global(span) {
		font-family: "Crimson Pro", serif;
		color: var(--dark-gold);
	}
</style>
