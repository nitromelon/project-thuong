<script lang="ts">
	import language_preference, { display_text, LayoutLanguage } from "$lib/components/language/config";

	import Landing from "$lib/components/pages/home/landing/landing.svelte";
	import About from "$lib/components/pages/home/about/about.svelte";
	import Thuong_Unfolded from "$lib/components/pages/home/thuong_unfolded/thuong_unfolded.svelte";
	import Loving_Words from "$lib/components/pages/home/loving_words/loving_words.svelte";
	import YourThoughts from "$lib/components/pages/home/your_thoughts/your_thoughts.svelte";

	export let menu = 0;
</script>

<svelte:head>
	<title>Chữ và Nghĩa</title>
</svelte:head>

<header>
	<div class="translate-wrapper">
		<button
			onclick={() => {
				let language: LayoutLanguage;

				switch ($language_preference.language) {
					case LayoutLanguage.English:
						language = LayoutLanguage.Vietnamese;
						break;
					case LayoutLanguage.Vietnamese:
						language = LayoutLanguage.English;
						break;
					default:
						language = LayoutLanguage.Vietnamese;
						break;
				}

				$language_preference.language = language;
			}}
		>
			{display_text(
				$language_preference,
				"This page is also available in English. Read this page in English.",
				"Trang này cũng có phiên bản tiếng Việt. Đọc trang này bằng tiếng Việt.",
			)}
		</button>
	</div>

	<!-- svelte-ignore a11y_invalid_attribute -->

	<h1>
		<a
			href="#"
			onclick={(e) => {
				e.preventDefault();
				menu = 0;
			}}
		>
			<span style="font-family: 'Paytone One', sans-serif;">{display_text($language_preference, "Chữ", "Words")}</span>
			<span style="font-family: 'Caslon 3', serif; color: #86756a;">
				{display_text($language_preference, " và ", " and ")}
			</span>
			<span style="font-family: 'Etna', sans-serif;">{display_text($language_preference, "Nghĩa", "Meaning")}</span>
		</a>
	</h1>

	<!-- svelte-ignore a11y_invalid_attribute -->
	<nav>
		<ul id="menu">
			<li>
				<a
					href="#"
					class:active={menu === 1}
					onclick={(e) => {
						e.preventDefault();
						menu = 1;
					}}>{display_text($language_preference, "Về dự án", "About")}</a
				>
			</li>
			<li>
				<a
					href="#"
					class:active={menu === 2}
					onclick={(e) => {
						e.preventDefault();
						menu = 2;
					}}>{display_text($language_preference, "Chạm vào chữ", "'Thương' unfolded")}</a
				>
			</li>
			<li>
				<a
					href="#"
					class:active={menu === 3}
					onclick={(e) => {
						e.preventDefault();
						menu = 3;
					}}>{display_text($language_preference, "Lời thương gửi lại", "Loving Words")}</a
				>
			</li>
			<li>
				<a
					href="#"
					class:active={menu === 4}
					onclick={(e) => {
						e.preventDefault();
						menu = 4;
					}}>{display_text($language_preference, "Bạn nghĩ sao?", "Your Thoughts")}</a
				>
			</li>
		</ul>
	</nav>

	<hr style="border-top: 1px solid beige;" />
</header>

<section>
	{#if menu === 1}
		<About />
	{:else if menu === 2}
		<Thuong_Unfolded />
	{:else if menu === 3}
		<Loving_Words />
	{:else if menu === 4}
		<YourThoughts />
	{:else}
		<Landing />
	{/if}
</section>

<style>
	header {
		position: fixed;
		top: 0;
		z-index: 1000;
		background-color: var(--white);
		width: 100%;
		transition: transform 0.3s ease;
	}

	section {
		position: absolute;
		top: 20%;
		width: 100%;
		transition: transform 0.3s ease;
	}

	.translate-wrapper {
		padding-left: 5px;
		font-family:
			system-ui,
			-apple-system,
			BlinkMacSystemFont,
			"Segoe UI",
			Roboto,
			Oxygen,
			Ubuntu,
			Cantarell,
			"Open Sans",
			"Helvetica Neue",
			sans-serif;

		button {
			text-decoration: underline;
			cursor: pointer;
		}
	}

	h1 {
		margin-top: -20px;
		padding-bottom: 5px;
		text-align: center;
		font-size: 3em;
		color: var(--primary-blue);
	}

	ul#menu {
		list-style-type: none;
		display: flex;
		justify-content: space-evenly;
	}

	ul#menu li {
		flex: 1;
		text-align: center;
	}

	ul#menu li a {
		width: 99%;
		background-color: var(--primary-blue);
		display: inline-block;
		color: beige;
		text-decoration: none;
		font-family: "Josefin Sans", sans-serif;
		font-size: 1.5em;
		padding: 0.5em 1em;
		border-radius: 12px; /* rounded corners */
		transition: background 0.3s ease;
		box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
	}

	ul#menu li a:hover {
		background-color: #3c5b9b; /* hover state */
	}

	ul#menu li a.active {
		background-color: #f4e2d8; /* or any highlight color */
		color: var(--primary-blue);
		font-weight: bold;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
	}
</style>
