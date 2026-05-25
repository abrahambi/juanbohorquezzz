<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { transitions } from "../../../animations";
import { t } from "../../../i18n/utils/translate";
import Social from "../../../components/Social.vue";

const contactElement = ref<HTMLElement | null>(null);

onMounted(() => {
  if (contactElement.value) {
    transitions.contact.setup(contactElement.value);
  }
});

onUnmounted(() => {
  transitions.contact.destroy();
});
</script>

<template>
  <div class="contact grid" ref="contactElement">
    <div class="contact-content">
      <div class="contact-data-decoration">
        <div class="contact-bar-chart">
          <div class="contact-bar" v-for="i in 7" :key="i" :style="{ height: `${20 + Math.sin(i * 1.2) * 30 + 30}%`, animationDelay: `${i * 0.15}s` }"></div>
        </div>
        <div class="contact-data-dots">
          <span class="contact-dot" v-for="j in 12" :key="j" :style="{ animationDelay: `${j * 0.2}s` }"></span>
        </div>
      </div>
      <h2 class="contact-title" v-html="t('lets-work-together')"></h2>
      <p class="contact-subtitle">{{ t('about-tagline') }}</p>
      <Social variant="background" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.contact {
  width: 100%;
  max-width: calc(var(--svw) * 100);
  overflow: hidden;
  min-height: calc(var(--lvh) * 100);
  padding: var(--space-outer);
  padding-top: var(--space-lg);

  @include mixins.mq("md") {
    padding-top: var(--space-xxl);
  }

  &-content {
    position: relative;
    padding-top: var(--space-md);
    grid-column: 1 / 13;
    display: flex;
    flex-direction: column;
    gap: var(--space-md);

    @include mixins.mq("sm") {
      grid-column: 1 / 8;
    }

    @include mixins.mq("md") {
      gap: var(--space-xl);
      grid-column: 1 / 6;
      padding-top: var(--space-lg);
    }

    @include mixins.mq("lg") {
      grid-column: 2 / 6;
    }
  }

  &-subtitle {
    font-size: var(--font-size-md);
    opacity: 0.6;
    line-height: 1.6;
    max-width: 400px;
  }

  &-title {
    font-weight: 900;
    letter-spacing: 0.02em;
    font-size: var(--font-size-title-md);

    @include mixins.mq("sm") {
      font-size: var(--font-size-title-lg);
    }

    @include mixins.mq("xl") {
      font-size: var(--font-size-title-xl);
    }
  }

  &-data-decoration {
    position: absolute;
    top: var(--space-lg);
    right: calc(var(--space-outer) * -1);
    width: 260px;
    height: 200px;
    opacity: 0.08;
    pointer-events: none;
    display: none;

    @include mixins.mq("md") {
      display: block;
    }

    @include mixins.mq("lg") {
      right: calc(var(--space-outer) * -4);
      width: 320px;
      height: 240px;
    }
  }

  &-bar-chart {
    display: flex;
    align-items: flex-end;
    gap: 8px;
    height: 100%;
    padding-bottom: 40px;
  }

  &-bar {
    flex: 1;
    background: currentColor;
    border-radius: 3px 3px 0 0;
    animation: bar-grow 2s ease-out forwards;
    transform-origin: bottom;
    transform: scaleY(0);

    @keyframes bar-grow {
      to {
        transform: scaleY(1);
      }
    }
  }

  &-data-dots {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &-dot {
    position: absolute;
    width: 4px;
    height: 4px;
    background: currentColor;
    border-radius: 50%;
    opacity: 0;
    animation: dot-fade 3s ease-in-out infinite;

    &:nth-child(1)  { top: 10%; left: 15%; }
    &:nth-child(2)  { top: 25%; left: 45%; }
    &:nth-child(3)  { top: 5%;  left: 72%; }
    &:nth-child(4)  { top: 35%; left: 88%; }
    &:nth-child(5)  { top: 55%; left: 20%; }
    &:nth-child(6)  { top: 65%; left: 60%; }
    &:nth-child(7)  { top: 15%; left: 33%; }
    &:nth-child(8)  { top: 45%; left: 78%; }
    &:nth-child(9)  { top: 75%; left: 40%; }
    &:nth-child(10) { top: 20%; left: 55%; }
    &:nth-child(11) { top: 50%; left: 10%; }
    &:nth-child(12) { top: 40%; left: 92%; }

    @keyframes dot-fade {
      0%, 100% { opacity: 0; transform: scale(0.5); }
      50% { opacity: 1; transform: scale(1.2); }
    }
  }
}
</style>
