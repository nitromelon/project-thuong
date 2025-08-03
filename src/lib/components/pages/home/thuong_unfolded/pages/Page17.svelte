<script>
	import language_preference, { display_text } from "$lib/components/language/config";
</script>

<section>
	<p>
		{display_text(
			$language_preference,
			"Một chữ “thương” có thể mang sắc thái dịu dàng, trách móc, day dứt hay thậm chí là bất lực - tất cả chỉ thông qua cách nó được cất lên. Một câu tưởng như khẳng định, qua ngữ điệu, có thể hóa thành câu hỏi, lời giễu nhẹ hoặc một tiếng thở dài. Chính vì thế, hiểu “thương” không chỉ dừng ở nghĩa từ điển mà còn nằm ở nhịp tim, hơi thở và giọng nói của người nói. Nó không phải là một chữ tĩnh, mà là một chuyển động mềm mại, rung cảm gắn liền với từng tình huống và sắc thái giao tiếp.",
			"A single word \"thương\" can carry nuances of tenderness, blame, remorse, or even helplessness, all simply through the way it's uttered. A seemingly affirmative statement, through intonation, can transform into a question, a gentle jest, or a sigh. Therefore, understanding \"thương\" goes beyond its dictionary definition; it lies in the speaker's heartbeat, breath, and voice. It's not a static word, but a gentle, resonant movement tied to each situation and communicative nuance.",
		)}
	</p>

    <br />

	<p>
		{display_text(
			$language_preference,
			"Để hiểu rõ hơn về tầm quan trọng và sự kỳ diệu của ngữ điệu trong tiếng Việt, đặc biệt là cách nó \"vẽ nghĩa\" cho từng lời nói, mời bạn theo dõi cuộc trò chuyện của mình với MC Mỹ Vân - một người có kinh nghiệm dày dạn trong việc sử dụng ngôn ngữ và giọng nói để truyền tải cảm xúc.",
			"To better understand the importance and magic of intonation in Vietnamese, especially how it \"paints meaning\" onto every word, I invite you to watch my conversation with MC My Van - an expert in using language and voice to convey emotion.",
		)}
	</p>

	<h2>
		{display_text($language_preference, "Ngữ âm ", "Sound's ")}
		<span>{display_text($language_preference, "vẽ", "nuance")}</span>
		{display_text($language_preference, " nghĩa", "")}
	</h2>
</section>

<style>
	section {
        padding-top: 2em;
		width: 60%;
		height: 70%;
		border-color: black;
		border-style: solid;
	}

	h2 {
		position: absolute;
		font-size: 3em;
		top: 75%;
	}

	p {
		font-size: 1.3em;
		line-height: 1.5;
		text-align: justify;
	}

	span {
		font-weight: bold;
		font-family: "Josefin Sans", sans-serif;
		color: var(--brown);
	}

</style>
