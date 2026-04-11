<template>
  <div class="stat-bar">
    <div class="stat-item">
      <div class="stat-value">{{ stats.totalArticles }}</div>
      <div class="stat-label">篇文章</div>
    </div>
    <div class="stat-item">
      <div class="stat-value">{{ stats.totalWords }}</div>
      <div class="stat-label">字</div>
    </div>
    <div class="stat-item">
      <div class="stat-value">{{ stats.yearsRunning }}</div>
      <div class="stat-label">坚持</div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  stats: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.stat-bar {
  display: flex;
  justify-content: center;
  gap: 48px;
  padding: 24px;
  background: var(--bg-card);
  border-radius: var(--radius);
  border: 1px solid var(--border);
  margin-top: 32px;
}

.stat-item {
  text-align: center;
}

.stat-value {
  font-size: 24px;
  font-weight: 700;
  color: var(--primary);
  font-family: var(--font-heading);
}

.stat-label {
  font-size: 13px;
  color: var(--text-secondary);
  margin-top: 4px;
}

@media (max-width: 768px) {
  .stat-bar {
    flex-direction: column;
    gap: 16px;
  }
}
</style>
