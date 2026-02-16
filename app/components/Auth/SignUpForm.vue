<script setup lang="ts">
import EmailIcon from "../Icons/EmailIcon.vue";
import LockIcon from "../Icons/LockIcon.vue";
import PhoneIcon from "../Icons/PhoneIcon.vue";
import SingleUserIcon from "../Icons/SingleUserIcon.vue";
import BaseButton from "../Reusable/BaseButton.vue";

const handleSignUp = () => {};
</script>

<template>
  <div>
    <!-- Image section -->
    <div class="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 xl:gap-20 p-6">
      <div class="image-wrapper">
        <img
          src="/images/signup.png"
          alt="Sign up image"
          class="lg:h-screen object-cover"
        />
      </div>
      <div class="relative z-20 xl:w-126.5 lg:pr-4 xl:pr-0">
        <div class="mb-10 lg:mb-10 text-center lg:text-left">
          <h1 class="text-[2rem] lg:text-[2.5rem]">Create Your Account</h1>
          <p>Enter Your Details to Sign Up</p>
        </div>
        <form @submit.prevent="handleSignUp" action="" class="space-y-4">
          <div>
            <label for="" class="block text-xl lg:text-2xl mb-3.5"
              >First Name</label
            >
            <div class="relative">
              <input
                type="firstname"
                placeholder="Enter Your first name"
                class="w-full px-8 py-4 rounded-xl bg-[#08080880] border border-[#808080] focus:text-[#2BFFC3] focus:outline-none focus:border focus:border-[#2BFFC3] focus:placeholder:text-[#2BFFC3] placeholder:text-sm"
              />
              <span class="absolute left-4 top-1/2 transform -translate-y-1/2"
                ><SingleUserIcon
              /></span>
            </div>
          </div>
          <div>
            <label for="" class="block text-xl lg:text-2xl mb-3.5"
              >Last Name</label
            >
            <div class="relative">
              <input
                type="lastname"
                placeholder="Enter Your last name"
                class="w-full px-8 py-4 rounded-xl bg-[#08080880] border border-[#808080] focus:text-[#2BFFC3] focus:outline-none focus:border focus:border-[#2BFFC3] focus:placeholder:text-[#2BFFC3] placeholder:text-sm"
              />
              <span class="absolute left-4 top-1/2 transform -translate-y-1/2"
                ><SingleUserIcon
              /></span>
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div>
              <label for="" class="block text-xl lg:text-2xl mb-3.5"
                >Phone#</label
              >
              <div class="relative">
                <input
                  type="phone"
                  placeholder="Enter Your Phone"
                  class="w-full px-8 py-4 rounded-xl bg-[#08080880] border border-[#808080] focus:text-[#2BFFC3] focus:outline-none focus:border focus:border-[#2BFFC3] focus:placeholder:text-[#2BFFC3] placeholder:text-sm"
                />
                <span class="absolute left-3 top-1/2 transform -translate-y-1/2"
                  ><PhoneIcon
                /></span>
              </div>
            </div>
            <div>
              <label for="" class="block text-xl lg:text-2xl mb-3.5"
                >Email</label
              >
              <div class="relative">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  class="w-full px-8 py-4 rounded-xl bg-[#08080880] border border-[#808080] focus:text-[#2BFFC3] focus:outline-none focus:border focus:border-[#2BFFC3] focus:placeholder:text-[#2BFFC3] placeholder:text-sm"
                />
                <span class="absolute left-3 top-1/2 transform -translate-y-1/2"
                  ><EmailIcon
                /></span>
              </div>
            </div>
            <div>
              <label for="" class="block text-xl lg:text-2xl mb-3.5"
                >Password</label
              >
              <div class="relative">
                <input
                  type="Password"
                  placeholder="Enter Your Password"
                  class="w-full px-8 py-4 rounded-xl bg-[#08080880] border border-[#808080] focus:text-[#2BFFC3] focus:outline-none focus:border focus:border-[#2BFFC3] focus:placeholder:text-[#2BFFC3] placeholder:text-sm"
                />
                <span class="absolute left-3 top-1/2 transform -translate-y-1/2"
                  ><LockIcon
                /></span>
              </div>
            </div>
            <div>
              <label for="" class="block text-xl lg:text-2xl mb-3.5"
                >Confirm Password</label
              >
              <div class="relative">
                <input
                  type="password"
                  placeholder="Confirm Your Password"
                  class="w-full px-8 py-4 rounded-xl bg-[#08080880] border border-[#808080] focus:text-[#2BFFC3] focus:outline-none focus:border focus:border-[#2BFFC3] focus:placeholder:text-[#2BFFC3] placeholder:text-sm"
                />
                <span class="absolute left-3 top-1/2 transform -translate-y-1/2"
                  ><LockIcon /></span>
              </div>
            </div>
          </div>

          <div class="flex items-center gap-4 mb-10">
            <label class="neon-checkbox">
              <input type="checkbox" />
              <div class="neon-checkbox__frame">
                <div class="neon-checkbox__box">
                  <div class="neon-checkbox__check-container">
                    <svg viewBox="0 0 24 24" class="neon-checkbox__check">
                      <path d="M3,12.5l7,7L21,5"></path>
                    </svg>
                  </div>
                  <div class="neon-checkbox__glow"></div>
                  <div class="neon-checkbox__borders">
                    <span></span><span></span><span></span><span></span>
                  </div>
                </div>
                <div class="neon-checkbox__effects">
                  <div class="neon-checkbox__particles">
                    <span></span><span></span><span></span><span></span>
                    <span></span><span></span><span></span><span></span>
                    <span></span><span></span><span></span><span></span>
                  </div>
                  <div class="neon-checkbox__rings">
                    <div class="ring"></div>
                    <div class="ring"></div>
                    <div class="ring"></div>
                  </div>
                  <div class="neon-checkbox__sparks">
                    <span></span><span></span><span></span><span></span>
                  </div>
                </div>
              </div>
            </label>
            <p class="text-sm lg:text-lg">Remember me for 30 days</p>
          </div>

          <BaseButton name="Sign Up" type="submit" />
        </form>
        <div class="mt-5 xl:mt-10 text-center">
          Don’t have an account?
          <NuxtLink to="/auth/login" class="text-primary">Sign Up</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.image-wrapper {
  position: relative;
  border-radius: 24px;
  overflow: hidden;
}

/* Blend overlay */
.image-wrapper::after {
  content: "";
  position: absolute;
  inset: 0;
  background: #2bffc3;
  mix-blend-mode: color;
  pointer-events: none;
}
</style>
