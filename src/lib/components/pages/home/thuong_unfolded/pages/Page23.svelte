<script>
	import language_preference, { display_text } from "$lib/components/language/config";

    import Image from "$lib/assets/images/thuong_unfolded/pic/image (6).png";
    
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
                {@html display_text($language_preference, 
                "“thương” cũng thấp thoáng ở những nơi tưởng chừng xa xôi, là nỗi cô đơn lạc lõng trong Catcher in the Rye (Bắt trẻ đồng xanh), là sự tiếc nuối dằng dặc trong Tiếng chim hót trong bụi mận gai, hay là thứ tình cảm chưa kịp gọi tên trong thế giới kỳ ảo của Haruki Murakami. ", 
                "Yet, \"thương\" also flickers in unexpected realms: it is the solitary ache of a wanderer in The Catcher in the Rye, the pervasive wistfulness clinging to The Thorn Birds, or that unnamed, nascent emotion within Haruki Murakami's fantastical landscapes.")}
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
        width: auto;
        height: 100%;
    }

    p {
        font-size: 1.5em;
        line-height: 1.5;
        margin-top: 20%;
        text-align: justify;
    }

    .two-columns {
        display: grid;
        align-items: end;
		grid-template-columns: 34% 64%;
        gap: 2%;
    }

</style>