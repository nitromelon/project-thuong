<script>
	import language_preference, { display_text } from "$lib/components/language/config";
    
</script>

<section>

    <h2>
		<span>{display_text($language_preference, "'thương'", "'thương'")}</span>
		{display_text($language_preference, " trong dòng chảy văn học", " in letters")}
	</h2>

    <h3>
		{display_text($language_preference, "Từ trang sách vọng ra", "Echoing from the page")}

    </h3>

    <p>
		{@html display_text($language_preference, "<strong>Thương</strong> từ lâu đã trở thành một chất liệu thân thuộc trong sáng tác. Nó là chủ đề, là cảm hứng, là lối nói không thể thiếu khi nhà văn, nhà thơ, nghệ sĩ muốn khắc họa cảm xúc con người, từ tình yêu đôi lứa, tình cảm gia đình, tình đồng bào đến nỗi đau mất mát hay những nhớ thương xa xứ.", "For ages, <strong>\"thương\"</strong> has been a cherished weave in the fabric of creation. It stands as theme, muse, and an indispensable utterance whenever artists of word or brush seek to limn the human heart from the tenderest bloom of romantic love, the fierce devotion of family, and the quiet solidarity of kindred spirits, to the ache of poignant loss or the deep yearning for distant shores.")}
    </p>

</section>

<style>
    section {
        width: 80%;
        height: 70%;
    }

    span {
        color: var(--dark-gold);
        font-weight: bold;
    }

    h2 {
        font-size: 3em;
        text-align: right;
    }

    h3 {
        font-size: 2em;
        text-align: right;
        margin-top: 20px;
    }

    p {
        font-size: 1.5em;
        line-height: 1.5;
        margin-top: 20px;
        text-align: justify;
    }

    p :global(strong) {
        color: var(--brown);
        font-weight: bold;
        font-size: 3.5em;
    }

</style>