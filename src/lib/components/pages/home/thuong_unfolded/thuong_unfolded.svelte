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
    const componentStart = index * windowHeight;
    const componentEnd = (index + 1) * windowHeight;
    const progress = (scrollY - componentStart) / windowHeight;
    
    if (scrollY < componentStart) {
      // Section hasn't been reached yet
      return {
        scale: 1,
        opacity: 0,
        zIndex: components.length - index
      };
    } else if (scrollY >= componentStart && scrollY < componentEnd) {
      // Current section being scrolled
      const scale = 1 + (progress * 0.5); // Scale up to 1.5x
      const opacity = 1 - progress; // Fade out
      return {
        scale,
        opacity,
        zIndex: components.length - index + 10 // Bring to front
      };
    } else {
      // Section has been passed
      return {
        scale: 1.5,
        opacity: 0,
        zIndex: components.length - index
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

<div class="container" style="height: {components.length * 100}vh;">
  {#each components as component, i}
    {@const transform = getTransform(i)}
    <div 
      class="slide"
      style="
        transform: scale({transform.scale});
        opacity: {transform.opacity};
        z-index: {transform.zIndex};
      "
    >
      <svelte:component this={component} />
    </div>
  {/each}
</div>

<style>  
  .container {
    position: relative;
    width: 100%;
  }

  .slide {
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
	transition-timing-function: var(--timing-function);
	transition-duration: 1s;
  }
  
</style>