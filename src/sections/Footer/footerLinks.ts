export const usefulLinks = (t: (key: string) => string) => [
  {
    title: t('footer.about'),
    href: '/about'
  },
  {
    title: t('footer.news'),
    href: '/news'
  },
  {
    title: t('footer.partners'),
    href: '/partners'
  },
  {
    title: t('footer.team'),
    href: '/team'
  },
  {
    title: t('footer.menu'),
    href: '/menu'
  },
  {
    title: t('footer.contacts'),
    href: '/contacts'
  }
];

export const helpLinks = (t: (key: string) => string) => [
  {
    title: t('footer.faq'),
    href: '/faq'
  },
  {
    title: t('footer.termAndConditions'),
    href: '/term-and-conditions'
  },
  {
    title: t('footer.reporting'),
    href: '/reporting'
  },
  {
    title: t('footer.documentation'),
    href: '/documentation'
  },
  {
    title: t('footer.supportPolicy'),
    href: '/support-policy'
  },
  {
    title: t('footer.privacy'),
    href: '/privacy'
  }
];
