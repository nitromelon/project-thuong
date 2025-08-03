<script>
	import language_preference, { display_text } from "$lib/components/language/config";
</script>

<section>
    <p>
        {display_text($language_preference, "Nếu ngữ pháp là cấu trúc dệt nên ý nghĩa của \"thương\", thì chính ngữ âm, đặc biệt là ngữ điệu và cách nhấn nhá, lại là nét cọ vô hình, tinh tế, vẽ nên những sắc thái cảm xúc, thái độ và chiều sâu cho lời nói ấy.", "If grammar weaves the meaning of \"thương\", then phonetics, especially intonation and emphasis, is the invisible, delicate brushstroke that paints emotional nuances, attitudes, and depth into the word.")}
    </p>

    <br /> 

    <p>
        {@html display_text($language_preference, "Ngữ âm là ngành nghiên cứu về âm thanh lời nói, bao gồm cách chúng ta tạo ra (phát âm), truyền đi và tiếp nhận âm thanh. Trong tiếng Việt, ngoài hệ thống thanh điệu độc đáo (ngang, huyền, hỏi, ngã, sắc, nặng) giúp phân biệt nghĩa từ, thì <u>ngữ điệu</u> (intonation) và cách <u>nhấn nhá</u> (emphasis) lại đóng vai trò cực kỳ quan trọng trong việc truyền tải cảm xúc và ý định của người nói. Ngữ điệu là sự lên xuống của giọng nói trong một câu, còn nhấn nhá là việc làm nổi bật một từ hay cụm từ cụ thể.", "Phonetics is the study of speech sounds, including how we produce, transmit, and receive them. In Vietnamese, beyond the unique tone system (level, falling, rising-falling, creaky-rising, sharp-rising, heavy-falling) that distinguishes word meanings, <u>intonation</u> (the rise and fall of the voice in a sentence) and <u>emphasis</u> (highlighting specific words or phrases) play crucial roles in conveying the speaker's emotion and intent.")}
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
	}

    h2 {
        font-size: 3em;
        position: absolute;
        top: 75%;
    }

    p {
        font-size: 1.5em;
        line-height: 1.2;
        margin-top: 20px;
        text-align: justify;
		color: var(--primary-blue);
    }

    span {
        font-weight: bold;
        font-family: "Josefin Sans", sans-serif;
        color: var(--brown);
    }

    p :global(u) {
        text-decoration: underline;
        font-style: italic;
    }

</style>
