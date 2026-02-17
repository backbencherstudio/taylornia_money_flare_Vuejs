<template>
  <div class="dash-shell">
    <aside class="dash-sidebar">
      <div class="brand">
        <span class="brand-mark"></span>
        <span>MoneyFlare</span>
      </div>
      <nav class="dash-nav">
        <NuxtLink to="/dashboard" class="dash-link">Overview</NuxtLink>
        <NuxtLink to="/" class="dash-link">Return home</NuxtLink>
        <NuxtLink to="/auth" class="dash-link ghost">Log out</NuxtLink>
      </nav>
      <div class="dash-meta">
        <span class="label">Active</span>
        <span class="value">Today</span>
      </div>
    </aside>

    <div class="dash-body">
      <header class="dash-top">
        <div>
          <p class="eyebrow">Dashboard</p>
          <h1>Money overview</h1>
        </div>
        <div class="actions">
          <button class="btn ghost" type="button">Export</button>
          <button class="btn primary" type="button">New flow</button>
        </div>
      </header>

      <main class="dash-main">
        <slot />
      </main>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap");

.dash-shell {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 260px 1fr;
  background: #0f1218;
  color: #f0f1f5;
  font-family: "Space Grotesk", "Segoe UI", sans-serif;
}

.dash-sidebar {
  padding: 32px 24px;
  background:
    linear-gradient(180deg, rgba(255, 178, 102, 0.2), transparent 70%),
    #141923;
  border-right: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 600;
}

.brand-mark {
  width: 16px;
  height: 16px;
  border-radius: 4px;
  background: linear-gradient(135deg, #ffd56a, #ff7a5c);
  box-shadow: 0 0 12px rgba(255, 130, 90, 0.6);
}

.dash-nav {
  display: grid;
  gap: 10px;
}

.dash-link {
  text-decoration: none;
  color: inherit;
  padding: 10px 14px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.06);
  transition: all 0.2s ease;
}

.dash-link:hover {
  background: rgba(255, 255, 255, 0.14);
  transform: translateX(2px);
}

.dash-link.ghost {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.14);
}

.dash-meta {
  margin-top: auto;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: grid;
  gap: 6px;
}

.label {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: rgba(255, 255, 255, 0.6);
  font-family: "IBM Plex Mono", "Courier New", monospace;
}

.value {
  font-size: 1rem;
  font-weight: 500;
}

.dash-body {
  display: grid;
  grid-template-rows: auto 1fr;
}

.dash-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 28px 32px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(14, 17, 24, 0.9);
  backdrop-filter: blur(6px);
}

.eyebrow {
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.6);
  margin: 0 0 6px;
}

.dash-top h1 {
  margin: 0;
  font-size: 1.6rem;
}

.actions {
  display: flex;
  gap: 12px;
}

.btn {
  border: none;
  border-radius: 999px;
  padding: 10px 18px;
  font-weight: 500;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.08);
  color: inherit;
}

.btn.primary {
  background: linear-gradient(135deg, #ffd56a, #ff7a5c);
  color: #161616;
}

.btn.ghost {
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.dash-main {
  padding: 32px;
  display: grid;
  gap: 20px;
}

@media (max-width: 980px) {
  .dash-shell {
    grid-template-columns: 1fr;
  }

  .dash-sidebar {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .dash-meta {
    display: none;
  }

  .dash-top {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
}

@media (max-width: 720px) {
  .dash-sidebar {
    flex-direction: column;
    align-items: flex-start;
  }

  .actions {
    width: 100%;
    flex-direction: column;
  }
}
</style>
