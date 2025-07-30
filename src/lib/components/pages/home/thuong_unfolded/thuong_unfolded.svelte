<script>
	// import 'https://kit.fontawesome.com/a076d05399.js';

	import CoverImage from "$lib/assets/images/thuong_unfolded/cover.svg";

	import language_perference, { display_text } from "$lib/components/language/config";
</script>

<section>
	<input type="checkbox" id="checkbox-cover" />
	<input type="checkbox" id="checkbox-page1" />
	<input type="checkbox" id="checkbox-page2" />
	<input type="checkbox" id="checkbox-page3" />
	<div class="book">
		<div class="cover">
			<label for="checkbox-cover"> <img src={CoverImage} alt="Cover" /></label>
		</div>
		<div class="page" id="page1">
			<div class="front-page">
				<h1>
					{display_text($language_perference, "Chạm", "'Thương'")}
					<span style="color: #86756a;">{display_text($language_perference, " vào ", " ")}</span>
					{display_text($language_perference, "chữ", "Unfolded")}
				</h1>
				<label class="next" for="checkbox-page1">
					<!-- <i class="fas fa-chevron-right"></i> -->
					&gt;
				</label>
			</div>
			<div class="back-page">
				<p>Trong các cuốn từ điển hay sách giáo khoa, một từ thường được định nghĩa một cách rõ ràng, cụ thể.</p>
				<p>Tuy nhiên, khi nói đến "thương", mọi định nghĩa dường như trở thành một thách thức lớn.</p>
				<h2>
					{display_text($language_perference, "Vượt lên một từ đơn", "More than a single word")}
				</h2>
				<label class="prev" for="checkbox-page1">
					<!-- <i class="fas fa-chevron-left"></i> -->
					&lt;
				</label>
			</div>
		</div>
		<div class="page" id="page2">
			<div class="front-page">
				<label class="next" for="checkbox-page2">
					<!-- <i class="fas fa-chevron-right"></i> -->
					&gt;
				</label>
			</div>
			<div class="back-page">
				<!-- <img src="2.jpg"> -->
				<label class="prev" for="checkbox-page2">
					<!-- <i class="fas fa-chevron-left"></i> -->
					&lt;
				</label>
			</div>
		</div>
		<div class="page" id="page3">
			<div class="front-page">
				<h2>Page 3</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil magni laudantium beatae quia. Recusandae, fuga
					quas consectetur perferendis aperiam esse velit veniam ducimus? Quisquam consequatur perferendis quidem quia,
					recusandae ab!
				</p>
			</div>
		</div>
		<div class="back-cover"></div>
	</div>
</section>

<style>
	section {
		font-family: "Poppin", sans-serif;
		/* height: 100vh; */
		padding-top: 20px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.book {
		width: 400px;
		height: 550px;
		position: relative;
		transition-duration: 1s;
		perspective: 1500;
	}
	input {
		display: none;
	}
	.cover,
	.back-cover {
		background-color: #4173a5;
		width: 100%;
		height: 100%;
		border-radius: 0 15px 15px 0;
		box-shadow: 0 0 5px rgb(41, 41, 41);
		display: flex;
		align-items: center;
		justify-content: center;
		transform-origin: center left;
	}
	.cover {
		position: absolute;
		z-index: 4;
		transition: transform 1s;
	}
	.cover label {
		width: 100%;
		height: 100%;
		cursor: pointer;
	}
	.back-cover {
		position: relative;
		z-index: -1;
	}
	.page {
		position: absolute;
		background-color: white;
		width: 390px;
		height: 530px;
		border-radius: 0 15px 15px 0;
		margin-top: 10px;
		transform-origin: left;
		transform-style: preserve-3d;
		transform: rotateY(0deg);
		transition-duration: 1.5s;
	}
	.page img {
		width: 100%;
		height: 100%;
		border-radius: 15px 0 0 15px;
	}
	.front-page {
		position: absolute;
		width: 100%;
		height: 100%;
		backface-visibility: hidden;
		box-sizing: border-box;
		padding: 1rem;
	}
	.back-page {
		transform: rotateY(180deg);
		position: absolute;
		width: 100%;
		height: 100%;
		backface-visibility: hidden;
		z-index: 99;
	}
	.next,
	.prev {
		position: absolute;
		bottom: 1em;
		cursor: pointer;
	}
	.next {
		right: 1em;
	}
	.prev {
		left: 1em;
	}
	#page1 {
		z-index: 3;
	}
	#page2 {
		z-index: 2;
	}
	#page3 {
		z-index: 1;
	}
	#checkbox-cover:checked ~ .book {
		transform: translateX(200px);
	}
	#checkbox-cover:checked ~ .book .cover {
		transition:
			transform 1.5s,
			z-index 0.5s 0.5s;
		transform: rotateY(-180deg);
		z-index: 1;
	}
	#checkbox-cover:checked ~ .book .page {
		box-shadow: 0 0 3px rgb(99, 98, 98);
	}
	#checkbox-page1:checked ~ .book #page1 {
		transform: rotateY(-180deg);
		z-index: 2;
	}
	#checkbox-page2:checked ~ .book #page2 {
		transform: rotateY(-180deg);
		z-index: 3;
	}

	h1 {
		color: var(--primary-blue);
		font-family: "Josefin Sans", sans-serif;
		font-size: 2em;
		text-align: center;
		margin-bottom: 1em;
	}
</style>
