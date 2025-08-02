<script>
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