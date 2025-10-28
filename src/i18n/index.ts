import type { I18nToken } from '@/model/data.ts';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import ICU from 'i18next-icu';
import { initReactI18next, useTranslation } from 'react-i18next';

void i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(ICU)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en-US',
    supportedLngs: ['en-US', 'cs', 'sk'],
    ns: ['common', 'data', 'question', 'animal'],
    defaultNS: 'common',
    interpolation: { escapeValue: false },
    backend: {
      loadPath: `${import.meta.env.BASE_URL}locales/{{lng}}/{{ns}}.json`,
      queryStringParams: { v: '1.0.0' },
    },
    load: 'currentOnly',
    lowerCaseLng: false,
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },

    react: {
      useSuspense: true,
    },
  });

export function useI18nToken(token: I18nToken): string {
  const { t, i18n } = useTranslation();
  const tForNs =
    (ns?: string) => (key: string, values?: Record<string, string>) =>
      ns ? i18n.t(`${ns}:${key}`, values) : t(key, values);

  const values = resolveValues(token.values || {}, tForNs);
  return tForNs(token.ns)(token.key, values);
}

function resolveValues(
  values: Record<string, unknown>,
  tForNs: (ns?: string) => (k: string, v: Record<string, string>) => string,
): Record<string, string> {
  const out: Record<string, string> = {};
  for (const [key, value] of Object.entries(values || {})) {
    if (value && typeof value === 'object') {
      const token = value as I18nToken;
      out[key] = tForNs(token.ns)(
        token.key,
        resolveValues(token.values || {}, tForNs),
      );
    } else {
      out[key] = value;
    }
  }
  return out;
}

export default i18n;
