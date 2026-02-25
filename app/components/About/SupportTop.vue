<script setup lang="ts">
const marqueeImages = [
  "/images/landing/cosmos.png",
  "/images/landing/elrond.png",
  "/images/landing/ethereum.png",
  "/images/landing/marquee4.png",
  "/images/landing/stacks.png",
  "/images/landing/polygon.png",
  "/images/landing/cosmos.png",
  "/images/landing/elrond.png",
  "/images/landing/ethereum.png",
  "/images/landing/marquee4.png",
  "/images/landing/stacks.png",
  "/images/landing/polygon.png",
  ,
];
</script>

<template>
  <div>
    <!-- referr -->
    <div class="bg-[#1a9975] py-20 relative z-10">
      <p
        class="text-center text-[2rem] lg:text-[2.5rem] font-medium font-dm leading-[150%] lg:leading-[120%] lg:w-[36ch] mx-auto"
      >
        Support top 30+ chains
      </p>
      <div
        class="marquee-wrapper mx-auto lg:px-10 relative overflow-hidden lg:mt-7.5"
      >
        <div class="marquee-track">
          <div class="marquee-group">
            <img
              v-for="(image, index) in marqueeImages"
              :key="`logo-a-${index}`"
              :src="image"
              alt=""
              class="h-11.5 lg:h-13"
            />
          </div>
          <div class="marquee-group" aria-hidden="true">
            <img
              v-for="(image, index) in marqueeImages"
              :key="`logo-b-${index}`"
              :src="image"
              alt=""
              class="h-11.5 lg:h-13"
            />
          </div>
        </div>
        <div class="marquee-fade marquee-fade-left" />
        <div class="marquee-fade marquee-fade-right" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.marquee-wrapper {
  width: min(100%);
}

.marquee-track {
  display: flex;
  width: max-content;
  animation: marquee-scroll 18s linear infinite;
}

.marquee-group {
  display: flex;
  align-items: center;
  gap: clamp(2rem, 4vw, 4rem);
  padding-right: clamp(2rem, 4vw, 4rem);
}

.marquee-logo {
  height: 2rem;
  width: auto;
  object-fit: contain;
  opacity: 0.9;
}

.marquee-fade {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 20rem;
  pointer-events: none;
  z-index: 1;
}

.marquee-fade-left {
  left: 0;
  background: linear-gradient(to right, #1a9975 20%, transparent 100%);
}

.marquee-fade-right {
  right: 0;
  background: linear-gradient(to left, #1a9975 20%, transparent 100%);
}

@keyframes marquee-scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

@media (prefers-reduced-motion: reduce) {
  .marquee-track {
    animation: none;
  }
}

@media (max-width: 719px) {
  .marquee-fade {
    width: 6rem;
  }
}
</style>
