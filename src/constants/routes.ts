export interface RouteConfig {
  titleKey: string;
}

export const ROUTES_CONSTANTS: Record<string, RouteConfig> = {
  '/menu': { titleKey: 'page.ourMenu' },
  '/cart': { titleKey: 'page.shoppingCart' },
  '/shop': { titleKey: 'page.ourShop' },
  '/pages': { titleKey: 'page.pages' },
  '/about': { titleKey: 'page.about' },
  '/contact': { titleKey: 'page.contact' },
  '/news': { titleKey: 'page.news' },
  '/partners': { titleKey: 'page.partners' },
  '/team': { titleKey: 'page.team' },
  '/contacts': { titleKey: 'page.contacts' },
  '/faq': { titleKey: 'page.faq' },
  '/term-and-conditions': { titleKey: 'page.termAndConditions' },
  '/reporting': { titleKey: 'page.reporting' },
  '/documentation': { titleKey: 'page.documentation' },
  '/support-policy': { titleKey: 'page.supportPolicy' },
  '/privacy': { titleKey: 'page.privacy' }
};

const PAGE_404: RouteConfig = { titleKey: 'page.404' };

export const getRouteByPathname = (pathname: string): RouteConfig => {
  const route = ROUTES_CONSTANTS[pathname];
  if (route) {
    return route;
  }

  return PAGE_404;
};
