<script lang="ts">
	import AbstractImg from "$lib/assets/images/about/abstract.svg";
	import RationaleImg from "$lib/assets/images/about/rationale_img.svg";
	import RationaleBubbleImg from "$lib/assets/images/about/rationale_bubble.svg";
	import MessageImg from "$lib/assets/images/about/message.svg";

	import language_perference, { display_text } from "$lib/components/language/config";

	// import { onMount } from 'svelte';

	let currentIndex = 0;
	const totalSlides = 3;
	let isThrottled = false;

	function handleWheel(event: WheelEvent) {
		if (isThrottled) return;

		isThrottled = true;
		setTimeout(() => (isThrottled = false), 800);

		// scroll down
		if (event.deltaY > 0 && currentIndex < totalSlides - 1) {
			currentIndex += 1;
		}
		// scroll up
		else if (event.deltaY < 0 && currentIndex > 0) {
			currentIndex -= 1;
		}
	}
</script>

<section class="wrapper center" on:wheel={handleWheel}>
	<div class="slider" style="transform: translateY(-{currentIndex * 100}vh)">
		<div class="abstract row slide center">
			<div class="column left">
				<h2>
					{display_text($language_perference, "Về dự án", "About")}
				</h2>
				<h3>
					{display_text($language_perference, "Điểm chạm đầu tiên.", "Abstract")}
				</h3>
				<p>
					{display_text(
						$language_perference,
						"Dự án được thực hiện bởi Harley - sinh viên ngành Truyền thông, với mối quan tâm đặc biệt đến ngôn ngữ, văn hóa và những tầng nghĩa bị bỏ quên trong giao tiếp thường ngày",
						"The project is carried out by Harley, a Communications student with a special interest in language, culture, and the overlooked layers of meaning in everyday communication.",
					)}
				</p>
			</div>
			<div class="column right">
				<img src={AbstractImg} alt="Haley" />
			</div>
		</div>
		<div class="rationale row slide center">
			<div class="column">
				<img src={RationaleImg} alt="Rationale" />
			</div>
			<div class="column right image-container">
				<img src={RationaleBubbleImg} alt="Rationale Bubble" />
				<div class="text-overlay">
					<h2>
						{display_text($language_perference, "Về dự án", "About")}
					</h2>
					<h3>
						{display_text($language_perference, "Vì sao là 'Thương'", "Rationale")}
					</h3>
					<p>
						{display_text(
							$language_perference,
							"'Thương' là một từ quen thuộc nhưng nhiều khi không thể định nghĩa rạch ròi. Vừa nhẹ nhàng, vừa day dứt, vừa bao dung, vừa riêng tư. Dự án này chọn 'thương' như một chiếc kính lúp để soi vào chiều sâu của ngôn ngữ và con người nơi lý trí và cảm xúc chạm nhau.",
							"'Thương' is a familiar word, yet often difficult to define precisely. It is both gentle and poignant, both forgiving and deeply personal. This project chooses 'thương' as a magnifying glass to explore the depths of language and humanity, where reason and emotion intersect.",
						)}
					</p>
				</div>
			</div>
		</div>
		<div class="message row slide center">
			<div class="column left">
				<h2>
					{display_text($language_perference, "Về dự án", "About")}
				</h2>
				<h3>
					{display_text($language_perference, "Lời muốn nói", "Message")}
				</h3>
				<p>
					{display_text(
						$language_perference,
						"Qua dự án, mình mong muốn mở ra một không gian nơi mỗi người có thể dừng lại, lắng nghe và đặt lại câu hỏi: 'Thế nào là thương?' Không phải để tìm ra một câu trả lời chung, mà để nhận ra mỗi người có cách riêng để thương và được thương.",
						"Through this project, I hope to create a space where each person can pause, listen, and revisit the question: 'What is 'thương'?' Not to find a universal answer, but to recognize that each individual has their own unique way of loving and being loved.",
					)}
				</p>
			</div>
			<div class="column right">
				<img src={MessageImg} alt="Message" />
			</div>
		</div>
	</div>
</section>

<style>
	/* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */
	@media screen and (max-width: 600px) {
		.column {
			width: 100%;
		}
	}

	.row {
		display: flex;
		padding: 5em;
	}

	.column {
		flex: 50%;
		padding: 20px;
	}

	.image-container {
		position: relative;
		width: 100%;
	}

	.image-container img {
		width: 100%;
		height: auto;
		display: block;
	}

	.text-overlay {
		position: absolute;
		top: 35%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-align: right;
		width: 80%;
		padding: 20px;
	}

	h3 {
		margin-top: 0.5em;
		margin-bottom: 0.5em;
		font-size: 1.5em;
	}

	p {
		text-align: justify;
		font-size: 1.2em;
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	.wrapper {
        display: flex;
        justify-content: center;
        margin: 0 auto;
		width: 100%;
		height: 100vh;
        overflow: hidden;
		position: relative;
	}

	.slider {
		width: 80%;
		height: 80%;
		position: relative;
		perspective: 500px;
		transition: transform 0.8s ease;

	}

	.slide {
		height: 100vh;
	}

</style>
