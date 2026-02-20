<script setup lang="ts">
import SectionHeading from "../Reusable/SectionHeading.vue";
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/carousel.css";

const articles = [
  {
    id: 1,
    date: " APRIL 28,2024 • 10 MiN aREAD",
    image: "/images/landing/article.png",
    title: " Lerum Ipsum Lerum Ipsum Lerum Ipsum Lerum Ipsum",
    category: "Bitcoin",
  },
  {
    id: 2,
    date: " APRIL 29,2024 • 10 MiN aREAD",
    image: "/images/landing/article2.png",
    title:
      " Lerum Ipsum Lerum Ipsum Lerum Ipsum Lerum Ipsum Lerum Ipsum Lerum Ipsum ",
    category: "Bitcoin",
  },
  {
    id: 3,
    date: " APRIL 29,2024 • 10 MiN aREAD",
    image: "/images/landing/article3.png",
    title: " Lerum Ipsum Lerum Ipsum Lerum Ipsum Lerum Ipsum  ",
    category: "Bitcoin",
  },
  {
    id: 4,
    date: " APRIL 28,2024 • 10 MiN aREAD",
    image: "/images/landing/article.png",
    title: " Lerum Ipsum Lerum Ipsum Lerum Ipsum Lerum Ipsum",
    category: "Bitcoin",
  },
  {
    id: 5,
    date: " APRIL 29,2024 • 10 MiN aREAD",
    image: "/images/landing/article2.png",
    title: " Lerum Ipsum Lerum Ipsum Lerum Ipsum  ",
    category: "Bitcoin",
  },
  {
    id: 6,
    date: " APRIL 29,2024 • 10 MiN aREAD",
    image: "/images/landing/article3.png",
    title: " Lerum Ipsum Lerum Ipsum Lerum Ipsum ",
    category: "Bitcoin",
  },
];

const carouselBreakpoints:any = {
  0: {
    itemsToShow: 1,
    snapAlign: "start",
  },
  768: {
    itemsToShow: 2,
    snapAlign: "start",
  },
  1280: {
    itemsToShow: 3.5,
    snapAlign: "start",
  },
};
</script>

<template>
  <div class="px-4 sm:px-0 py-20 lg:py-45">
    <div class="mb-10 lg:mb-12.5">
      <SectionHeading title="Our Articles" description="" align="center" />
    </div>
    <section class="xl:ml-31 2xl:ml-88">
      <Carousel
        :items-to-show="1"
        :items-to-scroll="1"
        :breakpoints="carouselBreakpoints"
        :wrap-around="false"
        :transition="450"
        :mouse-drag="true"
        :touch-drag="true"
        :gap="14"
        class="our-articles-carousel"
      >
        <Slide v-for="(article, index) in articles" :key="article.id">
          <article class="article-card h-full text-left">
            <div
              :class="`image-wrapper bg-cover bg-center border border-[#7D7D7D] h-96 ${index % 2 !== 0 ? 'lg:h-64.75' : ''}`"
              :style="{ backgroundImage: `url(${article.image})` }"
            ></div>
            <div
              class="mt-4 sm:mt-6 flex flex-wrap items-center justify-between gap-3"
            >
              <button
                class="shrink-0 bg-linear-to-t to-[#2BFFC3] from-[#01684b] rounded-full p-px"
              >
                <div
                  class="text-white bg-[#040a08] indent-0 py-1.75 px-4.25 rounded-full text-[12px] sm:text-[13.6px]"
                >
                  {{ article.category }}
                </div>
              </button>
              <p
                class="ml-auto text-right text-[11px] sm:text-[13px] text-[#FFF] uppercase leading-tight sm:leading-normal"
              >
                {{ article.date }}
              </p>
            </div>
            <h2
              class="text-xl sm:text-2xl lg:text-[26px] font-medium font-dm mt-4 sm:mt-6 leading-[130%]"
            >
              {{ article.title }}
            </h2>
          </article>
        </Slide>
      </Carousel>
    </section>
  </div>
</template>

<style scoped>
.article-card {
  padding-bottom: 0.25rem;
}

.our-articles-carousel :deep(.carousel__slide) {
  align-items: stretch;
  padding-inline: 0.25rem;
}
</style>
