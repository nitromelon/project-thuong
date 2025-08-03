<script>
	import language_preference, { display_text } from "$lib/components/language/config";

    import YtbFrame from "$lib/components/iframe-youtube/YtbFrame.svelte";

</script>

<div>
	<p>
		{display_text($language_preference, "Video 'Thương' qua chánh niệm", "Video 'Thương' through Mindfulness")}
	</p>

	<YtbFrame title="" id="BJR5cs5YFGw"></YtbFrame>

	<h2>
		{display_text($language_preference, "Vượt lên một từ đơn", "Beyond the word")}
	</h2>
</div>

<style>
	div {
		margin-top: -7%;
		width: 60%;
		height: 60%;
	}

	h2 {
		font-size: 3em;
	}

	p {
		font-size: 1.5em;
		text-align: justify;
		text-align: center;
		text-decoration: underline;
	}

	
</style>
