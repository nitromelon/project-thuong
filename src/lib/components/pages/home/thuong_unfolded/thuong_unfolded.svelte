<script lang="ts">
	import language_preference, { display_text } from "$lib/components/language/config";

	import WorkingStackedScroll from "$lib/components/pages/home/thuong_unfolded/WorkingStackedScroll.svelte";

	const customSections = [
		{
			id: "section1",
			title: display_text($language_preference, "Vượt lên một từ đơn", "More than a single word"),
			content: display_text(
				$language_preference,
				'Trong các cuốn từ điển hay sách giáo khoa, một từ thường được định nghĩa một cách rõ ràng, cụ thể. Tuy nhiên, khi nói đến "thương", mọi định nghĩa dường như trở thành một thách thức lớn.',
				"More than a single word",
			),
		},
		{
			id: "section2",
			title: "Ngữ pháp kể chuyện",
			content:
				"Cảm xúc không chỉ nằm ở nghĩa, mà còn ở cách câu được nói ra, viết xuống. Một tiếng “thương” có thể là hành động, là trạng thái, là nhịp lặng giữa hai dòng thoại, hay thậm chí là tất cả cùng một lúc.",
		},
		{
			id: "section3",
			title: "Ngữ âm vẽ nghĩa",
			content:
				"Cảm xúc không chỉ nằm ở nghĩa, mà còn ở cách câu được nói ra, viết xuống. Một tiếng “thương” có thể là hành động, là trạng thái, là nhịp lặng giữa hai dòng thoại, hay thậm chí là tất cả cùng một lúc.",
		},
		{
			id: "section4",
			title: "'Thương' trong dòng chảy văn học",
			content:
				"Thương từ lâu đã trở thành một chất liệu thân thuộc trong sáng tác. Nó là chủ đề, là cảm hứng, là lối nói không thể thiếu khi nhà văn, nhà thơ, nghệ sĩ muốn khắc họa cảm xúc con người, từ tình yêu đôi lứa, tình cảm gia đình, tình đồng bào đến nỗi đau mất mát hay những nhớ thương xa xứ.",
		},
		// ... more sections
	];
</script>

<WorkingStackedScroll sections={customSections} />

<style>
</style>
