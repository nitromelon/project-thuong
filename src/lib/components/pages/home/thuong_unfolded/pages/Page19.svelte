<script>
	import language_preference, { display_text } from "$lib/components/language/config";

</script>

<section>


	<div>
        <p>
            {@html display_text($language_preference, "<b>Ngữ âm</b> khiến một chữ viết ra không còn là con chữ tĩnh lặng. Nó có thể run rẩy, dịu dàng, hoặc tha thiết tuỳ vào người nói và cảm xúc đi kèm. Vì vậy, hiểu thương không chỉ là hiểu nghĩa mà còn là <i>lắng nghe cách nó được thốt ra</i>. Có lẽ, điều làm nên sức sống cho từ này không chỉ là từ điển, mà còn là nhịp tim, hơi thở và những lần ta cất tiếng.", "<b>Phonetics</b> brings a written word to life, allowing it to tremble, soften, or yearn depending on the speaker and accompanying emotion. Thus, understanding \"thương\" is not just about its meaning, but about <i>listening to how it's uttered</i>. Perhaps, what gives this word its vitality isn't merely dictionaries, but the heartbeat, breath, and every instance it is spoken.")}
        </p>
    </div>

	<br />

	<h2>
		{display_text($language_preference, "Ngữ âm ", "Sound's ")}
		<span>{display_text($language_preference, "vẽ", "nuance")}</span>
		{display_text($language_preference, " nghĩa", "")}
	</h2>
</section>

<style>
	section {
		width: 100%;
		height: 70%;
        display: flex;
        align-items: center;
        justify-content: center;
	}

    div {
        height: 80%;
    }

	h2 {
		position: absolute;
		font-size: 3em;
		top: 80%;
        left: 10%;
	}

	span {
		font-weight: bold;
		font-family: "Josefin Sans", sans-serif;
		color: var(--brown);
	}

    div {
        width: 100%;
        height: auto;
        background-color: var(--primary-blue);
    }

	p {
        padding: 2em 0 2em 0;
		font-size: 1.5em;
		line-height: 1.5;
		text-align: center;
        text-align: justify;
        width: 80%;
        margin: auto;
        height: auto;
        color: white;
	}

    p :global {
        b {
            font-weight: bold;
            color: var(--light-red);
        }
        i {
            font-style: italic;
            color: var(--peach);
        }
    }

</style>
