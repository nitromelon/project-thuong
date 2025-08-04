<script>
	import language_preference, { display_text } from "$lib/components/language/config";

    import Image from "$lib/assets/images/thuong_unfolded/pic/image (5).png";
    
</script>

<section>

    <h2>
		<span>{display_text($language_preference, "'thương'", "'thương'")}</span>
		{display_text($language_preference, " trong dòng chảy văn học", " in letters")}
	</h2>

    <h3>
		{display_text($language_preference, "Từ trang sách vọng ra", "Echoing from the page")}

    </h3>

    <br>

    <div class="two-columns">
        <img src={Image} alt="">
        <p>
                {@html display_text($language_preference, "“Thương” hiện diện không chỉ trong văn học Việt, mà cả ở những trang sách nước ngoài. Đó là tiếng thương thầm trong truyện ngắn Nam Cao, cái tình len lỏi giữa khói lửa và thân phận người lính của Chu Lai, là ánh thương ngấm trong ánh mắt của Lão Hạc hay đôi vai của Dế Mèn. ", 
                "The resonance of \"thương\" is not confined to the annals of Vietnamese letters; it echoes through pages penned far beyond. It is the hushed affection lingering in Nam Cao's prose, the fragile humanity woven amidst the smoke and valor of Chu Lai's soldiers, or the profound tenderness etched into Lão Hạc's gaze or Dế Mèn's weary shoulders.")}
        </p>
    </div>

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

    img {
        width: 100%;
        height: auto;
    }

    p {
        font-size: 1.5em;
        line-height: 1.5;
        text-align: justify;
    }

    .two-columns {
        display: grid;
        align-items: end;
		grid-template-columns: 32% 63%;
        gap: 2%;
    }

</style>