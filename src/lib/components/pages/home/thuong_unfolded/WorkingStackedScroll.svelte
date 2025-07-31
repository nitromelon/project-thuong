<!-- WorkingStackedScroll.svelte -->
<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  
  interface Section {
    id: string;
    title: string;
    content: string;
  }
  
  export let sections: Section[] = [
    {
      id: 'section1',
      title: 'Welcome',
      content: 'This is the first section. Watch how it zooms and fades as you scroll.',
    },
    {
      id: 'section2', 
      title: 'Features',
      content: 'The second section appears from behind as the first one fades away.',
    },
    {
      id: 'section3',
      title: 'About', 
      content: 'Each section has its own background and stacks perfectly.',
    },
    {
      id: 'section4',
      title: 'Contact',
      content: 'This is the final section to demonstrate the stacking effect.',
    }
  ];
  
  let scrollY = 0;
  let windowHeight = 0;
  let sectionElements: HTMLElement[] = [];
  
  let rafId: number;
  
  function updateScroll() {
    scrollY = window.pageYOffset;
    updateSections();
    rafId = requestAnimationFrame(updateScroll);
  }
  
  function updateSections() {
    sectionElements.forEach((element, index) => {
      if (!element || !windowHeight) return;
      
      const sectionStart = index * windowHeight;
      const scrollProgress = Math.max(0, Math.min(1, (scrollY - sectionStart) / windowHeight));
      
      // Transform calculations
      const scale = 1 + (scrollProgress * 0.3);
      const opacity = 1 - Math.pow(scrollProgress, 1.5); // Ease-out fade
      const blur = scrollProgress * 4;
      
      // Apply transforms
      element.style.transform = `scale(${scale}) translate3d(0, 0, 0)`;
      element.style.opacity = opacity.toString();
      element.style.filter = `blur(${blur}px)`;
    });
  }
  
  onMount(() => {
    windowHeight = window.innerHeight;
    
    // Start the animation loop
    rafId = requestAnimationFrame(updateScroll);
    
    // Handle window resize
    const handleResize = () => {
      windowHeight = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });
  
  onDestroy(() => {
    if (rafId) {
      cancelAnimationFrame(rafId);
    }
  });
</script>

<div class="container">
  <!-- Fixed sections -->
  {#each sections as section, index}
    <div 
      bind:this={sectionElements[index]}
      class="section"
      style="
        z-index: {sections.length - index};
      "
    >
      <div class="content">
        <h2>{section.title}</h2>
        <p>{section.content}</p>
        
        {#if index < sections.length - 1}
          <div class="scroll-hint">
            <span>Scroll down</span>
            <div class="arrow">↓</div>
          </div>
        {/if}
      </div>
      
      <!-- Decorative elements -->
      <div class="bg-decoration">
        <div class="circle" style="top: 20%; left: 10%; width: 100px; height: 100px; opacity: 0.1;"></div>
        <div class="circle" style="bottom: 30%; right: 15%; width: 60px; height: 60px; opacity: 0.15;"></div>
        <div class="circle" style="top: 60%; right: 20%; width: 80px; height: 80px; opacity: 0.08;"></div>
      </div>
    </div>
  {/each}
  
  <!-- Scroll spacer -->
  <div class="spacer" style="height: {sections.length * 100}vh;"></div>
</div>

<style>
  .container {
    position: relative;
  }
  
  .section {
    /* position: fixed;
    top: 0;
    left: 0; */
    width: 100vw;
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
    will-change: transform, opacity, filter;
    backface-visibility: hidden;
    transform-style: preserve-3d;
  }
  
  .content {
    text-align: center;
    color: var(--primary-blue);
    max-width: 100%;
    padding: 2rem;
    position: relative;
    z-index: 10;
  }

  .content p {
    font-size: clamp(1.1rem, 3vw, 1.6rem);
    line-height: 1.6;
    margin-bottom: 3rem;
    opacity: 0.95;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  }
  
  .scroll-hint {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    opacity: 0.8;
    animation: bounce 2s infinite;
  }
  
  .scroll-hint span {
    font-size: 0.9rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }
  
  .arrow {
    font-size: 1.5rem;
    animation: float 1.5s ease-in-out infinite alternate;
  }
  
  .bg-decoration {
    position: absolute;
    inset: 0;
    overflow: hidden;
    pointer-events: none;
  }
  
  .circle {
    position: absolute;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    animation: drift 20s infinite linear;
  }
  
  .spacer {
    position: relative;
    z-index: -1;
  }
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-8px);
    }
    60% {
      transform: translateY(-4px);
    }
  }
  
  @keyframes float {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(-10px);
    }
  }
  
  @keyframes drift {
    from {
      transform: rotate(0deg) translateX(0) rotate(0deg);
    }
    to {
      transform: rotate(360deg) translateX(20px) rotate(-360deg);
    }
  }
  
  @media (max-width: 768px) {
    .content {
      padding: 1.5rem;
    }
    
    .bg-decoration .circle {
      display: none; /* Hide on mobile for performance */
    }
  }
  
  /* Global styles */
  :global(body) {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }
  
  :global(html) {
    scroll-behavior: smooth;
  }
  
  :global(*) {
    box-sizing: border-box;
  }
</style>