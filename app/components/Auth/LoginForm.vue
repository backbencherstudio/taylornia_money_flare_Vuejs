<script setup lang="ts">
import AppleIcon from "../Icons/AppleIcon.vue";
import EyeCloseIcon from "../Icons/EyeCloseIcon.vue";
import EyeIcon from "../Icons/EyeIcon.vue";
import FacebookIcon from "../Icons/FacebookIcon.vue";
import GoogleIcon from "../Icons/GoogleIcon.vue";

const socialButtonClasses =
  "flex justify-center items-center bg-[#2BFFC30F] w-[50px] h-[50px] border border-white/10 rounded-full hover:bg-[#2BFFC320] transition-all duration-200";

const email = ref("");
const password = ref("");
const showPassword = ref(false);

const handleLogin = () => {
  const data = [{ email: email.value, password: password.value }];
  console.log(data)
};
</script>

<template>
  <div class="relative overflow-hidden">
    <div class="grid grid-cols-1 lg:grid-cols-2 items-center gap-20 p-6">
      <!-- Image section -->
      <div>
        <div class="image-wrapper">
          <img
            src="/images/login.png"
            alt="login image"
            class="lg:h-[94.9vh] object-cover"
          />
        </div>
      </div>

      <!-- Content section -->
      <div class="relative z-20 xl:w-126.5 lg:pr-4 xl:pr-0">
        <div class="mb-10 lg:mb-10 text-center lg:text-left">
          <h1 class="text-[2rem] lg:text-[2.5rem]">Welcome Back!</h1>
          <p>Enter Your Details to Signin</p>
        </div>

        <form @submit.prevent="handleLogin" action="" class="space-y-4">
          <div class="">
            <label for="" class="block text-xl lg:text-2xl mb-3.5">Email</label>
            <input
              type="email"
              v-model="email"
              placeholder="Enter Your Email"
              class="w-full p-4 rounded-xl bg-[#08080880] border border-[#808080] focus:text-[#2BFFC3] focus:outline-none focus:border focus:border-[#2BFFC3] focus:placeholder:text-[#2BFFC3]"
            />
          </div>
          <div class="mb-6">
            <label for="" class="block text-xl lg:text-2xl mb-3.5"
              >Password</label
            >
            <div class="relative">
              <input
                :type="showPassword ? 'text' : 'password'"
                v-model="password"
                placeholder="Enter Your Password"
                class="w-full p-4 pr-16 rounded-xl bg-[#08080880] border border-[#808080] focus:text-[#2BFFC3] focus:outline-none focus:border focus:border-[#2BFFC3] focus:placeholder:text-[#2BFFC3]"
              />
              <button
                type="button"
                class="absolute right-4 top-1/2 -translate-y-1/2 text-primary/90 hover:text-primary transition-colors"
                @click="showPassword = !showPassword"
                :aria-label="showPassword ? 'Hide password' : 'Show password'"
              >
                <EyeCloseIcon v-if="showPassword" />
                <EyeIcon v-else />
              </button>
            </div>
          </div>

          <div class="flex justify-between items-center mb-10">
            <div class="flex items-center gap-4">
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
              <p class="text-sm lg:text-lg w-[10ch] sm:w-full">
                Remember me for 30 days
              </p>
            </div>
            <NuxtLink to="/" class="text-primary text-sm lg:text-lg"
              >Forgot Password</NuxtLink
            >
          </div>

          <button
            type="submit"
            class="w-full btn-bg border border-primary leading-[150%] font-medium text-sm rounded-full px-6.75 py-4.5"
          >
            <span class="text-black">Login</span>
          </button>
        </form>
        <div class="flex items-center gap-3 mt-10">
          <hr class="border border-white/20 w-1/3" />
          <p class="w-1/3 xl:text-lg text-center text-xs">Or continue with</p>
          <hr class="border border-white/20 w-1/3" />
        </div>
        <div class="flex w-58 mx-auto justify-center items-center gap-10 mt-5">
          <button :class="socialButtonClasses">
            <GoogleIcon class="text-primary" />
          </button>
          <button :class="socialButtonClasses">
            <FacebookIcon class="text-primary" />
          </button>
          <button :class="socialButtonClasses">
            <AppleIcon class="text-primary" />
          </button>
        </div>
        <div class="mt-5 xl:mt-10 text-center">
          Don’t have an account?
          <NuxtLink to="/auth/signup" class="text-primary">Sign Up</NuxtLink>
        </div>
      </div>
    </div>
    <!-- decoration -->
    <img
      src="/bg-lights.svg"
      alt="bg-light"
      class="absolute top-0 right-0 h-[90vh] z-10"
    />
    <div
      class="absolute -top-10 -right-40 h-44 w-96 bg-[#2bffc3] -rotate-45 rounded-full blur-[98px] opacity-[0.3] z-10"
    />
  </div>
</template>


