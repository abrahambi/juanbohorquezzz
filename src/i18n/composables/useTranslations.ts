import { watch } from "vue";
import { loadTranslations } from "../utils/load";
import { locale, translations } from "../store";
import { onMounted } from "vue";
import { LOCALES } from "../constants";

import type { Locale } from "../types";

export const useTranslations = () => {
  onMounted(() => {
    let storedLocale = null;
    try {
      storedLocale = window.localStorage.getItem("portfolio-locale") as Locale;
    } catch (e) {
      console.warn("localStorage is blocked, defaulting language.");
    }
    if (storedLocale && storedLocale in LOCALES) {
      locale.value = storedLocale;
    } else {
      locale.value = "es";
    }
  });

  watch(locale, () => {
    if (!locale.value) return;
    try {
      window.localStorage.setItem("portfolio-locale", locale.value);
    } catch (e) {}
  });

  watch(
    locale,
    async (newLocale) => {
      if (!newLocale) return;
      translations.value = (await loadTranslations("common", newLocale)) ?? {};
    },
    { immediate: true },
  );
};
