<template>
  <div class="auth-shell">
    <div class="auth-card">
      <header class="auth-header">
        <span class="brand">MoneyFlare</span>
        <span class="tag">Secure access</span>
      </header>
      <main class="auth-content">
        <slot />
      </main>
    </div>
    <div class="auth-glow" aria-hidden="true"></div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap");

.auth-shell {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 48px 20px;
  background:
    radial-gradient(800px 400px at 15% 20%, rgba(255, 206, 91, 0.28), transparent 60%),
    radial-gradient(900px 450px at 85% 70%, rgba(255, 122, 89, 0.25), transparent 65%),
    #0b0c12;
  color: #f7f6f2;
  font-family: "Space Grotesk", "Segoe UI", sans-serif;
}

.auth-card {
  position: relative;
  width: min(480px, 92vw);
  border-radius: 20px;
  padding: 28px 28px 32px;
  background: rgba(18, 20, 28, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(12px);
}

.auth-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.brand {
  font-weight: 600;
  letter-spacing: 0.5px;
  font-size: 1.1rem;
}

.tag {
  font-family: "JetBrains Mono", "Courier New", monospace;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: rgba(255, 255, 255, 0.6);
}

.auth-content {
  display: grid;
  gap: 16px;
}

.auth-glow {
  position: absolute;
  inset: auto 10% 6% auto;
  width: 180px;
  height: 180px;
  background: radial-gradient(circle, rgba(255, 162, 89, 0.45), transparent 65%);
  filter: blur(12px);
  pointer-events: none;
}

@media (max-width: 720px) {
  .auth-card {
    padding: 24px;
  }
}
</style>
