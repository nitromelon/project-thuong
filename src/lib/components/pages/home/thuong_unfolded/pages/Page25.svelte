<script>
	import language_preference, { display_text } from "$lib/components/language/config";

	import YtbFrame from "$lib/components/iframe-youtube/YtbFrame.svelte";

</script>

<section>
    <br>
	<p>
		{display_text(
			$language_preference,
			"Video 'Lắng nghe cách người ta thương’",

			"Video 'Tracing tenderness in the hush'",
		)}

	</p>

    <div>
        <YtbFrame id="XElhbLR9-r0" title="Video 'Lắng nghe cách người ta thương’"/>
    </div>

	<h3>
        {display_text($language_preference, "Lắng nghe cách người ta 'thương'", "Tracing tenderness in the hush")}
	</h3>
    
    <h2>
        <span>{display_text($language_preference, "'thương'", "'thương'")}</span>
        {display_text($language_preference, " trong dòng chảy văn học", " in letters")}
    </h2>

</section>

<style>
	section {
		width: 80%;
		height: 72%;
        position: relative;
	}

	span {
		color: var(--dark-gold);
		font-weight: bold;
	}

	h2 {
		font-size: 3em;
		text-align: left;
        position: absolute;
        bottom: 0%;
	}

	h3 {
		font-size: 2em;
		text-align: left;
		margin-top: 20px;
        position: absolute;
        bottom: 1.7em;
	}

	p {
		font-size: 1.5em;
		line-height: 1.5;
		text-align: center;
        text-decoration: underline;
        font-style: italic;
	}

    div {
        height: 70%;
    }

</style>
