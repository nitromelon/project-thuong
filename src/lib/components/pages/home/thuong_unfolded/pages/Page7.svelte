<script>
	import language_preference, { display_text } from "$lib/components/language/config";
</script>

<section>
	<h2>
		{display_text($language_preference, "Ngữ pháp ", "Grammar's ")}
		<span>{display_text($language_preference, "kể", "craft")}</span>
		{display_text($language_preference, "chuyện", "")}
	</h2>
    <br/> <br/>
	<div class="columns">
		<p>
			{display_text($language_preference, "Cảm xúc không chỉ nằm ở nghĩa, mà còn ở cách câu được nói ra, viết xuống. Một tiếng “thương” có thể là hành động, là trạng thái, là nhịp lặng giữa hai dòng thoại, hay thậm chí là tất cả cùng một lúc.", "Emotion isn't just in a word's meaning; it's in how a sentence is spoken or written. A single \"thương\" can be an action, a state, a silent beat between lines of dialogue, or even all at once.")}
		</p>

		<p>
			{display_text($language_preference, "Một từ có thể chạm vào cảm xúc không chỉ nhờ nghĩa, mà còn bởi cách nó được đặt trong câu, kết hợp với những yếu tố khác để kể nên một điều gì đó.", "A word touches us not just by its definition, but by its placement in a sentence and how it combines with other elements to tell a story.")}
		</p>
	</div>

    <br>

    <h1>
        {@html display_text($language_preference, "Vậy \"thương\" là <span>từ loại gì</span>?", "So, what <span>part of speech</span> is \"thương\"?")}
    </h1>

    <br>

    <h3>
        {@html display_text($language_preference, "\"thương\" <span>đứng ở đâu</span> trong dòng chảy ngôn ngữ thường ngày?</span>", "And <span>where does it usually stand</span> in the flow of everyday language?")}
    </h3>

</section>

<style>
	section {
		width: 70%;
		height: 70%;
	}

	h2 {
		text-align: right;
		font-size: 3em;
	}

	.columns {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 20px;
	}

	span {
		color: #b59509;
		font-weight: bold;
		font-family: "Josefin Sans", sans-serif;
	}

    p {
        font-size: 1.5em;
        text-align: justify;
    }

    h1 {
        font-size: 3em;
        font-family: 'Josefin Sans', sans-serif;
        font-weight: bold;
        text-align: center;
    }

    h1 :global {
        span {
            text-decoration: underline;
            color: red
        }
    }

    h3 {
        font-size: 1.5em;
        color: black;
        text-align: center;
    }

    h3 :global {
        span {
            text-decoration: underline;
            color: #004aad;
        }
    }
</style>
