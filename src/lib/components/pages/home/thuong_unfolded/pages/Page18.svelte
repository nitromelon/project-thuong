<script>
	import language_preference, { display_text } from "$lib/components/language/config";

	import YtbFrame from "$lib/components/iframe-youtube/YtbFrame.svelte";
</script>

<section>
	<p>
		{display_text($language_preference, "Video Lên giọng, xuống lòng", "Video A Raised Voice, a Sunken Heart")}
	</p>

	<br />

	<div>
        <YtbFrame title="" id="NskuL7mR7W0"></YtbFrame>
    </div>

	<h2>
		{display_text($language_preference, "Ngữ âm ", "Sound's ")}
		<span>{display_text($language_preference, "vẽ", "nuance")}</span>
		{display_text($language_preference, " nghĩa", "")}
	</h2>
</section>

<style>
	section {
		width: 80%;
		height: 70%;
	}

    div {
        height: 80%;
    }

	h2 {
		position: absolute;
		font-size: 3em;
		top: 80%;
	}

	span {
		font-weight: bold;
		font-family: "Josefin Sans", sans-serif;
		color: var(--brown);
	}

	p {
		font-size: 1.3em;
		line-height: 1.5;
		text-align: center;
		text-decoration: underline;
        font-style: italic;
	}
</style>
