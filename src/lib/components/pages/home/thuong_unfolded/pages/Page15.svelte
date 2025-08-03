<script>
	import language_preference, { display_text } from "$lib/components/language/config";
</script>

<section>

    <div class="two-columns">
        <div>
            <p>
                {display_text($language_preference, "Tiếng Việt không dùng biến tố như nhiều ngôn ngữ khác, nhưng lại có hệ thống thanh điệu (tone) độc đáo: ngang, huyền, hỏi, ngã, sắc, nặng - tương ứng với những đường âm giai lên xuống, bổng trầm và độ căng khàn của giọng.",
                "Vietnamese doesn't rely on inflections like many other languages. Instead, it boasts a distinct tone system: ngang, huyền, hỏi, ngã, sắc, nặng - each corresponding to rising and falling melodic contours and varying vocal tension.")}
            </p>
            <br />
            <p>
                {@html display_text($language_preference, "Điều này khiến từng dấu thanh có khả năng định hình toàn bộ nghĩa của từ, hoặc làm sai lệch hoàn toàn nội dung câu nói nếu bị dùng sai.",
                "This means every tone mark can completely shape a word's meaning or entirely distort a sentence's content if used incorrectly.")}
            </p>
        </div>
        <div>
        
        </div>
    </div>


    <br /> <br />

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
        font-size: 1.2em;
        line-height: 1.5;
        margin-top: 20px;
        text-align: justify;
    }

    span {
        font-weight: bold;
        font-family: "Josefin Sans", sans-serif;
        color: var(--brown);
    }

    .two-columns {
		display: grid;
		grid-template-columns: 40% 60%;
		gap: 20px;
	}

</style>
