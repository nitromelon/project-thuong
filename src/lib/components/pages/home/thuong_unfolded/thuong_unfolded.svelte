<script>
  import Page1 from './pages/Page1.svelte';
  import Page2 from './pages/Page2.svelte';
  import Page3 from './pages/Page3.svelte';
  import Page4 from './pages/Page4.svelte';
  import Page5 from './pages/Page5.svelte';
  import Page6 from './pages/Page6.svelte';
  import Page7 from './pages/Page7.svelte';
  import Page8 from './pages/Page8.svelte';
  import Page9 from './pages/Page9.svelte';
  import Page10 from './pages/Page10.svelte';
  import Page11 from './pages/Page11.svelte';
  import Page12 from './pages/Page12.svelte';
  import Page13 from './pages/Page13.svelte';
  import Page14 from './pages/Page14.svelte';
  import Page15 from './pages/Page15.svelte';
  import Page16 from './pages/Page16.svelte';
  import Page17 from './pages/Page17.svelte';
  import Page18 from './pages/Page18.svelte';
  import Page19 from './pages/Page19.svelte';
  import Page20 from './pages/Page20.svelte';
  import Page21 from './pages/Page21.svelte';
  import Page22 from './pages/Page22.svelte';
  import Page23 from './pages/Page23.svelte';
  import Page24 from './pages/Page24.svelte';
  import Page25 from './pages/Page25.svelte';
  import Page26 from './pages/Page26.svelte';
  import { onMount } from 'svelte';
  
  let scrollY = 0;
  let windowHeight = 0;
  
  const sections = [
    { text: "Welcome to our site", bg: "#1a1a1a", color: "#ffffff" },
    { text: "Discover amazing content", bg: "#2c3e50", color: "#ecf0f1" },
    { text: "Scroll to explore more", bg: "#34495e", color: "#ffffff" },
    { text: "Each section reveals itself", bg: "#16a085", color: "#ffffff" },
    { text: "As you continue scrolling", bg: "#27ae60", color: "#ffffff" },
    { text: "Creating a unique experience", bg: "#2980b9", color: "#ffffff" },
    { text: "Thank you for visiting", bg: "#8e44ad", color: "#ffffff" }
  ];

  const components = [
	Page1,
	Page2,
	Page3,
	Page4,
	Page5,
	Page6,
	Page7,
	Page8,
	Page9,
	Page10,
	Page11,
	Page12,
	Page13,
	Page14,
	Page15,
	Page16,
	Page17,
	Page18,
	Page19,
	Page20,
	Page21,
	Page22,
	Page23,
	Page24,
	Page25,
	Page26,
  ];
  
  function getTransform(index) {
    const sectionStart = index * windowHeight;
    const sectionEnd = (index + 1) * windowHeight;
    const progress = (scrollY - sectionStart) / windowHeight;
    
    if (scrollY < sectionStart) {
      // Section hasn't been reached yet
      return {
        scale: 1,
        opacity: 0,
        zIndex: sections.length - index
      };
    } else if (scrollY >= sectionStart && scrollY < sectionEnd) {
      // Current section being scrolled
      const scale = 1 + (progress * 0.5); // Scale up to 1.5x
      const opacity = 1 - progress; // Fade out
      return {
        scale,
        opacity,
        zIndex: sections.length - index + 10 // Bring to front
      };
    } else {
      // Section has been passed
      return {
        scale: 1.5,
        opacity: 0,
        zIndex: sections.length - index
      };
    }
  }
  
  onMount(() => {
    windowHeight = window.innerHeight;
    
    const handleResize = () => {
      windowHeight = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });
</script>

<svelte:window bind:scrollY />

<div class="container" style="height: {sections.length * 100}vh;">
  {#each sections as section, i}
    {@const transform = getTransform(i)}
    <div 
      class="section"
      style="
        background-color: {section.bg};
        color: {section.color};
        transform: scale({transform.scale});
        opacity: {transform.opacity};
        z-index: {transform.zIndex};
      "
    >
      <h1>{section.text}</h1>
    </div>
  {/each}
</div>

<style>  
  .container {
    position: relative;
    width: 100%;
  }
  
  .section {
	pointer-events: none;
    position: fixed;
    top: 17%;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.1s ease-out, opacity 0.1s ease-out;
    will-change: transform, opacity;
  }
  
  h1 {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    font-size: clamp(2rem, 8vw, 4rem);
    text-align: center;
    margin: 0;
    padding: 0 2rem;
    font-weight: 300;
    letter-spacing: -0.02em;
  }
</style>