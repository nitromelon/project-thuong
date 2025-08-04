<script>
	import language_preference, { display_text } from "$lib/components/language/config";
</script>

<section>

    <div class="two-columns">
        <div class="left-column">
            <p>
                {display_text($language_preference, "Tiếng Việt không dùng biến tố như nhiều ngôn ngữ khác, nhưng lại có hệ thống thanh điệu (tone) độc đáo: ngang, huyền, hỏi, ngã, sắc, nặng - tương ứng với những đường âm giai lên xuống, bổng trầm và độ căng khàn của giọng.",
                "Vietnamese doesn't rely on inflections like many other languages. Instead, it boasts a distinct tone system: ngang, huyền, hỏi, ngã, sắc, nặng - each corresponding to rising and falling melodic contours and varying vocal tension.")}
            </p>
            <br />
            <p>
                {@html display_text($language_preference, "Điều này khiến từng dấu thanh có khả năng định hình toàn bộ nghĩa của từ, hoặc làm sai lệch hoàn toàn nội dung câu nói nếu bị dùng sai.",
                "This means every tone mark can completely shape a word's meaning or entirely distort a sentence's content if used incorrectly.")}
            </p>
        </div>

        <div class="right-column">
            <table>
                <tbody>
                    <tr>
                        <th>Ngang</th>
                        <td>Cao độ trung bình, ổn định (mid-level)</td>
                    </tr>
                    <tr>
                        <th>Huyền</th>
                        <td>Âm trầm, xuống thấp dần (low)</td>
                    </tr>
                    <tr>
                        <th>Sắc</th>
                        <td>Âm cao, lên nhanh (high-rising)</td>
                    </tr>
                    <tr>
                        <th>Nặng</th>
                        <td>Âm trầm, ngắn, khàn (low-fall + creaky)</td>
                    </tr>
                    <tr>
                        <th>Hỏi</th>
                        <td>Âm thấp rồi hơi lên (fall-rise)</td>
                    </tr>
                    <tr>
                        <th>Ngã</th>
                        <td>Âm cao, ngắt quãng rồi lên lại (creaky-rise)</td>
                    </tr>
                </tbody>
            </table>

        </div>
    </div>


    <br /> <br />

    <h2>
		{display_text($language_preference, "Ngữ âm ", "Sound's ")}
		<span>{display_text($language_preference, "vẽ", "nuance")}</span>
		{display_text($language_preference, " nghĩa", "")}
	</h2>

</section>

<style>
	section {
		width: 80%;
		height: 70%;
	}

    h2 {
        position: absolute;
        font-size: 3em;
        top: 75%;
    }

    p {
        font-size: 1.4em;
        line-height: 1.5;
        margin-top: 20px;
        text-align: justify;
    }

    span {
        font-weight: bold;
        font-family: "Josefin Sans", sans-serif;
        color: var(--brown);
    }

    .two-columns {
		display: grid;
		grid-template-columns: 40% 60%;
		gap: 20px;
	}

    img {
        width: 83%;
        height: auto;
        display: flex;
        float: right;
    }

    table, th, td {
        padding: 0.7em;
        border-collapse: collapse;
        border: 1px solid black;
        font-family: 'TTNorms', sans-serif;
        text-align: center;
        margin-left: 10vw;
    }

    th {
        color: beige;
        font-weight: bold;
        font-size: 1.5em;
        background-color: var(--primary-blue);
    }

    td {
        font-size: 1.3em;
    }

</style>
