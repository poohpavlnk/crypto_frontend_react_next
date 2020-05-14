const NextI18Next = require('next-i18next').default;

module.exports = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: ['de', 'ar', 'id', 'zh', 'pt'],
  fallbackLng: 'en',
  localePath: 'public/locales',
  localeSubpaths: {
    en: 'en',
    ar: 'ar',
    de: 'de',
    id: 'id',
    pt: 'pt',
    zh: 'zh',
  },
});
# Change 2 on 2020-04-29
# Change 0 on 2020-05-10
# Change 2 on 2020-05-10
# Change 1 on 2020-05-09
# Change 2 on 2020-05-07
# Change 3 on 2020-05-07
# Change 0 on 2020-05-14
