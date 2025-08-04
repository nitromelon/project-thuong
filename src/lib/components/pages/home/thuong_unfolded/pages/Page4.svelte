<script>
	import language_preference, { display_text } from "$lib/components/language/config";
</script>

<div>
    <p>
        {@html display_text(
            $language_preference,
            "Chữ <i>'thương'</i> của người Việt không nằm ở định nghĩa sách vở, mà nằm trong từng hơi thở của cuộc sống, trong mỗi hành động tử tế, lặng lẽ hàng ngày. Từ <i>'thương'</i> không chỉ gói gọn trong tình cảm nam nữ, mà bao gồm cả gia đình, người thân, bạn bè, những người biết ta và không biết ta.",
            'The essence of <i>"thương"</i> for Vietnamese people isn\'t found in textbook definitions, but in every breath of life, in each kind, quiet daily act. The word <i>"thương"</i> isn\'t limited to romantic relationships; it encompasses family, relatives, friends - those we know and those we don\'t.',
        )}
    </p>
    <br/> <br/>
    <p>
        {@html display_text(
            $language_preference,
            'Từ sự bao trùm của \'thương\' trong đời sống thường nhật, chúng ta sẽ cùng đi sâu hơn vào một khía cạnh đầy ý nghĩa: <u>cách \'thương\' được lý giải và thực hành trong triết lý Phật giáo.</u>',
            'From the broad embrace of "thương" in everyday life, we will now delve deeper into another aspect: <u>how "thương" is understood and practiced within Buddhist philosophy.</u>',
        )}
    </p>
    
    <h2>
        {display_text($language_preference, "Vượt lên một từ đơn", "Beyond the word")}
    </h2>
</div>

<style>
    div {
        width: 80%;
        height: 70%;
        padding-top: 5%;
    }

    h2 {
        font-size: 3em;
        position: absolute;
        top: 75%;
    }

    p {
        font-size: 1.5em;
        text-align: justify;
    }

    p :global {
        i {
            font-style: italic;
            color: var(--cobalt-blue);
        }
        u {
            text-decoration: underline;
        }
    }
</style>
