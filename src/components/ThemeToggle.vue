<template>
  <div>
    <button class="theme-toggle" @click="togglePanel">🎨</button>
    <div class="theme-panel" :class="{ show: showPanel }">
      <div class="theme-panel-title">选择主题</div>
      <div class="theme-options">
        <div 
          v-for="t in themes" 
          :key="t.value"
          class="theme-opt"
          :class="[t.class, { active: currentTheme === t.value }]"
          @click="selectTheme(t.value)"
        >
          {{ t.name }}
        </div>
      </div>
      <div class="theme-panel-title" style="margin-top: 8px">亮/暗模式</div>
      <div class="mode-toggle">
        <div 
          class="mode-btn"
          :class="{ active: currentMode === 'light' }"
          @click="selectMode('light')"
        >
          ☀️ 亮色
        </div>
        <div 
          class="mode-btn"
          :class="{ active: currentMode === 'dark' }"
          @click="selectMode('dark')"
        >
          🌙 暗色
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useThemeStore } from '@/composables/useTheme'

const showPanel = ref(false)
const themeStore = useThemeStore()

const themes = [
  { name: '极简', value: 'mono', class: 'theme-opt-mono' },
  { name: '温暖', value: 'warm', class: 'theme-opt-warm' },
  { name: '科技', value: 'tech', class: 'theme-opt-tech' },
  { name: '清新', value: 'fresh', class: 'theme-opt-fresh' }
]

const currentTheme = themeStore.currentTheme
const currentMode = themeStore.currentMode

const togglePanel = () => {
  showPanel.value = !showPanel.value
}

const selectTheme = (theme) => {
  themeStore.setTheme(theme)
}

const selectMode = (mode) => {
  themeStore.setMode(mode)
}
</script>

<style scoped>
.theme-toggle {
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary), var(--primary-end));
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 20px;
  box-shadow: 0 4px 16px rgba(99, 102, 241, 0.4);
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s;
}

.theme-toggle:hover {
  transform: scale(1.1);
}

.theme-panel {
  position: fixed;
  bottom: 84px;
  right: 24px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
  z-index: 200;
  display: none;
  width: 280px;
}

.theme-panel.show {
  display: block;
}

.theme-panel-title {
  font-size: 13px;
  font-weight: 600;
  color: var(--text-secondary);
  margin-bottom: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.theme-options {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-bottom: 16px;
}

.theme-opt {
  padding: 12px;
  border-radius: var(--radius);
  border: 2px solid var(--border);
  cursor: pointer;
  transition: all 0.2s;
  text-align: center;
  font-size: 13px;
  font-weight: 500;
}

.theme-opt:hover,
.theme-opt.active {
  border-color: var(--primary);
}

.theme-opt-mono {
  background: #fff;
  color: #1a1a1a;
}

.theme-opt-warm {
  background: #faf6f1;
  color: #3d3229;
}

.theme-opt-tech {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: #fff;
}

.theme-opt-fresh {
  background: #f0fdf4;
  color: #1e293b;
}

.mode-toggle {
  display: flex;
  gap: 8px;
}

.mode-btn {
  flex: 1;
  padding: 10px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--bg);
  color: var(--text-secondary);
  cursor: pointer;
  font-size: 13px;
  text-align: center;
  transition: all 0.2s;
}

.mode-btn:hover,
.mode-btn.active {
  background: var(--primary);
  color: #fff;
  border-color: var(--primary);
}

@media (max-width: 768px) {
  .theme-toggle {
    bottom: 84px;
    width: 40px;
    height: 40px;
    font-size: 16px;
  }
  
  .theme-panel {
    bottom: 140px;
    right: 12px;
    left: 12px;
    width: auto;
  }
}
</style>
