<script lang="ts">
	import { fade } from "svelte/transition";

	// opnening images
	import Opening_HA from "$lib/assets/images/loving_words/opening/ha.svg";
	import Opening_Butterfly from "$lib/assets/images/loving_words/opening/background.svg";
	import Opening_Sparkles from "$lib/assets/images/loving_words/opening/background2.svg";
	import Opening_LeftBubble from "$lib/assets/images/loving_words/opening/background4.svg";
	import Opening_RightBubble from "$lib/assets/images/loving_words/opening/background1.svg";

	// family images
	import Family_Brother from "$lib/assets/images/loving_words/family/brother.svg";
	import Family_Em from "$lib/assets/images/loving_words/family/Em.svg";
	import Family_BG from "$lib/assets/images/loving_words/family/background.svg";
	import Family_BG1 from "$lib/assets/images/loving_words/family/background1.svg";
	import Family_BG2 from "$lib/assets/images/loving_words/family/background2.svg";
	import Family_BG3 from "$lib/assets/images/loving_words/family/background3.svg";
	import Family_CanBo from "$lib/assets/images/loving_words/family/Can Bo.svg";
	import Family_LanhDao from "$lib/assets/images/loving_words/family/Lanh Dao.svg";
	import Family_Bong from "$lib/assets/images/loving_words/family/Bong.svg";
	import Family_Bot from "$lib/assets/images/loving_words/family/Bot.svg";
	import Family_Bun from "$lib/assets/images/loving_words/family/Bun.svg";
	import Family_Mi from "$lib/assets/images/loving_words/family/Mi.svg";
	import Family_Tep from "$lib/assets/images/loving_words/family/Tep.svg";
	import Family_Tom from "$lib/assets/images/loving_words/family/Tom.svg";

	// lecturer images
	import Lecturers_BG from "$lib/assets/images/loving_words/lecturers/background.svg";
	import Lecturers_BG1 from "$lib/assets/images/loving_words/lecturers/background1.svg";
	import Lecturers_BG2 from "$lib/assets/images/loving_words/lecturers/background2.svg";
	import Lecturers_BG3 from "$lib/assets/images/loving_words/lecturers/background3.svg";
	import Lecturers_BG4 from "$lib/assets/images/loving_words/lecturers/background4.svg";
	import Lecturers_MrDucAnh from "$lib/assets/images/loving_words/lecturers/MrDucAnh.svg";
	import Lecturers_MrsOanh from "$lib/assets/images/loving_words/lecturers/MrsOanh.svg";
	import Lecturers_MrTony from "$lib/assets/images/loving_words/lecturers/MrTony.svg";
	import Lecturers_MsThuHuyen from "$lib/assets/images/loving_words/lecturers/MsThuHuyen.svg";

	// interview images
	import Interview_BG from "$lib/assets/images/loving_words/interview/background.svg";
	import Interview_BG1 from "$lib/assets/images/loving_words/interview/background1.svg";
	import Interview_BG2 from "$lib/assets/images/loving_words/interview/background2.svg";
	import Interview_BG3 from "$lib/assets/images/loving_words/interview/background3.svg";
	import Interview_BG4 from "$lib/assets/images/loving_words/interview/background4.svg";

	// production images
	import Production_BubbleLeft from "$lib/assets/images/loving_words/production/bubble_left.svg";
	import Production_BubbleRight from "$lib/assets/images/loving_words/production/bubble_right.svg";
	import Production_BubbleUnder from "$lib/assets/images/loving_words/production/bubble_under.svg";
	import Prodution_Star1 from "$lib/assets/images/loving_words/production/star1.svg";
	import Prodution_Star2 from "$lib/assets/images/loving_words/production/star2.svg";
	import Production_DucAnh from "$lib/assets/images/loving_words/production/DucAnh.svg";
	import Production_VietAnh from "$lib/assets/images/loving_words/production/VietAnh.svg";
	import Production_DangNguyen from "$lib/assets/images/loving_words/production/DangNguyen.svg";

	// followers images
	import FollowersImg from "$lib/assets/images/loving_words/followers.svg";

	import language_preference, { display_text } from "$lib/components/language/config";
	import { currentIndex, isScrollProgress } from "../current_index.svelte";
	import { onMount } from "svelte";

	const totalSlides = 6;
	let isThrottled = false;

	onMount(() => {
		$isScrollProgress = false;
		$currentIndex = 0;
	});

	function handleWheel(event: WheelEvent) {
		if (isThrottled) return;

		isThrottled = true;
		setTimeout(() => (isThrottled = false), 800);

		// scroll down
		if (event.deltaY > 0 && $currentIndex < totalSlides - 1) {
			$currentIndex += 1;
		}
		// scroll up
		else if (event.deltaY < 0 && $currentIndex > 0) {
			$currentIndex -= 1;
		}
	}

	// Reactive statement to handle background color change with smooth transition
	$: if ($currentIndex === totalSlides - 1) {
		document.body.style.transition = "background-color 0.8s ease";
		document.body.style.backgroundColor = "var(--primary-blue)";
	} else {
		// Reset background color when not on last slide with smooth transition
		document.body.style.transition = "background-color 0.8s ease";
		document.body.style.backgroundColor = "";
	}
</script>

<section class="wrapper center" on:wheel={handleWheel} in:fade={{ duration: 400 }}>
	<div class="slider" style="transform: translateY(-{$currentIndex * 100}vh)">
		<div class="slide image-container" id="opening">
			<img src={Opening_HA} alt="" srcset="" id="opening-bottomleft" />
			<img src={Opening_Butterfly} alt="" srcset="" id="opening-butterfly" />
			<img src={Opening_Sparkles} alt="" srcset="" id="opening-topleft" />
			<img src={Opening_Sparkles} alt="" srcset="" id="opening-bottomright" />
			<img src={Opening_LeftBubble} alt="" srcset="" id="opening-leftbubble" />
			<img src={Opening_RightBubble} alt="" srcset="" id="opening-rightbubble" />

			<div class="text-overlay">
				<p>
					{display_text(
						$language_preference,
						"Dự án này không chỉ là hành trình của riêng mình. Từng dòng, từng thước phim, từng ý tưởng đều có sự góp mặt của những người đã thương mình bằng cách riêng của họ.",
						"I'm not alone in this journey. Every line, every frame, every idea bears the invaluable mark of those who generously supported me in their own unique ways.",
					)}
					<br /> <br />
					{display_text(
						$language_preference,
						"Đây là nơi mình dệt những lời cảm ơn qua chữ, để ghi nhớ, để biết ơn, và để không quên.",
						"This is where I weave my heartfelt thanks through words, to remember, to cherish, and to never forget.",
					)}
				</p>
			</div>
		</div>

		<div class="slide image-container" id="family">
			<img src={Family_Brother} alt="Brother" id="family-brother" />
			<img src={Family_Em} alt="Em" id="family-em" />
			<img src={Family_BG} alt="Family Background" id="family-bg" />
			<img src={Family_BG1} alt="Family Background 1" id="family-bg1" />
			<img src={Family_BG2} alt="Family Background 2" id="family-bg2" />
			<img src={Family_BG3} alt="Family Background 3" id="family-bg3" />
			<img src={Family_CanBo} alt="Family Can Bo" id="family-canbo" />
			<img src={Family_LanhDao} alt="Family Lanh Dao" id="family-lanhdao" />
			<img src={Family_Bong} alt="Family Bong" id="family-bong" />
			<img src={Family_Bot} alt="Family Bot" id="family-bot" />
			<img src={Family_Bun} alt="Family Bun" id="family-bun" />
			<img src={Family_Mi} alt="Family Mi" id="family-mi" />
			<img src={Family_Tep} alt="Family Tep" id="family-tep" />
			<img src={Family_Tom} alt="Family Tom" id="family-tom" />

			<div class="text-overlay">
				<h2>
					{display_text($language_preference, "Gia đình", "Family")}
				</h2>
				<p>
					{display_text(
						$language_preference,
						"Dù không trực tiếp quay hay dựng, nhưng luôn là người đồng hành thầm lặng nhất, cho mình thời gian, không gian và sự yên tâm để làm tới nơi tới chốn. Là nhà tài trợ vô điều kiện mỗi khi cần mua tài liệu, thiết bị, không quản vất vả đợi mình đi sớm về khuya. Hơn cả là ủng hộ mình dấn thân.",
						"Though not directly involved in filming or editing, my family has been my most steadfast and silent supporters, graciously providing me with time, space, and the reassurance to pursue this work diligently. As unconditional benefactors, they have selflessly supported the acquisition of materials and equipment, enduring the challenges of my late returns and early departures. Above all, they have wholeheartedly encouraged me to embrace this bold undertaking.",
					)}
				</p>
			</div>
		</div>

		<div class="slide image-container" id="lecturers">
			<img src={Lecturers_BG} alt="" srcset="" id="lecturers-bg" />
			<img src={Lecturers_BG1} alt="" srcset="" id="lecturers-bg1" />
			<img src={Lecturers_BG2} alt="" srcset="" id="lecturers-bg2" />
			<img src={Lecturers_BG3} alt="" srcset="" id="lecturers-bg3" />
			<img src={Lecturers_BG4} alt="" srcset="" id="lecturers-bg4" />
			<img src={Lecturers_MrDucAnh} alt="" srcset="" id="lecturers-mrducanh" />
			<img src={Lecturers_MrsOanh} alt="" srcset="" id="lecturers-mrsoanh" />
			<img src={Lecturers_MrTony} alt="" srcset="" id="lecturers-mrtony" />
			<img src={Lecturers_MsThuHuyen} alt="" srcset="" id="lecturers-msthuhuyen" />

			<div class="text-overlay">
				<h2>
					{display_text($language_preference, "Giảng viên", "Lecturers")}
				</h2>
				<br />
				<p>
					{display_text(
						$language_preference,
						"Xin chân thành cảm ơn thầy Đức Anh, thầy Tony, cô Thu Huyền, cô Hoành Oanh - những người đã luôn đồng hành, góp ý và truyền cảm hứng cho dự án này từ những bước đầu tiên. Chính sự kiên nhẫn, lắng nghe và định hướng từ thầy/cô đã giúp “Chữ và Nghĩa” giữ được tinh thần nghiêm túc nhưng vẫn đầy cảm xúc, như chính chữ “thương” mà dự án theo đuổi.",
						"Send my profound gratitude to Mr. Anthony, Mr. Tony, Ms. Vanessa, and Mrs. Phoebe, esteemed mentors who have accompanied, advised, and inspired this project from its inception. Their patience, attentive guidance, and insightful direction have enabled “Chữ và Nghĩa” to maintain a balance of scholarly rigor and emotional depth, mirroring the essence of 'thương' that this project seeks to illuminate.",
					)}
				</p>
			</div>
		</div>

		<div class="slide image-container" id="interview">
			<img src={Interview_BG} alt="" srcset="" id="interview-bg" />
			<img src={Interview_BG1} alt="" srcset="" id="interview-bg1" />
			<img src={Interview_BG2} alt="" srcset="" id="interview-bg2" />
			<img src={Interview_BG3} alt="" srcset="" id="interview-bg3" />
			<img src={Interview_BG4} alt="" srcset="" id="interview-bg4" />

			<div class="text-overlay">
				<h2>
					{display_text($language_preference, "Đơn vị / cá nhân tham gia phỏng vấn", "Interviewees")}
				</h2>
				<p>
					<span style="color: darkblue;"
						>{display_text(
							$language_preference,
							"Xin chân thành gửi lời cảm ơn tới:",
							"I wish to extend my deepest and most respectful gratitude to the following individuals and organizations who have graciously contributed to this project:",
						)}</span
					>
					<br />
					{display_text(
						$language_preference,
						"- Đại đức Thích Minh Chính - Uỷ viên Thư ký Hội đồng Trị sự, Phó Chánh Văn phòng Trung Ương",
						"- Venerable Thích Minh Chính - Secretary of the Executive Council, Deputy Head of the Central Office",
					)}
					<br />
					{display_text(
						$language_preference,
						"- Trung tâm Easy Peasy Vietnamese - cùng chị Trâm (Founder) và các học viên: anh Luca, anh Florian và anh Sơn",
						"- Easy Peasy Vietnamese Center - including Ms. Trâm (Founder) and esteemed learners: Mr. Luca, Mr. Florian, and Mr. Sơn",
					)}
					<br />
					{display_text(
						$language_preference,
						"- MC Mỹ Vân - Trung tâm đào tạo MC Mỹ Vân",
						"- MC Mỹ Vân - Mỹ Vân MC Training Center",
					)}
					<br />
					{display_text($language_preference, "- Em Vũ Phúc Huy", "- Vũ Phúc Huy")}
					<br />
					{display_text($language_preference, "- Em Lê Nữ Minh Ngọc", "- Lê Nữ Minh Ngọc")}
					<br />
					{display_text($language_preference, "- Bạn Phạm Thanh Tâm", "- Phạm Thanh Tâm")}
					<br />
					{display_text($language_preference, "- Anh Tống Đức Hưng", "- Tống Đức Hưng")}
					<br />
					<span style="color: darkblue;"
						>{display_text(
							$language_preference,
							"đã hỗ trợ tham gia phỏng vấn.",
							"for their invaluable participation and support in the interviews.",
						)}</span
					>
				</p>
			</div>
		</div>

		<div class="slide image-container" id="production">
			<img src={Production_BubbleUnder} alt="" srcset="" id="production-bubbleunder" />
			<img src={Production_BubbleLeft} alt="" srcset="" id="production-bubbleleft" />
			<img src={Production_BubbleRight} alt="" srcset="" id="production-bubbleright" />
			<img src={Prodution_Star1} alt="" srcset="" id="production-star1" />
			<img src={Prodution_Star2} alt="" srcset="" id="production-star2" />
			<img src={Prodution_Star2} alt="" srcset="" id="production-star3" />
			<img src={Production_DucAnh} alt="" srcset="" id="production-ducanh" />
			<img src={Production_VietAnh} alt="" srcset="" id="production-vietanh" />
			<img src={Production_DangNguyen} alt="" srcset="" id="production-dangnguyen" />

			<div class="text-overlay">
				<h3>
					{display_text($language_preference, "Cá nhân hỗ trợ sản xuất", "Production Individuals")}
				</h3>
				<br />
				<p>
					{display_text(
						$language_preference,
						"Xin gửi lời cảm ơn đến Việt Anh, anh Đức Anh và Đặng Nguyễn vì đã góp công, góp sức và đồng hành cùng mình qua từng khung hình, từng bản dựng, từng chi tiết nhỏ nhất.",
						"Conveying my deepest gratitude to Việt Anh, Đức Anh, and Đặng Nguyễn, who, with their tireless efforts and unwavering support, have accompanied me through every frame, every edit, and the smallest details; their dedication has truly brought this project to life.",
					)}
				</p>
			</div>
		</div>

		<div class="slide image-container" id="followers">
			<img src={FollowersImg} alt="" srcset="" />
			<div class="text-overlay">
				<p>
					{display_text(
						$language_preference,
						"Cảm ơn các bạn - những người đã ủng hộ và dõi theo",
						"Thank you to all the followers and supporters of this project",
					)}
					<br />
					<span style="color: #ffbd59;">
						{display_text($language_preference, "'Chữ và Nghĩa'", "'Words and Meaning'")}
					</span>
					<br /> <br />
					{display_text(
						$language_preference,
						"Dù đây chỉ là một hành trình nhỏ còn nhiều thiếu sót, nhưng luôn nhận được sự đón nhận từ mọi người và đó chính là nguồn động lực để dự án tiếp tục được nuôi lớn từng ngày.",
						"Your encouragement, shares, and feedback have been a tremendous source of motivation for me to keep going.",
					)}
				</p>
			</div>
		</div>

		<!-- <div class="slide image-container"></div> -->
	</div>
</section>

<style>
	.wrapper {
		display: flex;
		justify-content: center;
		margin: 0 auto;
		width: 100%;
		height: 100vh;
		overflow: hidden;
		position: fixed;
	}

	.slider {
		width: 100%;
		height: 100%;
		transition: transform 0.8s ease;
	}

	.slide {
		height: 100vh;
	}

	.image-container {
		position: relative;
		width: 100%;
	}

	.image-container img {
		width: 100%;
		height: 80%;
	}

	.text-overlay {
		position: absolute;
		top: 35%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 70%;
		padding: 20px;
	}

	h2 {
		font-family: "Josefin Sans", sans-serif;
		font-size: 3em;
		font-weight: bold;
	}

	p {
		text-align: justify;
		font-size: 1.5em;
	}

	/* --------- OPENING ----------*/
	#opening-topleft {
		position: absolute;
		top: 0;
		left: 0;
		width: 30%;
	}
	#opening-butterfly {
		position: absolute;
		top: 0;
		left: 0;
		width: 30%;
	}
	#opening-bottomleft {
		position: absolute;
		bottom: 0;
		left: 5%;
		width: 50%;
	}
	#opening-bottomright {
		position: absolute;
		bottom: 0;
		right: 0;
		width: 20%;
	}
	#opening-leftbubble {
		position: absolute;
		bottom: 0;
		left: 10%;
	}
	#opening-rightbubble {
		position: absolute;
		top: 10%;
		right: 0%;
		width: 50%;
		transform: rotate(-45deg);
	}
	#opening p {
		float: right;
		width: 50%;
	}

	/* -=------------ Family ------------ */
	#family h2 {
		text-align: right;
		position: absolute;
		top: -40%;
		right: 5%;
	}
	#family p {
		text-align: center;
	}
	#family-brother {
		position: absolute;
		bottom: -4%;
		right: -2%;
		width: 20%;
	}
	#family-em {
		position: absolute;
		top: -25%;
		left: -2%;
		width: 20%;
	}
	#family-bg {
		position: absolute;
		top: -15%;
		right: -5%;
		width: 50%;
		height: 50%;
	}
	#family-bg1 {
		position: absolute;
		top: -6%;
		left: -6%;
		width: 50%;
		height: 50%;
	}
	#family-bg2 {
		position: absolute;
		bottom: 15%;
		left: 0;
		width: 50%;
		height: 50%;
	}
	#family-bg3 {
		position: absolute;
		bottom: 20%;
		right: -6%;
		width: 50%;
		height: 50%;
	}
	#family-canbo {
		position: absolute;
		bottom: 0%;
		left: 5.5%;
		width: 17%;
	}
	#family-lanhdao {
		position: absolute;
		bottom: 5%;
		left: -2%;
		width: 20%;
	}
	#family-bong {
		position: absolute;
		bottom: -10%;
		right: 10%;
		width: 5%;
	}
	#family-bot {
		position: absolute;
		bottom: -10%;
		left: 20%;
		width: 10%;
	}
	#family-bun {
		position: absolute;
		bottom: 15%;
		right: 0%;
		width: 10%;
	}
	#family-mi {
		position: absolute;
		bottom: -10%;
		left: 70%;
		width: 5%;
	}
	#family-tep {
		position: absolute;
		bottom: 14%;
		right: 0%;
		width: 4%;
	}
	#family-tom {
		position: absolute;
		bottom: -5%;
		right: 35%;
		width: 8%;
	}

	/* -=------------ LECTURERS ------------ */
	#lecturers .text-overlay {
		width: 50%;
		position: absolute;
		top: 30%;
		left: 30%;
		font-size: 0.8em;
	}
	#lecturers-bg {
		position: absolute;
		top: 7%;
		right: -27%;
		height: 70%;
	}
	#lecturers-bg1 {
		position: absolute;
		top: -5%;
		left: 0;
		width: 50%;
	}
	#lecturers-bg2 {
		position: absolute;
		top: 0;
		right: 0;
		width: 50%;
	}
	#lecturers-bg3 {
		position: absolute;
		top: 0%;
		right: 6%;
		width: 50%;
	}
	#lecturers-bg4 {
		position: absolute;
		bottom: 20%;
		left: 5%;
		height: 50%;
	}
	#lecturers-mrducanh {
		position: absolute;
		top: -1%;
		right: 2%;
		width: 60%;
	}
	#lecturers-mrsoanh {
		position: absolute;
		top: 0%;
		left: 5%;
		width: 50%;
	}
	#lecturers-mrtony {
		position: absolute;
		top: 0%;
		left: -10%;
		width: 100%;
	}
	#lecturers-msthuhuyen {
		position: absolute;
		top: 0%;
		right: 1%;
		width: 60%;
	}

	/* -=------------ INTERVIEW ------------ */
	#interview-bg {
		position: absolute;
		height: 84%;
		left: -0.5%;
		top: 0;
		width: 100%;
	}
	#interview-bg1 {
		position: absolute;
		width: 100%;
		top: -25%;
		left: -25%;
	}
	#interview-bg2 {
		position: absolute;
		width: 100%;
		top: -25%;
		right: -25%;
	}
	#interview-bg3 {
		position: absolute;
		width: 100%;
		top: 10%;
		right: -27%;
	}
	#interview-bg4 {
		position: absolute;
		width: 100%;
		top: 10%;
		left: -30%;
	}
	#interview .text-overlay {
		text-align: center;
		position: absolute;
		top: 50%;
	}
	#interview h2 {
		/* font-size: 2.5em; */
		color: #ffbd59;
	}
	#interview p {
		text-align: center;
	}

	/* -=------------ PRODUCTION ------------ */
	#production .text-overlay {
		top: 25%;
		width: 60%;
	}
	#production-bubbleunder {
		position: absolute;
		top: -15%;
		left: -5%;
		width: 100%;
	}
	#production-bubbleleft {
		position: absolute;
		top: 0;
		left: -10%;
		height: 60%;
	}
	#production-bubbleright {
		position: absolute;
		top: -10%;
		right: 20%;
		width: 50%;
	}
	#production-star1 {
		position: absolute;
		top: 5%;
		right: -25%;
		height: 70%;
	}
	#production-star2 {
		position: absolute;
		top: 10%;
		left: 2%;
		width: 50%;
	}
	#production-star3 {
		position: absolute;
		top: -15%;
		left: 30%;
		width: 50%;
		transform: rotate(-90deg);
	}
	#production-vietanh {
		position: absolute;
		top: 10%;
		left: 0;
		width: 40%;
	}
	#production-ducanh {
		position: absolute;
		bottom: 0;
		right: -5%;
		width: 30%;
	}
	#production-dangnguyen {
		position: absolute;
		bottom: 0;
		right: 10%;
		width: 20%;
	}

	#production h3 {
		text-align: center;
		font-size: 2.5em;
	}
	#production p {
		text-align: center;
		width: 60%;
		margin-left: 20%;
	}

	/* -=------------ FOLLOWERS ------------ */
	#followers {
		/* background-color: var(--primary-blue); */
		color: beige;
	}
	#followers img {
		width: 80%;
		margin-left: 10%;
	}
	#followers .text-overlay {
		position: absolute;
		top: 40%;
		left: 68%;
		width: 40%;
		color: beige;
	}
	#followers p {
		font-family: "Crimson Pro", serif;
		text-align: center;
	}
</style>
