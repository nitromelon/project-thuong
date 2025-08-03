<script>
	import language_preference, { display_text } from "$lib/components/language/config";
</script>

<div>
    <p>
        {display_text(
            $language_preference,
            "Chữ \'thương\' của người Việt không nằm ở định nghĩa sách vở, mà nằm trong từng hơi thở của cuộc sống, trong mỗi hành động tử tế, lặng lẽ hàng ngày. Từ thương không chỉ gói gọn trong tình cảm nam nữ, mà bao gồm cả gia đình, người thân, bạn bè, những người biết ta và không biết ta.",
            'The essence of "thương" for Vietnamese people isn\'t found in textbook definitions, but in every breath of life, in each kind, quiet daily act. The word "thương" isn\'t limited to romantic relationships; it encompasses family, relatives, friends - those we know and those we don\'t.',
        )}
    </p>
    <br/>
    <p>
        {display_text(
            $language_preference,
            'Từ sự bao trùm của \'thương\' trong đời sống thường nhật, chúng ta sẽ cùng đi sâu hơn vào một khía cạnh đầy ý nghĩa: cách \'thương\' được lý giải và thực hành trong triết lý Phật giáo.',
            'From the broad embrace of "thương" in everyday life, we will now delve deeper into another aspect: how "thương" is understood and practiced within Buddhist philosophy.',
        )}
    </p>
    
    <h2>
        {display_text($language_preference, "Vượt lên một từ đơn", "Beyond the word")}
    </h2>
</div>

<style>
    div {
        width: 60%;
    }

    h2 {
        /* vertical-align: bottom; */
        margin-top: 10%;
        font-size: 3em;
    }

    p {
        font-size: 1.5em;
        text-align: justify;
    }
</style>
