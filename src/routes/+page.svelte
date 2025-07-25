<script lang="ts">


	import About from "$lib/components/pages/home/about/about.svelte";
	import Thuong_Unfolded from "$lib/components/pages/home/thuong_unfolded/thuong_unfolded.svelte";
    import Loving_Words from "$lib/components/pages/home/loving_words/loving_words.svelte";

	import language_perference, {
        display_text,
        LayoutLanguage,
    } from "$lib/components/language/config";

	export let menu = 1;
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

<ul id="menu">
    <li><a href="/" onclick={(e) => { e; menu = 1; }}>{display_text($language_perference, "Về dự án", "About")}</a></li> |
    <li><a href="/" onclick={(e) => { e.preventDefault(); menu = 2; }}>{display_text($language_perference, "Chạm vào chữ", "'Thương' unfolded")}</a></li> |
    <li><a href="/" onclick={(e) => { e.preventDefault(); menu = 3; }}>{display_text($language_perference, "Lời thương gửi lại", "Loving Words")}</a></li>
</ul>

{#if menu === 1}
<About />
{:else if menu === 2}
<Thuong_Unfolded />
{:else if menu === 3}
<Loving_Words />
{:else}
<h1>
	Page Not Found
</h1>
{/if}

<style>
	.translate-wrapper {
		position: sticky;
		top: 0;
		z-index: 1000;
		height: auto;
        padding: 16px;
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
		list-style-type: none;
		background-color: navy;
	}

	ul#menu li {
		display: inline;
	}

	ul#menu li a {
		justify-content: space-evenly;

		color: beige;
	}

</style>