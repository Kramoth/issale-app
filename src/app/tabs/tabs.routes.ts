import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('../pages/home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'booklet',
        loadComponent: () =>
          import('../pages/booklet/booklet.page').then((m) => m.BookletPage),
      },
      {
        path: 'tasbih',
        loadComponent: () =>
          import('../pages/tasbih/tasbih.page').then((m) => m.TasbihPage),
      },
      {
        path: 'circle',
        loadComponent: () =>
          import('../pages/circle/circle.page').then((m) => m.CirclePage),
      },
      {
        path: 'booklet/detail/:id',
        loadComponent: () =>
          import('../pages/darood-detail/darood-detail.page').then((m) => m.DaroodDetailPage),
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full',
  },
];
