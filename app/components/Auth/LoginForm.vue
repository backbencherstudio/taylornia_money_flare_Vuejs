<script setup lang="ts">
import AppleIcon from "../Icons/AppleIcon.vue";
import FacebookIcon from "../Icons/FacebookIcon.vue";
import GoogleIcon from "../Icons/GoogleIcon.vue";

const socialButtonClasses =
  "flex justify-center items-center bg-[#2BFFC30F] w-[50px] h-[50px] border border-white/10 rounded-full hover:bg-[#2BFFC320] transition-all duration-200";
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

        <form action="" class="space-y-4">
          <div class="">
            <label for="" class="block text-xl lg:text-2xl mb-3.5">Email</label>
            <input
              type="email"
              placeholder="Enter Your Email"
              class="w-full p-4 rounded-xl bg-[#08080880] border border-[#808080] focus:text-[#2BFFC3] focus:outline-none focus:border focus:border-[#2BFFC3] focus:placeholder:text-[#2BFFC3]"
            />
          </div>
          <div class="mb-6">
            <label for="" class="block text-xl lg:text-2xl mb-3.5"
              >Password</label
            >
            <input
              type="password"
              placeholder="Enter Your Email"
              class="w-full p-4 rounded-xl bg-[#08080880] border border-[#808080] focus:text-[#2BFFC3] focus:outline-none focus:border focus:border-[#2BFFC3] focus:placeholder:text-[#2BFFC3]"
            />
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
          <button
            :class="socialButtonClasses"
          >
            <GoogleIcon class="text-primary" />
          </button>
          <button
            :class="socialButtonClasses"
          >
            <FacebookIcon class="text-primary" />
          </button>
          <button
            :class="socialButtonClasses"
          >
            <AppleIcon class="text-primary" />
          </button>
        </div>
        <div class="mt-5 xl:mt-10 text-center">
          Don’t have an account? <NuxtLink to="/auth/signup" class="text-primary">Sign Up</NuxtLink>
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

<style scoped>
.btn-bg {
  background: linear-gradient(180deg, #2bffc3 0%, #1a9975 100%);
}

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

/* checkbox */
/* From Uiverse.io by 00Kubi */
.neon-checkbox {
  --primary: #2bffc3;
  --primary-dark: #00cc88;
  --primary-light: #88ffdd;
  --size: 15px; /* Mobile default size */
  position: relative;
  width: var(--size);
  height: var(--size);
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}

.neon-checkbox input {
  display: none;
}

.neon-checkbox__frame {
  position: relative;
  width: 100%;
  height: 100%;
}

.neon-checkbox__box {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 4px;
  border: 1px solid var(--primary-dark);
  transition: all 0.4s ease;
}

.neon-checkbox__check-container {
  position: absolute;
  inset: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.neon-checkbox__check {
  width: 80%;
  height: 80%;
  fill: none;
  stroke: var(--primary);
  stroke-width: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 40;
  stroke-dashoffset: 40;
  transform-origin: center;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.neon-checkbox__glow {
  position: absolute;
  inset: -2px;
  border-radius: 6px;
  background: var(--primary);
  opacity: 0;
  filter: blur(8px);
  transform: scale(1.2);
  transition: all 0.4s ease;
}

.neon-checkbox__borders {
  position: absolute;
  inset: 0;
  border-radius: 4px;
  overflow: hidden;
}

.neon-checkbox__borders span {
  position: absolute;
  width: 40px;
  height: 1px;
  background: var(--primary);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.neon-checkbox__borders span:nth-child(1) {
  top: 0;
  left: -100%;
  animation: borderFlow1 2s linear infinite;
}

.neon-checkbox__borders span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 1px;
  height: 40px;
  animation: borderFlow2 2s linear infinite;
}

.neon-checkbox__borders span:nth-child(3) {
  bottom: 0;
  right: -100%;
  animation: borderFlow3 2s linear infinite;
}

.neon-checkbox__borders span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 1px;
  height: 40px;
  animation: borderFlow4 2s linear infinite;
}

.neon-checkbox__particles span {
  position: absolute;
  width: 4px;
  height: 4px;
  background: var(--primary);
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
  top: 50%;
  left: 50%;
  box-shadow: 0 0 6px var(--primary);
}

.neon-checkbox__rings {
  position: absolute;
  inset: -20px;
  pointer-events: none;
}

.neon-checkbox__rings .ring {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 1px solid var(--primary);
  opacity: 0;
  transform: scale(0);
}

.neon-checkbox__sparks span {
  position: absolute;
  width: 20px;
  height: 1px;
  background: linear-gradient(90deg, var(--primary), transparent);
  opacity: 0;
}

/* Hover Effects */
.neon-checkbox:hover .neon-checkbox__box {
  border-color: var(--primary);
  transform: scale(1.05);
}

/* Checked State */
.neon-checkbox input:checked ~ .neon-checkbox__frame .neon-checkbox__box {
  border-color: var(--primary);
  background: rgba(0, 255, 170, 0.1);
}

.neon-checkbox input:checked ~ .neon-checkbox__frame .neon-checkbox__check {
  stroke-dashoffset: 0;
  transform: scale(1.1);
}

.neon-checkbox input:checked ~ .neon-checkbox__frame .neon-checkbox__glow {
  opacity: 0.2;
}

.neon-checkbox
  input:checked
  ~ .neon-checkbox__frame
  .neon-checkbox__borders
  span {
  opacity: 1;
}

/* Particle Animations */
.neon-checkbox
  input:checked
  ~ .neon-checkbox__frame
  .neon-checkbox__particles
  span {
  animation: particleExplosion 0.6s ease-out forwards;
}

.neon-checkbox
  input:checked
  ~ .neon-checkbox__frame
  .neon-checkbox__rings
  .ring {
  animation: ringPulse 0.6s ease-out forwards;
}

.neon-checkbox
  input:checked
  ~ .neon-checkbox__frame
  .neon-checkbox__sparks
  span {
  animation: sparkFlash 0.6s ease-out forwards;
}

/* Animations */
@keyframes borderFlow1 {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(200%);
  }
}

@keyframes borderFlow2 {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(200%);
  }
}

@keyframes borderFlow3 {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-200%);
  }
}

@keyframes borderFlow4 {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-200%);
  }
}

@keyframes particleExplosion {
  0% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  100% {
    transform: translate(
        calc(-50% + var(--x, 20px)),
        calc(-50% + var(--y, 20px))
      )
      scale(0);
    opacity: 0;
  }
}

@keyframes ringPulse {
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(2);
    opacity: 0;
  }
}

@keyframes sparkFlash {
  0% {
    transform: rotate(var(--r, 0deg)) translateX(0) scale(1);
    opacity: 1;
  }
  100% {
    transform: rotate(var(--r, 0deg)) translateX(30px) scale(0);
    opacity: 0;
  }
}

/* Particle Positions */
.neon-checkbox__particles span:nth-child(1) {
  --x: 25px;
  --y: -25px;
}
.neon-checkbox__particles span:nth-child(2) {
  --x: -25px;
  --y: -25px;
}
.neon-checkbox__particles span:nth-child(3) {
  --x: 25px;
  --y: 25px;
}
.neon-checkbox__particles span:nth-child(4) {
  --x: -25px;
  --y: 25px;
}
.neon-checkbox__particles span:nth-child(5) {
  --x: 35px;
  --y: 0px;
}
.neon-checkbox__particles span:nth-child(6) {
  --x: -35px;
  --y: 0px;
}
.neon-checkbox__particles span:nth-child(7) {
  --x: 0px;
  --y: 35px;
}
.neon-checkbox__particles span:nth-child(8) {
  --x: 0px;
  --y: -35px;
}
.neon-checkbox__particles span:nth-child(9) {
  --x: 20px;
  --y: -30px;
}
.neon-checkbox__particles span:nth-child(10) {
  --x: -20px;
  --y: 30px;
}
.neon-checkbox__particles span:nth-child(11) {
  --x: 30px;
  --y: 20px;
}
.neon-checkbox__particles span:nth-child(12) {
  --x: -30px;
  --y: -20px;
}

/* Spark Rotations */
.neon-checkbox__sparks span:nth-child(1) {
  --r: 0deg;
  top: 50%;
  left: 50%;
}
.neon-checkbox__sparks span:nth-child(2) {
  --r: 90deg;
  top: 50%;
  left: 50%;
}
.neon-checkbox__sparks span:nth-child(3) {
  --r: 180deg;
  top: 50%;
  left: 50%;
}
.neon-checkbox__sparks span:nth-child(4) {
  --r: 270deg;
  top: 50%;
  left: 50%;
}

/* Ring Delays */
.neon-checkbox__rings .ring:nth-child(1) {
  animation-delay: 0s;
}
.neon-checkbox__rings .ring:nth-child(2) {
  animation-delay: 0.1s;
}
.neon-checkbox__rings .ring:nth-child(3) {
  animation-delay: 0.2s;
}

/* -------- Responsive Size -------- */

/* Large devices and up */
@media (min-width: 1024px) {
  .neon-checkbox {
    --size: 24px;
  }
}

/* checkbox */
</style>
