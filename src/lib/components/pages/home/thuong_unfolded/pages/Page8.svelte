<script>
	import language_preference, { display_text } from "$lib/components/language/config";

	import Img1 from "$lib/assets/images/thuong_unfolded/pic/image (1).png";
	import Img2 from "$lib/assets/images/thuong_unfolded/pic/image (2).png";
</script>

<section>
	<h2>
		{display_text($language_preference, "Ngữ pháp ", "Grammar's ")}
		<span>{display_text($language_preference, "kể", "craft")}</span>
		{display_text($language_preference, "chuyện", "")}
	</h2>
	<br />
	<h3>
		{display_text(
			$language_preference,
			"“Thương” là một từ có chức năng ngữ pháp rất linh hoạt. Nó có thể là:",
			'"Thương" is remarkably flexible in its grammatical function. It can be:',
		)}
	</h3>
    <br />
	<div class="two-columns">
		<p>
			{@html display_text(
				$language_preference,
				"<span>Động từ:</span> biểu thị cảm xúc hoặc hành động đầy tình cảm<br/>→ Anh thương em.<br/>→ Mẹ thương con lắm.",
				"<span>A Verb:</span> expressing affection or a heartfelt action.<br/>→ Anh thương em. (I love you dearly.)<br/>→ Mẹ thương con lắm. (Mom loves her child very much.)",
			)}
		</p>
		<p>
			{@html display_text(
				$language_preference,
				"<span>Danh từ:</span> dùng để chỉ một khái niệm cảm xúc, một nỗi nhớ, một sự gắn bó<br/>→ Một tiếng thương thôi mà nghe buốt lòng.",
				'<span>A Noun:</span> referring to an emotional concept, a longing, or a bond.<br/>→ Một tiếng thương thôi mà nghe buốt lòng. (Just one word of "thương" pierces the heart.)',
			)}
		</p>
	</div>
	<br />
	<div class="three-columns">
		<img src={Img1} alt="" />
		<p>
			{@html display_text(
				$language_preference,
				"<span>Vị từ</span> - đóng vai trò là vị ngữ không cần động từ “là”<br/>→ Nhìn nó mà thương<br/>→ Thấy hoàn cảnh vậy thương quá trời.",
				'<span>A Noun:</span> referring to an emotional concept, a longing, or a bond.<br/>→ Một tiếng thương thôi mà nghe buốt lòng. (Just one word of "thương" pierces the heart.)',
			)}
		</p>
		<img src={Img2} alt="" />
	</div>

	<div class="footer">
        <p>
            {@html display_text(
                $language_preference,
                "Tùy vào ngữ cảnh và cấu trúc câu, “thương” có thể <span>đứng đầu</span>, <span>giữa</span> hoặc <span>cuối</span> cụm từ, mỗi vị trí lại mang một sắc thái riêng.",
                "Depending on the context and sentence structure, “thương” can appear at the <span>beginning</span>, <span>in the middle</span>, or <span>at the end</span> of a phrase, each position carrying its own nuance",
            )}  
        </p>
    </div>
</section>

<style>
	section {
		width: 60%;
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

	h3 {
		text-align: center;
		font-family: "TTNorms", sans-serif;
		font-style: italic;
		font-weight: normal;
		font-size: 1.2em;
	}

	.two-columns {
		display: grid;
		grid-template-columns: 33% 33%;
		gap: 20px;
	}

	.three-columns {
		display: grid;
		grid-template-columns: 33% 33% 30%;
		gap: 20px;
	}

	p {
		color: var(--primary-blue);
	}

	p :global(span) {
		font-weight: bold;
	}

	.footer {
		position: absolute;
		top: 80%;
		width: 60%;
        height: auto;
        background-color: var(--primary-blue);
        text-align: center;
	}

    .footer p {
        padding: 0.5em;
        color: white;
        font-style: italic;
    }

    .footer :global(span) {
        text-decoration: underline;
        color: var(--peach);
    }
</style>
