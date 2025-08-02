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

	import InterviewImg from "$lib/assets/images/loving_words/PV.svg";
	//import InterviewImg1 from "$lib/assets/images/loving_words/PV1.svg";
	import ProductionImg from "$lib/assets/images/loving_words/production.svg";
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
			<!-- <img src={LecturerImg} alt="" srcset="" /> -->
			<svg class="lecturers-bg" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1220.88 847.22">
				<defs>
					<style>
						.cls-1,
						.cls-2 {
							fill: none;
						}

						.cls-1,
						.cls-2,
						.cls-3 {
							stroke-width: 2px;
						}

						.cls-1,
						.cls-2,
						.cls-3,
						.cls-4 {
							stroke-miterlimit: 10;
						}

						.cls-1,
						.cls-4 {
							stroke: #aa4a4b;
						}

						.cls-2,
						.cls-3 {
							stroke: #231f20;
						}

						.cls-3 {
							fill: #231f20;
						}

						.cls-4 {
							fill: #aa4a4b;
							stroke-width: 6px;
						}
					</style>
				</defs>
				<path
					class="cls-4"
					d="M1127.37,837.54c-1.87-1.1-6.94-4.07-8.11-9.86-1.45-7.12,3.7-14.91,10.5-17.26,6.05-2.09,11.47.79,13.36,1.97,1.13.71,7.7,4.83,8.11,12.82.25,4.84-1.81,9.87-5.73,12.82-7.38,5.57-16.73.33-18.13-.49Z"
				/>
				<path
					class="cls-4"
					d="M1164.51,378.53c-3.69-1.89-9.33-1.51-12.43,2.47-3.3,4.25-1.94,10.36.96,13.83,3.96,4.75,11.63,5.58,15.29,1.98,4.48-4.41,2.52-15.03-3.82-18.28Z"
				/>
				<path
					class="cls-1"
					d="M1131.43,793.28c-1.28-4.09,1.23-8.87,5.17-10.69,3.72-1.72,8.78-.83,11.08,3.05,2.49,4.21.5,9.89-3.32,12.21-4.61,2.8-11.36.43-12.93-4.58Z"
				/>
				<path
					class="cls-1"
					d="M1151.28,798.85c1.95-1,4.55-.29,5.84,1.72,1.21,1.89.98,4.49-.56,6.04-1.89,1.91-5.18,1.65-6.81-.43-1.8-2.3-.97-6.05,1.53-7.33Z"
				/>
				<path
					class="cls-2"
					d="M1141.71,373.82c4.69-7.77,13.77-10.95,21.29-10.11,13.28,1.48,24.48,15.79,21.87,27.95-2.98,13.89-23.47,22.54-36.15,13.87-9.25-6.33-13.36-21.2-7.01-31.71Z"
				/>
				<path
					class="cls-4"
					d="M1192.16,631.2c-2.16-1.09-8.73-4.01-15.81-1.59-10.35,3.54-15.2,16.26-14.05,26.32.23,2,1.28,11.22,9.22,16.56,9.69,6.52,20.66,1.23,21.29.91-.22-14.07-.44-28.13-.66-42.2Z"
				/>
				<path
					class="cls-2"
					d="M1195.42,665.03c-2.09-.63-5.27-1.3-9.09-.98-6.94.58-16.77,4.5-20.07,13.5-1.79,4.87-.97,9.32-.57,11.35.35,1.76,1.72,8.77,7.01,12.53,5.93,4.22,15.21,3.22,22.72-2.74v-33.66Z"
				/>
				<path
					class="cls-3"
					d="M1178.22,609.74c-1.13-4.41-6.36-6.99-10.5-5.03-4.21,2-5.64,7.92-3.07,11.64,1.98,2.87,5.97,3.89,9.22,2.38,3.34-1.55,5.26-5.47,4.35-9Z"
				/>
			</svg>
			

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
		font-family: "josefin-sans", sans-serif;
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
		top: 20%;
		left: 30%;
		font-size: 0.8em;
	}
	.lecturers-bg {
		position: absolute;
		top: 7%;
		right: 0;
		height: 70%;
	}


	/* -=------------ PRODUCTION ------------ */
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

	/* Patch */
	#interview {
		position: relative;
		> img {
			opacity: 0.4;
		}
	}
</style>
