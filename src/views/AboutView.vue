<template>
  <div class="about">
    <div class="about-header">
      <div class="about-avatar">{{ profile.avatar }}</div>
      <div class="about-name">{{ profile.name }}</div>
      <div class="about-title">{{ profile.title }}</div>
    </div>
    
    <div class="about-section">
      <div class="about-section-title">📝 关于我</div>
      <p class="about-bio">{{ profile.bio }}</p>
    </div>
    
    <div class="about-section">
      <div class="about-section-title">🛠️ 技能树</div>
      <div class="skill-list">
        <div v-for="skill in profile.skills" :key="skill.name" class="skill-item">
          <span class="skill-name">{{ skill.name }}</span>
          <div class="skill-bar">
            <div 
              class="skill-fill" 
              :style="{ '--target-width': skill.level + '%' }"
            ></div>
          </div>
          <span class="skill-pct">{{ skill.level }}%</span>
        </div>
      </div>
    </div>
    
    <div class="about-section">
      <div class="about-section-title">📅 经历</div>
      <div class="timeline">
        <div v-for="event in profile.timeline" :key="event.year" class="timeline-item">
          <div class="timeline-year">{{ event.year }}</div>
          <div class="timeline-content">
            <div class="timeline-title">{{ event.title }}</div>
            <div class="timeline-desc">{{ event.description }}</div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="about-section">
      <div class="about-section-title">📬 联系方式</div>
      <div class="social-links">
        <a 
          :href="profile.social.github" 
          target="_blank" 
          rel="noopener"
          class="social-link"
        >
          <span class="social-icon">🐙</span>
          <span>GitHub</span>
        </a>
        <a 
          :href="'mailto:' + profile.social.email" 
          class="social-link"
        >
          <span class="social-icon">📧</span>
          <span>邮箱</span>
        </a>
        <button class="social-link" @click="copyWechat">
          <span class="social-icon">💬</span>
          <span>微信</span>
        </button>
      </div>
      <transition name="fade">
        <div v-if="showWechatTip" class="wechat-tip">✅ 微信号已复制到剪贴板</div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import profileData from '@/data/profile.json'

const profile = ref(profileData)
const showWechatTip = ref(false)

const copyWechat = async () => {
  try {
    await navigator.clipboard.writeText(profile.value.social.wechat)
    showWechatTip.value = true
    setTimeout(() => {
      showWechatTip.value = false
    }, 2000)
  } catch {
    // fallback
    const input = document.createElement('input')
    input.value = profile.value.social.wechat
    document.body.appendChild(input)
    input.select()
    document.execCommand('copy')
    document.body.removeChild(input)
    showWechatTip.value = true
    setTimeout(() => {
      showWechatTip.value = false
    }, 2000)
  }
}
</script>

<style scoped>
.about {
  max-width: 700px;
  padding-bottom: 60px;
}

.about-header {
  text-align: center;
  padding: 48px 0 36px;
}

.about-avatar {
  width: 128px;
  height: 128px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary), var(--primary-end));
  margin: 0 auto 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 52px;
  font-weight: 700;
  box-shadow: 0 8px 32px rgba(99, 102, 241, 0.3);
  position: relative;
}

.about-avatar::after {
  content: '';
  position: absolute;
  inset: -4px;
  border-radius: 50%;
  border: 2px dashed var(--primary);
  opacity: 0.4;
  animation: spin 12s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.about-name {
  font-family: var(--font-heading);
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 8px;
  color: var(--text);
}

.about-title {
  font-size: 16px;
  color: var(--text-secondary);
}

.about-section {
  margin-bottom: 36px;
}

.about-section-title {
  font-family: var(--font-heading);
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 16px;
  padding-bottom: 8px;
  border-bottom: 2px solid var(--primary);
  display: inline-block;
  color: var(--text);
}

.about-bio {
  font-size: 15px;
  line-height: 1.9;
  color: var(--text-secondary);
}

.skill-list {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.skill-item {
  display: flex;
  align-items: center;
  gap: 12px;
}

.skill-name {
  width: 90px;
  font-size: 14px;
  font-weight: 500;
  color: var(--text);
}

.skill-bar {
  flex: 1;
  height: 10px;
  background: var(--bg);
  border-radius: 5px;
  overflow: hidden;
  border: 1px solid var(--border);
}

.skill-fill {
  height: 100%;
  width: 0;
  background: linear-gradient(90deg, var(--primary), var(--primary-end));
  border-radius: 5px;
  animation: fillBar 1s ease-out forwards;
  animation-delay: 0.3s;
}

@keyframes fillBar {
  from { width: 0; }
  to { width: var(--target-width); }
}

.skill-pct {
  width: 42px;
  font-size: 13px;
  color: var(--text-secondary);
  text-align: right;
  font-variant-numeric: tabular-nums;
}

.timeline {
  position: relative;
  padding-left: 28px;
}

.timeline::before {
  content: "";
  position: absolute;
  left: 6px;
  top: 12px;
  bottom: 12px;
  width: 2px;
  background: linear-gradient(to bottom, var(--primary), var(--border));
}

.timeline-item {
  position: relative;
  margin-bottom: 28px;
}

.timeline-item::before {
  content: "";
  position: absolute;
  left: -26px;
  top: 6px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--primary);
  border: 2px solid var(--bg-card);
  box-shadow: 0 0 0 3px var(--primary);
  z-index: 1;
}

.timeline-year {
  font-size: 13px;
  color: var(--primary);
  font-weight: 700;
  margin-bottom: 4px;
  font-variant-numeric: tabular-nums;
}

.timeline-content {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 14px 18px;
  transition: all 0.2s;
}

.timeline-content:hover {
  border-color: var(--primary);
  box-shadow: var(--shadow);
}

.timeline-title {
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 4px;
  color: var(--text);
}

.timeline-desc {
  font-size: 13px;
  color: var(--text-secondary);
  line-height: 1.6;
}

.social-links {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  color: var(--text);
  font-size: 14px;
  cursor: pointer;
  transition: all 0.25s ease;
  text-decoration: none;
  background: var(--bg-card);
}

.social-link:hover {
  border-color: var(--primary);
  color: var(--primary);
  transform: translateY(-2px);
  box-shadow: var(--shadow);
}

.social-icon {
  font-size: 18px;
}

.wechat-tip {
  text-align: center;
  margin-top: 12px;
  font-size: 14px;
  color: var(--primary);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .about {
    padding: 0 16px 60px;
  }
  
  .about-header {
    padding: 32px 0 24px;
  }

  .about-avatar {
    width: 100px;
    height: 100px;
    font-size: 40px;
  }
  
  .social-links {
    flex-direction: column;
    align-items: center;
  }

  .social-link {
    width: 100%;
    justify-content: center;
  }
}
</style>
