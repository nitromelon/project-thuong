<script>
	import language_preference, { display_text } from "$lib/components/language/config";

</script>

<section>
    <br><br><br>
	<p>
		{display_text(
			$language_preference,
			"Từ những trang sách cũ đến tiếng nói của đời thường, từ cách viết thành câu đến cách cất thành tiếng thương đi qua nhiều vùng ngữ nghĩa, cảm xúc và thời gian. Có thể mỗi người trong chúng ta mang theo một kiểu “thương” riêng, nhưng chính sự đa dạng ấy lại là điều khiến ngôn ngữ trở nên sống động, khiến một chữ không dừng lại ở nghĩa, mà trở thành một cách để lặng lẽ chạm vào nhau.",

			'From ancient, ink-stained scrolls to the commonplace accents of daily discourse, from the structured precision of written prose to the heartfelt inflection of a spoken word, "thương" journeys across countless landscapes of meaning, emotion, and time. Perhaps each of us cradles a singular shade of "thương," yet it is precisely this boundless diversity that infuses language with its vivid breath, transforming a mere word from a static definition into a profound, silent touch between souls.',
		)}

        <br><br>

        {display_text($language_preference, 
        "Cảm ơn bạn đã đi cùng Chữ và Nghĩa đến tận đây. Hành trình của một chữ có thể đã tạm khép, nhưng những điều được gợi mở có lẽ, mới chỉ vừa bắt đầu.", 

        "Thank you for journeying with Chữ và Nghĩa thus far. The odyssey of a single word may now gently pause, yet the revelations it has stirred have, perhaps, only just begun.")}

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
