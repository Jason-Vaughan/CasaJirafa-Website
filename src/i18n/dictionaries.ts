import 'server-only';

const dictionaries = {
  en: () => import('./en.json').then((module) => module.default),
  es: () => import('./es.json').then((module) => module.default),
  fr: () => import('./fr.json').then((module) => module.default),
};

export type Locale = 'en' | 'es' | 'fr';

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale]?.() ?? dictionaries.en();
};
