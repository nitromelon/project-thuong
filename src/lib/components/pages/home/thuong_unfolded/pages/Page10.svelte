<script>
    import language_preference, { display_text } from "$lib/components/language/config";

</script>

<section>
    <h2>
		{display_text($language_preference, "Ngữ pháp ", "Grammar's ")}
		<span>{display_text($language_preference, "kể", "craft")}</span>
		{display_text($language_preference, "chuyện", "")}
	</h2>

	<br /><br/><br/><br/>

	<p>
		{@html display_text($language_preference, "Để hiểu rõ hơn về cách ngữ pháp và ngữ cảnh làm phong phú nghĩa của từ <i>thương</i>, cũng như những thách thức mà người nước ngoài gặp phải khi học và sử dụng từ này, mình đã có cuộc trò chuyện với <b>chị Trâm - Founder <strong>Easy Peasy</strong></b> (trung tâm dạy tiếng Việt cho người nước ngoài).", 

		"To better understand how grammar and context enrich the meaning of <i>\"thương\"</i>, as well as the challenges foreigners face learning and using it, I had a small conversation with <b>Ms. Trâm, Founder of <strong>Easy Peasy</strong></b> (a Vietnamese language center for foreigners).")}
	</p>

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

	p {
        font-size: 1.6em;
        line-height: 1.5;
        margin-top: 20px;
        text-align: justify;
    }
    
	p :global {
		i{
			font-style: italic;
			text-decoration: underline;
			color: var(--cobalt-blue);
		}
		b {
			font-weight: bold;
		}
		strong {
			color: var(--dark-green);
		}
	}

</style>