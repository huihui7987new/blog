<template>
  <button 
    class="back-to-top" 
    :class="{ show: isVisible }"
    @click="scrollToTop"
  >
    ↑
  </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isVisible = ref(false)

const handleScroll = () => {
  isVisible.value = window.scrollY > 500
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.back-to-top {
  position: fixed;
  bottom: 84px;
  right: 84px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--bg-card);
  border: 1px solid var(--border);
  cursor: pointer;
  display: none;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: var(--text);
  transition: all 0.2s;
  z-index: 100;
}

.back-to-top.show {
  display: flex;
}

.back-to-top:hover {
  background: var(--primary);
  color: #fff;
  border-color: var(--primary);
}

@media (max-width: 768px) {
  .back-to-top {
    right: 24px;
    bottom: 140px;
  }
}
</style>
