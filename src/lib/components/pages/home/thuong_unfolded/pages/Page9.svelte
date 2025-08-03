<script>
    import language_preference, { display_text } from "$lib/components/language/config";

    import Img1 from "$lib/assets/images/thuong_unfolded/pic/image (2)(1).png";
    import ImgThuong from "$lib/assets/images/thuong_unfolded/pic/image (4).png";
    import ImgNuong from "$lib/assets/images/thuong_unfolded/pic/pic.jpg";
</script>

<section>
    <h2>
		{display_text($language_preference, "Ngữ pháp ", "Grammar's ")}
		<span>{display_text($language_preference, "kể", "craft")}</span>
		{display_text($language_preference, "chuyện", "")}
	</h2>
	<br />

    <div class="two-columns">
        <div>
            <img src={Img1} alt="">
            <p class="image-caption">
		        {display_text($language_preference, "Báo cáo vắn tắt về tiếng An Nam hay Đông Kinh 1651", "Brief Report on the Annamese or Tonkinese Language, 1651")}
            </p>
        </div>

        <div>
            <img src={ImgThuong} alt="">
            <img src={ImgNuong} alt="">
            <p class="image-caption">
                {display_text($language_preference, "Nội dung bảng từ 2 (Từ điển Việt-Bồ-La)", "Content of Table 2 (Vietnamese–Portuguese–Latin Dictionary)")}
            </p>
        </div>
    </div>

    <p>
		{display_text($language_preference, "Tồn tại trong tiếng Việt qua nhiều thế kỷ, hình thái và phiên âm cơ bản của từ \"thương\" (với thanh ngang) vẫn giữ được sự ổn định. Các nhà nghiên cứu đã ghi nhận cách phiên âm của \"thương\" trong các từ điển Quốc ngữ đầu tiên (Từ điển Việt-Bồ-La) cho thấy sự nhất quán về âm điệu, tạo tiền đề cho sự linh hoạt ngữ pháp sau này.", 
        "\"Thương\" has existed in Vietnamese for centuries, its basic form and pronunciation (with the level tone) remaining stable. Researchers have noted the consistent transcription of \"thương\" in early Quốc ngữ dictionaries (like the Việt-Bồ-La Dictionary), establishing a phonetic foundation for its later grammatical flexibility.")}
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

    .two-columns {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 20px;
	}

    p {
        font-size: 1.5em;
        line-height: 1.5;
        margin-top: 20px;
        color: var(--primary-blue);
        text-align: justify;
    }

    .image-caption {
        font-size: 1em;
        font-style: italic;
        color: #000;
        text-align: center;
    }
</style>