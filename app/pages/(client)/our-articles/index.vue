<script setup lang="ts">
import BaseButtonLink from '~/components/Reusable/BaseButtonLink.vue';

definePageMeta({
  layout: "client",
});
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
</script>

<template>
  <section class="py-20 xl:py-45 relative overflow-hidden fade-in">
    <div class="max-w-7xl mx-auto px-6 xl:px-10">
      <div class="mb-20 lg:mb-30">
        <h1
          class="text-[11.11vw] sm:text-[4rem] text-center font-dm text-white font-medium leading-[109%] tracking-[-1.28px]"
        >
          Our Articles
        </h1>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div v-for="(article, index) in articles" :key="article.id">
          <article class="article-card h-full text-left">
            <div
              :class="`image-wrapper bg-cover bg-center border border-[#7D7D7D] h-96`"
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
        </div>
      </div>
      <div class="flex justify-center mt-6 lg:mt-12.5 ">
        <BaseButtonLink type="button">Load More</BaseButtonLink>
      </div>
    </div>
    <img
      src="/bg-lights.svg"
      alt=""
      class="absolute -top-60 -right-20 lg:-top-80 xl:-top-100 lg:-right-20 rotate-40 lg:rotate-40 z-0 h-150 lg:h-auto"
    />
  </section>
</template>

