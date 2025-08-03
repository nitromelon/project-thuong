<script>
	import language_preference, { display_text } from "$lib/components/language/config";
</script>

<section>
	<p>
		{display_text(
			$language_preference,
			"Khi ta nói một điều gì đó, điều đọng lại không chỉ là chữ nghĩa, mà còn là âm điệu. Cùng là một chữ “thương”, nhưng nói khẽ sẽ khác với nói đằm. Nói nhanh khác với nói ngập ngừng. Ngữ âm - gồm cách phát âm, nhấn nhá, ngắt nghỉ - chính là lớp màu phủ lên chữ, khiến câu nói trở nên có hồn, có tình. Và đôi khi, người nghe hiểu được ta đang “thương như thế nào” không phải từ nội dung câu nói, mà từ cách ta cất tiếng. Ngữ âm không chỉ giúp nói gì, mà còn giúp ta nói như thế nào.",
			"When we speak, what lingers isn't just the words, but the melody of our voice. The same word \"thương,\" spoken softly, differs from one spoken deeply. Spoken quickly, it contrasts with a hesitant utterance. Phonetics, including pronunciation, emphasis, and pauses, acts as the layer of color over words, giving sentences soul and feeling. Sometimes, listeners understand how we \"thương\" not from the content of the sentence, but from the way we speak. Phonetics helps us convey not just what we say, but how we say it.",
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
		font-size: 1.4em;
		line-height: 1.5;
		margin-top: 10%;
		text-align: justify;
	}

	span {
		font-weight: bold;
		font-family: "Josefin Sans", sans-serif;
		color: var(--brown);
	}

</style>
