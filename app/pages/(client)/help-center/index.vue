<script setup lang="ts">
import SectionHeading from "~/components/Reusable/SectionHeading.vue";
definePageMeta({
  layout: "client",
});
</script>

<template>
  <section class="py-20 xl:py-45 relative overflow-hidden fade-in">
    <div class="mb-20 lg:mb-30">
      <h1
        class="text-[11.11vw] sm:text-[4rem] text-center font-dm text-white font-medium leading-[109%] tracking-[-1.28px]"
      >
        Help Center
      </h1>
    </div>
    <div class="max-w-7xl mx-auto px-6 xl:px-10 space-y-20 lg:space-y-30 ">
      <SectionHeading
        title="Support You Can Rely On"
        description="The MoneyFlare Help Center is designed to provide clear guidance and dependable support at every stage of your experience. Information is structured to be easy to navigate and simple to understand. Whether you are new to the platform or an active user, the Help Center helps you find answers quickly. The goal is to reduce uncertainty and provide confidence when using MoneyFlare. Every section is written with clarity and transparency in mind."
        align="left"
      />
      <SectionHeading
        title="Getting Started"
        description="This section guides you through the initial steps of using MoneyFlare. It covers account creation, onboarding, and basic platform navigation. Instructions are presented in clear language to ensure a smooth setup experience. No prior trading or technical knowledge is required. The focus is on helping users get started without confusion or delays."
        align="left"
      />
      <SectionHeading
        title="Using the Platform"
        description="Here you will find detailed explanations of how MoneyFlare operates on a daily basis. This includes information about AI trading plans, automated processes, and account features. Content is designed to explain functionality without overwhelming technical detail. Users can learn how the platform works while remaining hands-free. The emphasis is on clarity, simplicity, and ease of use."
        align="left"
      />
      <SectionHeading
        title="Account & Security"
        description="This section explains how MoneyFlare protects user accounts and personal information. It also provides guidance on managing security settings and account access. Topics are presented clearly to promote safe and responsible platform usage. Transparency around security practices helps build long-term trust. Users are encouraged to review this section regularly."
        align="left"
      />
      <SectionHeading
        title="Ongoing Support"
        description="If additional assistance is needed, the Help Center connects users with MoneyFlare’s official support channels. Support is provided in a professional and reliable manner. Questions are handled with care, clarity, and accountability. The focus is on resolving issues efficiently while maintaining a positive user experience. MoneyFlare is committed to ongoing user support."
        align="left"
      />
       
    </div>
    <!-- Decoration -->
    <img
      src="/bg-lights.svg"
      alt=""
      class="absolute -top-60 -right-20 lg:-top-80 xl:-top-100 lg:-right-20 rotate-40 lg:rotate-40 z-0 h-150 lg:h-auto"
    />
    <img
      src="/bg-lights.svg"
      alt=""
      class="absolute -bottom-10 -left-20 lg:-bottom-80 xl:-bottom-60 lg:-left-20 -rotate-40 lg:-rotate-40 z-0 h-150 lg:h-auto scale-x-[-1]"
    />
  </section>
</template>

<style scoped></style>
