<script lang="ts">
	// import EndImg from "$lib/assets/images/loving_words/end.svg";
	import FamilyImg from "$lib/assets/images/loving_words/family.svg";
	import LecturerImg from "$lib/assets/images/loving_words/lecturer.svg";
	import InterviewImg from "$lib/assets/images/loving_words/PV.svg";
	//import InterviewImg1 from "$lib/assets/images/loving_words/PV1.svg";
	import ProductionImg from "$lib/assets/images/loving_words/production.svg";
	import FollowersImg from "$lib/assets/images/loving_words/followers.svg";

	import language_preference, { display_text } from "$lib/components/language/config";

	// import { onMount } from 'svelte';

	let currentIndex = 0;
	const totalSlides = 6;
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
		<div class="slide image-container">
			<div class="text-overlay">
				<h2>
					{display_text($language_preference, "Mở đầu", "Acknowledgements")}
				</h2>
				<p>
					{display_text(
						$language_preference,
						"Dự án này không chỉ là hành trình của riêng mình. Từng dòng, từng thước phim, từng ý tưởng đều có sự góp mặt của những người đã thương mình bằng cách riêng của họ. Đây là nơi mình dệt những lời cảm ơn qua chữ, để ghi nhớ, để biết ơn, và để không quên.",
						"I'm not alone in this journey. Every line, every frame, every idea bears the invaluable mark of those who generously supported me in their own unique ways. This is where I weave my heartfelt thanks through words, to remember, to cherish, and to never forget.",
					)}
				</p>
			</div>
		</div>

		<div class="slide image-container">
			<img src={FamilyImg} alt="" srcset="" />
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
			<img src={LecturerImg} alt="" srcset="" />

			<div class="text-overlay">
				<p>
					{display_text(
						$language_preference,
						"Xin chân thành cảm ơn thầy Đức Anh, thầy Tony, cô Thu Huyền, cô Hoành Oanh - những người đã luôn đồng hành, góp ý và truyền cảm hứng cho dự án này từ những bước đầu tiên. Chính sự kiên nhẫn, lắng nghe và định hướng từ thầy/cô đã giúp “Chữ và Nghĩa” giữ được tinh thần nghiêm túc nhưng vẫn đầy cảm xúc, như chính chữ “thương” mà dự án theo đuổi.",
						"Send my profound gratitude to Mr. Anthony, Mr. Tony, Ms. Vanessa, and Mrs. Phoebe, esteemed mentors who have accompanied, advised, and inspired this project from its inception. Their patience, attentive guidance, and insightful direction have enabled “Chữ và Nghĩa” to maintain a balance of scholarly rigor and emotional depth, mirroring the essence of 'thương' that this project seeks to illuminate.",
					)}
				</p>
				<h2>
					{display_text($language_preference, "Thầy cô cố vấn", "Lecturers and Mentors")}
				</h2>
			</div>
		</div>

		<div class="slide image-container">
			<img src={InterviewImg} alt="" srcset="" />
			<!-- <img src={InterviewImg1} alt="" srcset=""> -->
			<div class="text-overlay">
				<h2>
					{display_text($language_preference, "Đơn vị / cá nhân tham gia phỏng vấn", "Interviewees")}
				</h2>
				<p>
					{display_text(
						$language_preference,
						`Xin chân thành gửi lời cảm ơn tới:
                        - Đại đức Thích Minh Chính - Uỷ viên Thư ký Hội đồng Trị sự, Phó Chánh Văn phòng Trung Ương
                        - Trung tâm Easy Peasy Vietnamese - cùng chị Trâm (Founder) và các học viên: anh Luca, anh Florian và anh Sơn
                        - MC Mỹ Vân - Trung tâm đào tạo MC Mỹ Vân
                        - Em Vũ Phúc Huy
                        - Em Lê Nữ Minh Ngọc
                        - Bạn Phạm Thanh Tâm
                        - Anh Tống Đức Hưng
                        đã hỗ trợ tham gia phỏng vấn.`,
						`I wish to extend my deepest and most respectful gratitude to the following individuals and organizations who have graciously contributed to this project:
                        - Venerable Thích Minh Chính - Secretary of the Executive Council, Deputy Head of the Central Office
                        - Easy Peasy Vietnamese Center - including Ms. Trâm (Founder) and esteemed learners: Mr. Luca, Mr. Florian, and Mr. Sơn
                        - MC Mỹ Vân - Mỹ Vân MC Training Center
                        - Vũ Phúc Huy
                        - Lê Nữ Minh Ngọc
                        - Phạm Thanh Tâm
                        - Tống Đức Hưng
                    for their invaluable participation and support in the interviews.`,
					)}
				</p>
			</div>
		</div>

		<div class="slide image-container" id="production">
			<img src={ProductionImg} alt="" srcset="" />
			<div class="text-overlay">
				<h2>
					{display_text($language_preference, "Các cá nhân hỗ trợ dự án", "Production Individuals")}
				</h2>
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
				<h2>
					{display_text($language_preference, "Những người theo dõi", "Followers")}
				</h2>
				<p>
					{display_text(
						$language_preference,
						"Cảm ơn các bạn - những người đã ủng hộ và dõi theo 'Chữ và Nghĩa'. Dù đây chỉ là một hành trình nhỏ còn nhiều thiếu sót, nhưng luôn nhận được sự đón nhận từ mọi người và đó chính là nguồn động lực để dự án tiếp tục được nuôi lớn từng ngày.",
						"Thank you to all the followers and supporters of this project. Your encouragement, shares, and feedback have been a tremendous source of motivation for me to keep going.",
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

	.image-container {
		position: relative;
		width: 100%;
	}

	.image-container img {
		width: 100%;
		height: 90%;
	}

	.text-overlay {
		position: absolute;
		top: 35%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 70%;
		padding: 20px;
	}

	p {
		text-align: justify;
		font-size: 1.2em;
	}

	#lecturers h2 {
		float: right;
		top: 0;
	}
	#lecturers p {
		float: left;
		width: 50%;
		padding-top: 30px;
		padding-left: 60px;
		padding-right: 20px;
	}

	#production .text-overlay {
		top: 30%;
		width: 60%;
	}

	#followers {
		background-color: var(--primary-blue);
		color: beige;
	}
	#followers h2 {
		color: #86756a;
	}
</style>
