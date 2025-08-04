<script>
    import language_preference, { display_text } from "$lib/components/language/config";

</script>

<section>
    <h2>
		{display_text($language_preference, "Ngữ pháp ", "Grammar's ")}
		<span>{display_text($language_preference, "kể", "craft")}</span>
		{display_text($language_preference, "chuyện", "")}
	</h2>

	<br />

	<p>
		{display_text($language_preference, "Càng nhiều ngữ cảnh, nghĩa của “thương” càng được mở rộng. Không còn là một từ riêng lẻ, nó trở thành một nhịp điệu, một cảm giác, mà người học phải “cảm” chứ không chỉ “hiểu”.", "The more contexts \"thương\" appears in, the more its meaning expands. It ceases to be just a standalone word and transforms into a rhythm, a feeling that learners must \"feel\" rather than merely \"understand.\"")}
	</p>

	<br />

	<p>
		{display_text($language_preference, "Và có lẽ chính nhờ cấu trúc ngữ pháp linh hoạt ấy, “thương” đã sống lâu trong lòng người Việt, không như một định nghĩa cố định, mà như một dòng cảm xúc đang chảy, được kể lại mỗi ngày qua tin nhắn, qua tiếng gọi, qua những câu chuyện lặng thầm.", "And perhaps it is precisely this grammatical flexibility that has allowed \"thương\" to live on in the hearts of Vietnamese people, not as a fixed definition, but as a flowing stream of emotion, recounted daily through messages, calls, and quiet stories.")}
	</p>
</section>


<style>
    section {
		width: 80%;
		height: 70%;
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
        font-size: 1.6em;
        line-height: 1.5;
        margin-top: 20px;
        text-align: justify;
		color: var(--primary-blue);
    }
</style>