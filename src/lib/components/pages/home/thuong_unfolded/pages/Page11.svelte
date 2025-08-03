<script>
    import language_preference, { display_text } from "$lib/components/language/config";
    import YtbFrame from "$lib/components/iframe-youtube/YtbFrame.svelte";

</script>

<section>
    <h2>
		{display_text($language_preference, "Ngữ pháp ", "Grammar's ")}
		<span>{display_text($language_preference, "kể", "craft")}</span>
		{display_text($language_preference, "chuyện", "")}
	</h2>
	
	<YtbFrame title="" id="xKms7I9sBKM"></YtbFrame>

	<p>
		{display_text($language_preference, "Video Khi ‘thương’ là bài học khó giảng", "When 'thương' is a hard lesson to teach")}
	</p>

</section>


<style>
    section {
		margin-top: -6%;
		width: 60%;
		height: 60%;
	}

    h2 {
		text-align: right;
		font-size: 3em;
	}

	span {
		color: #b59509;
		font-weight: bold;
		font-family: "Josefin Sans", sans-serif;
	}

    p {
		font-size: 1.5em;
		text-align: justify;
		text-align: center;
		text-decoration: underline;
	}
</style>