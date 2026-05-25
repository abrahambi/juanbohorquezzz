<script setup lang="ts">
import { experienceData } from "../../../content/experience";
import Banner from "../../../components/Banner.vue";
import NotchSection from "../../../components/NotchSection.vue";
import { ref, onMounted } from "vue";

const getPeriod = (begin: string, end: string) =>
  begin === end ? begin : `${begin} — ${end}`;

const getInitials = (name: string) =>
  name.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase();

// First 2 are featured (large), rest are standard
const featured = experienceData.slice(0, 2);
const standard = experienceData.slice(2);

const cardRefs = ref<HTMLElement[]>([]);

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
  );
  cardRefs.value.forEach((el) => el && observer.observe(el));
});
</script>

<template>
  <div class="bento" id="experience">
    <NotchSection class="bento-notch" />

    <!-- Heading -->
    <div class="grid">
      <div class="bento-head">
        <Banner class="bento-head-banner" copy="Career" size="sm" animated />
        <h2 class="bento-head-title">Experience</h2>
      </div>
    </div>

    <!-- Bento Grid -->
    <div class="bento-grid">
      <!-- Featured cards (large) -->
      <div
        v-for="(item, i) in featured"
        :key="'f-' + i"
        class="bento-cell bento-cell--lg"
        :ref="(el) => { if (el) cardRefs[i] = el as HTMLElement }"
        :style="{ '--d': `${i * 0.1}s` }"
      >
        <div class="bento-card bento-card--lg">
          <div class="bento-card-left">
            <div class="bento-card-logo" v-if="item.logo">
              <img :src="item.logo" :alt="item.company" />
            </div>
            <div class="bento-card-logo bento-card-logo--ini" v-else>{{ getInitials(item.company) }}</div>
          </div>
          <div class="bento-card-right">
            <span class="bento-card-period">{{ getPeriod(item.yearBegin, item.yearEnd) }}</span>
            <h3 class="bento-card-role">{{ item.title }}</h3>
            <p class="bento-card-company">{{ item.company }}</p>
            <span class="bento-card-country">📍 {{ item.country }}</span>
            <p class="bento-card-desc">{{ item.description }}</p>
          </div>
        </div>
      </div>

      <!-- Standard cards -->
      <div
        v-for="(item, i) in standard"
        :key="'s-' + i"
        class="bento-cell bento-cell--sm"
        :ref="(el) => { if (el) cardRefs[featured.length + i] = el as HTMLElement }"
        :style="{ '--d': `${(featured.length + i) * 0.06}s` }"
      >
        <div class="bento-card bento-card--sm">
          <div class="bento-card-top-row">
            <div class="bento-card-logo bento-card-logo--small" v-if="item.logo">
              <img :src="item.logo" :alt="item.company" />
            </div>
            <div class="bento-card-logo bento-card-logo--small bento-card-logo--ini" v-else>{{ getInitials(item.company) }}</div>
            <span class="bento-card-period bento-card-period--sm">{{ getPeriod(item.yearBegin, item.yearEnd) }}</span>
          </div>
          <h3 class="bento-card-role bento-card-role--sm">{{ item.title }}</h3>
          <p class="bento-card-company">{{ item.company }}</p>
          <span class="bento-card-country">📍 {{ item.country }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
/* ═══════ SECTION ═══════ */
.bento {
  position: relative;
  width: 100%;
  padding: 96px var(--space-outer) 96px;
  background-color: var(--color-beige-600);
  overflow: hidden;

  @include mixins.mq("md") {
    padding: 144px var(--space-outer) 144px;
  }

  &-notch {
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-100%);
    color: var(--color-beige-600);
    --icon-color: var(--color-beige-600);
  }
}

/* ═══════ HEADING ═══════ */
.bento-head {
  position: relative;
  padding-top: var(--space-md);
  grid-column: 1 / 13;
  margin-bottom: 48px;

  @include mixins.mq("md") {
    grid-column: 1 / 10;
    margin-bottom: 56px;
  }

  @include mixins.mq("lg") {
    grid-column: 2 / 8;
  }

  &-title {
    font-weight: 900;
    letter-spacing: 0.02em;
    font-size: var(--font-size-title-md);
    @include mixins.mq("sm") { font-size: var(--font-size-title-lg); }
    @include mixins.mq("xl") { font-size: var(--font-size-title-xl); }
  }

  &-banner {
    position: absolute;
    top: 0;
    left: -8px;
    transform: translate(0, -20%) rotate(-4deg);
    @include mixins.mq("lg") {
      left: -16px;
      transform: translate(0, -20%) rotate(-6deg);
    }
  }
}

/* ═══════ BENTO GRID ═══════ */
.bento-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  max-width: 1100px;
  margin: 0 auto;

  @include mixins.mq("sm") {
    grid-template-columns: 1fr 1fr;
  }

  @include mixins.mq("md") {
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;
  }

  @include mixins.mq("lg") {
    gap: 20px;
  }
}

/* ═══════ CELLS ═══════ */
.bento-cell {
  opacity: 0;
  transform: translateY(28px) scale(0.97);
  transition:
    opacity 0.5s ease var(--d),
    transform 0.5s cubic-bezier(0.22, 1, 0.36, 1) var(--d);

  &.in-view {
    opacity: 1;
    transform: translateY(0) scale(1);
  }

  &--lg {
    @include mixins.mq("sm") {
      grid-column: span 2;
    }

    @include mixins.mq("md") {
      grid-column: span 3;
    }
  }

  &--sm {
    @include mixins.mq("sm") {
      grid-column: span 1;
    }
  }
}

/* ═══════ CARD (shared) ═══════ */
.bento-card {
  background: var(--color-beige-400);
  border-radius: var(--radius-lg, 16px);
  height: 100%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  @include mixins.hover {
    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 36px rgba(0, 0, 0, 0.08);
    }
  }
}

/* ── Large card (featured) ── */
.bento-card--lg {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 28px 24px;

  @include mixins.mq("sm") {
    flex-direction: row;
    gap: 24px;
    padding: 32px 28px;
    align-items: flex-start;
  }
}

.bento-card-left {
  flex-shrink: 0;
}

.bento-card-right {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

/* ── Small card ── */
.bento-card--sm {
  padding: 20px 18px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.bento-card-top-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
}

/* ═══════ LOGO ═══════ */
.bento-card-logo {
  width: 60px;
  height: 60px;
  border-radius: 14px;
  overflow: hidden;
  background: white;
  padding: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);

  &--small {
    width: 42px;
    height: 42px;
    border-radius: 10px;
    padding: 4px;
  }

  &--ini {
    background: var(--color-grayscale-400);
    font-weight: 800;
    font-size: 16px;
    color: var(--color-text-300);
    padding: 0;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}

/* ═══════ TEXT ═══════ */
.bento-card-period {
  font-size: 12px;
  font-weight: 800;
  color: var(--color-orange-400);
  letter-spacing: 0.05em;

  &--sm {
    font-size: 11px;
    flex-shrink: 0;
  }
}

.bento-card-role {
  font-size: 18px;
  font-weight: 800;
  color: var(--color-text-400);
  line-height: 1.25;

  &--sm {
    font-size: 15px;
  }
}

.bento-card-company {
  font-size: 14px;
  font-weight: 600;
  color: var(--color-text-300);
}

.bento-card-country {
  font-size: 12px;
  color: var(--color-text-300);
  opacity: 0.65;
}

.bento-card-desc {
  font-size: 13px;
  color: var(--color-text-300);
  line-height: 1.6;
  margin-top: 6px;
}
</style>
