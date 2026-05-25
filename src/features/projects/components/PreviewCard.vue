<script setup lang="ts">
import Link from "../../../components/Link.vue";
import Notch from "../../../components/Notch.vue";
import ArrowRightLong from "../../../components/icons/ArrowRightLong.vue";
import gsap from "gsap";
import { onMounted, onUnmounted, ref } from "vue";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ButtonRound from "../../../components/ButtonRound.vue";
import { t } from "../../../i18n/utils/translate";
import { social } from "../../../content/social";
import Plus from "../../../components/icons/Plus.vue";

import type { ProjectPreview } from "../../../content/types";

const tlRef = ref<gsap.core.Timeline | null>(null);
const wrapperRef = ref<HTMLDivElement | null>(null);
const imageRef = ref<HTMLImageElement | null>(null);
const showEmbed = ref(false);

const props = defineProps<{
  preview?: ProjectPreview;
}>();

const handleEmbedToggle = (event: MouseEvent) => {
  event.preventDefault();
  event.stopPropagation();
  showEmbed.value = !showEmbed.value;
};

const closeEmbed = () => {
  showEmbed.value = false;
};

onMounted(async () => {
  if (!wrapperRef.value || ScrollTrigger.isInViewport(wrapperRef.value)) {
    return;
  }

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: wrapperRef.value,
      start: "top bottom",
    },
  });
  tl.fromTo(wrapperRef.value, { scale: 0.8 }, { scale: 1, duration: 0.4, ease: "power1.out" }, 0);
  tl.fromTo(imageRef.value, { scale: 1.2 }, { scale: 1, duration: 0.4, ease: "power1.out" }, 0);

  tlRef.value = tl;
});

onUnmounted(() => {
  if (tlRef.value) {
    tlRef.value.kill();
    tlRef.value = null;
  }
});
</script>

<template>
  <!-- External URL project with inline embed -->
  <div
    class="preview-card"
    v-if="props.preview && props.preview.externalUrl"
  >
    <div
      class="preview-card-clickable children-unclickable"
      @click="handleEmbedToggle"
      :aria-label="t('switch-to-project', { project: props.preview.title })"
      data-cursor="arrow"
      data-sound="click"
      data-hoversound="hover"
      role="button"
      tabindex="0"
      @keydown.enter="showEmbed = !showEmbed"
    >
      <div class="preview-card-top" ref="wrapperRef">
        <div class="preview-card-image-wrapper">
          <div class="preview-card-image-container">
            <img :src="props.preview.thumbnail" :alt="props.preview.title" class="preview-card-image" ref="imageRef" />
          </div>
        </div>
        <div class="preview-card-overlay">
          <div class="preview-card-edge">
            <ButtonRound class="preview-card-button" variant="accent" renderAs="div">
              <ArrowRightLong class="preview-card-button-arrow" />
            </ButtonRound>
          </div>
          <Notch class="preview-card-notch preview-card-notch-left" />
          <Notch class="preview-card-notch preview-card-notch-right" />
        </div>
      </div>
      <div class="preview-card-content">
        <div class="preview-card-copys">
          <h3 class="preview-card-title">{{ props.preview.title }}</h3>
          <p class="preview-card-description">{{ props.preview.description }}</p>
        </div>
      </div>
    </div>

    <!-- Embed overlay -->
    <Teleport to="body">
      <div v-if="showEmbed" class="embed-overlay" @click.self="closeEmbed">
        <div class="embed-container">
          <button class="embed-close" @click="closeEmbed" data-sound="click">✕</button>
          <h3 class="embed-title">{{ props.preview.title }}</h3>
          <div class="embed-frame-wrapper">
            <iframe
              :src="props.preview.externalUrl"
              class="embed-frame"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </Teleport>
  </div>

  <!-- Internal project link (fallback) -->
  <Link
    class="preview-card children-unclickable"
    :to="`/project/${props.preview.slug}`"
    :aria-label="t('switch-to-project', { project: props.preview.title })"
    data-cursor="arrow"
    data-sound="click"
    data-hoversound="hover"
    v-else-if="props.preview"
  >
    <div class="preview-card-top" ref="wrapperRef">
      <div class="preview-card-image-wrapper">
        <div class="preview-card-image-container">
          <img :src="props.preview.thumbnail" :alt="props.preview.title" class="preview-card-image" ref="imageRef" />
        </div>
      </div>
      <div class="preview-card-overlay">
        <div class="preview-card-edge">
          <ButtonRound class="preview-card-button" variant="accent" renderAs="div">
            <ArrowRightLong class="preview-card-button-arrow" />
          </ButtonRound>
        </div>
        <Notch class="preview-card-notch preview-card-notch-left" />
        <Notch class="preview-card-notch preview-card-notch-right" />
      </div>
    </div>
    <div class="preview-card-content">
      <div class="preview-card-copys">
        <h3 class="preview-card-title">{{ props.preview.title }}</h3>
        <p class="preview-card-description">{{ props.preview.description }}</p>
      </div>
    </div>
  </Link>

  <Link
    v-else
    class="preview-card children-unclickable"
    data-cursor="arrow-external"
    data-hoversound="hover"
    external
    :href="social[0].url"
  >
    <div class="preview-card-top preview-card-top-empty">
      <Plus class="preview-card-top-empty-icon" />
    </div>
    <div class="preview-card-content">
      <div class="preview-card-copys">
        <h3 class="preview-card-title">{{ t("start-a-new-project") }}</h3>
      </div>
    </div>
  </Link>
</template>

<style scoped lang="scss">
.preview-card {
  --hover: 0;
  position: relative;
  border-radius: var(--radius-xl);
  z-index: var(--z-index-layout);

  &::after {
    content: "";
    position: absolute;
    top: -8px;
    left: -8px;
    width: calc(100% + 16px);
    height: calc(100% + 16px);
    background-color: var(--color-grayscale-400);
    border-radius: var(--radius-xl);
    z-index: -1;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.1s ease-in-out;
  }

  @include mixins.hover {
    &:hover {
      --hover: 1;

      &::after {
        opacity: 1;
      }
    }
  }

  &-clickable {
    cursor: pointer;
    display: block;
  }

  &-content {
    display: flex;
    flex-direction: column;
    gap: var(--space-md);
    padding-top: var(--space-xs);
  }

  &-overlay {
    @include mixins.hover {
      display: none;
    }
  }

  &-notch {
    position: absolute;
    color: var(--color-beige-400);
    --icon-color: var(--color-beige-400);
    transform: scale(-1) rotate(90deg);
    height: var(--radius-lg);

    &-left {
      bottom: 0;
      right: 50px;
    }

    &-right {
      bottom: 50px;
      right: 0;
    }
  }

  &-edge {
    position: absolute;
    bottom: -1px;
    right: -1px;
    background-color: var(--color-beige-400);
    padding-left: 6px;
    padding-top: 6px;
    border-radius: 32px 0 0 0;
    padding-right: 1px;
    padding-bottom: 1px;
  }

  &-button {
    &-arrow {
      transition: transform 0.1s ease-in-out;
      width: 100%;
      transform: rotate(calc(var(--hover) * -45deg));
    }
  }

  &-image {
    width: 100%;
    height: 100%;
    object-fit: cover;

    &-container {
      transition: transform 0.1s ease-in-out;
      transform: scale(calc(1 + var(--hover) * 0.02));
      aspect-ratio: 16/9;
    }

    &-wrapper {
      border-radius: var(--radius-lg);
      overflow: hidden;
      background-color: var(--color-beige-500);
    }
  }

  &-top {
    position: relative;
    width: 100%;
    aspect-ratio: 16/9;

    &-empty {
      border: 4px dashed var(--color-grayscale-500);
      border-radius: var(--radius-lg);
      background-color: var(--color-grayscale-400);
      display: flex;
      align-items: center;
      justify-content: center;

      &-icon {
        width: var(--icon-size-lg);
        color: var(--color-text-300);
        --icon-color: var(--color-text-300);
        --stroke-width: 4px;
      }
    }
  }

  &-copys {
    display: flex;
    flex-direction: column;
  }

  &-title {
    font-size: var(--font-size-title-xs);
    font-weight: 700;
    color: var(--color-text-400);
  }

  &-description {
    font-size: var(--font-size-md);
    color: var(--color-text-300);
    font-weight: 500;
  }
}

/* Embed overlay styles */
.embed-overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(12px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  animation: embed-fade-in 0.3s ease-out;
}

.embed-container {
  width: 100%;
  max-width: 1200px;
  height: 85vh;
  display: flex;
  flex-direction: column;
  gap: 16px;
  animation: embed-slide-up 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.embed-close {
  position: absolute;
  top: 24px;
  right: 32px;
  width: 48px;
  height: 48px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.08);
  color: white;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.25s ease;
  z-index: 10;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.4);
    transform: scale(1.1);
  }
}

.embed-title {
  color: white;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.02em;
  flex-shrink: 0;
}

.embed-frame-wrapper {
  flex: 1;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 25px 80px rgba(0, 0, 0, 0.5);
}

.embed-frame {
  width: 100%;
  height: 100%;
  border: none;
  background: #1a1a2e;
}

@keyframes embed-fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes embed-slide-up {
  from {
    opacity: 0;
    transform: translateY(40px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
</style>
