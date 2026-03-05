<script setup lang="ts">
import OurArticles from "~/components/HomeSections/OurArticles.vue";
import SectionHeading from "~/components/Reusable/SectionHeading.vue";

definePageMeta({
  layout: "client",
});
</script>

<template>
  <div>
    <div class="relative overflow-hidden">
      <img
        src="/bg-lights.svg"
        alt=""
        class="absolute -top-60 -right-20 lg:-top-100 xl:-top-120 lg:-right-20 rotate-45 lg:rotate-45 z-0 h-150 lg:h-auto"
      />

      <div class="pt-25 xl:pt-40 relative z-10">
        <h1
          class="text-[11.11vw] sm:text-[4rem] w-[30ch] mx-auto text-center font-dm text-white font-medium leading-[109%] tracking-[-1.28px] mb-5 xl:mb-7.5"
        >
          Create Dynamic Route Page Create Dynamic Route Page Create Dynamic
          Route Page
        </h1>
      </div>

      <div class="max-w-7xl mx-auto relative z-10 mt-20 px-6 lg:px-10">
        <div>
          <div class="image-wrapper">
            <img
              src="/images/landing/article2.png"
              alt=""
              class="w-full lg:h-160 object-cover"
            />
          </div>
          <p class="text-secondary leading-[160%] py-15 lg:py-25">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic
            typesetting,<br />
            <br />
            remaining essentially unchanged. Lorem Ipsum is simply dummy text of
            the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            <br />
            <br />
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </div>
        <div class="space-y-10 lg:space-y-25">
          <div>
            <div class="image-wrapper mb-20">
              <img
                src="/images/landing/article3.png"
                alt=""
                class="w-full lg:h-160 object-cover"
              />
            </div>
            <SectionHeading title="Lorem Ipsum is simply" align="left" />
            <p class="text-secondary leading-[160%] mt-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not
              <br />
              <br />
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. Lorem Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book. It has survived not only five
              centuries, but also the
              <br />
              <br />
              leap into electronic typesetting, remaining essentially unchanged.
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown
              <br />
              <br />
              printer took a galley of type and scrambled it to make a type
              specimen book. It has survived not only five centuries, but also
              the leap into electronic typesetting, remaining essentially
              unchanged. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
          <div>
            <SectionHeading title="Lorem Ipsum is simply" align="left" />
            <p class="text-secondary leading-[160%] mt-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not
              <br />
              <br />
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. Lorem Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book. It has survived not only five
              centuries, but also the
              <br />
              <br />
              leap into electronic typesetting, remaining essentially unchanged.
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown
              <br />
              <br />
              printer took a galley of type and scrambled it to make a type
              specimen book. It has survived not only five centuries, but also
              the leap into electronic typesetting, remaining essentially
              unchanged. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
        </div>
      </div>
    </div>
    <OurArticles />
  </div>
</template>

<style scoped></style>
