<script>
	import language_preference, { display_text } from "$lib/components/language/config";

</script>

<section>
    <br><br><br>
	<p>
		{display_text(
			$language_preference,
			"Không chỉ nằm yên trong trang sách, “thương” bước vào đời sống qua từng người, mỗi người một câu chuyện, mỗi câu chuyện một cách nói, một cách lặng im.",

			'\"Thương\" does not merely reside within the silent confines of a book\'s page; it steps forth, vibrant, into the very pulse of life through each individual. Every soul carries a story, and each story, in turn, possesses its own utterance, its own quietude.',
		)}

        <br><br>

        {display_text($language_preference, 
        "Video này là những mảnh ghép về “thương” trong đời thường: khi nói với mẹ, khi nghĩ về người cũ, khi nhớ quê, khi nuôi con… Từ văn chương đến lòng người, “thương” vẫn tiếp tục chảy....", 

        "This accompanying video offers poignant, authentic vignettes of \"thương\" as it unfolds in the mundane and the profound: whispered to a mother, held in thought for a past beloved, aching for the distant homeland, or nurturing a child. From the hallowed realm of literature to the tender chambers of the human heart, \"thương\" ceaselessly flows...")}

	</p>

	<h3>
        {display_text($language_preference, "Lắng nghe cách người ta 'thương’", "Tracing tenderness in the hush")}
	</h3>
    
    <h2>
        <span>{display_text($language_preference, "'thương'", "'thương'")}</span>
        {display_text($language_preference, " trong dòng chảy văn học", " in letters")}
    </h2>

</section>

<style>
	section {
		width: 80%;
		height: 70%;
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
        bottom: 2em;
	}

	p {
		font-size: 1.5em;
		line-height: 1.5;
		text-align: justify;
	}

</style>
