<script>
	import language_preference, { display_text } from "$lib/components/language/config";
	import Img1 from "$lib/assets/images/thuong_unfolded/pic/img1.png";
	import Img2 from "$lib/assets/images/thuong_unfolded/pic/img2.png";
	import Img3 from "$lib/assets/images/thuong_unfolded/pic/img3.png";
</script>

<div class="text-content">
	<p>
		{display_text(
			$language_preference,
			"Trong các cuốn từ điển hay sách giáo khoa, một từ thường được định nghĩa một cách rõ ràng, cụ thể.",
			"In dictionaries or textbooks, a word usually has a clear, precise definition.",
		)}
		<br /> <br />
		{display_text(
			$language_preference,
			"Tuy nhiên, khi nói đến 'thương', mọi định nghĩa dường như trở thành một thách thức lớn.",
			"However, when it comes to 'thương', every definition seems to become a significant challenge.",
		)}
	</p>
    <br />
	<h2>
		{display_text($language_preference, "Vượt lên một từ đơn", "Beyond the word")}
	</h2>
</div>

<div class="image-layout">
	<div class="left-images">
		<img src={Img1} alt="Image 1" />
		<img src={Img2} alt="Image 2" />
	</div>
	<div class="right-image">
		<img src={Img3} alt="Image 3" />
	</div>
</div>



<style>
	.image-layout {
		margin-top: 2%;
		display: flex;
		gap: 20px;
	}

	.left-images {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.right-image {
		display: flex;
		align-items: center;
	}

	.image-layout img {
		width: 210px;
		height: auto;
	}

	.text-content {
		width: 30%;
        padding: 20px;
	}

    p {
        font-size: 1.5em;
        text-align: justify;
    }

    h2 {
        font-size: 3em;
    }
    
</style>
