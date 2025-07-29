<script lang="ts">
    import Landing from "$lib/components/pages/home/landing/landing.svelte";
	import About from "$lib/components/pages/home/about/about.svelte";
	import Thuong_Unfolded from "$lib/components/pages/home/thuong_unfolded/thuong_unfolded.svelte";
    import Loving_Words from "$lib/components/pages/home/loving_words/loving_words.svelte";
    import YourThoughts from "$lib/components/pages/home/your_thoughts/your_thoughts.svelte";

	import language_perference, {
        display_text,
        LayoutLanguage,
    } from "$lib/components/language/config";

	export let menu = 0;
</script>

<svelte:head>
    <title>Chữ và Nghĩa</title>
</svelte:head>

<div class="translate-wrapper">
    <button
        onclick={() => {
            let language: LayoutLanguage;

            switch ($language_perference.language) {
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

            $language_perference.language = language;
        }}
    >
        {display_text(
            $language_perference,
            "This page is also available in English. Read this page in English.",
            "Trang này cũng có phiên bản tiếng Việt. Đọc trang này bằng tiếng Việt.",
        )}
    </button>
</div>

<nav>
    <ul id="menu">
        <li><a href="/" onclick={(e) => { e.preventDefault(); menu = 1; }}>{display_text($language_perference, "Về dự án", "About")}</a></li> 
        <li><a href="/" onclick={(e) => { e.preventDefault(); menu = 2; }}>{display_text($language_perference, "Chạm vào chữ", "'Thương' unfolded")}</a></li> 
        <li><a href="/" onclick={(e) => { e.preventDefault(); menu = 3; }}>{display_text($language_perference, "Lời thương gửi lại", "Loving Words")}</a></li> 
        <li><a href="/" onclick={(e) => { e.preventDefault(); menu = 4; }}>{display_text($language_perference, "Bạn nghĩ sao?", "Your Thoughts")}</a></li>
    </ul>
</nav>

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

<style>
	.translate-wrapper {
		position: sticky;
		top: 0;
		z-index: 1000;
		height: auto;
        padding: 5px;
        background-color: var(--light-orange);
        color: var(--red);
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

	ul#menu {
		background-color: navy;
		list-style-type: none;
        display: flex;
        justify-content: space-evenly;
        padding: 0;
        margin: 0;
	}

	ul#menu li {
		flex: 1;
        text-align: center;
	}

	ul#menu li a {
		color: beige;
        display: block;
        text-decoration: none;
        font-family: "Josefin Sans", sans-serif;
        font-size: 1.5em;
        padding: 20px;
	}


</style>