<script>
	import language_preference, { display_text } from "$lib/components/language/config";
</script>

<div class="row">
	<div class="column">
		<p>
			{@html display_text(
				$language_preference,
				'\'Thương\' không đơn thuần là <u>"love"</u> hay <u>"pity"</u> trong tiếng Anh. Nó vượt ra ngoài mọi khuôn khổ dịch thuật, ôm trọn một phổ cảm xúc đa tầng mà hiếm ngôn ngữ nào có từ tương đương chính xác.',
				'"Thương" is not simply <u>"love"</u> or <u>"pity"</u> in English. It transcends all translational boundaries, embracing a multi-layered spectrum of emotions that few languages have a precise equivalent for.',
			)}
		</p>
		<h2>
			{display_text($language_preference, "Vượt lên một từ đơn", "Beyond the word")}
		</h2>
	</div>

	<div class="column right">
		<p>
			{display_text(
				$language_preference,
				'Từ tình yêu thương sâu nặng trong gia đình, tình cảm lãng mạn đầy e ấp (như cách người miền Nam thường dùng), đến lòng trắc ẩn, sự xót xa cho một số phận, hay sự quan tâm, bao bọc dịu dàng, tất cả đều được gói gọn trong hai tiếng "thương".',
				'From deep familial affection, to the shy, romantic love often used in Southern Vietnam, to compassion, sorrow for a fate, or gentle care and protection - all are encapsulated in the two syllables of "thương."',
			)}
		</p>
	</div>
</div>

<style>
	.row {
		display: flex;
		gap: 10%;
        margin-left: 10%;
	}

	.column {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 40%;
        height: 100%;
	}

	.right {
		margin-top: 12%;
	}

    p {
        font-size: 1.5em;
        text-align: justify;
    }

    h2 {
        font-size: 3em;
        position: absolute;
        top: 75%;
    }
    
	p :global(u) {
		text-decoration: underline;
		font-style: italic;
	}

</style>
